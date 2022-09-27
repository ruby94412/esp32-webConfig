import { Button, Form, Select, Modal} from 'antd';
import {useState} from 'react';
import axios from 'axios';
import Aliyun from './Aliyun.js';
import Aws from './Aws.js';
import CustomMqtt from './CustomMqtt.js';
import Tcp from './Tcp.js';
import ThingsBoard from './ThingsBoard.js';

const NetworkConnectionConfig =  () => {
  const [form] = Form.useForm();
  const [value, setValue] = useState('tcp');
  const radioConfig = [
    {value: 'tcp', label: 'TCP长连接'},
    {value: 'customMqtt', label: 'MQTT自定义'},
    {value: 'aliyun', label: '阿里云'},
    {value: 'aws', label: '亚马逊AWS'},
    {value: 'thingsBoard', label: 'ThingsBoard'}
  ]

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    form.validateFields().then(() => {
      setLoading(true);
      axios.post('http://192.168.4.1/connectionType', form.getFieldsValue())
      .then(() => {
        Modal.success({
          title: "设置成功",
          content: "设备将重启后接入本地无线网络"
        });
        form.resetFields();
      })
      .catch(() => {
        Modal.error({
          title: "设置失败",
          content: "请尝试重新设置"
        });
      })
      .finally(() => {
        setLoading(false);
      });
    });
  };
  const changeContent = type => {
    switch (type) {
      default:
      case 'tcp':
        return (<Tcp />);
      case 'customMqtt':
        return (<CustomMqtt />);
      case 'aws': 
        return (<Aws />);
      case 'aliyun':
        return (<Aliyun />);
      case 'thingsBoard':
        return(<ThingsBoard />);
    }
  }

  return (
    <div>
      <Form
        name="platform"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="连接方式"
          name="connectionType"
          initialValue={"tcp"}
          rules={[
            {
              required: true,
              message: '请选择连接方式',
            },
          ]}
        >
          <Select onChange={value => {setValue(value);}} value={value}>
            {
              radioConfig.map(item => {
                return (
                  <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
                );
              })
            }
          </Select>
        </Form.Item>
        {changeContent(value)}
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button
            type="primary"
            onClick={handleClick}
            loading={loading}
            disabled={loading}
          >
            {'保存&应用'}
          </Button>
        </Form.Item>
      </Form>
    </div>
    
  );
};

export default NetworkConnectionConfig;