import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import {ReactComponent as ArrowRightIcon} from "../assets/svg/keyboardArrowRightIcon.svg";

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formData;

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
                        Signup Here!
                    </div>
                </header>

                <form>
                    <input type="text"
                           name="name"
                           id="name"
                           value={name}
                           placeholder='Name'
                           className="nameInput"
                           onChange={handleChangeEvent}
                    />
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


                    <div className='signUpBar'>
                        <p className='signUpText'>Sign In</p>
                        <button className='signUpButton'>
                            <ArrowRightIcon fill='#ffffff' width='34px' height='34px'/>
                        </button>
                    </div>

                </form>

                <Link to='/sign-in' className='registerLink'>
                    Sign in Instead
                </Link>

            </div>

        </div>
    )

}

export default SignUp;
