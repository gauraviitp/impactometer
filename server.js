const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(function (req, res, next) {
  setTimeout(() => next(), 0);
});

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  nod;
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
  console.log(
    `Express server serving static content from ${path.join(
      __dirname,
      "build"
    )}`
  );
});
