import "./ActiveApps.scss";
import { useState } from "react";
import { taskbarIcons } from "../../taskbar/taskbar-components/taskbarIcons";
import calcWindowSize from "../../utils/calcWindowSize";

const matchIcon = (appName) => {
    const taskbarIcon =  taskbarIcons.find((icon) => icon.value === appName);
    return taskbarIcon ? taskbarIcon.icon : null;
};

const renderTaskbarApp = (app, isActive, hoveredApp, handleRemoveTaskbarApp, setActiveApp, setHoveredApp, width) => {
    const appIcon = matchIcon(app)

    return (
        <>
        <nav 
            className={`active-apps-app ${width < 750 ? "shrink" : ""} ${isActive ? "active" : ""}`}
            onClick={() => {
                handleRemoveTaskbarApp(app);
                setActiveApp(app);
            }}
            onMouseOver={() => setHoveredApp(app)}
            // The below does not work at the moment
            onMouseLeave={() => setActiveApp(null)}
        >
            {appIcon && <img src={appIcon}  alt={app} />}
            <h4>{app}</h4>
        </nav>
        <nav className={`active-apps-app--preview ${hoveredApp ? "hovered" : ""}`}>
            <div>
                <h4>I am a preview</h4>
            </div>
        </nav>
        </>
    )
}

const ActiveApps = ({ taskbarApps, handleRemoveTaskbarApp}) => {
    const [activeApp, setActiveApp] = useState(null);
    const [hoveredApp, setHoveredApp] = useState(null);
    const { width } = calcWindowSize();

    const adaptSliceToWidth = () => {
        if (width > 750 ) {
            return [0, 6]
        } else {
            return [0, 2]
        }
    }

    return (
        <div className="active-apps">
            {taskbarApps.slice(...adaptSliceToWidth()).map((app, index) => {
                const isActive = activeApp === app;
                const isHovered = hoveredApp === app;

                return (
                    <div key={index}>
                        {renderTaskbarApp(app, isActive, isHovered, handleRemoveTaskbarApp, setActiveApp, setHoveredApp, width)}
                    </div>
                );
            })}
        </div>
    );
};

export default ActiveApps