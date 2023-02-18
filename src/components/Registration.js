import React, { useState } from 'react';

const Register = (props) => {
    const [userData, setUserData] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        repassword:""
    })

    const changeData = (e) => {
        e.preventDefault();
        var name  = e.target.name;
        setUserData({
            ...userData,
            [name]: e.target.value
        })
    }

    const submitData = (e) => {
        e.preventDefault();
        const regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        const name = /^[A-Za-z]+$/;
        if(userData.password !== userData.repassword) {
            alert("wrong password :- Re enter password");
        }else if(userData.password.length < 6 && userData.password.length > 16){
            alert("min 6");
        }else if(!regularExpression.test(userData.password)) {
            alert("password should contain atleast one number and one special character");
        }else if(!name.test(userData.fname)){
            alert("Only letters in name ")
        }else{
            localStorage.setItem("userData", JSON.stringify(userData));
            props.setIsSubmit(true);
        }
        

        console.log(localStorage.getItem("userData"));
    }
    return (
        <form onSubmit={submitData}>
            <div className="form-group">
                <label for="firstName">First Name</label>
                <input type="fname" name="fname" value={userData.fname} onChange={(e)=>changeData(e)}  className="form-control" id="fname" placeholder="Name"/>
            </div>
            <div className="form-group">
                <label for="lastName">Last Name</label>
                <input type="lname" name="lname" value={userData.lname} onChange={(e)=>changeData(e)}  className="form-control" id="lname" placeholder="Last Name"/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name="email" value={userData.email} onChange={(e)=>changeData(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" name="password" value={userData.password} onChange={(e)=>changeData(e)}  className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Re type password</label>
                <input type="password" name="repassword" value={userData.repassword} onChange={(e)=>changeData(e)}  className="form-control" id="exampleInputPassword1" placeholder="Retype Password"/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={submitData}>Submit</button>
        </form>
    )
}
export default Register;