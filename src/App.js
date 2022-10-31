import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Common/Footer/Footer";
import Home from "./components/Home/Home/Home";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import Foods from "./components/Foods/Foods";
import Breakfast from "./components/Foods/Breakfast";
import Launch from "./components/Foods/Launch";
import Dinner from "./components/Foods/Dinner";
import About from "./components/About/About";
import Navigation from "./components/Common/Navigation/Navigation";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="">
      <BrowserRouter>
      {/* <Header/> */}
      <Navigation/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/services" element={<Services/>} />
          {/* -------Nested routes=--------- */}
          <Route path="/foods" element={<Foods/>}> 
            <Route path="breakfast" element={<Breakfast/>} />
            <Route path="launch" element={<Launch/>} />
            <Route path="dinner" element={<Dinner/>} />
          </Route>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
