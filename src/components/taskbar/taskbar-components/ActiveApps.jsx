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
            onMouseLeave={() => setHoveredApp(null)}
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

const ActiveApps = ({ taskbarApps, handleRemoveTaskbarApp }) => {
    const [activeApp, setActiveApp] = useState(null);
    const [hoveredApp, setHoveredApp] = useState(null);
    const { width } = calcWindowSize();

    const adaptSliceToWidth = () => {
        const taskbarMaxWidth = 1000; // The max width of the taskbar in px
        const appWidthLarge = 200; // Width of each app when screen width > 750px
        const appWidthSmall = 50;  // Width of each app when screen width <= 750px
    
        if (width > 750) {
            // Calculate how many apps fit into the taskbar with large app width
            const availableSpace = Math.min(width, taskbarMaxWidth);
            const numberOfApps = Math.floor(availableSpace / appWidthLarge);
            return [0, numberOfApps];
        } else {
            // Calculate how many apps fit into the taskbar with small app width
            const availableSpace = Math.min(width, taskbarMaxWidth);
            const numberOfApps = Math.floor(availableSpace / appWidthSmall);
            return [0, numberOfApps];
        }
    };

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