import React, {Component, Fragment} from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class QuizSummary extends Component{
        constructor(props){
            super(props);
            this.state = {
                score:0,
                numberOfQuestions:0,
                numberOfAnsweredQuestions:0,
                correctAnswers:0,
                wrongAnswers:0,
                hintUsed:0,
                fiftyFiftyUsed:0
            };
        }
        componentDidMount (){
            const {state} = this.props.location;
            this.setState = ({
                score:state.score / state.numberOfQuestions * 100,
                numberOfQuestions: state.numberOfQuestions,
                numberOfAnsweredQuestions:state.numberOfAnsweredQuestions,
                correctAnswers:state.correctAnswers,
                wrongAnswers:state.wrongAnswers,
                hintUsed:state.hintUsed,
                fiftyFiftyUsed:state.fiftyFiftyUsed
            });
        }


    render(){
        const {state} = this.props.location;
        let stats, remark;
        const userScore = this.state.score;

        if (userScore <= 30){
            remark = 'you need to practice!!';
        }else if (userScore > 30 && userScore <= 50){
            remark = 'better luck';
        }else if (userScore <= 70 && userScore > 50){
            remark = 'You can do';
        }else if (userScore >= 71 && userScore <= 84){
            remark = 'You did great';
        }else{
            remark = 'You did super';
        }
        if(state !== undefined){
            stats = (
                <Fragment>
                <div>
                    <span><h1>Quiz Ended!!</h1></span>
                </div>
                <div className="container">
                    <h3>{remark}</h3>
                    <h2>Your Score: {this.state.score.toFixed(0)}</h2>
                    <span className="stat-left">Total number of questions: </span>
                    <span className="stat-right">{this.state.numberOfQuestions}</span><br/>

                    <span className="stat-left">Total number attemped questions: </span>
                    <span className="stat-right">{this.state.numberOfAnsweredQuestions}</span><br/>

                    <span className="stat-left">Total number of correct Answers: </span>
                    <span className="stat-right">{this.state.correctAnswers}</span><br/>

                    <span className="stat-left">Total number of wrong Answers: </span>
                    <span className="stat-right">{this.state.wrongAnswers}</span><br/>

                    <span className="stat-left">Hints used: </span>
                    <span className="stat-right">{this.state.hintUsed}</span><br/>

                    <span className="stat-left">50-50 used: </span>
                    <span className="stat-right">{this.state.fiftyFiftyUsed}</span>
                </div>
                <section>
                    <ul>
                        <li>
                            <Link to="/">Back Home</Link>
                        </li>
                        <li>
                            <Link to="/play/quiz">Play Game</Link>
                        </li>
                    </ul>
                </section>
                </Fragment>
            );
        }else{
            stats = (
            <section>
                <h1>stat is no available</h1>
                <ul>
                    <li>
                        <Link to="/">Back Home</Link>
                    </li>
                    <li>
                        <Link to="/play/quiz">Play Game</Link>
                    </li>
                </ul>
            </section>
            );
        }
        return(
            <Fragment>
                <Helmet><title>Quiz app-Summary</title></Helmet>
                {stats}
            </Fragment>
            
            
        );
    }
}
export default QuizSummary;