import axios from "axios";
import AllCardsInfo from "components/AllCardsInfo/AllCardsInfo";
import CardsDto from "components/AllCardsInfo/CardsDto";
import RedLineDto from "components/charts/LineChart/RedLineDto";
import ScoreChartDto from "components/charts/ScoreChart/ScoreChartDto";
import SimpleBarChartDto from "components/charts/SimpleBarChart/SimpleBarChartDto";
import SimpleRadarDTO from "components/charts/SimpleRadarChart/SimpleRadarDTO";
import UserInfoDto from "components/UserInfo/UserInfoDto";

export default class ApiProvider {
  constructor() {
    this.url = "http://localhost:3000/user/";
  }
  getAllData() {
    axios
      .get(this.url + "12")
      .then((res) => {
        console.log("ça passe");
      })
      .catch((err) => {
        console.log("ça passe pas");
      });
  }
  /**
   *
   * @param {} userId
   * @returns user name "Karl" for example
   */
  async getProfilData(userId) {
    return axios.get(this.url + userId).then((res) => {
      let user = res?.data?.data?.userInfos;
      return new UserInfoDto(user);
    });
  }
  /**
   *
   * @param {*} userId
   * @returns user activity as kilogram and calories
   */
  async getActivity(userId) {
    return axios.get(this.url + userId + "/activity").then((res) => {
      let session = res?.data?.data?.sessions;
      return new SimpleBarChartDto(session);
    });
  }

  async getUserMainData(userId) {
    return axios.get(this.url + userId).then((res) => {
      let user =
        res?.data?.data?.todayScore == undefined
          ? res.data.data.score
          : res.data.data.todayScore;
      return new ScoreChartDto(user);
    });
  }

  async getSessionsData(userId) {
    return axios.get(this.url + userId + "/average-sessions").then((res) => {
      let session = res.data.data;
      return new RedLineDto(session);
    });
  }

  async getRadarData(userId) {
    return axios.get(this.url + userId + "/performance").then((res) => {
      let user = res.data.data;
      return new SimpleRadarDTO(user);
    });
  }

  async getCardData(userId) {
    return axios.get(this.url + userId).then((res) => {
      let user = res?.data;
      return new CardsDto(user);
    });
  }
}
