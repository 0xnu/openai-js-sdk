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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateAudio = exports.transcribeAudio = void 0;
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const authentication_1 = require("./authentication");
function transcribeAudio(file, model) {
    return __awaiter(this, void 0, void 0, function* () {
        const formData = new form_data_1.default();
        formData.append("file", file);
        formData.append("model", model);
        const response = yield axios_1.default.post("https://api.openai.com/v1/audio/transcriptions", formData, {
            headers: Object.assign(Object.assign({}, authentication_1.openaiAuth.defaults.headers), { "Content-Type": `multipart/form-data; boundary=${formData.getBoundary()}` }),
        });
        console.log(response.data);
    });
}
exports.transcribeAudio = transcribeAudio;
function translateAudio(file, model) {
    return __awaiter(this, void 0, void 0, function* () {
        const formData = new form_data_1.default();
        formData.append("file", file);
        formData.append("model", model);
        const response = yield axios_1.default.post("https://api.openai.com/v1/audio/translations", formData, {
            headers: Object.assign(Object.assign({}, authentication_1.openaiAuth.defaults.headers), { "Content-Type": `multipart/form-data; boundary=${formData.getBoundary()}` }),
        });
        console.log(response.data);
    });
}
exports.translateAudio = translateAudio;
//# sourceMappingURL=audio.js.map