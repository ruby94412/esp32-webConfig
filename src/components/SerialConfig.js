import { Radio } from 'antd';
import React, { useState } from 'react';

const SerialConfig = () => {
  const [value, setValue] = useState('tcp');
  const radioConfig = [
    {value: 'tcp', label: 'TCP长连接'},
    {value: 'customMqtt', label: 'MQTT自定义'},
    {value: 'aliyun', label: '阿里云'},
    {value: 'aws', label: '亚马逊AWS'},
    {value: 'thingsBoard', label: 'ThingsBoard'}
  ]
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      {
        radioConfig.map(item => {
          return (
            <Radio key={item.value} value={item.value}>{item.label}</Radio>
          )
        })
      }
    </Radio.Group>
  );
};

export default SerialConfig;