class SimpleBarChartDto {
  constructor(data) {
    console.log(data);
    this.dataBars = [];
    data.map((el, index) => {
      this.dataBars.push({
        name: index + 1,
        calories: el.calories,
        poids: el.kilogram,
      });
    });
    console.log(this.dataBars);
  }
}

export default SimpleBarChartDto;
