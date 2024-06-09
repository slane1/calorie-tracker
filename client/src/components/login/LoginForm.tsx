import { useState, ChangeEvent, FormEvent } from "react";

export default function LoginForm() {
    const [loginForm, setLoginForm] = useState({
        username: '',
        pass: ''
    });

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setLoginForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        // add submission api logic
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    value={loginForm.username} 
                    onChange={handleChange} 
                />
                <label htmlFor="pass">Password</label>
                <input 
                    type="password" 
                    name="pass" 
                    value={loginForm.pass} 
                    onChange={handleChange} 
                />
                <button type="submit">Login</button>
            </form>
            <div>
                <p>Don't have an Account?</p><p>Register now</p>
            </div>
        </div>
    )
}
