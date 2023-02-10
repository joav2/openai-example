import { Inter } from "@next/font/google";
import App from "../components/App";

const inter = Inter({ subsets: ["latin"] });

const theme = {
  colors: {
    primary: "tomato",
    accent: "yellow",
  },
};

export default function Home() {
  return (
    <>
      <App />
    </>
  );
}
