import { useState, useContext } from "react";
import { AuthContext } from "../../TodoApp";
import axios from "axios";
import "../../TodoApp.scss";

export default function Login({ handleDisplayRegister, handleDisplayLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { setToken } = useContext(AuthContext); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5002/auth/login", { username, password });

            const { token } = response.data;
            setToken(token, username, "");
            setError("");
            handleDisplayLogin();

        } catch (err) {
            console.error("Login failed", err);
            // Must modify to add Username already exists
            setError("Invalid username or password. Please try again.");
        }
    };

    const handleAfterRegister = () => {
        handleDisplayRegister();
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="login">
                <h4>Enter your username and password for your tasks to be synced with your account.</h4>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="login--input" />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="login--input" />
                {error && <p className="login--error">{error}</p>}
                <button
                    type="submit"
                    className="login--button"
                    >Login</button>
                <button
                    type="button"
                    className="login--button"
                    onClick={() => handleAfterRegister()}>Register</button>
            </form>
        </>
    )
}