import React from "react";
// import { Link } from "react-router-dom";
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
                    <div>Announcement Announcement Announcement Announcement Announcement Announcement Announcement
                    </div>
                </div>

                <div className="note">
                    <p>
                        NOTE:
                        Registration's for PG, NRI, PG.D coming soon.....
                    </p>
                </div>

                <Awards />

                <div className="video1">
                    <h1>University Video</h1>
                    <div className="videoDiv">
                    <video src={UniVideo} alt="university_logo" muted loop autoPlay />
                    </div>
                </div>
            </div>

            <div className="Rimg">
                <div>
                <h1 className="rimgtext">Research</h1>
                </div>
                <div>
                <img src={Research} alt="research" />
                </div>
            </div>

            <Cards />


            <div className="collegeImages">
                <div className="clgimg">
                    <img src={Clgone} alt='college 1' height="230px" />

                </div>
                <div className="clgimg">
                    <img src={Clgtwo} alt='college 2' height="230px" />
                </div>
            </div>


            <div className="Cimg">
                <h1 className="cimgtext">Crescent Innovation & Incubation Council</h1>
                <img src={Incu} alt="research" />
            </div>

            <About />
            

            <div className="video2">
            <h1>University Video</h1>
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