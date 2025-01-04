import "./ActiveApps.scss";
import { useState, useEffect, useRef } from "react";
import { taskbarIcons } from "../../taskbar/taskbar-components/taskbarIcons";
import calcWindowSize from "../../utils/calcWindowSize";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

const matchIcon = (appName) => {
    const taskbarIcon = taskbarIcons.find((icon) => icon.value === appName);
    return taskbarIcon ? taskbarIcon.icon : null;
};

const ActiveApps = ({ taskbarApps }) => {
    const [activeApp, setActiveApp] = useState(null);
    const { width } = calcWindowSize();
    const [currentIconIndex, setCurrentIconIndex] = useState(0);
    const [expandActiveApps, setExpandActiveApps] = useState(false);
    const expandRef = useRef(null);
    const expandMenuRef = useRef(null);
    const prevExpandActiveApps = useRef(expandActiveApps);

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

    const handleMouseLeave = (e) => {
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
                    onMouseLeave={handleMouseLeave}
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
        </div>
    );
};

export default ActiveApps