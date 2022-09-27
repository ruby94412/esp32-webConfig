import {Form, Input, InputNumber} from 'antd';

const Tcp = () => {
  return (
    <div style={{color: 'white'}}>
      <Form.Item
        label="IP地址"
        name="host"
        rules={[
          {
            required: true,
            message: '请输入网址或IP地址',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="端口号"
        name="port"
        rules={[
          {
            required: true,
            message: '请输入端口号',
          },
        ]}
      >
        <InputNumber style={{width: '100%'}}/>
      </Form.Item>
      <Form.Item
        label="心跳包"
        name="heartBeat"
        rules={[
          {
            required: true,
            message: '请输入心跳包内容',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </div>
  );
}

export default Tcp;