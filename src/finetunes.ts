import axios from "axios";
import { API_KEY } from "./authentication";

const openaiApi = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  },
});

export async function createFineTune(trainingFile: string) {
  const response = await openaiApi.post("/fine-tunes", {
    training_file: trainingFile,
  });
  return response.data;
}

export async function getFineTunes() {
  const response = await openaiApi.get("/fine-tunes");
  return response.data;
}

export async function getFineTune(fineTuneId: string) {
  const response = await openaiApi.get(`/fine-tunes/${fineTuneId}`);
  return response.data;
}

export async function cancelFineTune(fineTuneId: string) {
  const response = await openaiApi.post(`/fine-tunes/${fineTuneId}/cancel`);
  return response.data;
}

export async function getFineTuneEvents(fineTuneId: string) {
  const response = await openaiApi.get(`/fine-tunes/${fineTuneId}/events`);
  return response.data;
}

export async function deleteModel(modelId: string) {
  const response = await openaiApi.delete(`/models/${modelId}`);
  return response.data;
}
