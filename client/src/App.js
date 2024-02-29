import {Route, useLocation} from "react-router-dom";

import Landing from "./views/landing/Landing";
import Home from "./views/home/Home";
import Detail from "./views/detail/Detail";
import Create from "./views/create/Create";
import About from "./views/about/About";
import Navbar from "./components/navbar/Navbar";



//import './App.css';

function App() {

   const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar/>}
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route path="/detail/:id" component={Detail}/>
      <Route path="/create" component={Create}/>
      <Route path="/about" component={About}/>
    </div>
  );
}

export default App;
