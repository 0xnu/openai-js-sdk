import axios from "axios";
import FormData from "form-data";
import { openaiAuth } from "./authentication";

export async function getFiles() {
  const response = await axios.get("https://api.openai.com/v1/files", {
    headers: openaiAuth.defaults.headers,
  });
  console.log(response.data);
}

export async function uploadFile(path: string) {
  const formData = new FormData();
  formData.append("purpose", "fine-tune");
  formData.append("file", path);
  const response = await axios.post(
    "https://api.openai.com/v1/files",
    formData,
    {
      headers: {
        ...openaiAuth.defaults.headers,
        ...formData.getHeaders(),
      },
    }
  );
  console.log(response.data);
}

export async function deleteFile(id: string) {
  const response = await axios.delete(
    `https://api.openai.com/v1/files/${id}`,
    { headers: openaiAuth.defaults.headers }
  );
  console.log(response.data);
}

export async function getFile(id: string) {
  const response = await axios.get(
    `https://api.openai.com/v1/files/${id}/content`,
    { headers: openaiAuth.defaults.headers }
  );
  console.log(response.data);
}
