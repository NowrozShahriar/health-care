import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./pages/home/Header/Header";
import Home from "./pages/home/Home/Home";
import Login from "./pages/login/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./pages/home/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
