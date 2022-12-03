const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  let promptData = req.body.promptData;
  const response = await openai.createCompletion({
    model: 'text-ada-001',
    prompt: promptData,
    temperature: 0,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
    stop: ['#', ';'],
  });
  res.status(200).json({ data: `${response.data.choices[0].text}` });
}
