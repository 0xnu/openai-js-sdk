import { openaiAuth } from "./authentication";

const modelsEndpoint = "https://api.openai.com/v1/models";

export async function getModels() {
    try {
      const response = await openaiAuth.get(modelsEndpoint);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  export async function getModel(model: string) {
    try {
      const response = await openaiAuth.get(`${modelsEndpoint}/${model}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }