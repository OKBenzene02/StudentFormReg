import React from "react"
import { Main } from './main'
import './style.css'
import { Home } from './pages/Home'
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Contact } from "./pages/contactus";
// import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/main' component={Main} />
        <Route path='/contactus' component={Contact} />
      </Router>

      {/* <Button /> */}
    </div>
  );
}

export default App;
