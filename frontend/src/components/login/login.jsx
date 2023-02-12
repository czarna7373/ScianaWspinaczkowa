import {useState} from 'react';
import axios from 'axios';
import './login.css';


//const [token, setToken] = useState(localStorage.getItem("usrToken") ?? null);

export const Login = ({token, setToken}) => {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');  

    const loginHandler = () => {
        setError("");
        setIdentifier("");
        setPassword("");
        axios({
            method: 'POST',
            url: 'http://localhost:1337/api/auth/local',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                identifier: identifier,
                password: password,
            },
        }).then((response) => {
            console.log(JSON.stringify(response?.data?.jwt));
            setToken(response?.data?.jwt);
            localStorage.setItem("userToken",response?.data?.jwt);
        }).catch((error) => {
            console.log(error.response.data.error.message);
            setError(error.response.data.error.message);
        });
    }

    return (<div>
        <div className='row justify-content-center'>
            <div className='loginPanel'>
                <h1>Zaloguj się</h1>
                <input type='text' placeholder='Nazwa użytkownika' className='form-control'
                    onChange={
                        (e) => setIdentifier(e.target.value)
                    }
                    value={identifier}/>
                <input type='password' placeholder='Hasło' className='form-control'
                    onChange={
                        (e) => setPassword(e.target.value)
                    }
                    value={password}/>
                {error && <small>{error}</small>}
                <button className="login-btn" onClick={loginHandler}>Zaloguj</button>
            </div>
        </div>
    </div>);
};

