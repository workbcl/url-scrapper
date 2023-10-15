import axios from "axios";
import jsdom from "jsdom";
import { interfaceUrlScrapper } from "../interfaces/interface.url-scrapper";
const { JSDOM } = jsdom;
// import cheerio from "cheerio";

export class UrlScrapper implements interfaceUrlScrapper {
  private static urlScrapper: UrlScrapper;

  private constructor() {}

  public static getInstance() {
    if (!UrlScrapper.urlScrapper) {
      UrlScrapper.urlScrapper = new UrlScrapper();
    }
    return UrlScrapper.urlScrapper;
  }

  public async getUrls(url: string) {
    const response = await axios.get(url);
    const dom = new JSDOM(response.data);
    const document = dom.window.document;
    const domainSet: Set<string> = new Set();
    const links = document.querySelectorAll("a");
    links.forEach((link: any) => {
      if (link.href) {
        try {
          const url = new URL(link.href);
          domainSet.add(url.hostname);
        } catch (error) {
          const subUrl = url + link.href;
          domainSet.add(subUrl);
        }
      }
    });
    const domainNames = Array.from(domainSet);

    return domainNames;
  }
}
