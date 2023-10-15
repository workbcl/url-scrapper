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
exports.scrapperRoute = void 0;
const express_1 = __importDefault(require("express"));
const service_url_scrapper_1 = require("../services/service.url-scrapper");
exports.scrapperRoute = express_1.default.Router();
const urlScrapper = service_url_scrapper_1.UrlScrapper.getInstance();
exports.scrapperRoute.post("/urls", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = req.body.url;
        let urlList = yield urlScrapper.getUrls(url);
        res.send({ urls: urlList });
    }
    catch (error) {
        console.log("🚀 ~ file: route.scrapper.ts:16 ~ scrapperRoute.post ~ error:", error);
        res.status(500).send(error);
    }
}));
