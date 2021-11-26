import React from "react";
import { Link } from "react-router-dom";
import UniVideo from './UniVideo.mp4'
import UniVideo2 from './uniVideo2.mp4'
import logo from './logo.jpg';
import Clgone from './clg1.jpg';
import Clgtwo from './clg2.jpg';
import { Cards } from "./cards";
import Research from './Research.jpg';
import Incu from './incubation.jpg';
import { Awards } from "./awards";
import { About } from "./aboutpg";
import { Navigation } from "./navigation";

export function Home() {


    return (
        <div className="Main_page">
            <div className="container">
                <div className="uni_logo">

                    <img src={logo} alt="uniLogo" height="80px" style={{ margin: 10 }} />
                </div>
                
                <Navigation/>

            </div>
            <div className="hmain">
                <div className="announce" id="announcement">
                    <marquee direction="left" scrollamount="5">Announcement Announcement Announcement Announcement Announcement Announcement Announcement Announcement</marquee>
                </div>

                <div className="note">
                    <p>
                        NOTE:
                        Registration's for PG, NRI, PG.D coming soon.....
                    </p>
                </div>

                <Awards />

                <div className="video">

                    <video src={UniVideo} alt="university_logo" muted loop autoPlay />
                </div>
            </div>

            <div className="Rimg">
                <h1 className="rimgtext">Research</h1>
                <img src={Research} alt="research" />
            </div>

            <Cards />


            <div>
                <div className="one_image">
                    <img src={Clgone} alt='college 1' height="230px" />

                </div>
                <div className="two_image">
                    <img src={Clgtwo} alt='college 2' height="230px" />
                </div>
            </div>


            <div className="Cimg">
                <h1 className="cimgtext">Crescent Innovation & Incubation Council</h1>
                <img src={Incu} alt="research" />
            </div>

            <About />
            

            <div className="video">
                <video src={UniVideo2} alt="university_logo" muted loop autoPlay />
            </div>


            <div className="footContainer">
                <div className='footer'>
                    <ul>
                        <li classname="footertags"><a href="/" >Crescent education pvt.ltd</a></li>
                        <li classname="footertags"><a href="/" >CopyRight &copy;</a></li>
                        <li classname="footertags"><a href="/" >crescent@gmail.com</a></li>
                    </ul>
                    <ul>
                        <li className="footertags"><a href="/" >Facebook</a></li>
                        <li classname="footertags"><a href="/" >Instagram</a></li>
                        <li classname="footertags"><a href="/" >Twitter</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}