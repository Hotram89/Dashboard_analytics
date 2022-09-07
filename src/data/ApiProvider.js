import { USER_MAIN_DATA } from "./dataMock";
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

  getCardData() {
    const goodData = new Dto().cardProps(this.userData);
    return goodData;
  }
}
