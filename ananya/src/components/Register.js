import {  useRef, seEffect, useState, useEffect } from "react";

const Register = ()=>{
    const userRef =useRef();
    const errRef = useRef();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(()=>{
        userRef.current.focus();

    }, [])

    useEffect(()=>{
        error('');
    }, [username, password])


    const adminUser ={
        username : "user",
        password : "pass"
      }

    const handleSubmit = async (e) =>{
        e.preventDefault();
    }

    return(

        <section>
            <p ref = {error} className={error ? "error" :"offscreen"} aria-live="assertive">{error}</p>
            <h1>Login In</h1>
            <form onSubmit={handleSubmit}>
            
                    <div>
                        <input type='text'
                         name="username" 
                         id='username' 
                         ref={userRef}
                         placeholder = "Username" 
                         autoComplete='off'
                        onChange={(e) => setUsername(e.target.value)} 
                        value={username} 
                        required
                        />

                    </div>
                    <div>
                        <input type='password' 
                        name="password" 
                        id='password' 
                        placeholder = "Password"  
                        onChange={(e) => setPassword(e.target.value)} 
                        value={password}
                        required
                        />
                    </div>
                    <button>Login In</button>
                    <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>


                </form>
        
        </section>

        
    )


}

export default Register

