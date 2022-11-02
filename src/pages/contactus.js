import React from "react";
import { Link } from "react-router-dom";
// import { Navigation } from "./navigation";
import logo from "./logo.jpg";
import { Navigation } from "./navigation";

export function Contact() {
    return (
        <>
            <div className="container">
                <div className="uni_logo">
                    <img src={logo} alt="uniLogo" height="80px" style={{ margin: 10 }} />
                </div>

                <Navigation />
            </div>

            <div className="contact-container-primary">
            <div className="contact-container">
                <div className="contact">
                    <form>
                        <label for="fname" className="contactLabels">
                            Name
                        </label>
                        <input type="text" id="cfname" name="cfirstname" placeholder="Name" />

                        <label for="email" className="contactLabels">
                            Email
                        </label>
                        <input
                            type="email"
                            id="cemail"
                            name="cemail"
                            placeholder="someone@example.com"
                        />

                        <label for="Msg" className="contactLabels">
                            Feedback
                        </label>
                        <textarea
                            id="feedback"
                            name="feedback"
                            placeholder="Type your feedback here...."
                            className="feedback"
                        ></textarea>
                        <div className="button-container">
                        <div className="centerbutton">
                            <button className="submitButton" type="submit">
                                Submit
                            </button>
                        </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>


            <div className="contact-footer">
                <div className="cunilogo">
                    <img
                        src={logo}
                        alt="uniLogo"
                        height="80px"
                        style={{ margin: 10 }}
                        className="cunilogo"
                    />
                </div>
                <div className="cfooter">
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
            </div>
        </>
    );
}
