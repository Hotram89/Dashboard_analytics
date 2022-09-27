import ApiProvider from "./ApiProvider";

export default class Dto {
  constructor(data) {
    this.profilData = new ApiProvider().getProfilData();
  }

  profilDto() {
    let name = "";
    name = this.profilData[0].userInfos.firstName;
    return name;
  }

  scoreProps(data) {
    let initProps = data[0].sessions;
    let newprops = [];
    initProps.map((el, index) => {
      newprops.push({
        name: index + 1,
        calories: el.calories,
        poids: el.kilogram,
      });
    });

    return newprops;
  }

  cardProps(data) {
    let newprops = [];

    data.map((el) => {
      newprops.push({
        id: el.id,
        type: el.keyData,
      });
    });
    return newprops;
  }

  radarProps(data) {
    //initialise le tableau
    let goodData = [];
    //tableau de traduction français
    const subjects = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ];
    //verifie si la donnée existe
    if (data === undefined || data.length < 1) {
      console.log("pas encore de data");
    } else {
      let sportsTitle = data[0].kind;
      let value = data[0].data;
      let result = Object.values(sportsTitle).map((el, index) =>
        goodData.push({
          subject: subjects[index],
          A: value[index].value,
          fullMark: 200,
        })
      );
      return goodData;
    }
  }

  redLineProps(data) {
    let goodData = [];
    let days = ["L", "M", "M", "J", "V", "S", "D"];
    let sessions = data[0].sessions;
    Object.values(sessions).map((el, index) =>
      goodData.push({
        name: days[index],
        pv: el.sessionLength,
      })
    );
    return goodData;
  }
}
