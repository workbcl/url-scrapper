import express from "express";
import bodyParser from "body-parser";
import { registeredRoute } from "./routes/register-routing-file";
import { easyResponse } from "./middleware/easyResponse.middleware";

const Port = 7000;
const app = express();

app.use(easyResponse);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});
app.use("/", registeredRoute);
app.listen(Port, () => {
  console.log(`Server Running on ${Port}`);
});
