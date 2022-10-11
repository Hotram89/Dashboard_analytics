import { USER_MAIN_DATA } from "./data.js";
import { USER_ACTIVITY } from "./data.js";
import { USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./data.js";
import Dto from "./Dto";
import SimpleBarChartDto from "components/charts/SimpleBarChart/SimpleBarChartDto.js";
import ScoreChartDto from "components/charts/ScoreChart/ScoreChartDto.js";
import RedLineDto from "components/charts/LineChart/RedLineDto.js";

export default class ApiProvider {
  constructor() {
    this.userData = USER_MAIN_DATA;
    this.userActivity = USER_ACTIVITY;
    this.userPerformance = USER_PERFORMANCE;
    this.userSessions = USER_AVERAGE_SESSIONS;
  }

  getAllData() {
    return this.userActivity;
  }

  getProfilData() {
    return this.userData;
  }
  getRadarData() {
    return this.userPerformance;
  }

  getCardData() {
    const goodData = new Dto().cardProps(this.userData);
    return goodData;
  }

  getScoreData() {
    const goodData = new Dto().scoreProps(this.userActivity);
    return this.userActivity;
  }

  getSessionsData(userId) {
    let sessions = this.userSessions.filter((session) => {
      if (userId == session.userId) {
        return true;
      }
    });
    return new RedLineDto(sessions);
  }
  getUserMainData(userId) {
    let scores = this.userData.filter((score) => {
      if (userId == score.id) {
        return true;
      }
    });
    if (scores[0].todayScore == undefined)
      return new ScoreChartDto(scores[0].score);
    else return new ScoreChartDto(scores[0].todayScore);
  }

  getActivity(userId) {
    let activities = this.userActivity.filter((activity) => {
      if (userId == activity.userId) {
        return true;
      }
    });
    return new SimpleBarChartDto(activities[0].sessions);
  }
}
