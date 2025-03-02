import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" components={Books} />
          <Route exact path="/books" components={Books} />
          <Route exact path="/books/:id" components={Detail} />
          <Route components={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

//  import React, { Component } from "react";
//   import logo from "./logo.svg";
//   import "./App.css";

//  class App extends Component {
//     render() {
//       return (
//         <div className="App">
//           <div className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <h2>Welcome to React</h2>
//           </div>
//           <p className="App-intro">
//             To get started, edit <code>src/App.js</code> and save to reload.
//           </p>
//         </div>
//       );
//     }
//   }

export default App;
