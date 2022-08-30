import FoodCart from "components/FoodCart/FoodCart";
import UserInfo from "components/UserInfo/UserInfo";
import FirstBarChart from "components/charts/SimpleBarChart/SimpleBarChart";
import RedLineChart from "components/charts/LineChart/RedLineChart";
import SimpleRadarChart from "components/charts/SimpleRadarChart/SimpleRadarChart";
import ScoreChart from "components/charts/ScoreChart/ScoreChart";

const Home = (id) => {
  console.log(id);

  return (
    <main className="main">
      <section className="dashboard">
        <UserInfo id={id} />
        <div className="dataVisualisation">
          <div className="charts">
            <section className="bigOne">
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

          <FoodCart />
        </div>
        bienvenue sur ce site de Sport
      </section>
    </main>
  );
};

export default Home;
