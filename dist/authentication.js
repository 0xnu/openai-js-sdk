"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openaiAuth = exports.ORG_ID = exports.API_KEY = void 0;
const axios_1 = __importDefault(require("axios"));
exports.API_KEY = "<your-api-key>";
exports.ORG_ID = "<your-organization-id>";
const headers = {
    Authorization: `Bearer ${exports.API_KEY}`,
    "OpenAI-Organization": exports.ORG_ID,
};
exports.openaiAuth = axios_1.default.create({
    headers,
});
//# sourceMappingURL=authentication.js.map