const http = require("http");
const VER = "v2-push-deploy";
http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(`<h1>🔔 Push-to-Deploy Works!</h1><p>Repo: kiro-openship-demo (${VER})</p><p>Push dari Android → GitHub → Webhook → Openship → Deploy · ${new Date().toISOString()}</p>`);
}).listen(process.env.PORT || 3000);
