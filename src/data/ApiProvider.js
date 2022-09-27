import { USER_MAIN_DATA } from "./data.js";
import { USER_ACTIVITY } from "./data.js";
import { USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./data.js";
import Dto from "./Dto";

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

  getRedLineData() {
    return this.userSessions;
  }

  getRadialData() {
    return this.userData;
  }
}
