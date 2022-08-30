import ApiProvider from "./ApiProvider";

export default class Dto {
  constructor() {
    console.log("hola");

    this.profilData = new ApiProvider().getProfilData();
  }

  profilDto() {
    let name = "";
    name = this.profilData[0].userInfos.firstName;
    return name;
  }
}
