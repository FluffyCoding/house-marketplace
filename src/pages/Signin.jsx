import {ReactComponent as ArrowRightIcon} from "../assets/svg/keyboardArrowRightIcon.svg";
import {Link, useNavigate} from "react-router-dom";

import visibilityIcon from '../assets/svg/visibilityIcon.svg';

import {useState} from "react";

function SignIn() {

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData;

    const navigate = useNavigate();

    function handleChangeEvent(event) {

        setFormData((prevState) => ({
                ...prevState,
                [event.target.id]: event.target.value,
            })
        )
    }

    return (
        <div>
            <div className="pageContainer">
                <header>
                    <div className="pageHeader">
                        Welcome Back!
                    </div>
                </header>

                    <form>
                        <input type="email"
                               name=""
                               id="email"
                               value={email}
                               placeholder='Email'
                               className="emailInput"
                               onChange={handleChangeEvent}
                        />

                        <div className="passwordInputDiv">
                            <input type={showPassword ? 'text' : "password"}
                                   className='passwordInput'
                                   name="passwordInput"
                                   id="password"
                                   value={password}
                                   onChange={handleChangeEvent}
                            />

                            <img src={visibilityIcon}
                                 alt="Show Password"
                                 className="showPassword"
                                 onClick={() => setShowPassword(prevState => !prevState)}
                            />
                        </div>

                        <Link to='/forgot-password'
                              className="forgotPasswordLink">
                            Forgot Password
                        </Link>

                        <div className='signInBar'>
                            <p className='signInText'>Sign In</p>
                            <button className='signInButton'>
                                <ArrowRightIcon fill='#ffffff' width='34px' height='34px'/>
                            </button>
                        </div>

                    </form>

                <Link to='/sign-up' className='registerLink'>
                    Sign Up Instead
                </Link>

            </div>

        </div>
    )

}

export default SignIn;
