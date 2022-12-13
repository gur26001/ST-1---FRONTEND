import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import './Authentication.css';

export default function Authentication(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState(0);
    const [loginOp,setLoginop] = useState("type");
    const [SigninOp,setSigninop] = useState("type");

    const Login= async(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/user/login",{
            email,
            password
        }).then((res)=>setLoginop(res.data+"!")).catch((error) => {
            setLoginop(error.response.data);
        }) 
    }
    const Signin= async(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/user/registerUser",{
            username,
            email,age,
            password
        }).then((res)=>setSigninop(res.data)).catch((error) => {
            setSigninop(error.response.data);
        });

    }
    return(
        <div className="loginsigninform" >
            <form >
                <div className="leftDiv">
                    <h1>
                        LOGIN
                    </h1>
                    <p>
                       <div>
                            <label>Email : </label><input onChange={(e)=>setEmail(e.target.value)} required/>
                       </div>
                       <div>
                            <label>Password : </label><input onChange={(e)=>setPassword(e.target.value) }required/>
                       </div>
                       <div>
                        <button onClick={Login}>
                            Login
                        </button>
                        <p className="loginoutput">
                            {loginOp}
                        </p>
                       </div>
                    </p>
                </div>
                </form>
                <form>
                <div className="rightDiv">
                    <h1>
                        SIGNIN
                    </h1>
                    <p>
                        
                       <div>
                            <label>Username : </label><input onChange={(e)=>setUsername(e.target.value)} required/>
                       </div>
                       <div>
                            <label>Email : </label><input onChange={(e)=>setEmail(e.target.value)} required/>
                       </div>
                       <div>
                            <label>Age : </label><input onChange={(e)=>setAge(e.target.value)} required/>
                       </div>
                       <div>
                            <label>Create Password : </label><input onChange={(e)=>setPassword(e.target.value)} required/>
                       </div>
                       <div>
                        <button onClick={Signin}>
                            Signin
                        </button>
                        <p className="signinoutput">
                            {SigninOp}
                        </p>
                        </div>
                    </p>
                </div>
            </form>
            
        </div>
    )
    
}

