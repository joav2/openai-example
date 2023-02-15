import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Input, Spin } from "antd";
import { useState } from "react";

const { TextArea } = Input;

const spinner = (
  <>
    <Spin size="large" />
  </>
);

const prompt = `Gere um plano de ação detalhado em tópicos para o hospital resolver cada um dos problemas listados pela cliente.`;

export default function PlanoAcao() {
  const [pergunta, setPergunta] =
    useState(`"Apenas 2 vendedoras na loja, loja cheia. Fiquei aguardando mais de 10 minutos sentada para alguém me atender, quando atendeu, pedi
  para provar 4 sapatos, a vendedora trouxe algumas caixas, deixou perto de mim e saiu. Pensei que ela iria voltar para abrir comigo e me
  atender certinho, mas não voltou. Eu tive que abrir todas? não tenho problema em fazer isso, mas senti que faltou vendedoras em loja e
  que faltou vontade e até mesmo treinamento para as que estavam ali, numa ocasião dessas."`);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const onSearch = async () => {
    setData("");
    setLoading(true);
    fetch("/api/varejo/plano-acao", {
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
        <Card title="Loop template varejo" style={{ padding: "1rem" }}>
          <p style={{ fontWeight: "bold" }}>prompt: {prompt}</p>
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
