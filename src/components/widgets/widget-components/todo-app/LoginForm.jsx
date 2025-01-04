import "../../TodoApp.scss";
import Login from "./Login";
import Register from "./Register"
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../TodoApp";
import Profile from "./Profile";

const LoginForm = ({ handleDisplayLogin, handleDisplayRegister, displayRegister, onLogOut }) => {
    const { loggedIn } = useContext(AuthContext)

    return (
        <div className="login-form">
            <IoMdClose size={20} color="orange" className="login-form__close-button" onClick={() => handleDisplayLogin()} />
            {!displayRegister && !loggedIn && (
                <Login
                handleDisplayLogin={handleDisplayLogin}
                handleDisplayRegister={handleDisplayRegister}
                />
            )}
            {displayRegister && !loggedIn && (
                <Register />
            )}
            {loggedIn && (
                <Profile onLogOut={onLogOut} />
            )}
        </div>
    )
}

export default LoginForm