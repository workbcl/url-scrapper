"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registeredRoute = void 0;
const express_1 = __importDefault(require("express"));
const route_scrapper_1 = require("./route.scrapper");
exports.registeredRoute = express_1.default.Router();
exports.registeredRoute.use("/search", route_scrapper_1.scrapperRoute);
