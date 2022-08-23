import { USER_MAIN_DATA } from "./dataMock";
import Dto from "./Dto";

export default class ApiProvider {
  constructor() {
    this.data = new Set();
    USER_MAIN_DATA.map((user) => this.data.add(new Dto(user)));

    console.log("coucou");
  }
}
