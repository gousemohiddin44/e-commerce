import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


function App() {


  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />    
          <Route path="/about" component={About} /> 
          <Route path="/contact" component={Contact} />
          <Route path='/product/:id' component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
