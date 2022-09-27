import WifiCredential from "./WifiCredential";
import SerialConfig from "./SerialConfig";
import NetworkConnectionConfig from "./NetworkConnectionConfig";
const Content = ({
  current
}) => {
  const renderContent = key => {
    switch (key) {
      default:
      case 'WIFI':
        return (<WifiCredential />);
      case 'NETWORK':
        return (<NetworkConnectionConfig />);
      case 'SERIAL':
        return (<SerialConfig />);
    }
  }
  return (
    <div style={{padding: '20px'}}>
      {renderContent(current)}
    </div>
  )
}

export default Content;