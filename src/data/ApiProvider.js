import { USER_MAIN_DATA } from "./dataMock";
import Dto from "./Dto";

export default class ApiProvider {
  constructor() {
    this.data = USER_MAIN_DATA;
    console.log(this.data);

    console.log("coucou");
  }
}
