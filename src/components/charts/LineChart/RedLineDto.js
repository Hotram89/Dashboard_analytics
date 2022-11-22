/**
 * {
 * sessions: [
 *	{
 *		name: "L",   X axis name
 *		pv: 1,       Y axis value
 *	 },
 *	...
 *  ]
 * }
 */
class RedLineDto {
  constructor(data) {
    /*data from the good user*/

    let newData = data.sessions;
    this.session = [];
    let days = ["L", "M", "M", "J", "V", "S", "D"];

    newData.map((session, index) =>
      this.session.push({
        name: days[index],
        pv: session.sessionLength,
      })
    );
  }
}
export default RedLineDto;
