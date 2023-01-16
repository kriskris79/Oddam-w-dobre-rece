
import  './scss/main.scss';

import {HashRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
      <HashRouter>


          <Route path="/" element={<Home />} />



      </HashRouter>



  );
}

export default App;
