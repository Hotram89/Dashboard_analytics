import axios from "axios";
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

  /**
   *Use to know user's firstname
   *
   * @param {number} userId
   * @returns user name "Karl" for example
   */
  async getProfilData(userId) {
    return axios
      .get(this.url + userId)
      .then((res) => {
        let user = res?.data?.data?.userInfos;
        return new UserInfoDto(user);
      })
      .catch(function (error) {
        alert("Erreur le serveur est indisponible pour le moment");
      });
  }

  /**
   *
   * @param {number} userId
   * @returns user activity as kilogram and calories
   */
  async getActivity(userId) {
    return axios
      .get(this.url + userId + "/activity")
      .then((res) => {
        let session = res?.data?.data?.sessions;
        return new SimpleBarChartDto(session);
      })
      .catch(function (error) {
        alert("Erreur le serveur est indisponible pour le moment");
      });
  }

  /**
   *
   * @param {number} userId
   * @returns score for radial chart
   */
  async getUserMainData(userId) {
    return axios
      .get(this.url + userId)
      .then((res) => {
        let user =
          res?.data?.data?.todayScore == undefined
            ? res.data.data.score
            : res.data.data.todayScore;
        return new ScoreChartDto(user);
      })
      .catch(function (error) {
        alert("Erreur le serveur est indisponible pour le moment");
      });
  }

  /**
   *
   * @param {number} userId
   * @returns session length per day for a week
   */
  async getSessionsData(userId) {
    return axios
      .get(this.url + userId + "/average-sessions")
      .then((res) => {
        let session = res.data.data;
        return new RedLineDto(session);
      })
      .catch(function (error) {
        alert("Erreur le serveur est indisponible pour le moment");
      });
  }

  /**
   *
   * @param {number} userId
   * @returns score for each kind of performance
   */
  async getRadarData(userId) {
    return axios
      .get(this.url + userId + "/performance")
      .then((res) => {
        let user = res.data.data;
        return new SimpleRadarDTO(user);
      })
      .catch(function (error) {
        alert("Erreur le serveur est indisponible pour le moment");
      });
  }

  /**
   *
   * @param {number} userId
   * @returns data elements for each card
   */
  async getCardData(userId) {
    return axios
      .get(this.url + userId)
      .then((res) => {
        let user = res?.data;
        return new CardsDto(user.data);
      })
      .catch(function (error) {
        alert("Erreur le serveur est indisponible pour le moment");
      });
  }
}
