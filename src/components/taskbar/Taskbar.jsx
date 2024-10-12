import "./Taskbar.scss";
import startMenuIcon from "../../assets/icons/StartIcon.ico";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useState } from "react";
import { taskbarIcons } from "./taskbar-components/taskbarIcons";
import TaskbarClock from "./taskbar-components/TaskbarClock";
import StartMenu from "./taskbar-components/StartMenu";
import ActiveApps from "./taskbar-components/ActiveApps";
import { AnimatePresence, motion } from "framer-motion";

const Taskbar = () => {
    const [displayStartMenu, setDisplayStartMenu] = useState(false);
    const [shortcutsExpand, setShortcutsExpand] = useState(false);
    const [taskbarApps, setTaskbarApps] = useState(["Explorer", "MSN"]);

    const handleDisplayStartMenu = () => {
        setDisplayStartMenu(!displayStartMenu)
    }

    const handleShortcutsExpand = () => {
        setShortcutsExpand(!shortcutsExpand)
    }

    const handleAddTaskbarApps = (app) => {
        if (!taskbarApps.includes(app)) {
            setTaskbarApps(prevApps => [...prevApps, app])
        }
    }

    const handleRemoveTaskbarApp = (app) => {
        if (taskbarApps.includes(app)) {
            setTaskbarApps(prevApps => prevApps.filter(apps => apps !== app));
        }
    }

    const springFromBottom = {
        hidden: {
            y: 800,
        },
        visible: {
            y: 0,
            transition: {
                type: "spring",
                stiffness: 50,
                mass: 0.4,
                damping: 8,
            },
        },
        exit: {
            y: 800,
            transition: {
                type: "spring",
                stiffness: 50,
                mass: 0.4,
                damping: 8,
            },
        },
    };

    return (
        <div>
            <nav className="taskbar">
                <div className="taskbar__container">
                    <AnimatePresence>
                    {displayStartMenu && (
                        <motion.div
                        variants={springFromBottom}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        >
                        <StartMenu setDisplayStartMenu={setDisplayStartMenu} />
                        </motion.div>
                    )}
</AnimatePresence>
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
                                <div
                                    key={i}
                                    className="taskbar__icon-section--icon"
                                    onClick={() => handleAddTaskbarApps(icon.value)}>
                                    <img
                                        alt={icon.alt}
                                        src={icon.icon}
                                        className={icon.className}
                                    />
                                </div>
                            )
                        })}
                        <div className={`taskbar__icon-section--expand-arrows ${shortcutsExpand ? "expanded" : ""}`}
                            onClick={handleShortcutsExpand}
                        >
                            <MdOutlineNavigateNext size={15} color="white"
                                className="taskbar__icon-section--expand-arrow"
                            />
                            <MdOutlineNavigateNext size={15} color="white"
                                className="taskbar__icon-section--expand-arrow"
                                id="second-arrow" />
                        </div>
                    </div>
                    <div className="taskbar__apps">
                        <ActiveApps
                            taskbarApps={taskbarApps}
                            handleRemoveTaskbarApp={handleRemoveTaskbarApp} />
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
