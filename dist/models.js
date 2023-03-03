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
exports.getModel = exports.getModels = void 0;
const authentication_1 = require("./authentication");
const modelsEndpoint = "https://api.openai.com/v1/models";
function getModels() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield authentication_1.openaiAuth.get(modelsEndpoint);
            console.log(response.data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getModels = getModels;
function getModel(model) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield authentication_1.openaiAuth.get(`${modelsEndpoint}/${model}`);
            console.log(response.data);
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getModel = getModel;
//# sourceMappingURL=models.js.map