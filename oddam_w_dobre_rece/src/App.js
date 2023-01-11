// import logo from './logo.svg';
import './App.css';
import './scss/main.scss';
import './components/home/Home'
import {HashRouter, Route } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
      <HashRouter>

        <Route exact path="/" component={Home} />



      </HashRouter>
    // <div className="App">
    //   <header className="App-header">
    //     {/*<img src={logo} className="App-logo" alt="logo" />*/}
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
