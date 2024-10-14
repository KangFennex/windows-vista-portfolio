import "./StartMenu.scss";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { renderProgramList } from "./startmenuPrograms";
import { FaPowerOff } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";

const shortcutList1 = ["Michel", "Documents", "Pictures", "Music", "Games"];
const shortcutList2 = ["Recent", "Computer", "Network", "Connect To"];
const shortcutList3 = ["Control Panel", "Default Program", "Help and Support"];

const renderShortcutList = (list) => {
    return list.map((listEl, i) => {
        return (
            <h4 key={i}>{listEl}</h4>
        );
    });
};

const StartMenu = ({ setDisplayStartMenu }) => {
    const [expandAllProgram, setExpandAllProgram] = useState(false)
    const [powerSize, setPowerSize] = useState(15);
    const [lockSize, setLockSize] = useState(15);
    const [arrowSize, setArrowSize] = useState(20);
    const menuRef = useRef();

    const handleExpandAllProgram = () => {
        setExpandAllProgram(!expandAllProgram)
    }

    const handleClick = (setSizeFunc, originalSize, newSize) => {
        setSizeFunc(newSize);
        setTimeout(() => {
            setSizeFunc(originalSize);
        }, 100);
    };

    useEffect(() => {
        function handleClickOutside(event) {

        // Check if the click target contains the icon element
        const iconEl = document.querySelector(".taskbar__start-menu");
        if (iconEl && iconEl.contains(event.target)) {
            return;
        }

        // Make the menu disappear if you click outside of it
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setDisplayStartMenu(false);
            }
        }

        // Make the menu disappear if you resize the screen
        // Does not work right now - maybe fix with {width} = useWindowSize ?
        function handleWindowResize() {
            setDisplayStartMenu(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("resize", handleWindowResize);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [setDisplayStartMenu])

    return (
        <div
            className="start-menu"
            ref={menuRef}
        >
            <div className="start-menu__container">
                <div className="programs">
                    <span className={`programs__container ${expandAllProgram ? "expanded" : ""}`}>
                        {renderProgramList(expandAllProgram)}
                    </span>

                    {/* Expand to all all programs */}
                    <span className="programs__all-programs"
                        onClick={handleExpandAllProgram}
                    >
                        {!expandAllProgram ? (
                            <>
                                <MdArrowRight
                                    size={25}
                                    className="all-programs-arrow"
                                />
                                <h4>All Programs</h4>
                            </>
                        ) : (
                            <>
                                <MdArrowLeft
                                    size={25}
                                    className="all-programs-arrow"
                                />
                                <h4>Back</h4>
                            </>
                        )}

                    </span>
                </div>
                <div className="avatar"></div>
                <div className="shortcuts">
                    <div>{renderShortcutList(shortcutList1)}</div>
                    <div>{renderShortcutList(shortcutList2)}</div>
                    <div>{renderShortcutList(shortcutList3)}</div>
                </div>
                <div className="search"><input placeholder="Start Search" /></div>
                <div className="power">

                    {/* Power Off Button */}
                    <span onClick={() => handleClick(setPowerSize, 15, 13)}>
                        <FaPowerOff size={powerSize} color="white" />
                    </span>

                    {/* Lock Button */}
                    <span onClick={() => handleClick(setLockSize, 15, 13)}>
                        <IoLockClosedSharp size={lockSize} color="white" />
                    </span>

                    {/* Arrow Button */}
                    <span>
                        <MdArrowRight size={arrowSize} color="white" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default StartMenu