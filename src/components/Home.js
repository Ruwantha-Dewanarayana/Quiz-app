import React, { Fragment } from "react";
// eslint-disable-next-line
import { Helmet } from "react-helmet";
import Icon from "@mdi/react";
import {mdiCubeOutline} from '@mdi/js';
import { Link } from "react-router-dom";

const Home  =  () =>(
    <Fragment>
        <Helmet><title>Quiz App Home</title></Helmet>
        <div id="home">
            <section className="section">
                <div style={{textAlign:'center'}}>
                    <span>
                        <Icon className="cube"
                        path={mdiCubeOutline}
                        size={6}
                        />
                    </span>
                </div>
                <h1>Quiz App</h1>
                <div className="play-button-container">
                    <ul>
                        <li><Link className="play-button" to="/play/instructions">Play</Link></li>
                    </ul>
                </div>
                <div className="auth-container">
                    <Link to="/login" className="auth-button" id="login-button">Login</Link>
                    <Link to="/register" className="auth-button" id="signup-button">Sign up</Link>
                </div>
            </section>
        </div>
    </Fragment>
    );
    
    

export default Home;
