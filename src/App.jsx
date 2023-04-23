import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Explore from './pages/Exploer.jsx';
import Offers from './pages/Offers.jsx';
import Profile from "./pages/Profile.jsx";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Explore/>}/>
                    <Route path='/offers' element={<Offers/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/sign-in' element={<SignIn/>}/>
                    <Route path='/sign-up' element={<SignUp/>}/>
                    <Route path='/forgot-password' element={<ForgotPassword/>}/>
                </Routes>
                <Navbar/>
            </Router>

        </>
    )
}

export default App
