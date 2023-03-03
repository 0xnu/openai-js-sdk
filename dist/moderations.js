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
exports.checkModeration = void 0;
const axios_1 = __importDefault(require("axios"));
const authentication_1 = require("./authentication");
const MODERATIONS_URL = "https://api.openai.com/v1/moderations";
function checkModeration(input) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const requestBody = {
                input,
            };
            const response = yield axios_1.default.post(MODERATIONS_URL, requestBody, {
                headers: authentication_1.openaiAuth.defaults.headers,
            });
            console.log(response.data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.checkModeration = checkModeration;
//# sourceMappingURL=moderations.js.map