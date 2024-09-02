const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const formidableMiddleware = require("express-formidable");

// app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formidableMiddleware());

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.post("/post", (req, res) => {
  try {
    console.log("Request Objects", req.files);

    if (req.body?.fileSize > 3000) {
      return res.status(400).json({ message: "File size is exceed 3000" });
    }

    return res.json({
      post: "data",
    });
  } catch (error) {
    console.log({ error });

    return res.status(500).json("something went wrong");
  }
});

app.listen(3000, () => {
  console.log("App listening on 3000");
});
