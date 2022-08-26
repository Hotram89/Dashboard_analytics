import React from "react";
import "./UserInfo.css";
import { USER_MAIN_DATA } from "data/dataMock";

const UserInfo = () => {
  const urlId = 12;
  let idFilter = USER_MAIN_DATA.filter((el) => {
    if (urlId === el.id) {
      return true;
    }
  });

  const name = idFilter[0].userInfos.firstName;

  return (
    <div className="userInfos">
      <h1>
        Bonjour <span>{name}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
  );
};

export default UserInfo;
