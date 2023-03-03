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
exports.generateImageVariations = exports.generateEditedImage = exports.generateImage = void 0;
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const fs_1 = __importDefault(require("fs"));
const authentication_1 = require("./authentication");
function generateImage(prompt, n, size) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post("https://api.openai.com/v1/images/generations", {
                prompt: prompt,
                n: n,
                size: size,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authentication_1.API_KEY}`,
                },
            });
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw new Error("Failed to generate image");
        }
    });
}
exports.generateImage = generateImage;
function generateEditedImage(imageFilePath, maskFilePath, prompt, n, size) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const form = new form_data_1.default();
            form.append("image", fs_1.default.createReadStream(imageFilePath));
            form.append("mask", fs_1.default.createReadStream(maskFilePath));
            form.append("prompt", prompt);
            form.append("n", n.toString());
            form.append("size", size);
            const response = yield axios_1.default.post("https://api.openai.com/v1/images/edits", form, {
                headers: Object.assign({ "Content-Type": "multipart/form-data", Authorization: `Bearer ${authentication_1.API_KEY}` }, form.getHeaders()),
            });
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw new Error("Failed to generate edited image");
        }
    });
}
exports.generateEditedImage = generateEditedImage;
function generateImageVariations(imageFilePath, n, size) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const form = new form_data_1.default();
            form.append("image", fs_1.default.createReadStream(imageFilePath));
            form.append("n", n.toString());
            form.append("size", size);
            const response = yield axios_1.default.post("https://api.openai.com/v1/images/variations", form, {
                headers: Object.assign({ "Content-Type": "multipart/form-data", Authorization: `Bearer ${authentication_1.API_KEY}` }, form.getHeaders()),
            });
            return response.data;
        }
        catch (error) {
            console.error(error);
            throw new Error("Failed to generate image variations");
        }
    });
}
exports.generateImageVariations = generateImageVariations;
//# sourceMappingURL=images.js.map