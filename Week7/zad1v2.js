import axios from "axios";
import fs from "fs";
async function axiosTest() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        headers: { "Accept-Encoding": "gzip,deflate,compress" },
      }
    );
    response.data.forEach((element) => {
      fs.appendFileSync("posts.txt", JSON.stringify(element) + "\n");
    });
  } catch (e) {
    console.log(e);
  }
}
axiosTest();
