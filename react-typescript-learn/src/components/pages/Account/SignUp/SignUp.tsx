import "bootstrap/dist/css/bootstrap.min.css";
import "./SignUp.css"
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../../../api/auth";
const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirm] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [showPassword, setShowPassword] = useState(false);

    const [register, { isLoading, isError }] = useRegisterMutation();

    const loadLocalStorage = () => {
        try {
            const serializedStore = window.localStorage.getItem('user')
            if (serializedStore === null) return undefined;
            return JSON.parse(serializedStore);
        } catch (e) {
            console.log(e);
            return undefined;
        }
    }

    const handleRegister = () => {
        if (confirmPassword !== password) {
          setError('Mật khẩu xác nhận không khớp');
          return;
        }
      
        register({ name, email, password, confirmPassword })
          .unwrap()
          .then((response) => {
            localStorage.setItem('user', JSON.stringify(response));
            navigate('/admin');
          })
            .then(() => {
                const token = loadLocalStorage()
                if (token) {
                    if (token.user.role ==='member') {
                      navigate('/');
                        
                    } else {
                        navigate('/admin')
                    }
                    
                }
            })
          .catch((error) => {
            console.log(error);
          });
      };


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirm(event.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return <>
        <div className="account__signup">
            <div className="form__signup">
                <h2>Form đăng kí tài khoản</h2>
                <div className="from__control">
                    <label htmlFor=""><FontAwesomeIcon icon={faUser} className="icon" /><p>Name</p></label>
                    <input type="text" name="" id="" className="input__signup" onChange={(event) => setName(event.target.value)}/>
                </div>
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
                <div className="from__control">
                    <label htmlFor=""><FontAwesomeIcon icon={faLock} className="icon" /><p>confirmPassword</p></label>
                    <div className="pass__input">
                        <input
                            className="input_signup"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={confirmPassword}
                            onChange={handleInput}
                        />
                        <button type="button" onClick={toggleShowPassword} className="button__eye">
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>
                </div>
                <button className="btn__input" onClick={handleRegister}>Đăng kí</button> <br /> <br />
                <a className="link__signup" href="/signin">đăng nhập</a>
            </div>
        </div>
    </>
}

export default SignUp;