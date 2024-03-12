export default function Login() {
    return (
        <div className='wrapper'>
            <form action="">
            <h1>Login</h1>
            <div className='input-box'>
            <input type="email" placeholder='Email' required/>
        </div>
        <div className='input-box'>
            <input type="password" placeholder='Password' required/>
        </div>
        <div className='remember-forgot'>
                <label><input type="checkbox" />Remember me</label>
                <a href="/password/reset">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        
        <div className='register-link'>
                <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
        </form>
        </div>
    )
}