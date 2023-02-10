import { NextApiRequest, NextApiResponse } from "next";
const pergunte = require('../../lib/pergunteOpenAI');

type Data = {
    text: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { body, method } = req;
    if (method === 'POST') {
        const response = await pergunte(body.pergunta);
        res.status(200).send(response);
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}