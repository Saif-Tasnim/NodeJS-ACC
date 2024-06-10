const http = require("http");

const data = [
  {
    id: 1,
    title: "A",
    Description: "this is A",
  },
  {
    id: 2,
    title: "B",
    Description: "this is B",
  },
  {
    id: 3,
    title: "C",
    Description: "this is C",
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.end(`
    <!DOCTYPE>
    <html>
    <head> <title> new </title> </head>
    <body> <h1> this is about </h1> </body>
    </html>
    `);
  } else {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(JSON.stringify(data));
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log(`server is running in port 5000`);
});
