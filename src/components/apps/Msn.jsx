import "./Msn.scss";
import { useState } from "react";
import msnChat from "../../assets/apps/msn/msn-chat.png";
import { PiWarningCircleDuotone } from "react-icons/pi";
import AiChatbotAvatar from "../../assets/temp/msn-7.5.png"
import duck from "../../assets/temp/RubberDuck.jpg";

const actionsMenuItems = [
    {
        title: "Invite",
        icon: msnChat,
    },
    {
        title: "Send Files",
        icon: msnChat,
    },
    {
        title: "Video",
        icon: msnChat,
    },
    {
        title: "Voice",
        icon: msnChat,
    },
    {
        title: "Activities",
        icon: msnChat,
    },
    {
        title: "Games",
        icon: msnChat,
    },
]

const renderActionsMenu = () => {
    return (
        actionsMenuItems.map((item, index) => (
            <nav 
            key={index}
            className="msn-actions-menu--item"
            >
            <img 
            alt="" 
            src={item.icon}
            ></img>
            <h4>{item.title}</h4>
        </nav>
        ))
    )
}

const Msn = ({ handleDisplayApp }) => {
    const [flip3D, setFlip3D] = useState(false);

    const handleFlip3D = () => {
        setFlip3D(!flip3D)
    }

    return (
        <div className={`msn ${flip3D ? "flip3D" : ""}`}>
            {/* Header Section */}
            <div className="msn-header">
                <div className="msn-header-title">
                    <div className="msn-logo">
                        <img alt="MSN Chat" src={msnChat} />
                    </div>
                </div>
                <div className="msn-buttons">
                    <button className="minimize" onClick={() => handleDisplayApp("MSN")}><nav></nav></button>
                    <button className="maximize" onClick={() => handleFlip3D()}><nav></nav></button>
                    <button className="close" onClick={() => handleDisplayApp("MSN")}><nav></nav></button>
                </div>
            </div>

            {/* Menu Section */}
            <div className="msn-menu">
                <div className="msn-menu--items">
                    <nav><h4><span>F</span>ile</h4></nav>
                    <nav><h4><span>E</span>dit</h4></nav>
                    <nav><h4><span>A</span>ctions</h4></nav>
                    <nav><h4><span>T</span>ools</h4></nav>
                    <nav><h4><span>H</span>elp</h4></nav>
                </div>
            </div>

            {/* Actions Menu */}
            <div className="msn-actions-menu">
                <div className="msn-actions-menu--items">
                    {renderActionsMenu()}
                </div>

            </div>

            {/* Body Section */}
            <div className="msn-body">

                {/* Chat List */}
                <div className="msn-chat-list">
                    <div className="chat-box">
                        <div className="chat-header">
                            <span>To:</span>
                            <span>Kangkm's AI Chatbot</span>
                            <span>&lt;mmarion@naver.com&gt;</span>
                        </div>
                        <div className="chat-warning">
                            <PiWarningCircleDuotone size={15} />
                            <h4>AI Chatbot will always reply because her status is set to Active</h4>
                        </div>
                        <div className="chat-text">
                            <span className="chat-username">AI Chatbot:</span> Hello, how are you?
                        </div>
                        <div className="chat-text">
                            <span className="chat-username">Username:</span> Rough morning, how about you?
                        </div>
                        <div className="chat-text">
                            <span className="chat-username">AI Chatbot:</span> I have no concept of day and night. Its dark in here
                        </div>
                        <div className="chat-text">
                            <span className="chat-username">Username:</span> Thats....rough
                        </div>
                    </div>
                    <div className="receiver-avatar">
                        <img 
                        alt="" 
                        src={AiChatbotAvatar}
                        className="receiver-avatar--avatar"
                        />
                    </div>
                </div>

                {/* Chat Input */}
                <div className="msn-chat-input">
                    <div className="chat-input">
                    <input type="text" placeholder="Type a message..." />
                    <button>Send</button>
                    </div>
                    <div className="sender-avatar">
                    <img 
                        alt="" 
                        src={duck}
                        className="sender-avatar--avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Msn;