import "./ShortcutsApps.scss";
import { taskbarIcons } from "./taskbarIcons";
import calcWindowSize from "../../../utils/calcWindowSize";
import { useState, useEffect, useRef } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';

const ShortcutsApps = ({ handleAddTaskbarApps, handleDisplayApp }) => {
    const { width } = calcWindowSize();
    const [displayShortcuts, setDisplayShortcuts] = useState(false);
    const shortcutsRef = useRef();
    const prevExpandActiveApps = useRef(displayShortcuts);

    const getVisibleIconsRange = () => {
        if (width <= 750) return 2;
        if (width <= 1000) return 4;
        return 6;
    };

    const handleDisplayShortcuts = () => {
        setDisplayShortcuts(!displayShortcuts);
    };

    useEffect(() => {
        prevExpandActiveApps.current = displayShortcuts;
    }, [displayShortcuts]);

    useEffect(() => {
        function handleClickOutside(event) {
            const iconEl = document.querySelector(".shortcut-apps--expand-toggle");
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

    const renderShortcutApps = (app) => {
        return (
            <div
                key={app.value}
                className="shortcut-apps--icon"
                onClick={() => handleDisplayApps(app.value)}
            >
                <img alt={app.alt} src={app.icon} value={app.value} />
            </div>
        )
    }

    const renderShortcutAppsMenu = (app, index) => {   
        const shouldAnimate = !prevExpandActiveApps.current && displayShortcuts;

        return (
            <nav key={index} 
            className={`shortcut-apps--expand-menu-item ${shouldAnimate ? 'animate' : ''}`} style={{ animationDelay: `${index * 100}ms` }}  
            onClick={() => handleDisplayApps(app.value)}
            >
                <img src={app.icon} alt={app.alt} value={app.value} />
            </nav>
        );
    };

    return (
        <div className={`shortcut-apps ${displayShortcuts ? "expanded" : ""}`}>
            {taskbarIcons.slice(0, getVisibleIconsRange()).map((app) => {
                return (
                    <div key={uuidv4()}>
                        {renderShortcutApps(app)}
                    </div>
                )
            })}
            <div>

                <BsThreeDotsVertical
                    onClick={handleDisplayShortcuts}
                    className="shortcut-apps--expand-toggle pendulum"
                    size={15} />
                <nav>

                    {displayShortcuts && (
                        <div className="shortcut-apps--expand-menu"
                            ref={shortcutsRef}
                            >
                            {taskbarIcons.slice(getVisibleIconsRange()).map((app, index) => {
                                return (
                                    <div key={uuidv4()}>
                                        {renderShortcutAppsMenu(app, index)}
                                    </div>
                                );
                            })}
                        </div>
                    )}

                </nav>
            </div>
        </div>
    );
};

export default ShortcutsApps;