import { WifiOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'Wifi配置',
    key: 'WIFI',
    icon: <WifiOutlined />,
  },
  {
    label: '网络连接设置',
    key: 'NETWORK',
    icon: <MailOutlined />,
  },
  {
    label: '串口设置',
    key: 'SERIAL',
    icon: <SettingOutlined />,
  },
];

const Navigation = ({
  current,
  setCurrent
}) => {
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>;
};

export default Navigation;