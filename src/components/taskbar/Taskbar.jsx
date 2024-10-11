import "./Taskbar.scss";
import startMenuIcon from "../../assets/icons/StartIcon.ico";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useState } from "react";
import { taskbarIcons } from "./taskbar-components/taskbarIcons";
import TaskbarClock from "./taskbar-components/TaskbarClock";
import StartMenu from "./taskbar-components/StartMenu";

const Taskbar = () => {
    const [displayStartMenu, setDisplayStartMenu] = useState(false);
    const [shortcutsExpand, setShortcutsExpand] = useState(false);

    const handleDisplayStartMenu = () => {
        setDisplayStartMenu(!displayStartMenu)
    }
    const handleShortcutsExpand = () => {
        setShortcutsExpand(!shortcutsExpand)
    }

    return (
        <div>
            <nav className="taskbar">
                <div className="taskbar__container">
                    {displayStartMenu && (
                        <StartMenu />
                    )}
                        
                    <div className="taskbar__start-menu">
                        <img
                            alt="Start Menu Icon"
                            src={startMenuIcon}
                            className="taskbar__start-menu--icon"
                            onClick={handleDisplayStartMenu}
                        />
                    </div>
                    <div className={`taskbar__icon-section ${shortcutsExpand ? "expanded" : ""}`}>
                        {taskbarIcons.slice(0, shortcutsExpand ? taskbarIcons.length : 4).map((icon, i) => {
                            return (
                                <>
                                <div className="taskbar__icon-section--icon">
                                <img 
                                key={i}
                                alt={icon.alt}
                                src={icon.icon}
                                className={icon.className}
                                />
                                </div>
                                </>
                            )
                        })}
                        <div className={`taskbar__icon-section--expand-arrows ${shortcutsExpand ? "expanded" : ""}`}
                        onClick={ handleShortcutsExpand}
                        >
                        <MdOutlineNavigateNext size={15} color="white"
                        className="taskbar__icon-section--expand-arrow"
                        />
                        <MdOutlineNavigateNext size={15} color="white"
                        className="taskbar__icon-section--expand-arrow"
                        id="second-arrow"/>
                        </div>
                    </div>
                    <div className="taskbar__apps">

                    </div>
                    <div className="taskbar__system-icons">

                    </div>
                    <div className="taskbar__time">
                    <TaskbarClock />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Taskbar
