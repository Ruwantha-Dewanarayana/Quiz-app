// eslint-disable-next-line
import React, {Fragment} from "react";
import { Helmet } from "react-helmet";
// eslint-disable-next-line
import { Link } from "react-router-dom";



const QuizIntructions  =  () =>(
    <Fragment>
        <Helmet><title>Quiz Intructions</title></Helmet>
            <div className="instructions-container">
                <h1>How to Play the Game</h1>
            </div> 
                <p>Ensure you read this guide from start to finish.</p>
            <div className="instruction-list">
                <li>The game has a duratons of 10 minutes and ends as soon as your time elapses.</li>
                <li>Each game consistes of 10 questions.</li>
                <li>Every question contains 4 options.</li>
                <li>Select the option which best answers the question by clicking it.</li>
                <li>Each game has 2 lifelines.</li>
                <li>Feel free to quit the game at any time. In that case your score will be revealed afterwards.</li>
                <li>The timer starts as soon as the game loads.</li>
                <li>Lest's do this if you've got what it takes.</li>

                <div>
                    <span className="left"><Link to="/">No take me back</Link></span>
                    <span className="right"><Link to="/play/Quiz">Okay, Let's do this!!</Link></span>
                </div>
            </div>   
    </Fragment>
    );
    
    

export default QuizIntructions;

