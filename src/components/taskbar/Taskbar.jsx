import "./Taskbar.scss";
import startMenuIcon from "../../assets/icons/StartIcon.ico";
import { useState } from "react";
import TaskbarClock from "./taskbar-components/TaskbarClock";
import StartMenu from "./taskbar-components/StartMenu";
import ActiveApps from "./taskbar-components/ActiveApps";
import { AnimatePresence, motion } from "framer-motion";
import TrayIcons from "./taskbar-components/TrayIcons";
import ShortcutsApps from "./taskbar-components/ShortcutsApps";
import calcWindowSize from "../utils/calcWindowSize";


const Taskbar = () => {
    const [displayStartMenu, setDisplayStartMenu] = useState(false);
    const [shortcutsExpand, setShortcutsExpand] = useState(false);
    const [taskbarApps, setTaskbarApps] = useState(["Firefox", "MSN"]);
    const { width } = { calcWindowSize }


    const handleDisplayStartMenu = () => {
        setDisplayStartMenu(!displayStartMenu)
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
                    <nav className={`taskbar__icons ${shortcutsExpand ? "expanded" : ""}`}>
                        <ShortcutsApps
                            shortcutsExpand={shortcutsExpand}
                            setShortcutsExpand={setShortcutsExpand}
                            handleAddTaskbarApps={handleAddTaskbarApps}
                        />
                    </nav>
                    <nav className="taskbar__apps">
                        <ActiveApps
                            taskbarApps={taskbarApps}
                            handleRemoveTaskbarApp={handleRemoveTaskbarApp} />
                    </nav>
                    <div className="taskbar__system-icons-and-time">
                        <div className="taskbar__system-icons">
                            <TrayIcons />
                        </div>
                        <div className="taskbar__time">
                            <TaskbarClock />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Taskbar
