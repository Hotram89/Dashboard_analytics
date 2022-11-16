import UserInfo from "components/UserInfo/UserInfo";
import FirstBarChart from "components/charts/SimpleBarChart/SimpleBarChart";
import RedLineChart from "components/charts/LineChart/RedLineChart";
import SimpleRadarChart from "components/charts/SimpleRadarChart/SimpleRadarChart";
import ScoreChart from "components/charts/ScoreChart/ScoreChart";
import AsideNav from "components/partial/AsideNav/AsideNav";
import { useEffect, useState } from "react";
import AllCardsInfo from "components/AllCardsInfo/AllCardsInfo";
import ApiProviderFactory from "data/ApiProviderFactory";

const Home = () => {
  const [userSelect, setUserSelect] = useState();

  let urlId = window.location.pathname.replace("/", "");
  let userId = urlId == "" ? 12 : urlId;

  const ApiProvider = new ApiProviderFactory().get(true);
  const [userName, setUserName] = useState();
  //   Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    ApiProvider.getProfilData(userId).then((res) => {
      setUserName(res.userName[0].userInfos.firstName);
    });
  }, []);

  const SimpleBarChartDto = ApiProvider.getActivity(userId);
  const ScoreChartDto = ApiProvider.getUserMainData(userId);
  const RedLineDto = ApiProvider.getSessionsData(userId);
  const RadarDto = ApiProvider.getRadarData(userId);
  const UserDto = ApiProvider.getProfilData(userId);
  let test = ApiProvider.getProfilData(userId).then((res) => {
    return res;
  });
  const AllCardsDto = ApiProvider.getCardData(userId);

  return (
    <main className="main">
      <AsideNav />
      <section className="dashboard">
        <UserInfo dto={{ userName }} />
        <div className="dataVisualisation">
          <div className="charts">
            <section className="bigOne">
              <h3 className="textChart">Activité quotidienne</h3>
              <FirstBarChart dto={SimpleBarChartDto} />
            </section>
            <section className="littles">
              <div className="littleLine">
                <RedLineChart dto={RedLineDto} />
              </div>

              <div className="littleRadar">
                <SimpleRadarChart dto={RadarDto} />
              </div>
              <div className="lillteRadial">
                <ScoreChart dto={ScoreChartDto} />
              </div>
            </section>
          </div>

          <AllCardsInfo dto={AllCardsDto} />
        </div>
      </section>
    </main>
  );
};

export default Home;
