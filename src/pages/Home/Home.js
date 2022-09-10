import FoodCart from "components/FoodCart/FoodCart";
import UserInfo from "components/UserInfo/UserInfo";
import FirstBarChart from "components/charts/SimpleBarChart/SimpleBarChart";
import RedLineChart from "components/charts/LineChart/RedLineChart";
import SimpleRadarChart from "components/charts/SimpleRadarChart/SimpleRadarChart";
import ScoreChart from "components/charts/ScoreChart/ScoreChart";
import AsideNav from "components/partial/AsideNav/AsideNav";
import ApiProvider from "data/ApiProvider";
import { useState } from "react";

const Home = () => {
  const [userSelect, setUserSelect] = useState();
  console.log(userSelect);

  let urlId = window.location.pathname.replace("/", "");
  let userId = urlId == "" ? 12 : urlId;

  return (
    <main className="main">
      <AsideNav />
      <section className="dashboard">
        <UserInfo id={userId} />
        <div className="dataVisualisation">
          <div className="charts">
            <section className="bigOne">
              <h3 className="textChart">Activité quotidienne</h3>
              <FirstBarChart />
            </section>
            <section className="littles">
              <div className="littleLine">
                <RedLineChart />
              </div>

              <div className="littleRadar">
                <SimpleRadarChart />
              </div>
              <div className="lillteRadial">
                <ScoreChart />
              </div>
            </section>
          </div>
          <ul className="foodList">
            <FoodCart value={2} type="Calories" unit="kCal" />
            <FoodCart value={1} type="Proteines" unit="g" />
            <FoodCart value={2} type="Glucides" unit="g" />
            <FoodCart value={0} type="Lipides" unit="g" />
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;
