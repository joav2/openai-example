import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Input, Spin } from "antd";
import { useState } from "react";

const { TextArea } = Input;

const spinner = (
  <>
    <Spin size="large" />
  </>
);

const prompt = `Extraia a nota, se possível, dos feedbacks abaixo de clientes de um banco. Se não tiver explícita nota tentar estimar qual seria a nota (sinalize com um * para todas as notas estimadas). Caso a nota estimada não tenha mais de 95% de certeza, insira um '?' no resultado.`;

export default function Estratificacao() {
  const [pergunta, setPergunta] =
    useState(`1- "O atendimento foi 10, porém estou de andador nao tem rampa de acesso sai do carro atravessei a rua e
  esperei um carro sair pois nao tinha como passar entre os carros.um absurdo para um banco nota zero"
  2- "Que bosta to cansada disso faz 4 anos que vc ligam ou mandam menssagem nao conheco essa erica"
  3- "Nao recomendaria nao muito demorado. 5"
  4- "Se nao fosse tao grande a incistencia pra fazer empréstimo minha nota da Ceria 10 mais so por isso
  minha nota é 2"
  5- "Otimo atendimento....funcionarios mto competentes...atenciosos...PARABENS !!!"
  6- "Nao! 0000 Estive na agencia da minha cidade ontem 2 atendentes p atender e demoraram 30 minutos
  em cada atendimento, isso é um absurdo, fui embora e nao consegui resolver o que eu precisava!!"
  7- "Banco Não confiável. Recebia minha aposentadoria pelo Banco. De repente minha conta está em Porto
  Alegre, sem minha previa consulta. Gerente sem muito conhecimento."
  8- "jamas eu recomendo o banco pra alguem e pior banco do mundo nao tem fusionario adequadro para
  trabalhar em banco eu nuca lidei cm um banco tao incapas de resouver qualquer situaÇoes fucionario tds
  incmpeteti"
  9- "Sim porque eu acho que é um banco seguro pra gente que e aposentado e também dao bastante
  atenÇao pra gente"
  10- "O atendimento esta muito ruim voce fica na fila 2 horas pra receber .esta precisando de por
  funcionarios."`);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const onSearch = async () => {
    setData("");
    setLoading(true);
    fetch("/api/financeiro/estratificacao", {
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
        <Card title="Estratificação financeiro" style={{ padding: "1rem" }}>
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
