import "./ActiveApps.scss";
import { useState } from "react";
import { taskbarIcons } from "../../taskbar/taskbar-components/taskbarIcons";

const matchIcon = (appName) => {
    const taskbarIcon =  taskbarIcons.find((icon) => icon.value === appName);
    return taskbarIcon ? taskbarIcon.icon : null;
};

const renderTaskbarApp = (app, isActive, handleRemoveTaskbarApp, setActiveApp) => {
    const appIcon = matchIcon(app)

    return (
        <nav 
            className={`active-apps-app ${isActive ? "active" : ""}`}
            onClick={() => {
                handleRemoveTaskbarApp(app);
                setActiveApp(app);
            }}
        >
            {appIcon && <img src={appIcon}  alt={app} />}
            <h4>{app}</h4>
        </nav>
    )
}

const ActiveApps = ({ taskbarApps, handleRemoveTaskbarApp}) => {
    const [activeApp, setActiveApp] = useState(null);

    return (
        <div className="active-apps">
            {taskbarApps.slice(0, 5).map((app, index) => {
                const isActive = activeApp === app;
                return (
                    <div key={index}>
                        {renderTaskbarApp(app, isActive, handleRemoveTaskbarApp, setActiveApp)}
                    </div>
                );
            })}
        </div>
    );
};

export default ActiveApps