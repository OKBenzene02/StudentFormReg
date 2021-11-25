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

export function Home() {


    return (
        <div className="Main_page">
            <div className="container">
                <div className="uni_logo">

                    <img src={logo} alt="uniLogo" height="80px" style={{ margin: 10 }} />
                </div>
                <nav className="navigation">
                    <ul>
                        <li><a href="/" className="navtags">Home</a></li>
                        <li><a href="/" className="navtags">About</a></li>
                        <li><div className="dropdown"><span>Registration</span>
                            <div class="dropdown-content">
                                <Link to='/main' className="dropdowntag">Ug Registration</Link>
                                <a href="/" className="dropdowntag">Pg Registration</a>
                                <a href="/" className="dropdowntag">NRI Registration</a>
                                <a href="/" className="dropdowntag">PH.D Registration</a>
                            </div></div></li>
                        <li><a href="/" className="navtags">Contact</a></li>
                    </ul>
                    <div className="search">
                        <input type="text" placeholder="Search" />
                    </div>
                </nav>
            </div>
            <div className="hmain">
                <div className="announce" id="announcement">
                    <marquee direction="left" scrollamount="10">Announcement Announcement Announcement Announcement Announcement Announcement Announcement Announcement</marquee>
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

            <div className="aboout_main">

                <h2 className="headingTwo">About: </h2>
                <p className="para">Since 1984, B.S. Abdur Rahman Crescent Institute of Science and Technology is a renowned Quality Leadership Institution located at the greenest spot of Chennai near Tambaram. Through our long history of 37 years of excellence, the Institution has offered access to a wide range of academic opportunities. With 55 programmes, grouped under 12 different Schools, 30 Undergraduate programmes, 25 Postgraduate programmes, and Ph.D. (in all the departments), this institution is a rising stalwart in higher education with promising Quality, Security and Placement. We welcome students from all countries and our educational programmes are designed to equip the learners with virtual knowledge that helps them to achieve what they want to be and go where they want to go in the ladder of success.</p>

                <p className="para">This institution is an intellectual destination that challenges conventional thinking and stimulates passion to redefine learning. The distinctive teaching at this institution makes the students and scholars to compete with themselves and each other. Apart from providing top-notch education, our green campus and well-planned student life are solely dedicated to making students utilize the ambiance to the fullest. Through our wide array of educational programmes and unique clubs to foster student development activities, we provide opportunities and experiences that build community, help you grow personally and professionally, and create a place that you can call home now and throughout your life.</p>
            </div>

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