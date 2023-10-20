// server.js
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 3000 || process.env.PORT;

app.prepare().then(() => {
  const server = express();

  // Define your custom routes
  server.get("/login", (req, res) => {
    return app.render(req, res, "/login", req.query);
  });

  // Define your custom routes
  server.get("/dashboard", (req, res) => {
    return app.render(req, res, "/dashboard", req.query);
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
