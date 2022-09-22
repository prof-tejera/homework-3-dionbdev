import React, { useState} from 'react'
import "./LoginForm.css";

const LoginForm = ({Login, error}) => {
  const [details, setDetails] = useState({ email: "", password: "", confirmPassword: ""});

  const submitHandler =  e => {
    e.preventDefault();
    Login(details);
}
return (
      <form onSubmit={submitHandler}>
          <div className="form-inner">    
                  <div className="form-group">
                      
                      <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder='username'
                        onChange={e => setDetails({...details, email: e.target.value})} 
                        value={details.name} />
                  </div>
                  <div className="form-group">
                      
                      <input 
                        type="password" 
                        name="password" 
                        id="password"
                        placeholder='password' 
                        onChange={e => setDetails({...details, password: e.target.value})} 
                        value={details.password} />
                  </div>

                  <label className='checkBox'>
                    <input
                      type="checkbox"
                    />
                    Remember Me
                  </label>
                 
                  <input className="form-button" type="button" value="Submit" />
                  {(error !== "") ? (<div className="error">{error}</div>) : ""}
          </div>
      </form>
)
  
};

export default LoginForm;
