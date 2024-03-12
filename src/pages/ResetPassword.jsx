export default function ResetPassword() {
    return (
        <div className='wrapper'>
            <form action="">
            <h1>Forgotten Password ?</h1>
            <div className='input-box'>
            <input type="email" placeholder='Email' required/>
        </div>
        <div className='input-box'>
            <input type="password" placeholder='Old Password' required/>
        </div>
        <div className='input-box'>
            <input type="password" placeholder='New Password' required/>
        </div>
        <button type="submit">Reset Password</button>
        
        <div className='signin-link'>
                <p>Go back to<a href="/login">Login page</a></p>
        </div>
        </form>
        </div>
    )
}