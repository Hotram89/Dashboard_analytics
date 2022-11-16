import axios from "axios";
import UserInfoDto from "components/UserInfo/UserInfoDto";

export default class ApiProvider {
  constructor() {
    this.mickey = "res.data";
    this.result = "tango";
  }
  getSportData() {
    axios
      .get("http://localhost:3000/user/12")
      .then((res) => {
        console.log("ça passe");
      })
      .catch((err) => {
        console.log("ça passe pas");
      });
  }

  async getProfilData() {
    const res = await axios
      .get("http://localhost:3000/user/12")

      .catch((err) =>
        alert("Erreur 503 : The server is currently unavailable.")
      );
    console.log(res.data.data.userInfos);
    let user = res.data.data.userInfos;
    return new UserInfoDto(user);
  }
}
