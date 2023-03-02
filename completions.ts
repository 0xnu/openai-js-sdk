import { openaiAuth } from "./authentication";

const completionsEndpoint = "https://api.openai.com/v1/completions";

export async function getCompletion(prompt: string) {
    try {
      const data = {
        model: "text-davinci-003",
        prompt,
        temperature: 0,
        max_tokens: 7,
      };
  
      const response = await openaiAuth.post(completionsEndpoint, data);
      console.log(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  }