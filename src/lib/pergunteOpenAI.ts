const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const pergunte = async function pergunte(text: string) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: text,
        max_tokens: 500,
        temperature: 0.5,
        top_p: 0,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop: ""
    });

    return response.data.choices[0].text;
}

module.exports = pergunte;