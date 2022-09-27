import { Button, Form, Input, Modal, Row, Col } from 'antd';
import React, {useState} from 'react';
import axios from 'axios';

const WifiCredential = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    form.validateFields().then(() => {
      setLoading(true);
      axios.post('http://192.168.4.1/credential', form.getFieldsValue())
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

  return (
    <Row justify="center" align="middle">
      <Col span={24}>
        <Form
          name="credential"
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
            label="SSID"
            name="ssid"
            rules={[
              {
                required: true,
                message: '请输入SSID',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
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
      </Col>
    </Row>
  );
};

export default WifiCredential;