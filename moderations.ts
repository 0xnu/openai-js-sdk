import axios from "axios";
import { openaiAuth } from "./authentication";

const MODERATIONS_URL = "https://api.openai.com/v1/moderations";

interface ModerationsRequestBody {
  input: string;
}

export async function checkModeration(input: string) {
  try {
    const requestBody: ModerationsRequestBody = {
      input,
    };

    const response = await axios.post(MODERATIONS_URL, requestBody, {
      headers: openaiAuth.defaults.headers,
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
