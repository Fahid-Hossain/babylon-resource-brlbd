import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Slider from "./components/Home/Slider/Slider";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/" element={<Home/>} />
          {/* <Route path="new" element={<NewTeamForm />} /> */}
          {/* <Route index element={<LeagueStandings />} /> */}
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
