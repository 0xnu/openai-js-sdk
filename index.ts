import { openaiAuth } from "./src/authentication";
import { getModels, getModel } from "./src/models";
import { getCompletion } from "./src/completions";
import { sendChatMessage } from "./src/chats";
import { makeEdits } from "./src/edits";
import {
  generateImage,
  generateEditedImage,
  generateImageVariations,
} from "./src/images";
import { getEmbeddings } from "./src/embedding";
import { checkModeration } from "./src/moderations";
import { transcribeAudio, translateAudio } from "./src/audio";
import { getFiles, uploadFile, deleteFile, getFile } from "./src/files";
import { 
  createFineTune,
  getFineTunes,
  getFineTune,
  cancelFineTune,
  getFineTuneEvents,
  deleteModel
} from "./src/finetunes";

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

    // Generate an image
    await generateImage("A cute baby sea otter", 2, "1024x1024");

    // Generate an edited image
    await generateEditedImage(
      "./content/otter.png",
      "./content/mask.png",
      "A cute baby sea otter wearing a beret",
      2,
      "1024x1024"
    );

    // Generate image variations
    await generateImageVariations("./content/otter_new.png", 2, "1024x1024");

    // Get embeddings
    await getEmbeddings("The food was delicious and the waiter...", "text-embedding-ada-002");

    // Check moderation
    await checkModeration("I want to kill them.");

    // Transcribe audio
    await transcribeAudio("./content/steve_jobs_courage.mp3", "whisper-1");

    // Translate audio
    await translateAudio("./content/german.mp3", "whisper-1");   

    // Get files
    await getFiles();

    // Upload a file
    await uploadFile("./content/mydata.jsonl");

    // Get a file
    await getFile("file-XjGxS3KTG0uNmNOK362iJua3");

    // Delete a file
    await deleteFile("file-XjGxS3KTG0uNmNOK362iJua3");

    // create fine-tune
    const fineTune = await createFineTune("./content/training_file.txt");

    // get list of fine-tunes
    const fineTunes = await getFineTunes();

    // get details of a specific fine-tune
    const fineTuneId = fineTunes[0].id;
    const fineTuneDetails = await getFineTune(fineTuneId);

    // cancel a fine-tune
    await cancelFineTune(fineTuneId);

    // get events for a fine-tune
    const fineTuneEvents = await getFineTuneEvents(fineTuneId);

    // delete a model
    const modelId = "model-ABC";
    const deleteResult = await deleteModel(modelId);
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
