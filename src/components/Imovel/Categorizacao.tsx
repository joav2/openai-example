import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Input, Spin } from "antd";
import { useState } from "react";

const { TextArea } = Input;

const spinner = (
  <>
    <Spin size="large" />
  </>
);

const prompt = `Quais as categorias e suas sub-categorias relacionadas? Qual o sentimento de cada sub-categoria? Qual polaridade (negativo/neutro/positivo) de cada sub-categoria?`;

export default function Categorizacao() {
  const [pergunta, setPergunta] =
    useState(`"Vendedores confirmaram informações erradas sobre o
  financiamento sendo que eu perguntei diversas vezes a mesma
  coisa, eu obtive as informações corretas e entendi que o negócio
  firmado é inviável para mim quando a atendente da assessoria da
  Caixa me explicou em 2 minutos como funcionava, o que deveria
  ter sido feito pelos vendedores já que o negócio é firmado com a
  Construtora e não com a Caixa, aguardo o cancelamento do
  contrato para aí sim, do início, ser atendida por um outro vendedor
  e ver um empreendimento de lançamento ou na planta com
  tempo para o pagamento da entrada e o financiamento adequado
  para a minha renda fixa mensal. Aguardo retorno!"`);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const onSearch = async () => {
    setData("");
    setLoading(true);
    fetch("/api/imovel/categorizacao", {
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
        <Card title="Categorização imóveis" style={{ padding: "1rem" }}>
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
