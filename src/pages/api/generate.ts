import { NextApiRequest, NextApiResponse } from "next";
const pergunte = require("../../lib/pergunteOpenAI");

type Data = {
  text: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { body, method } = req;
  if (method === "POST") {
    const pergunta = JSON.parse(body).pergunta || "";
    if (pergunta.trim().length === 0) {
      res.status(400).end("Por favor digite sua pergunta!");
      return;
    }
    try {
      const response = await pergunte(pergunta);
      res.status(200).send(response);
    } catch (err) {
      console.log("error: " + err);
      res.status(500).end("Erro por favor tente novamente mais tarde");
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
