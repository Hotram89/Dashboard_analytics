import FoodCart from "components/FoodCart/FoodCart";
import UserInfo from "components/UserInfo/UserInfo";
import FirstBarChart from "components/charts/SimpleBarChart/SimpleBarChart";
import RedLineChart from "components/charts/LineChart/RedLineChart";
import SimpleRadarChart from "components/charts/SimpleRadarChart/SimpleRadarChart";
import ScoreChart from "components/charts/ScoreChart/ScoreChart";
import AsideNav from "components/partial/AsideNav/AsideNav";
import ApiProvider from "data/ApiProvider";

const Home = () => {
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

          <FoodCart userId={userId} />
        </div>
      </section>
    </main>
  );
};

export default Home;