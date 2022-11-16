import UserInfo from "components/UserInfo/UserInfo";
import FirstBarChart from "components/charts/SimpleBarChart/SimpleBarChart";
import RedLineChart from "components/charts/LineChart/RedLineChart";
import SimpleRadarChart from "components/charts/SimpleRadarChart/SimpleRadarChart";
import ScoreChart from "components/charts/ScoreChart/ScoreChart";
import AsideNav from "components/partial/AsideNav/AsideNav";
import { useState } from "react";
import AllCardsInfo from "components/AllCardsInfo/AllCardsInfo";
import ApiProviderMock from "data/ApiProviderMock"; // RENOMMER EN ApiProviderMock
import ApiProvider from "data/ApiProvider";

const Home = () => {
  const [userSelect, setUserSelect] = useState();

  let urlId = window.location.pathname.replace("/", "");
  let userId = urlId == "" ? 12 : urlId;

  const SimpleBarChartDto = new ApiProviderMock().getActivity(userId);
  const ScoreChartDto = new ApiProviderMock().getUserMainData(userId);
  const RedLineDto = new ApiProviderMock().getSessionsData(userId);
  const RadarDto = new ApiProviderMock().getRadarData(userId);
  const UserDto = new ApiProviderMock().getProfilData(userId);
  const UserDto2 = new ApiProvider().getProfilData();

  console.log(UserDto2);
  const AllCardsDto = new ApiProviderMock().getCardData(userId);

  return (
    <main className="main">
      <AsideNav />
      <section className="dashboard">
        <UserInfo dto={UserDto2} />
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
