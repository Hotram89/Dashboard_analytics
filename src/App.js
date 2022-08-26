import "./App.css";
import MainNav from "components/partial/MainNav/MainNav";
import AsideNav from "components/partial/AsideNav/AsideNav";
import Dto from "data/Dto";
import ApiProvider from "./data/ApiProvider";
import { Routes, Route, Router } from "react-router-dom";
import routes from "routing/routes";
import UserInfo from "components/UserInfo/UserInfo";
import Home from "pages/Home/Home";
import { USER_ACTIVITY } from "data/dataMock";

function App() {
  return <Home />;
}

export default App;
