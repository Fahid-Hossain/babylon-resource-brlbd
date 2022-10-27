import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          {/* <Route path=":teamId" element={<Team />} /> */}
          {/* <Route path="new" element={<NewTeamForm />} /> */}
          {/* <Route index element={<LeagueStandings />} /> */}
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
