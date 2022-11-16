import "./App.css";
import MainNav from "components/partial/MainNav/MainNav";
import Home from "pages/Home/Home";
import { mickey } from "data/test";

function App() {
  const tchoupi = mickey;
  console.log(tchoupi);
  return (
    <>
      <MainNav />
      <Home />
    </>
  );
}

export default App;
