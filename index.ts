import { openaiAuth } from "./authentication";
import { getModels, getModel } from "./models";
import { getCompletion } from "./completions";
import { sendChatMessage } from "./chats";
import { makeEdits } from "./edits";

async function main() {
try {
    // Send chat messages
    await sendChatMessage("Hello!");
    await sendChatMessage("How are you?");
    await sendChatMessage("What's the weather like today?");

    // Get list of models
    await getModels();

    // Call the getModel function from the models.ts file
    await getModel("text-davinci-003");

    // Get completion from language model
    await getCompletion("Say this is a test");

    // Make edits
    await makeEdits(
        "text-davinci-edit-001",
        "What day of the wek is it?",
        "Fix the spelling mistakes"
    );
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