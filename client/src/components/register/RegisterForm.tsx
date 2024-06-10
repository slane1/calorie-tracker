import { useState, ChangeEvent, FormEvent } from "react";

export default function RegisterForm() {
    const [registerForm, setRegisterForm] = useState({
        username: '',
        email: '',
        pass: '',
        passCheck: ''
    });
    const [mismatch, setMismatch] = useState<boolean>(false)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setRegisterForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const {pass, passCheck} = registerForm;
        if(pass != passCheck){
            setMismatch(true)
        } else{
            setMismatch(false)
        }
    }

    return (
        <div>
            {mismatch && <div className="bg-red-900">Password mismatch</div>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    value={registerForm.username} 
                    onChange={handleChange} 
                />
                <label htmlFor="email">E-Mail</label>
                <input 
                    type="text" 
                    name="email" 
                    value={registerForm.email} 
                    onChange={handleChange} 
                />
                <label htmlFor="pass">Password</label>
                <input 
                    type="password" 
                    name="pass" 
                    value={registerForm.pass} 
                    onChange={handleChange} 
                />
                <label htmlFor="passCheck">Repeat Password</label>
                <input 
                    type="password" 
                    name="passCheck" 
                    value={registerForm.passCheck} 
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
