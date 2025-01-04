import "../../TodoApp.scss";
import { AuthContext } from "../../TodoApp";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { avatarsList } from "./assets/profilePics/avatarsList";
import EditIcons from "./EditIcons";

const Profile = ({ onLogOut }) => {
    const { username, avatar, setToken } = useContext(AuthContext);
    const [newUsername, setNewUsername] = useState(username);
    const [newPassword, setNewPassword] = useState("");
    const [newAvatar, setNewAvatar] = useState("");
    const [selectedAvatarSrc, setSelectedAvatarSrc] = useState(null);
    const [editMode, setEditMode] = useState({
        avatar: false,
        username: false,
        password: false,
    });

    useEffect(() => {
        // Find and set the avatar source URL from avatarsList based on the current avatar title
        const initialAvatar = avatarsList.find((item) => item.title === avatar);
        if (initialAvatar) setSelectedAvatarSrc(initialAvatar.src);
    }, [avatar]);

    useEffect(() => {
        // Whenever newAvatar changes, update selectedAvatarSrc
        const updatedAvatar = avatarsList.find((item) => item.title === newAvatar);
        if (updatedAvatar) setSelectedAvatarSrc(updatedAvatar.src);
    }, [newAvatar]);

    const handleEdit = async () => {
        const updatedFields = {};
        if (newUsername !== username) updatedFields.username = newUsername;
        if (newPassword) updatedFields.password = newPassword;
        if (newAvatar !== avatar) updatedFields.avatar = newAvatar;

        if (Object.keys(updatedFields).length === 0) return;

        try {
            const token = localStorage.getItem("token");
            const response = await axios.put("http://localhost:5002/auth/edit-profile", updatedFields, { headers: { Authorization: `Bearer ${token}` } });

            console.log("Profile updated", response.data);

            if (updatedFields.username || updatedFields.avatar) {
                setToken(token, updatedFields.username || username, updatedFields.avatar || avatar);
            }
        } catch (error) {
            console.log("Failed to update profile", error);
        }
    };

    const toggleEditMode = (field) => setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
    const handleCancelEdit = (field) => {
        if (field === "username") setNewUsername(username);
        if (field === "password") setNewPassword("");
        if (field === "avatar") setNewAvatar(avatar);
        setEditMode((prev) => ({ ...prev, [field]: false }));
    };

    const handleLogOut = () => {
        setToken(null);
        onLogOut();
    };

    return (
        <div className="profile">
            <div className="profile__avatar--container">
                <img alt="User Avatar" src={selectedAvatarSrc} className="profile__avatar--avatar" />
                {editMode.avatar ? (
                    <span className="profile__avatar--selectAvatar">
                        {avatarsList.filter(item => item.title !== avatar).map((item) => (
                            <img
                                key={item.title}
                                alt={item.title}
                                src={item.src}
                                onClick={() => setNewAvatar(item.title)}
                                style={{
                                    border: newAvatar === item.title ? "2px solid orange" : "none"
                                }}
                            />
                        ))}
                    </span>
                ) : null}
                <EditIcons
                    isEditing={editMode.avatar}
                    onEdit={() => toggleEditMode("avatar")}
                    onSave={() => toggleEditMode("avatar")}
                    onCancel={() => handleCancelEdit("avatar")}
                />
            </div>

            <section className="profile__inputs">
                <div>
                    <h3>Username:</h3>
                    {editMode.username ? (
                        <input
                            type="text"
                            style={{ width: "140px" }}
                            value={newUsername}
                            onChange={(e) => setNewUsername(e.target.value)}
                        />
                    ) : (
                        <span>{newUsername}</span>
                    )}
                    <EditIcons
                        isEditing={editMode.username}
                        onEdit={() => toggleEditMode("username")}
                        onSave={() => toggleEditMode("username")}
                        onCancel={() => handleCancelEdit("username")}
                    />
                </div>

                <div>
                    <h3>Password:</h3>
                    {editMode.password ? (
                        <input
                            type="password"
                            style={{ width: "140px" }}
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    ) : (
                        <span>{"*".repeat(8)}</span>
                    )}
                    <EditIcons
                        isEditing={editMode.password}
                        onEdit={() => toggleEditMode("password")}
                        onSave={() => toggleEditMode("password")}
                        onCancel={() => handleCancelEdit("password")}
                    />
                </div>
            </section>

            <section className="profile__buttons">
                <button 
                className="profile--button"
                onClick={handleEdit} 
                disabled={!newPassword && newUsername === username && newAvatar === avatar}>
                    Save Changes
                </button>
                <button 
                className="profile--button"
                onClick={handleLogOut}>Log out</button>
            </section>
        </div>
    );
};

export default Profile;
