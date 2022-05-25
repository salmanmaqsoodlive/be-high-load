const express = require("express");
const path = require("path");
const history = require("connect-history-api-fallback");
// ^ middleware to redirect all URLs to index.html

const app = express();
const staticFileMiddleware = express.static(path.join(__dirname, "/dist"));

// app.use("/", serveStatic(path.join(__dirname, "/dist")));
app.use(staticFileMiddleware);
app.use(history());
app.use(staticFileMiddleware);

app.get("/", function (req, res) {
  res.render(path.join(__dirname + "/index.html"));
});
const port = process.env.PORT || 8080;

app.listen(port);

console.log("Listening on port ", port);
