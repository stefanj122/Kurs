import axios from "axios";
import fs from "fs";

axios
  .get("https://jsonplaceholder.typicode.com/posts", {
    headers: { "Accept-Encoding": "gzip,deflate,compress" },
  })
  .then(
    (response) => response.data,
    (er) => {
      console.log(er);
    }
  )
  .then(
    (data) => JSON.stringify(data),
    (er) => {
      console.log(er);
    }
  )
  .then((data) => {
    fs.appendFileSync("host.txt", data);
  });
