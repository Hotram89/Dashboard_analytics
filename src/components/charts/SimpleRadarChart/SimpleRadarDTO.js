class SimpleRadarDTO {
  constructor(data) {
    this.radarData = [];
    //tableau de traduction français
    const subjects = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ];
    let sportsTitle = data.kind;
    let value = data.data;
    Object.values(sportsTitle).map((el, index) =>
      this.radarData.push({
        subject: subjects[index],
        A: value[index].value,
        fullMark: 200,
      })
    );
  }
}

export default SimpleRadarDTO;
