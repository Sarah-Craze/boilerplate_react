export default function Register() {
    return (
        <div className='wrapper'>
            <form action="">
            <h1>Sign up</h1>
            <div className='input-box'>
            <input type="email" placeholder='Email' required/>
        </div>
        <div className='input-box'>
            <input type="password" placeholder='Password' required/>
        </div>
        <button type="submit">Sign up</button>
        
        <div className='signin-link'>
                <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
        </form>
        </div>
    )
}