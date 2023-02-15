import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Input, Spin } from "antd";
import { useState } from "react";

const { TextArea } = Input;

const spinner = (
  <>
    <Spin size="large" />
  </>
);

// const prompt = `search_reviews(df, 'infiltração', n=5)`;

export default function BuscaSemantica() {
  const [pergunta, setPergunta] =
    useState(`"Bom dia! Estou comprando um apartamento e até hoje
  não recebi uma ligação, acho que precisam analisar
  mais o atendimento de vocês com os clientes, é só
  vender o apartamento e pronto? Cadê o vínculo com os
  clientes? Precisam ligar informar como está o
  andamento do apartamento e tirar dúvidas caso os
  clientes precisam. Para o corretor dou nota 10, para a
  construtura Vivaz dou nota 4"`);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const onSearch = async () => {
    setData("");
    setLoading(true);
    fetch("/api/imovel/busca-semantica", {
      method: "POST",
      body: pergunta,
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
          padding: "1rem",
        }}
      >
        <Card title="Busca semantica imóveis" style={{ padding: "1rem" }}>
          {/* <p style={{ fontWeight: "bold" }}>prompt: {prompt}</p> */}
          <TextArea
            style={{ margin: "auto auto .5rem auto" }}
            rows={5}
            placeholder="Digite!"
            value={pergunta}
            onChange={(event) => setPergunta(event.target.value)}
          />
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={onSearch}
            block
          >
            Resultado
          </Button>
          {loading && <p style={{ textAlign: "center" }}>{spinner}</p>}
          {data && (
            <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
              {data}
            </pre>
          )}
        </Card>
      </div>
    </>
  );
}
