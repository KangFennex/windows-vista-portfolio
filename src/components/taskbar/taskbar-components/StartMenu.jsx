import "./StartMenu.scss";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { renderProgramList} from "./startmenuPrograms";
import { FaPowerOff } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";
import { useState } from "react";

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

const StartMenu = () => {
    const [expandAllProgram, setExpandAllProgram] = useState(false)
    const [powerSize, setPowerSize] = useState(15);
    const [lockSize, setLockSize] = useState(15);
    const [arrowSize, setArrowSize] = useState(20);

    const handleExpandAllProgram = () => {
        setExpandAllProgram(!expandAllProgram)
    }

    const handleClick = (setSizeFunc, originalSize, newSize) => {
        setSizeFunc(newSize);
        setTimeout(() => {
            setSizeFunc(originalSize);
        }, 100);
    };

    return (
        <div className="start-menu">
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
            <span onClick={() => handleClick(setArrowSize, 20, 14)}>
                <MdArrowRight size={arrowSize} color="white" />
            </span>
        </div>
            </div>
        </div>
    )
}

export default StartMenu