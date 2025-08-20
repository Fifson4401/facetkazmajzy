// server.js
const { createServer } = require("http");
const next = require("next");
const { loadEnvConfig } = require("@next/env");

loadEnvConfig("./", process.env.NODE_ENV === "development");

const dev = process.env.NODE_ENV === "development";
const hostname = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      await handle(req, res);
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});