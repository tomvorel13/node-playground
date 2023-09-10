import express from "express";
import { returnHeadingText } from "./lib/elements";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/info", async (req, res) => {
  const heading = await returnHeadingText();

  if (heading) {
    res.status(200).send({ message: heading });
  } else {
    res.status(500).send({ message: "Something went wrong" });
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
