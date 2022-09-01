import ApiProvider from "./ApiProvider";
import { USER_ACTIVITY } from "data/dataMock";
import { USER_PERFORMANCE } from "data/dataMock";

export default class Dto {
  constructor() {
    this.profilData = new ApiProvider().getProfilData();
  }

  profilDto() {
    let name = "";
    name = this.profilData[0].userInfos.firstName;
    return name;
  }

  scoreProps() {
    let propsInit = USER_ACTIVITY[0].sessions;
    let newprops = [];
    propsInit.map((el, index) => {
      newprops.push({
        name: index + 1,
        calories: el.calories,
        poids: el.kilogram,
      });
    });

    return newprops;
  }

  radarProps() {
    let propsInit = USER_PERFORMANCE[0].data;
    console.log(USER_PERFORMANCE[0]);
    let newprops = [];

    propsInit.map((el) => {
      console.log(el);
    });
  }
}
