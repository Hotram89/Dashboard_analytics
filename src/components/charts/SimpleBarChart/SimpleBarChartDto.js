class SimpleBarChartDto {
  constructor(data) {
    this.dataBars = [];
    data.map((el, index) => {
      this.dataBars.push({
        name: index + 1,
        calories: el.calories,
        poids: el.kilogram,
      });
    });
  }
}

export default SimpleBarChartDto;
