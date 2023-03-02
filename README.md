## OpenAI API JS SDK

Easily access [OpenAI API](https://platform.openai.com/docs/introduction) for applications written in [Javascript](https://www.javascript.com/) and [Typescript](https://www.typescriptlang.org/).

### Installation

To use this SDK in your JavaScript or TypeScript project, you can install it using npm:

```js
npm install openai-js-sdk
```

### Usage

To use the functions provided by this package, you can import them into your TypeScript code using the appropriate module name. For example, to send a chat message using the `sendChatMessage` function, you would import the `sendChatMessage` function from the `chats.ts` module as follows:

```js
import { sendChatMessage } from "openai-js-sdk/chats";

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
import { getModels } from "openai-js-sdk/models";

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
import { getCompletion } from "openai-js-sdk/completions";

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
import { makeEdits } from "openai-js-sdk/edits";

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

Note that before running any of these functions, you will need to create an OpenAI account. To do this, you can click on this [link](https://openai.com).

### Contribute

Feel free to contribute. Open a Pull Request (aka PR).


### License

This project is licensed under the [MIT License](./LICENSE).


### Copyright

(c) 2023 [Finbarrs Oketunji](https://finbarrs.eu).


> Cheers to technological advancement and moving the human race forward. 🙏🏽