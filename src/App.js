import Header from "./Components/Header";
import "./style/App.scss";
import "./style/Header.scss";
import "./style/Footer.scss";
import "./style/Home.scss";
import "./style/Contact.scss";
import "./style/mediaquery.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <div className="App">
        <div>
          <Router>
            <Header/>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/services" element={<Services/>}></Route>

              </Routes>
              <Footer/>
          </Router>
        </div>
    </div>
  );
}

export default App;
