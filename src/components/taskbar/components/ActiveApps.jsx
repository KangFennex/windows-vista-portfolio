import "./ActiveApps.scss";
import { useState, useEffect, useRef, useCallback } from "react";
import { taskbarIcons } from "../components/taskbarIcons";
import desktopIcons from "../../desktop/components/desktopIcons";
import calcWindowSize from "../../../utils/calcWindowSize";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

const matchIcon = (appName) => {
    const taskbarIcon = taskbarIcons.find((icon) => icon.value === appName);
    return taskbarIcon ? taskbarIcon.icon : null;
};

const matchFolderIcon = (folderName) => {
    const folderIcon = desktopIcons.find((icon) => icon.value === folderName);
    return folderIcon ? folderIcon.icon : null;
}

const ActiveApps = ({ taskbarApps, openedFolders }) => {
    const [activeApp, setActiveApp] = useState(null);
    const { width } = calcWindowSize();
    const [currentIconIndex, setCurrentIconIndex] = useState(0);
    const [expandActiveApps, setExpandActiveApps] = useState(false);
    const [expandOpenedFolders, setExpandOpenedFolders] = useState(false);
    const expandRef = useRef(null);
    const expandMenuRef = useRef(null);
    const expandFolderRef = useRef(null);
    const expandFolderMenuRef = useRef(null);
    const prevExpandActiveApps = useRef(expandActiveApps);
    const prevExpandOpenedFolders = useRef(expandOpenedFolders);

    const adaptSliceToWidth = () => {
        if (width <= 200) return 1;
        if (width <= 400) return 2;
        if (width <= 600) return 3;
        if (width <= 800) return 4;
        if (width <= 1000) return 5;
        else return 6;
    }

    const handleExpandActiveApps = () => {
        setTimeout(() => {
            setExpandActiveApps(true)
        }, 300)
    };

    const handleMouseLeaveActiveApps = (e) => {
        if (
            expandRef.current &&
            !expandRef.current.contains(e.relatedTarget) &&
            expandMenuRef.current &&
            !expandMenuRef.current.contains(e.relatedTarget)
        ) {
            setTimeout(() => {
                setExpandActiveApps(false);
            }, 300);
        }
    };

    const handleExpandOpenedFolders = () => {
        setTimeout(() => {
            setExpandOpenedFolders(true)
        }, 300)
    };

    const handleMouseLeaveOpenedFolders = (e) => {
        if (
            expandFolderRef.current &&
            !expandFolderRef.current.contains(e.relatedTarget) &&
            expandFolderMenuRef.current &&
            !expandFolderMenuRef.current.contains(e.relatedTarget)
        ) {
            setTimeout(() => {
                setExpandOpenedFolders(false);
            }, 300);
        }
    };

    // Function to remove Active Apps Menu if user clicks outside or resize window
    useEffect(() => {
        function handleClickOutside(event) {

            // Check if the click target contains the icon element
            const iconEl = document.querySelector(".active-apps__expand-menu");
            if (iconEl && iconEl.contains(event.target)) {
                return;
            }

            // Make the menu disappear if you click outside of it
            if (expandMenuRef.current && !expandMenuRef.current.contains(event.target)) {
                setExpandActiveApps(false);
            }
        }

        // Make the menu disappear if you resize the screen
        function handleWindowResize() {
            setExpandActiveApps(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("resize", handleWindowResize);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [setExpandActiveApps])

    const renderTaskbarApp = (app, isActive, setActiveApp) => {
        const appIcon = matchIcon(app)
        return (
            <nav
                className={`active-apps--app ${isActive ? "active" : ""}`}
                onClick={() => setActiveApp(app)}
            >
                {appIcon && <img src={appIcon} alt={app} />}
                <h4>{app}</h4>
            </nav>
        )
    }

    const renderTaskbarExpandMenuApps = (app, index) => {
        const appIcon = matchIcon(app);
        const shouldAnimate = !prevExpandActiveApps.current && expandActiveApps;

        return (
            <nav key={index} className={`active-apps--app ${shouldAnimate ? 'animate' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                {appIcon && <img src={appIcon} alt={app} />}
                <h4>{app}</h4>
            </nav>
        );
    };

    const handleOpenedFolders = (app) => {
        const folderIcon = matchFolderIcon(app)
        return (
            <nav
                onClick={() => setActiveApp(app)}
                className="active-apps__opened-folders--folder"
            >
                {folderIcon && <img src={folderIcon} alt={app} />}
                <h4>{app}</h4>
            </nav>
        )
    };

    const renderOpenedFoldersApps = (app, index) => {
        const folderIcon = matchFolderIcon(app);
        const shouldAnimate = !prevExpandOpenedFolders.current && expandOpenedFolders;

        return (
            <nav key={index} className={`active-apps__opened-folders--folder ${shouldAnimate ? 'animate' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                {folderIcon && <img src={folderIcon} alt={app} />}
                <h4>{app}</h4>
            </nav>
        );
    };

    useEffect(() => {
        prevExpandActiveApps.current = expandActiveApps;
    }, [expandActiveApps]);

    useEffect(() => {
        const shouldAnimate = !expandActiveApps;
        if (shouldAnimate) {
            const interval = setInterval(() => {
                const sliceLength = taskbarApps.slice(adaptSliceToWidth()).length;

                if (sliceLength > 0) {
                    setCurrentIconIndex((prevIndex) => (prevIndex + 1) % sliceLength);
                }
            }, 2000);

            return () => clearInterval(interval);
        }

    }, [expandActiveApps, taskbarApps, width]);

    return (
        <div className="active-apps">
            {taskbarApps.slice(0, adaptSliceToWidth()).map((app) => {
                const isActive = activeApp === app;

                return (
                    <div key={uuidv4()}>
                        {renderTaskbarApp(app, isActive, setActiveApp)}
                    </div>
                );
            })}
            {taskbarApps.length > adaptSliceToWidth() && (
                <div
                    className="active-apps__expand"
                    onMouseOver={handleExpandActiveApps}
                    onMouseLeave={handleMouseLeaveActiveApps}
                    ref={expandRef}
                >
                    <span
                        className="active-apps__expand-icon"
                    >
                        <TransitionGroup component={null}>
                            <CSSTransition
                                key={uuidv4()}
                                timeout={1000}
                                classNames="fade"
                                unmountOnExit
                            >
                                <div className="icon-wrapper">
                                    {renderTaskbarApp(taskbarApps.slice(adaptSliceToWidth())[currentIconIndex], false, setActiveApp)}
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </span>

                    {expandActiveApps && (
                        <div
                            className="active-apps__expand-menu"
                            ref={expandMenuRef}
                        >
                            {taskbarApps.slice(adaptSliceToWidth()).map((app, index) => (
                                <div key={uuidv4()}>
                                    {renderTaskbarExpandMenuApps(app, index)}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
<>
    {openedFolders.length > 0 && (
        <nav
            className="active-apps__opened-folders"
            ref={expandFolderRef}
            onMouseOver={handleExpandOpenedFolders}
            onMouseLeave={handleMouseLeaveOpenedFolders}
        >
            {openedFolders.slice(0, 1).map((folder) => handleOpenedFolders(folder))}

            {openedFolders.length > 1 && expandOpenedFolders && (
                <div
                    className="active-apps__opened-folders--expand-menu"
                    ref={expandFolderMenuRef}
                >
                    {openedFolders.slice(1).map((folder) => renderOpenedFoldersApps(folder))}
                </div>
            )}
        </nav>
    )}
</>
        </div>
    );
};

export default ActiveApps