import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Input, Spin } from "antd";
import { useState } from "react";

const { TextArea } = Input;

const spinner = (
  <>
    <Spin size="large" />
  </>
);

const prompt = `Extraia as principais entidades dos feedbacks de clientes da empresa listados abaixo.`;

export default function Estratificacao() {
  const [pergunta, setPergunta] = useState(`"Vivaz e diferenciada"
  "Falta de atenção na confecção do contrato"
  "Confiança e qualidade"
  "Good"
  "Porque as coisas foram bem detalhadas e explicadas"
  "Muito bom atendimento"
  "Pelo atendimento no plantão de vendas."
  "Pelo atendimento na visita ao plantão de vendas."
  "Conceito e ideia da obra bem definidos. Elogiada pelo corretor que nos ajudou."
  "Atendimento e qualidade"
  "Atendimento, boa vontade são muitos bons"
  "O projeto e localização são muitos bons"
  "Boa tarde. Exemplo explica apartamento como obras"
  "otimo"
  "A Vivaz me passou a confiaça parava realização de um sonho."
  "Atendimento rapido, eficiente"
  "Boa noite!Pelo atendimento do correto e gerente"
  "O corretor foi super atencioso deixando tudo bem esclarecido!!!Nota mil pra ele - Sr. Garcia do stand NOrte Shopping Rj."
  "Estou gostando"
  "Profissionais capacitados e prestativos, e suporte de qualidade por meio de centrais, aplicativos, atendimento a LGPD"
  "Bom dia! Estou comprando um apartamento e até hoje não recebi uma ligação, acho que precisam analisar mais o atendimento de vocês com os clientes, é só vender o apartamento e pronto? Cadê p vínculo com os clientes? Precisam ligar informar como está o andamento e tirar duvidas caso os clientes precisam. Para o corretor dou nota 10 para a contrutora dou nota 4"`);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const onSearch = async () => {
    setData("");
    setLoading(true);
    fetch("/api/imovel/estratificacao", {
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
        <Card title="Estratificação imóveis" style={{ padding: "1rem" }}>
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
