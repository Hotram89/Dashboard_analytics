import React from "react";
import "./UserInfo.css";
import Dto from "data/Dto";
import ApiProvider from "data/ApiProvider";

const profilDto = new Dto().profilDto();
const dataBrute = new ApiProvider().getProfilData();

const UserInfo = (url) => {
  let idFilter = dataBrute.filter((el) => {
    if (url.id == el.id) {
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
