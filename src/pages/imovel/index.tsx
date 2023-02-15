import Link from "next/link";

export default function Imovel() {
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
          Imovel <Link href="/">Voltar</Link>
        </div>
        <div>
          <Link href="/imovel/categorizacao">Categorização</Link>
        </div>
        <div>
          <Link href="/imovel/categorizacao-autonoma">
            Categorização autonoma
          </Link>
        </div>
        <div>
          <Link href="/imovel/loop-template">Loop template</Link>
        </div>
        <div>
          <Link href="/imovel/plano-acao">Plano de ação</Link>
        </div>
        <div>
          <Link href="/imovel/sumarizacao">Sumarização</Link>
        </div>
        <div>
          <Link href="/imovel/estratificacao">Estratificação</Link>
        </div>
        <div>
          <Link href="/imovel/busca-semantica">Busca semantica</Link>
        </div>
      </div>
    </>
  );
}
