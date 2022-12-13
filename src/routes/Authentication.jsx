import { useState } from "react"
import './Authentication.css';

export default function Authentication(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState(0);

    return(
        <div className="loginsigninform" >
            <form >
                <div>
                    <h1>
                        LOGIN
                    </h1>
                    <p>
                       <div>
                            <label>Email : </label><input onChange={(e)=>setEmail(e.target.value)}/>
                       </div>
                       <div>
                            <label>Password : </label><input onChange={(e)=>setEmail(e.target.value)}/>
                       </div>
                    </p>
                </div>
                <div>
                    <h1>
                        SIGNIN
                    </h1>
                    <p>
                        
                       <div>
                            <label>Username : </label><input onChange={(e)=>setUsername(e.target.value)}/>
                       </div>
                       <div>
                            <label>Email : </label><input onChange={(e)=>setEmail(e.target.value)}/>
                       </div>
                       <div>
                            <label>Age : </label><input onChange={(e)=>setAge(e.target.value)}/>
                       </div>
                       <div>
                            <label>Password : </label><input onChange={(e)=>setEmail(e.target.value)}/>
                       </div>
                    </p>
                </div>
            </form>
        </div>
    )
    
}

