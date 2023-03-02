import { openaiAuth } from "./authentication";

const chatEndpoint = "https://api.openai.com/v1/chat/completions";

export async function sendChatMessage(message: string) {
  try {
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    };

    const response = await openaiAuth.post(chatEndpoint, data);
    console.log(response.data.choices[0].text);
  } catch (error) {
    console.error(error);
  }
}
