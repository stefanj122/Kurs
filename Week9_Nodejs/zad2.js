import * as mysql from "mysql2";
import http from "http";
import axios from "axios";

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "zadaci",
  port: 3306,
});

http
  .createServer((req, res) => {
    if (req.url === "/posts" && req.method === "GET") {
      conn.query(
        "SELECT * FROM posts WHERE deleted_at IS NULL",
        (err, results, fields) => {
          if (err) {
            console.error(err);
            res.writeHead(400, { "content-type": "text/html" });
            res.end();
          } else {
            res.writeHead(200, { "content-type": "application/json" });
            res.end(
              `{"total":[${results.length}]"data":${JSON.stringify(results)}}`
            );
          }
        }
      );
    } else if (req.url === "/posts" && req.method === "POST") {
      const data = [];
      req.on("data", (chunk) => {
        data.push(chunk);
      });
      req.on("end", () => {
        const str = Buffer.concat(data).toString();
        const obj = JSON.parse(str);
        if (obj.title === "") {
          res.writeHead(400, { "content-type": "application/json" });
          res.end("Title can not be empty.");
        } else {
          conn.query(
            `INSERT INTO posts(title,content) VALUE('${obj.title}','${obj.content}')`,
            (err, results, fields) => {
              if (!err) {
                res.writeHead(200, { "content-type": "application/json" });
                res.end(`${str}`);
              }
            }
          );
        }
      });
    }
  })
  .listen(3000);
