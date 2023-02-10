import { AudioOutlined } from "@ant-design/icons";
import { Card, Input, Space } from "antd";

const { Search } = Input;

export default function App() {
  const onSearch = (value: string) => console.log(value);

  return (
    <>
      <Space direction="vertical" align="center" size="middle" style={{ display: 'flex' }}>
        <Card title="Card" size="small">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 300 }}
          />
        </Card>
      </Space>
    </>
  );
}
