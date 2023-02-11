import { AudioOutlined } from "@ant-design/icons";
import { Card, Input, Spin } from "antd";
import { useState } from "react";

const { Search } = Input;

const spinner = (
  <>
    <Spin size="large" />
  </>
);

export default function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const onSearch = async (value: string) => {
    setData("");
    setLoading(true);
    fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ pergunta: value }),
    })
      .then((response) => response.text())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Card title="Faça uma pergunta" style={{ width: 400 }}>
          <Search placeholder="Digite" onSearch={onSearch} />
          {loading && <p style={{ textAlign: "center" }}>{spinner}</p>}
          {data && <p>{data}</p>}
        </Card>
      </div>
    </>
  );
}
