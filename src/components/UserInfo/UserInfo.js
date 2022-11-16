import React from "react";
import "./UserInfo.css";

const UserInfo = (dto) => {
  console.log(dto.dto);
  const name = dto.dto.userName;

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
