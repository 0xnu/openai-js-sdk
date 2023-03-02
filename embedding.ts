import axios from "axios";
import { openaiAuth } from "./authentication";

const EMBEDDINGS_URL = "https://api.openai.com/v1/embeddings";

interface EmbeddingsRequestBody {
  input: string;
  model: string;
}

export async function getEmbeddings(input: string, model: string) {
  try {
    const requestBody: EmbeddingsRequestBody = {
      input,
      model,
    };

    const response = await axios.post(EMBEDDINGS_URL, requestBody, {
      headers: openaiAuth.defaults.headers,
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
