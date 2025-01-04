import "./StickyNote.scss";
import { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const textareaDefaultValue = [
    `** Features **

- Functional MSN Messenger with AI Chatbot

- Windows Vista inspired Flip 3D feature

- Register & Login functions shared across apps

- MongoDB enabled todo app`
]

const StickyNote = () => {
    const [focused, setFocused] = useState(false);
    const [color, setColor] = useState("green");
    const [showColors, setShowColors] = useState(false);

    const handleFocus = () => {
        setFocused(true)
    };

    const handleBlur = () => {
        setFocused(false);
    };

    const colors = ["green", "blue", "yellow", "pink", "purple"];

    const handleSelectColor = (color) => {
        setColor(color);
    }

    const colorSelect = (color) => {
        return (
            <div
                style={{ backgroundColor: color, width: "20px", height: "20px" }}
                onClick={() => handleSelectColor(color)}>
            </div>
        )
    }

    const selectShowColors = () => {
        setShowColors(!showColors);
    };

    return (
        <div className="sticky-note">
            <header
                className={focused ? "focused" : ""}
                style={{ backgroundColor: color }}
                onClick={handleFocus}
            >
                {focused && (
                    <nav
                        className="sticky-note--nav">
                        <div className="sticky-note--nav--icons">
                            <IoAdd
                                size={20}
                                color="white"
                            />
                            {showColors && (
                                <span
                                    className="color-select"
                                >{colors.map((color, index) => (
                                    <div key={index}>{colorSelect(color)}</div>
                                ))}
                                </span>
                            )}
                            <HiOutlineDotsHorizontal
                                color="white"
                                onClick={selectShowColors}
                            />
                        </div>
                    </nav>

                )}
            </header>

            <textarea
                spellCheck="false"
                onFocus={handleFocus}
                onBlur={handleBlur}
                defaultValue={textareaDefaultValue}>
            </textarea>
        </div>
    )
}

export default StickyNote;