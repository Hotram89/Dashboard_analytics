import UserInfo from "components/UserInfo/UserInfo";
import FirstBarChart from "components/charts/SimpleBarChart/SimpleBarChart";
import RedLineChart from "components/charts/LineChart/RedLineChart";
import SimpleRadarChart from "components/charts/SimpleRadarChart/SimpleRadarChart";
import ScoreChart from "components/charts/ScoreChart/ScoreChart";
import AsideNav from "components/partial/AsideNav/AsideNav";
import { useEffect, useState } from "react";
import AllCardsInfo from "components/AllCardsInfo/AllCardsInfo";
import ApiProviderFactory from "data/ApiProviderFactory";
import Loading from "components/Loader/Loading";
import "./Button.css";

const Home = () => {
  let urlId = window.location.pathname.replace("/", "");
  let userId = urlId == "" ? 12 : urlId;

  const [click, setClick] = useState(false);

  const [userName, setUserName] = useState(null);
  const [dailyActivity, setDailyActivity] = useState(null);
  const [scoreData, setScoreData] = useState(null);
  const [sessionData, setSession] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [cards, setCards] = useState(null);

  // ApiProvider is a class that allow you to switch between mock and non-mocked datas
  const ApiProvider = new ApiProviderFactory().get(click);

  // useEffect plays a different useState each time you use a componant
  useEffect(() => {
    setTimeout(() => {
      ApiProvider.getProfilData(userId).then((res) => {
        setUserName(res.userName.firstName);
      });
    }, 1000);
  }, [click]);

  useEffect(() => {
    setTimeout(() => {
      ApiProvider.getActivity(userId).then((res) => {
        setDailyActivity(res);
      });
    }, 3000);
  }, [click]);

  useEffect(() => {
    ApiProvider.getUserMainData(userId).then((res) => {
      setScoreData(res);
    });
  }, [click]);

  useEffect(() => {
    ApiProvider.getSessionsData(userId).then((res) => {
      setSession(res);
    }, 3000);
  }, [click]);

  useEffect(() => {
    ApiProvider.getRadarData(userId).then((res) => {
      setPerformance(res);
    });
  }, [click]);

  useEffect(() => {
    ApiProvider.getCardData(userId).then((res) => {
      setCards(res);
    });
  }, [click]);

  /**
   *
   * toggle a class "clic" on a element
   */
  function handleClick() {
    click ? setClick(false) : setClick(true);
  }

  return (
    <main className="main">
      <AsideNav />
      <div className="btnContainer">
        {click ? (
          <li className="button clic" onClick={() => handleClick()}>
            <span className="handle"></span>
          </li>
        ) : (
          <li className="button " onClick={() => handleClick()}>
            <span className="handle"></span>
          </li>
        )}
        <li>ON / OFF</li>
        <li className="mock">Mocked data</li>
      </div>
      <section className="dashboard">
        {userName ? <UserInfo dto={{ userName }} /> : <Loading />}
        <div className="dataVisualisation">
          <div className="charts">
            <section className="bigOne">
              <h3 className="textChart">Activité quotidienne</h3>
              {dailyActivity ? (
                <FirstBarChart dto={{ dailyActivity }} />
              ) : (
                <Loading />
              )}
            </section>
            <section className="littles">
              <div className="littleLine">
                {sessionData ? (
                  <RedLineChart dto={{ sessionData }} />
                ) : (
                  <Loading />
                )}
              </div>

              <div className="littleRadar">
                {performance ? (
                  <SimpleRadarChart dto={{ performance }} />
                ) : (
                  <Loading />
                )}
              </div>
              <div className="lillteRadial">
                {scoreData ? <ScoreChart dto={{ scoreData }} /> : <Loading />}
              </div>
            </section>
          </div>
          {cards ? <AllCardsInfo dto={{ cards }} /> : <Loading />}
        </div>
      </section>
    </main>
  );
};

export default Home;
