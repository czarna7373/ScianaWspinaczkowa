import { useState } from 'react';
import '../styles/Login.css';


const Login = () => {
const [identifier, setIdentifier] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

    return (
        <div>
            <div className='row justify-content-center'>
                <div className='loginPanel'>
                <h1>Zaloguj się</h1>
                        <input type='text' 
                        placeholder='Nazwa użytkownika'
                        className='form-control'
                        onChange={(e) => setIdentifier(e.target.value)}
                        value={identifier}
                        />
                        <input type='password' 
                        placeholder='Hasło'
                        className='form-control'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        />
                        <small>error placeholder</small>
                        <button>Zaloguj</button>
                </div>
            </div>
            
        </div>
    );
};

export default Login;
