import Link from "next/link";

export default function Saude() {
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
          Saude <Link href="/">Voltar</Link>
        </div>
        <div>
          <Link href="/saude/categorizacao">Categorização</Link>
        </div>
        <div>
          <Link href="/saude/loop-template">Loop template</Link>
        </div>
        <div>
          <Link href="/saude/plano-acao">Plano de ação</Link>
        </div>
      </div>
    </>
  );
}
