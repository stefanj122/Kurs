import axios from "axios";

const data = {
  expr: "5.08 cm in inch",
  precision: 14,
};
const response = await axios.post("http://api.mathjs.org/v4/", data, {
  headers: { "Accept-Encoding": "gzip, deflate, br" },
});
console.log(response.data);
