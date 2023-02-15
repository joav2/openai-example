import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Input, Spin } from "antd";
import { useState } from "react";

const { TextArea } = Input;

const spinner = (
  <>
    <Spin size="large" />
  </>
);

const prompt = `Gere uma resposta em tópicos, longa, personalizada, cordial e delicada para a cliente pedindo desculpas e mostrando ações a cada um dos problemas listados pela cliente em tópicos para cada problema nesse feedback de cliente abaixo.`;

export default function LoopTemplate() {
  const [pergunta, setPergunta] =
    useState(`"Vinha gostando bastante do banco, até: Adquiri o duo
  gourmet, considerando os benefícios que estão exarados nas
  condições relatadas no marketing da campanha cliente black
  . Após solicitar o cartão black (apoós aderir o duogourmet), o
  banco informou que as condições de cask back, sala vip....
  etc, só eram disponibilizadas após o cliente ter 250 k
  investidos, mas que no meu caso havia uma condição
  especial de ser black com 180 k (não consigo afirmar
  juridicamente, mas cheira venda casada). Enfim, até hoje não
  recebi o cartão, já solicitei a avaliação de crédito a mais de
  30 dias e não tive resposta, o crédito que me foi ofertado era
  a partir de uma aquisição de CDB... enfim, só decepção. E fica
  uma avaliação que perpassa o sentimento que a instituição
  não consegue entregar aquilo que é divulgado e vendido a
  partir das suas campanhas de marketing."`);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const onSearch = async () => {
    setData("");
    setLoading(true);
    fetch("/api/financeiro/loop-template", {
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
        <Card title="Loop template financeiro" style={{ padding: "1rem" }}>
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
