import Link from "next/link";

export default function Varejo() {
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
          Varejo <Link href="/">Voltar</Link>
        </div>
        <div>
          <Link href="/varejo/loop-template">Loop template</Link>
        </div>
        <div>
          <Link href="/varejo/plano-acao">Plano de ação</Link>
        </div>
      </div>
    </>
  );
}
