class RedLineDto {
  constructor(data) {
    console.log(data);
    this.session = [];
    let days = ["L", "M", "M", "J", "V", "S", "D"];

    data.map((session, index) =>
      this.session.push({
        name: days[index],
        pv: session.sessions,
      })
    );
    console.log(data);
    console.log(this.session);
  }
}
export default RedLineDto;
