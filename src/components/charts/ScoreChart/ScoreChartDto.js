class ScoreChartDto {
  constructor(data) {
    this.radialData = [];
    this.radialData.push({
      name: data * 100,
      uv: data * 100,
      fill: "#FF0000",
    });
  }
}
export default ScoreChartDto;
