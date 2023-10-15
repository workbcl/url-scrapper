import express from "express";
import { scrapperRoute } from "./route.scrapper";

export const registeredRoute = express.Router();
registeredRoute.use("/search", scrapperRoute);
