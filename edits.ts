import { openaiAuth } from "./authentication";

const editsEndpoint = "https://api.openai.com/v1/edits";

export async function makeEdits(model: string, input: string, instruction: string) {
  try {
    const data = {
      model,
      input,
      instruction,
    };

    const response = await openaiAuth.post(editsEndpoint, data);
    console.log(response.data.choices[0].text);
  } catch (error) {
    console.error(error);
  }
}
