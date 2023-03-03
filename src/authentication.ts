import axios from "axios";

export const API_KEY = "<your-api-key>";
export const ORG_ID = "<your-organization-id>";

const headers = {
  Authorization: `Bearer ${API_KEY}`,
  "OpenAI-Organization": ORG_ID,
};

export const openaiAuth = axios.create({
  headers,
});
