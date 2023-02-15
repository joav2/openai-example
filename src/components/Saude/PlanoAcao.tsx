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
    useState(`"A minha experiência foi a pior possível por vários motivos; a equipe médica era muito inexperiente e meu tratamento foi horrível, minha
  filha quase morreu. Tive que passar por 3 etapas: primeiro tentaram parto normal mesmo o bebê não estando encaixado, a anestesia já
  tinha passado e senti todas as dores, e o bebê não passava.
  O coraçãozinho do bebê começou a parar e tiveram que fazer a cesárea de urgência. Não tinha como dar a anestesia para a cesárea, e
  a outra anestesia que havia tomado ainda não tinha feito efeito. Ainda assim, começaram a me cortar.
  O médico novamente discutiu com o outro pelo fato de me cortar, mesmo que eu não estivesse anestesiada. Por fim, me sedaram com
  inalação, e foi quando apaguei e não vi o parto. Minha filha nasceu depois da hora, tiveram que reanimá-la, e ela estava com dificuldade
  de respirar.
  Ela teve que ficar no berçário e só pude vê-la um pouco a noite para amamentar. O quarto é péssimo, não tem conforto, o
  acompanhante (meu marido) teve que dormir sentado em uma cadeira comum muito desconfortável. Para finalizar eu não recomendaria
  o hospital a ninguém."`);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const onSearch = async () => {
    setData("");
    setLoading(true);
    fetch("/api/saude/plano-acao", {
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
        <Card title="Plano de ação saúde" style={{ padding: "1rem" }}>
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
