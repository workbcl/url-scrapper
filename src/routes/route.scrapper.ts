import express from "express";
import { UrlScrapper } from "../services/service.url-scrapper";
export const scrapperRoute = express.Router();

const urlScrapper = UrlScrapper.getInstance();

scrapperRoute.post("/urls", async (req, res) => {
  try {
    const url = req.body.url;

    let urlList = await urlScrapper.getUrls(url);
    res.status(200).send({ urls: urlList });
  } catch (error) {
    res.status(500).send(error);
  }
});
