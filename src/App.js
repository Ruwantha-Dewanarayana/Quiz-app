import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from "./components/Home";
import QuizIntructions from "./components/quiz/QuizIntructions";
import Play from "./components/quiz/Play";
import QuizSummary from "./components/quiz/QuizSummary";

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" exact Component={Home}></Route>
        <Route  path="/play/instructions" exact Component={QuizIntructions}></Route> 
        <Route  path="/play/Quiz" exact Component={Play}></Route> 
        <Route  path="/play/quizSummary" exact Component={QuizSummary}></Route> 
      </Routes>
    </Router>
  );
}

export default App;
