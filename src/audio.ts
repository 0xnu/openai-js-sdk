import axios from "axios";
import FormData from "form-data";
import { openaiAuth } from "./authentication";

async function transcribeAudio(file: string, model: string) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("model", model);

  const response = await axios.post(
    "https://api.openai.com/v1/audio/transcriptions",
    formData,
    {
      headers: {
        ...openaiAuth.defaults.headers,
        "Content-Type": `multipart/form-data; boundary=${formData.getBoundary()}`,
      },
    }
  );

  console.log(response.data);
}

async function translateAudio(file: string, model: string) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("model", model);

  const response = await axios.post(
    "https://api.openai.com/v1/audio/translations",
    formData,
    {
      headers: {
        ...openaiAuth.defaults.headers,
        "Content-Type": `multipart/form-data; boundary=${formData.getBoundary()}`,
      },
    }
  );

  console.log(response.data);
}

export { transcribeAudio, translateAudio };
