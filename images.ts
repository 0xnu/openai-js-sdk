import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import { API_KEY } from "./authentication";

export async function generateImage(prompt: string, n: number, size: string) {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      {
        prompt: prompt,
        n: n,
        size: size,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to generate image");
  }
}

export async function generateEditedImage(
  imageFilePath: string,
  maskFilePath: string,
  prompt: string,
  n: number,
  size: string
) {
  try {
    const form = new FormData();
    form.append("image", fs.createReadStream(imageFilePath));
    form.append("mask", fs.createReadStream(maskFilePath));
    form.append("prompt", prompt);
    form.append("n", n.toString());
    form.append("size", size);

    const response = await axios.post(
      "https://api.openai.com/v1/images/edits",
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${API_KEY}`,
          ...form.getHeaders(),
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to generate edited image");
  }
}

export async function generateImageVariations(
  imageFilePath: string,
  n: number,
  size: string
) {
  try {
    const form = new FormData();
    form.append("image", fs.createReadStream(imageFilePath));
    form.append("n", n.toString());
    form.append("size", size);

    const response = await axios.post(
      "https://api.openai.com/v1/images/variations",
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${API_KEY}`,
          ...form.getHeaders(),
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to generate image variations");
  }
}
