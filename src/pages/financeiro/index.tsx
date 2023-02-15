import Link from "next/link";

export default function Financeiro() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "80vh",
          fontSize: "2rem",
          display: "inline-flex",
          flexWrap: "nowrap",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <div>
          Financeiro <Link href="/">Voltar</Link>
        </div>
        <div>
          <Link href={"/financeiro/categorizacao"}>Categorizacao</Link>
        </div>
        <div>
          <Link href={"/financeiro/estratificacao"}>Estratificação</Link>
        </div>
        <div>
          <Link href={"/financeiro/loop-template"}>Loop Template</Link>
        </div>
      </div>
    </>
  );
}
