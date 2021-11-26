import React from "react";
import { useState } from "react";
import { Header } from "./registration";

export function Main() {
    
    const [userinputs, setUserInputs] = useState({
        firstname:"",
        lastname:"",
        fathername:"",
        dob:"",
        phnnumber:"",
        email:"",
        address:"",
        highestschooling:"",
        degreeprogram:""
    });
    const [updateRecords, setUpdateRecords] = useState([]);

    const onUserInteract = (e) =>{
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)

        setUserInputs({...userinputs, [name] : value})
    };
    
    const SubmissionHandle = (e) => {
        e.preventDefault();

        if (!userinputs.firstname || !userinputs.lastname || !userinputs.fathername || !userinputs.dob || !userinputs.phnnumber || !userinputs.email || !userinputs.address || !userinputs.highestschooling || !userinputs.degreeprogram) { 
            alert("Please add your details.")
            return
        };
        
        const newObject = {...userinputs, id: Math.floor(Math.random() * 1000) + 1}
        setUpdateRecords([...updateRecords, newObject]);
        console.log(newObject)

        fetch('https://apex.oracle.com/pls/apex/okbenzene02restservices/studentreg/', {
    method: 'POST', 
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newObject)
})
.then(res => {
    return res.json()
})
.then(data => console.log(data))
.catch(error => console.log('Error'))

        if(e){
            alert('User added successfully...')
        }

        setUserInputs({
            firstname:"",
        lastname:"",
        fathername:"",
        dob:"",
        phnnumber:"",
        email:"",
        address:"",
        highestschooling:"",
        degreeprogram:""
        });
        
    };

    // https://apex.oracle.com/pls/apex/okbenzene02restservices/studentreg/
    


    return (
    <form  onSubmit={SubmissionHandle} >
         
        <Header />
        
        <div className="main">
            <label for="fisrtname">
                FIRST NAME: <input type="text" value={userinputs.firstname} placeholder="First Name" id="firstname" name="firstname" onChange={onUserInteract}/>
            </label>
            <hr />
            <label for="lastname">
                LAST NAME: <input type="text" value={userinputs.lastname} placeholder="Last Name" id="lastname" name="lastname" onChange={onUserInteract}/>
            </label>
            <hr />
            <label for="fathername">
                FATHER NAME: <input type="text" value={userinputs.fathername}  placeholder="Father Name"  id="fathername" name="fathername" onChange={onUserInteract}/>
            </label>
            <hr />
            <label for="dob">
                DATE OF BIRTH: <input type="date" id="dob" name="dob" value={userinputs.dob} onChange={onUserInteract}/>
            </label>
            <hr />
            <label for="phnnumber">
                PHONE NUMBER: <input type="text" value={userinputs.phnnumber} placeholder="Phone Number" id="phnnumber" name="phnnumber" onChange={onUserInteract}/>
            </label>
            <hr />
            <label for="email">
                EMAIL-ID: <input type="email" value={userinputs.email} placeholder="someone@example.com" id="email" name="email" onChange={onUserInteract}/>
            </label>
            <hr />
            <label for="address">
                ADDRESS: <input type="text" value={userinputs.address} placeholder="Address" id="address" name="address" onChange={onUserInteract}/>
            </label>
            <hr />
            <label for="highestschooling">
                HIGHEST SCHOOLING: </label>
            <select name="schooling" id="highestschooling" name="highestschooling" value={userinputs.highestschooling} onChange={onUserInteract}>
                <option value="">---Schooling---</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
            </select>
            <hr />
            <label for="degreeprogram">
                DEGREE PROGRAM:
            </label>
            <select name="programs" id="degreeprogram" name="degreeprogram" value={userinputs.degreeprogram} onChange={onUserInteract}>
                <option value="">---B.tech/ B.Sc./ BBA---</option>
                <option value="Civil engineering">Civil engineering</option>
                <option value="Mech engineering">Mech engineering</option>
                <option value="Automobile engineering">Automobile engineering</option>
                <option value="Computer science">Computer science</option>
                <option value="Electronics & Communication Engineering">Electronics & Communication Engineering</option>
                <option value="Financial Services">Financial Services</option>
                <option value="Biotechnology">Biotechnology</option>
                <option value="Computer Applications">Computer Applications</option>
            </select>
            <hr />
        </div>
        <div className="centerbutton">
            <button className="register" type="submit">Register</button>
        </div>
    </form>
    );
}