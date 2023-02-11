import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const pergunte = function pergunte(text: string) {
    return new Promise( async (resolve, reject) => {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            max_tokens: 500,
            temperature: 0.6,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ""
        });

        resolve(response.data.choices[0].text);
    });
}

module.exports = pergunte;