import React from "react";
import Dean from './Dean.jpg';
import Director from './Director.jpg'


export function Cards() {

    return (
        <>
            <div className="card">
                <img src={Dean} alt='Dean' className="dean" width="100%"/>
                <div className="cardinfo">
                    <h2 className="cardinfo2">Dean HajiSheik</h2>
                    <p>The main objective of Dean, Academic Office is planning and development of all academic programmes of the Institute such that it is dynamic, up to date, in line with current scientific developments and industrial relevance; and cater the needs of stakeholders.</p>
                </div>

            </div>

            <div className="card">
                <img src={Director} alt='Director' className="dean" width="75%"/>
                <div className="cardinfo">
                    <h2 className="cardinfo2">Director Dr. Abudhahir .A</h2>
                    <p>As B. S. Abdur Rahman Crescent Institute of Science & Technology “aspires to be a leader” in Education, Training and Research in Engineering, Science, Technology and Management and to play a vital role in the socio-economic progress of the country.</p>
                </div>

            </div>


        </>
    );
}