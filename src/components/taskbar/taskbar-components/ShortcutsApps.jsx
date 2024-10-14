import "./ShortcutsApps.scss";
import { MdOutlineNavigateNext } from "react-icons/md";
import { taskbarIcons } from "../taskbar-components/taskbarIcons";
import calcWindowSize from "../../utils/calcWindowSize";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

const ShortcutsApps = ({ handleAddTaskbarApps }) => {
    const { width } = calcWindowSize();
    const [displayShortcuts, setDisplayShortcuts] = useState(false);
    const shortcutsRef = useRef();

    const getVisibleIconsRange = () => {
        if (width <= 750) return 2;
        if (width <= 1000) return 4;
        return 6
    }

    const handleDisplayShortcuts = () => {
        setDisplayShortcuts(!displayShortcuts)
    }

    useEffect(() => {
        function handleClickOutside(event) {

            // Check if the click target contains the expand icons element
            const iconEl = document.querySelector(".taskbar__icons--expand-arrows");
            if (iconEl && iconEl.contains(event.target)) {
                return;
            }

            // Make the shortcuts menu disappear if you click outside of it
            if (shortcutsRef.current && !shortcutsRef.current.contains(event.target)) {
                setDisplayShortcuts(false);
            }
        }

        // Make the shortcuts menu disappear if you resize the screen
        // Does not work right now - maybe fix with {width} = useWindowSize ?
        function handleWindowResize() {
            setDisplayShortcuts(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("resize", handleWindowResize);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [displayShortcuts, setDisplayShortcuts])

    return (
        <>
            {taskbarIcons.slice(0, getVisibleIconsRange()).map((icon) => {
                return (
                    <div
                        key={icon.value}
                        className="taskbar__icons--icon"
                        onClick={() => handleAddTaskbarApps(icon.value)}>
                        <img
                            alt={icon.alt}
                            src={icon.icon}
                            value={icon.value}
                        />
                    </div>
                )
            })}
            <div className={`taskbar__icons--expand-arrows ${displayShortcuts ? "expanded" : ""}`}
                onClick={handleDisplayShortcuts}
            >
                <MdOutlineNavigateNext size={15} color="white"
                    className="taskbar__icons--expand-arrows--arrow"
                />
                <MdOutlineNavigateNext size={15} color="white"
                    className="taskbar__icons--expand-arrows--arrow"
                />
                <nav>
                    <AnimatePresence>
                        {displayShortcuts && (
                            <motion.div
                                variants={springFromBottom}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="taskbar__icons--expanded-icons"
                                ref={shortcutsRef}
                            >
                                {taskbarIcons.slice(getVisibleIconsRange(), taskbarIcons.length).map((icon) => {
                                    return (
                                        <div
                                            key={icon.value}
                                            className="taskbar__icons--expanded-icons--icon"
                                            onClick={() => handleAddTaskbarApps(icon.value)}
                                        >
                                            <img
                                                alt={icon.alt}
                                                src={icon.icon}
                                                value={icon.value}
                                            />
                                            <h4>{icon.value}</h4>
                                        </div>
                                    )
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </div>
        </>
    )
}

export default ShortcutsApps;

