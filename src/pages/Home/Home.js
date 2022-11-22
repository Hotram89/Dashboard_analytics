import UserInfo from "components/UserInfo/UserInfo";
import FirstBarChart from "components/charts/SimpleBarChart/SimpleBarChart";
import RedLineChart from "components/charts/LineChart/RedLineChart";
import SimpleRadarChart from "components/charts/SimpleRadarChart/SimpleRadarChart";
import ScoreChart from "components/charts/ScoreChart/ScoreChart";
import AsideNav from "components/partial/AsideNav/AsideNav";
import { useEffect, useState } from "react";
import AllCardsInfo from "components/AllCardsInfo/AllCardsInfo";
import ApiProviderFactory from "data/ApiProviderFactory";
import UserInfoDto from "components/UserInfo/UserInfoDto";

const Home = () => {
  let urlId = window.location.pathname.replace("/", "");
  let userId = urlId == "" ? 12 : urlId;

  const ApiProvider = new ApiProviderFactory().get(false);
  const [userName, setUserName] = useState();
  const [dailyActivity, setDailyActivity] = useState();
  const [scoreData, setScoreData] = useState();
  const [sessionData, setSession] = useState();
  const [performance, setPerformance] = useState();
  //   Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    ApiProvider.getProfilData(userId).then((res) => {
      setUserName(res.userName.firstName);
    });
  }, []);

  useEffect(() => {
    ApiProvider.getActivity(userId).then((res) => {
      setDailyActivity(res);
    });
  }, []);

  useEffect(() => {
    ApiProvider.getUserMainData(userId).then((res) => {
      setScoreData(res);
    });
  }, []);

  useEffect(() => {
    ApiProvider.getSessionsData(userId).then((res) => {
      setSession(res);
    });
  }, []);

  useEffect(() => {
    ApiProvider.getRadarData(userId).then((res) => {
      setPerformance(res);
    });
  }, []);
  // const UserDto = ApiProvider.getProfilData(userId);
  //   let test = ApiProvider.getProfilData(userId).then((res) => {
  //     return res;
  //   });
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
              <FirstBarChart dto={{ dailyActivity }} />
            </section>
            <section className="littles">
              <div className="littleLine">
                <RedLineChart dto={{ sessionData }} />
              </div>

              <div className="littleRadar">
                <SimpleRadarChart dto={{ performance }} />
              </div>
              <div className="lillteRadial"></div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

/***
 *                <ScoreChart dto={{ scoreData }} />

 * <AllCardsInfo dto={AllCardsDto} />
 */
