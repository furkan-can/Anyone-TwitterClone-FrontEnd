import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Logo from "../../components/icons/Logo";
import "./Login.css";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();
  


  async function loginFunc() {

    axios.post('https://anyone.azurewebsites.net/api/Account/authenticate', {
      email: email,
      password: password
    })
      .then(function (response) {
      
        console.log(response);
        console.log(response["data"]['succeeded'])
        if(response["data"]['succeeded']){
          sessionStorage.setItem("email",response["data"]['data']['email'])
          sessionStorage.setItem("id",response["data"]['data']['id'])
          sessionStorage.setItem("intId",response["data"]['data']['intId'])
          sessionStorage.setItem("jwToken",response["data"]['data']['jwToken'])
          sessionStorage.setItem("lastName",response["data"]['data']['lastName'])
          sessionStorage.setItem("firstName",response["data"]['data']['firstName'])
          sessionStorage.setItem("username",response["data"]['data']['userName'])

          
          history.push({
            pathname:'/Home',
          });
        }
      })
      .catch(function (error) {
        console.log(error);
        toast.error("E-mail or Password wrong.");
      });
  };

return (
  <div className="container">
    <div className="panel">
      <div className="panelHeader">
        <Logo width={39} fill="white" />
        <span className="panelHeaderText">Login to Anyone</span>
      </div>
      <div className="inputs inputdesign">

        <input type='text' placeholder='email' onChange={(e) => setemail(e.target.value)} />
        <input type='password' placeholder='password' onChange={(e) => setpassword(e.target.value)} />
      </div>

      <button onClick={loginFunc} className="loginBtn">Login</button>
      <ToastContainer position="bottom-center" />
      <div className="loginLinks">
        <a href="/">
          <span className="link">Forgot password</span>
        </a>
        <span className="point">.</span>
        <a href="/signup">
          <span className="link">Sign up on Anyone</span>
        </a>
      </div>
    </div>
  </div>
);
}

export default Login;
