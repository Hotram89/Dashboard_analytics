import "./App.css";
import MainNav from "components/partial/MainNav/MainNav";
import AsideNav from "components/partial/AsideNav/AsideNav";
import FirstBarChart from "components/SimpleBarChart/SimpleBarChart";
import UserInfo from "components/UserInfo/UserInfo";
import { calories } from "data/dataMock";
import FoodCart from "components/FoodCart/FoodCart";
import Dto from "data/Dto";
import ApiProvider from "./data/ApiProvider";

function App() {
  const test = new Dto();
  console.log(test);

  return (
    <div className="App">
      <MainNav />
      <main className="main">
        <AsideNav />
        <section className="dashboard">
          <UserInfo />
          <div className="dataVisualisation">
            <div className="charts">
              <FirstBarChart />
            </div>

            <ul className="foodList">
              {calories.map((type, index) => (
                <FoodCart key={index} name={type} />
              ))}
            </ul>
          </div>
          bienvenue sur ce site de Sport
        </section>
      </main>
    </div>
  );
}

export default App;
