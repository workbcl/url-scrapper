import express from "express";
import { UrlScrapper } from "../services/service.url-scrapper";
export const scrapperRoute = express.Router();

const urlScrapper = UrlScrapper.getInstance();

scrapperRoute.post("/urls", async (req: any, res: any) => {
  try {
    const url = req.body.url;
    let urlList = await urlScrapper.getUrls(url);
    res.ok({ urls: urlList });
  } catch (error) {
    res.badRequest(error);
  }
});
