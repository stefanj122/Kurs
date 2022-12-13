import axios from "axios";
import fs from "fs";

// const data = await axios.post("https://jsonplaceholder.typicode.com/posts");
// console.log(data);
// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });
async function sad() {
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
}
sad();
