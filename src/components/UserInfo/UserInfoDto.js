class UserInfoDto {
  constructor(data) {
    this.userName = "";
    this.userName = data[0].userInfos.firstName;
  }
}

export default UserInfoDto;
