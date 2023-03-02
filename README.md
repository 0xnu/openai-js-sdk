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

Note that before running any of these functions, you will need to create an OpenAI account. To do this, you can click on this [link](https://openai.com).

### Contribute

Feel free to contribute. Open a Pull Request (aka PR).


### License

This project is licensed under the [MIT License](./LICENSE).


### Copyright

(c) 2023 [Finbarrs Oketunji](https://finbarrs.eu).


> Cheers to technological advancement and moving the human race forward. 🙏🏽