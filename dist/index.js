"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("./authentication");
const models_1 = require("./models");
const completions_1 = require("./completions");
const chats_1 = require("./chats");
const edits_1 = require("./edits");
const images_1 = require("./images");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Send chat messages
            yield (0, chats_1.sendChatMessage)("Hello!");
            yield (0, chats_1.sendChatMessage)("How are you?");
            yield (0, chats_1.sendChatMessage)("What's the weather like today?");
            // Get list of models
            yield (0, models_1.getModels)();
            // Call the getModel function from the models.ts file
            yield (0, models_1.getModel)("text-davinci-003");
            // Get completion from language model
            yield (0, completions_1.getCompletion)("Say this is a test");
            // Make edits
            yield (0, edits_1.makeEdits)("text-davinci-edit-001", "What day of the wek is it?", "Fix the spelling mistakes");
            // Generate an image
            yield (0, images_1.generateImage)("A cute baby sea otter", 2, "1024x1024");
            // Generate an edited image
            yield (0, images_1.generateEditedImage)("./content/otter.png", "./content/mask.png", "A cute baby sea otter wearing a beret", 2, "1024x1024");
            // Generate image variations
            yield (0, images_1.generateImageVariations)("./content/otter_new.png", 2, "1024x1024");
        }
        catch (error) {
            console.error(error);
        }
    });
}
// Set the authentication headers for all requests
authentication_1.openaiAuth.interceptors.request.use((config) => {
    console.log("Making request with headers:", config.headers);
    return config;
});
main();
//# sourceMappingURL=index.js.map