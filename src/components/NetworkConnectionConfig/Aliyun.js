import {Form, Input} from 'antd';

const Aliyun = () => {
  return (
    <div style={{color: 'white'}}>
      <Form.Item
        label="地域代码"
        name="regionId"
        initialValue={"cn-shanghai"}
        rules={[
          {
            required: true,
            message: '请输入地域代码',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="ProductKey"
        name="productKey"
        rules={[
          {
            required: true,
            message: '请输入ProductKey',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="DeviceSecret"
        name="deviceSecret"
        rules={[
          {
            required: true,
            message: '请输入DeviceSecret',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="DeviceName"
        name="deviceName"
        rules={[
          {
            required: true,
            message: '请输入DeviceName',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="订阅主题"
        name="subscribeTopic"
        rules={[
          {
            required: true,
            message: '请输入订阅主题',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="发布主题"
        name="publishTopic"
        rules={[
          {
            required: true,
            message: '请输入发布主题',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </div>
  );
}

export default Aliyun;