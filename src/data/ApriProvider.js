import axios from "axios";

export default class ApiProvider {
  getSportData() {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        console.log(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
