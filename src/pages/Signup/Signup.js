import React, { useState } from "react";
import "./Signup.css";
import Logo from "../../components/icons/Logo";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function Signup() {

  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const history = useHistory();

  async function register() {

    axios.post('https://anyone.azurewebsites.net/api/Account/register', {
      firstName: name,
      lastName: lastName,
      email: email,
      userName: userName,
      password: password,
      confirmPassword: confirmPassword
    })
      .then(function (response) {
        console.log(response);
        if (response["data"]['succeeded']) {
          const link1 = response["data"]['message']
          var regex = /(https?:\/\/[^ ]*)/;
          var url = link1.match(regex)[1];
          var url2="https://anyone.azurewebsites.net"+url.substr(21,url.length)
          sessionStorage.setItem("link",url2)
          history.push("/Verify")
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error("Check the entered information. Special character, numbers, and upper and lower case letters are required in the password.");
      });
  };

  return (
    <div className="signUpContainer">
      <div className="card">
        <div className="signuplogo">
          <Logo width={26} height={53} fill="white" />
        </div>
        <div className="signupHeader">
          <span>Create your account</span>
        </div>
        <div className="inputDesign">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="name" />
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" placeholder="LastName" />
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email" />
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="form-control" placeholder="userName" />
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" />
          <input type="text" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form-control" placeholder="confirmPassword" />
        </div>

        <div className="acceptTerm">
          <span>
            When you register, you agree to the
            <span className="acceptTermBlue"> terms of service</span> and the
            <span className="acceptTermBlue"> Privacy Policy</span>, including
            the use of <span className="acceptTermBlue">cookies</span>. When you
            set your
            <span className="acceptTermBlue"> privacy options </span>
            accordingly, others can find you by email or phone number.
          </span>
        </div>
        <button onClick={register} className="signupBtn" >Sign Up</button>
        <ToastContainer position="bottom-center" />
      </div>
    </div>
  );
}

export default Signup;
