import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NaviBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {  About, Users } from "./pages";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Router>
        <NaviBar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={Users} path="/users" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
