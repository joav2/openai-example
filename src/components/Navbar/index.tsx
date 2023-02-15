import { Layout, Menu, MenuProps } from "antd";
import Link from "next/link";

const { Header } = Layout;

export default function Navbar() {
  const items: MenuProps["items"] = [
    {
      label: <Link href="/financeiro">Financeiro</Link>,
      key: "financeiro",
    },
    {
      label: <Link href="/imovel">Imóveis</Link>,
      key: "imovel",
    },
    {
      label: <Link href="/saude">Saude</Link>,
      key: "saude",
    },
    {
      label: <Link href="/varejo">Varejo</Link>,
      key: "varejo",
    },
  ];
  return (
    <>
      <Header>
        <Menu theme="dark" mode="horizontal" items={items} />
      </Header>
    </>
  );
}
