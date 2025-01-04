import { useState, useContext } from "react";
import axios from "axios";
import "../../TodoApp.scss";
import { AuthContext } from "../../TodoApp";
import { avatarsList } from "./assets/profilePics/avatarsList";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [selectedAvatar, setSelectedAvatar] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const { setToken } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/auth/register", { username, password, avatar: selectedAvatar });
            const token = response.data.token;

            setToken(token, username, selectedAvatar);

            setUsername("");
            setPassword("");
            setSuccessMessage(`${username}, you are successfully registered!`);
            console.log("Registration successful, token set:", token);

        } catch (err) {
            console.error("Registration failed", err.response?.data || err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="register">

            <span className="register__avatar">
                <p>Select an avatar:</p>
                <div className="register__avatar--container">
                {avatarsList.map((avatar, index) => (
                    <div key={index}>
                    <img alt={avatar.title} src={avatar.src}
                    onClick={() => setSelectedAvatar(avatar.title)}
                    style={{ border: selectedAvatar === avatar.title ? "4px solid orange" : "none" }}
                    />
                    </div>
                ))}
                </div>
            </span>

            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="register--input"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="register--input"
            />
            
            <button
                type="submit"
                className="register--button"
            >Register</button>
        </form>
    )
}

