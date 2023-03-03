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
exports.getCompletion = void 0;
const authentication_1 = require("./authentication");
const completionsEndpoint = "https://api.openai.com/v1/completions";
function getCompletion(prompt) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = {
                model: "text-davinci-003",
                prompt,
                temperature: 0,
                max_tokens: 7,
            };
            const response = yield authentication_1.openaiAuth.post(completionsEndpoint, data);
            console.log(response.data.choices[0].text);
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getCompletion = getCompletion;
//# sourceMappingURL=completions.js.map