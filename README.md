## OpenAI API JS SDK

Applications written in [Javascript](https://www.javascript.com/) and [Typescript](https://www.typescriptlang.org/) can easily access [OpenAI API](https://platform.openai.com/docs/introduction).

### Installation

To use this SDK in your JavaScript or TypeScript project, you can install it using npm:

```js
npm install openai-js-sdk
```

### Usage

To use the functions provided by this package, you can import them into your JavaScript or TypeScript code using the appropriate module name. For example, to send a chat message using the `sendChatMessage` function, you would import the `sendChatMessage` function from the `chats.ts` module as follows:

```js
import { sendChatMessage } from "openai-js-sdk";

async function main() {
  try {
    await sendChatMessage("Hello!");
  } catch (error) {
    console.error(error);
  }
}

main();
```

Similarly, to get a list of available models using the `getModels` function, you would import the `getModels` function from the `models.ts` module:

```js
import { getModels } from "openai-js-sdk";

async function main() {
  try {
    await getModels();
  } catch (error) {
    console.error(error);
  }
}

main();
```

You can also import the `getCompletion` function from the `completions.ts` module to generate text completions:

```js
import { getCompletion } from "openai-js-sdk";

async function main() {
  try {
    const response = await getCompletion("Say this is a test");
    console.log(response.choices[0].text);
  } catch (error) {
    console.error(error);
  }
}

main();
```

And you can import the `makeEdits` function from the `edits.ts` module to make edits to text:

```js
import { makeEdits } from "openai-js-sdk";

async function main() {
  try {
    await makeEdits(
      "text-davinci-edit-001",
      "What day of the wek is it?",
      "Fix the spelling mistakes"
    );
  } catch (error) {
    console.error(error);
  }
}

main();
```

Use the `generateImage` function to generate a single image of a cute baby sea otter.

```js
import { generateImage } from "openai-js-sdk";

async function main() {
  const prompt = "A cute baby sea otter";
  const n = 1;
  const size = "512x512";

  try {
    const result = await generateImage(prompt, n, size);
    console.log(result.data[0].url);
  } catch (error) {
    console.error(error);
  }
}

main();
```

Use the `generateEditedImage` function to generate an edited image of a cute baby sea otter wearing a beret.

```js
import { generateEditedImage } from "openai-js-sdk";

async function main() {
  const imageFilePath = "./content/otter.png";
  const maskFilePath = "./content/mask.png";
  const prompt = "A cute baby sea otter wearing a beret";
  const n = 1;
  const size = "512x512";

  try {
    const result = await generateEditedImage(
      imageFilePath,
      maskFilePath,
      prompt,
      n,
      size
    );
    console.log(result.data[0].url);
  } catch (error) {
    console.error(error);
  }
}

main();
```

Use the `generateImageVariations` function to generate two variations of an existing image of a cute baby sea otter.

```js
import { generateImageVariations } from "openai-js-sdk";

async function main() {
  const imageFilePath = "./content/otter.png";
  const n = 2;
  const size = "512x512";

  try {
    const result = await generateImageVariations(imageFilePath, n, size);
    console.log(result.data[0].url);
  } catch (error) {
    console.error(error);
  }
}

main();
```

You can call the `getEmbeddings` function from `embedding.ts` to embed a text input using the ADA model.

```js
import { openaiAuth } from "./authentication";
import { getEmbeddings } from "./embedding";

async function main() {
  try {
    // Get embeddings
    await getEmbeddings("The food was delicious and the waiter...", "text-embedding-ada-002");
  } catch (error) {
    console.error(error);
  }
}

// Set the authentication headers for all requests
openaiAuth.interceptors.request.use((config) => {
  console.log("Making request with headers:", config.headers);
  return config;
});

main();
```

You can call the `checkModeration` function from `moderations.ts` to check if a text input contains any toxic or spam content.

```js
import { openaiAuth } from "./authentication";
import { checkModeration } from "./moderations";

async function main() {
  try {
    // Check moderation
    await checkModeration("I want to kill them."); // watch your language! do not kill anyone! :-)
  } catch (error) {
    console.error(error);
  }
}

// Set the authentication headers for all requests
openaiAuth.interceptors.request.use((config) => {
  console.log("Making request with headers:", config.headers);
  return config;
});

main();
```

The `transcribeAudio` function is called with the file path `./content/audio.mp3` and the model string `"whisper-1"`. Make sure to replace these placeholders with your actual file path and model string.

```js
import { openaiAuth } from "./authentication";
import { transcribeAudio } from "./audio";

async function main() {
  try {
    // Transcribe audio
    await transcribeAudio("./content/audio.mp3", "whisper-1");
  } catch (error) {
    console.error(error);
  }
}

main();
```

The `translateAudio` function is called with the file path `./content/german.m4a` and the model string `"whisper-1"`.

```js
import { openaiAuth } from "./authentication";
import { translateAudio } from "./audio";

async function main() {
  try {
    // Translate audio
    await translateAudio("./content/german.m4a", "whisper-1");
  } catch (error) {
    console.error(error);
  }
}

main();
```


Note that before running any of these functions, you will need to create an OpenAI account. To do this, you can click on this [link](https://openai.com).

### Contribute

Feel free to contribute. Open a Pull Request (aka PR).


### License

This project is licensed under the [MIT License](./LICENSE).


### Copyright

(c) 2023 [Finbarrs Oketunji](https://finbarrs.eu).


> Cheers to technological advancement and moving the human race forward. 🙏🏽