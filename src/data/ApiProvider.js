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
    return axios.get("http://localhost:3000/user/12").then((res) => {
      let user = res?.data?.data?.userInfos;
      console.log(user);
      return new UserInfoDto(user);
    });
  }
}
