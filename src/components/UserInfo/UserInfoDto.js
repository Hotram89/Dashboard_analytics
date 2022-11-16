class UserInfoDto {
  constructor(data) {
    console.log(data);
    this.userName = "";
    this.userName = data.firstName;
  }
}

export default UserInfoDto;
