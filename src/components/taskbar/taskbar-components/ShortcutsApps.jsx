import "./ShortcutsApps.scss";
import { taskbarIcons } from "../taskbar-components/taskbarIcons";
import calcWindowSize from "../../utils/calcWindowSize";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsThreeDotsVertical } from "react-icons/bs";

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

const ShortcutsApps = ({ handleAddTaskbarApps, handleDisplayApp }) => {
    const { width } = calcWindowSize();
    const [displayShortcuts, setDisplayShortcuts] = useState(false);
    const shortcutsRef = useRef();

    const getVisibleIconsRange = () => {
        if (width <= 750) return 2;
        if (width <= 1000) return 4;
        return 6;
    };

    const handleDisplayShortcuts = () => {
        setDisplayShortcuts(!displayShortcuts);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            const iconEl = document.querySelector(".shortcut-icons--expand-toggle");
            if (iconEl && iconEl.contains(event.target)) {
                return;
            }

            if (shortcutsRef.current && !shortcutsRef.current.contains(event.target)) {
                setDisplayShortcuts(false);
            }
        }

        function handleWindowResize() {
            setDisplayShortcuts(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("resize", handleWindowResize);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [displayShortcuts, setDisplayShortcuts]);

    const handleDisplayApps = (app) => {
        handleAddTaskbarApps(app);
        handleDisplayApp(app);
    };

    return (
        <div className={`shortcut-icons ${displayShortcuts ? "expanded" : ""}`}>
            {taskbarIcons.slice(0, getVisibleIconsRange()).map((icon) => {
                return (
                    <div
                        key={icon.value}
                        className="shortcut-icons--icon"
                        onClick={() => handleDisplayApps(icon.value)}
                    >
                        <img alt={icon.alt} src={icon.icon} value={icon.value} />
                    </div>
                );
            })}
            <div>

                <BsThreeDotsVertical 
                onClick={handleDisplayShortcuts}
                className="shortcut-icons--expand-toggle"
                size={15} />

                <nav>
                    <AnimatePresence>
                        {displayShortcuts && (
                            <motion.div
                                variants={springFromBottom}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="shortcut-icons--expand-menu"
                                ref={shortcutsRef}
                            >
                                {taskbarIcons.slice(getVisibleIconsRange()).map((icon) => {
                                    return (
                                        <div
                                            key={icon.value}
                                            className="shortcut-icons--expand-menu-item"
                                            onClick={() => handleDisplayApps(icon.value)}
                                        >
                                            <img alt={icon.alt} src={icon.icon} value={icon.value} />
                                            <h4>{icon.value}</h4>
                                        </div>
                                    );
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </div>
    );
};

export default ShortcutsApps;