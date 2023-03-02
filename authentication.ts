import axios from "axios";

const API_KEY = "<your-api-key>";
const ORG_ID = "<your-organization-id>";

const headers = {
  Authorization: `Bearer ${API_KEY}`,
  "OpenAI-Organization": ORG_ID,
};

export const openaiAuth = axios.create({
  headers,
});

