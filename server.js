const http = require("http");
http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(`<h1>📱 Deployed FROM ANDROID via Openship CLI!</h1><p>KIRO di HP → VPS Codespaces · ${new Date().toISOString()}</p>`);
}).listen(process.env.PORT || 3000);
