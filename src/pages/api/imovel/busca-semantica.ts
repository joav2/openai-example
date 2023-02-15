import { API_URL } from "@/utils/constants";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  text: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { body, method } = req;
  if (method === "POST") {
    const pergunta = body || "";
    if (pergunta.trim().length === 0) {
      res.status(400).end("Por favor digite sua pergunta!");
      return;
    }
    try {
      return axios
        .post(
          `${API_URL}/api/v1/imovel-incorporadora/busca-semantica`,
          { pergunta: pergunta },
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          res.status(200).send(response.data);
        })
        .catch((err) => {
          console.log(err.response.data);
          res.send(err.response.data);
        });
    } catch (err) {
      console.log("error: " + err);
      res.status(500).end("Erro por favor tente novamente mais tarde");
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
