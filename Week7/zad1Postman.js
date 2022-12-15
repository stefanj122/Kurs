import axios from "axios";

var config = {
  method: "get",
  url: "https://jsonplaceholder.typicode.com/posts",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Encoding": "gzip,deflate,compress",
  },
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
