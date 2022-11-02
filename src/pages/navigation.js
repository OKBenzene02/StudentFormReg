import React from "react";
import { Link } from "react-router-dom";

export function Navigation()
{
return(
    <div className="navigation">
                    <ul>
                        <li><Link to="/" className="navtags">Home</Link></li>
                        <li><a href="/#aboutpgs" className="navtags">About</a></li>
                        <li><div className="dropdown"><span>Registration</span>
                            <div class="dropdown-content">
                                <Link to='/main' className="dropdowntag">Ug Registration</Link>
                                <a href="/" className="dropdowntag">Pg Registration</a>
                                <a href="/" className="dropdowntag">NRI Registration</a>
                                <a href="/" className="dropdowntag">PH.D Registration</a>
                            </div></div></li>
                        <li><Link to="/contactus" className="navtags">Contact</Link></li>
                    </ul>
                </div>
)
};