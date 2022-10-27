import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Home from "./components/Home/Home/Home";
import Contact from "./components/Contact/Contact";
import HomeAbout from "./components/Home/HomeAbout/HomeAbout";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<HomeAbout/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
