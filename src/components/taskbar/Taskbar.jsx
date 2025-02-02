import "./Taskbar.scss";
import { useState } from "react";
import TaskbarClock from "./components/TaskbarClock";
import StartMenu from "../start-menu/StartMenu";
import ActiveApps from "./components/ActiveApps";
import { AnimatePresence, motion } from "framer-motion";
import TrayIcons from "./components/TrayIcons";
import calcWindowSize from "../../utils/calcWindowSize";
import fennec from "../../assets/start-menu/Renard-logo.png";

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

const Taskbar = ({ handleDisplayApp, openedFolders }) => {
    const [displayStartMenu, setDisplayStartMenu] = useState(false);
    const [taskbarApps, setTaskbarApps] = useState(["Firefox", "MSN", "Emule", "Word", "Notepad", "Winamp", "Nero", "Daemon"]);
    const { width } = calcWindowSize();

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
        handleDisplayApp(app)
    }

    return (
        <div>
            <nav className="taskbar">
                <div className="taskbar__container">
                    {displayStartMenu && (
                            <AnimatePresence>
                                <motion.div
                                    variants={springFromBottom}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <StartMenu 
                                    setDisplayStartMenu={setDisplayStartMenu}
                                    handleDisplayApp={handleDisplayApp}
                                    />
                                </motion.div>
                            </AnimatePresence>
                    )}

                    <div className="taskbar__start-menu">
                        <img
                            alt="Start Menu Icon"
                            src={fennec}
                            className="taskbar__start-menu--icon"
                            onClick={handleDisplayStartMenu}
                        />
                    </div>
                    {/*
                            <nav className="taskbar__icons">
                                <ShortcutsApps
                                    handleAddTaskbarApps={handleAddTaskbarApps}
                                    handleDisplayApp={handleDisplayApp}
                                />
                            </nav>
                    */}
                            <nav className="taskbar__apps">
                                <ActiveApps
                                    taskbarApps={taskbarApps}
                                    handleRemoveTaskbarApp={handleRemoveTaskbarApp}
                                    openedFolders={openedFolders}
                                    />
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
