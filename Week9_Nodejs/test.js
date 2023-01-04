// const http = require("http");
// const os = require("os");

// http
//   .createServer(function (req, res) {
//     console.log(process.NODE_END);
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end("<h1>Hello World!</h1>");
//   })
//   .listen(8080);
// import http from "http";

// http
//   .createServer(function (req, res) {
//     if (req.url === "/json") {
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end('{"a": 1}');
//     } else if (req.url === "/") {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end("Hello World!");
//     } else {
//       res.writeHead(404, { "Content-Type": "text/html" });
//       res.end("<h1>Nothing found here!</h1>");
//     }
//   })
//   .listen(3000);
import * as mysql from "mysql2";
import http from "http";
//Nakon toga potrebno je napraviti konekciju ka bazi:

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "zadaci",
  port: 3306,
});

//Posle ovoga, mozemo pisati query:

http
  .createServer(function (req, res) {
    if (req.url === "/users") {
      res.writeHead(200, { "Content-Type": "application/json" });
      conn.query("SELECT * FROM customers", function (err, results, fields) {
        res.end(JSON.stringify(results));
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>Nothing found here!</h1>");
    }
  })
  .listen(5000);
