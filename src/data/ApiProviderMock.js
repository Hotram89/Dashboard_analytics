import { USER_MAIN_DATA } from "./data.js";
import { USER_ACTIVITY } from "./data.js";
import { USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./data.js";
import SimpleBarChartDto from "components/charts/SimpleBarChart/SimpleBarChartDto.js";
import ScoreChartDto from "components/charts/ScoreChart/ScoreChartDto.js";
import RedLineDto from "components/charts/LineChart/RedLineDto.js";
import SimpleRadarDTO from "components/charts/SimpleRadarChart/SimpleRadarDTO.js";
import CardsDto from "../components/AllCardsInfo/CardsDto";
import UserInfoDto from "components/UserInfo/UserInfoDto.js";

export default class ApiProviderMock {
  constructor() {
    this.userData = USER_MAIN_DATA;
    this.userActivity = USER_ACTIVITY;
    this.userPerformance = USER_PERFORMANCE;
    this.userAverageSessions = USER_AVERAGE_SESSIONS;
  }

  /**
   *Use to know user's firstname
   *
   * @param {number} userId
   * @returns user name "Karl" for example
   */
  getProfilData(userId) {
    let profils = this.userData.filter((session) => {
      return userId == session.id;
    });
    return new Promise((resolve, reject) => {
      resolve(new UserInfoDto(profils[0].userInfos));
    });
  }

  /**
   *
   * @param {number} userId
   * @returns user activity as kilogram and calories
   */
  getActivity(userId) {
    let activities = this.userActivity.filter((activity) => {
      if (userId == activity.userId) {
        return true;
      }
    });
    return new Promise((resolve, reject) => {
      resolve(new SimpleBarChartDto(activities[0].sessions));
    });
  }

  /**
   *
   * @param {number} userId
   * @returns score for radial chart
   */
  getUserMainData(userId) {
    let scores = this.userData.filter((score) => {
      if (userId == score.id) {
        return true;
      }
    });

    let element =
      scores[0]?.todayScore == undefined
        ? scores[0]?.score
        : scores[0]?.todayScore;
    //return new ScoreChartDto(element);
    return new Promise((resolve, reject) => {
      resolve(new ScoreChartDto(element));
    });
  }

  /**
   *
   * @param {number} userId
   * @returns session length per day for a week
   */
  getSessionsData(userId) {
    /***
     * *
     * filter by ID the data to export only the user needed*
     * **
     * */
    let sessions = this.userAverageSessions.filter((session) => {
      return userId == session.userId;
    });
    return new Promise((resolve, reject) => {
      resolve(new RedLineDto(sessions[0]));
    });
  }

  /**
   *
   * @param {number} userId
   * @returns score for each kind of performance
   */
  getRadarData(userId) {
    let sports = this.userPerformance.filter((sport) => {
      return userId == sport.userId;
    });
    return new Promise((resolve, reject) => {
      resolve(new SimpleRadarDTO(sports[0]));
    });
  }

  /**
   *
   * @param {number} userId
   * @returns data elements for each card
   */
  getCardData(userId) {
    let cards = this.userData.filter((card) => {
      return userId == card.id;
    });
    return new Promise((resolve, reject) => {
      resolve(new CardsDto(cards[0]));
    });
  }
}
