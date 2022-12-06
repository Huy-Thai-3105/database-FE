import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Sign.css'
import UserContext from "../../Contexts/UserContext"


const SignIn = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    React.useEffect(() => {
        document.title = 'Sign In'
    }, [])
    const {token, handleLogin} = React.useContext(UserContext) ;
     console.log(token) ; 
    return (
        <div className="login-bg">
            <div className="login">
                
                <form 
                    className="login__form"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input 
                            type="text" 
                            className='form-control mb-2'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input 
                            type="password" 
                            className='form-control mb-2'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 text-center">
                        <label className="form-label">
                            Forget you password ? 
                            <a href="/">Click here</a> 
                        </label>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        style={{color: 'white'}} 
                        value="Login now"
                        onClick={() => {
                            handleLogin(username,password)
                    }}
                    > Login Now </button>
                </form>
             
            </div>
        </div>
    )
}

export default SignIn