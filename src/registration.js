import React from "react";
import logo from './logo.jpg';
// import Arrow from './arrow.png'
import { Link } from 'react-router-dom'


export function Header(){
    return (
        <div className='header'>
            <img src={logo} alt="logo" height="100px" />
            <h1 className="student_text">Student Enrollment</h1>
            <div className="backtohome">
               {/* <Link to="/"><p className="backtohome"><img src={Arrow} alt="back_logo" width="13px"/> Back to home page</p></Link> */}
               <Link to="/"><p className="backtohome"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg> Back to home page</p></Link>
            </div>
            <div className="line"></div>
        </div>
    );
}

