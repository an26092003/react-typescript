import "bootstrap/dist/css/bootstrap.min.css";
import './SignIn.css'
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoginMutation } from "../../../../api/auth";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState<string>('')
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [login, { isLoading, isError }] = useLoginMutation();

    const handleLogin = () => {
        login({ email, password })
          .unwrap()
          .then((response) => {
            const token = response.token;
          })
          .catch((error) => {
            console.log(error)
          });
          navigate('/admin');
      };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return <>
        <div className="account__signin">
            <div className="form__signin">
                <h2>Form đăng nhập tài khoản</h2>
                <div className="from__control">
                    <label htmlFor=""><FontAwesomeIcon icon={faEnvelope} className="icon" /><p>Email</p></label>
                    <input type="email" name="" id="" className="input__signup" onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="from__control">
                    <label htmlFor=""><FontAwesomeIcon icon={faLock} className="icon" /><p>Password</p></label>
                    <div className="pass__input">
                        <input
                            className="input_signup"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                        />
                        <button type="button" onClick={toggleShowPassword} className="button__eye">
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>
                </div>
                <button className="btn__input" onClick={handleLogin}>Đăng nhập</button>
                <br /> <br />
                <a className="link__signin" href="/signup">đăng kí</a>
            </div>
        </div>
    </>
}

export default SignIn;