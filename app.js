import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const pagesDir = path.join(__dirname, "pages");

const routes = {
  "/home": "home.html",
  "/contact": "contact.html",
};

const server = http.createServer((req, res) => {
  const url = req.url === "/" ? "/home" : req.url;
  const filePath = routes[url];

  if (filePath) {
    const fullPath = path.join(pagesDir, filePath);
    fs.readFile(fullPath, "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>500 Помилка сервера</h1>");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end("<h1>404 — сторінку не знайдено</h1>");
  }
});

server.listen(PORT, () => {
  console.log(`Сервер запущено на http://localhost:${PORT}`);
  console.log("Доступні маршрути: /home, /contact");
});
