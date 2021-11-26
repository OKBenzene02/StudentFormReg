import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "./navigation";
import logo from './logo.jpg';


export function Contact() {
    return (
        <>
            <div>
            <Link to="/"><p className="cbacktohome"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
            </svg> Back to home page</p></Link><h1 className="ctext">Contact Us</h1>
            </div>
            <div className="contact">
                <form>
                    <label for="fname" className="contactLabels">Name</label>
                    <input type="text" id="cfname" name="cfirstname" placeholder="Name" />

                    <label for="email" className="contactLabels">Email</label>
                    <input type="email" id="cemail" name="cemail" placeholder="someone@example.com" />

                    <label for="Msg" className="contactLabels">Feedback</label>
                    <textarea id="feedback" name="feedback" placeholder="Type your feedback here...." className="feedback"></textarea>
                    <div className="centerbutton">
                        <button className="register" type="submit">Submit</button>
                    </div>

                </form>
            </div>
            <div className="cunilogo">
            <img src={logo} alt="uniLogo" height="80px" style={{ margin: 10 }} className="cunilogo"/>
            </div>
            <div className='cfooter'>
                    <ul>
                        <li classname="cfootertags">Crescent education pvt.ltd</li>
                        <li classname="cfootertags">CopyRight &copy;</li>
                        <li classname="cfootertags">crescent@gmail.com</li>
                    </ul>
                    <ul>
                        <li className="cfootertags">Facebook</li>
                        <li classname="cfootertags">Instagram</li>
                        <li classname="cfootertags">Twitter</li>
                    </ul>
                </div>
        </>
    )
};