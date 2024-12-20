import "./ActiveApps.scss";
import { useState, useRef } from "react";
import { taskbarIcons } from "../../taskbar/taskbar-components/taskbarIcons";
import { IoClose } from "react-icons/io5";
import calcWindowSize from "../../utils/calcWindowSize";
import pikachu from "../../../assets/temp/pikachu.png";

const matchIcon = (appName) => {
    const taskbarIcon =  taskbarIcons.find((icon) => icon.value === appName);
    return taskbarIcon ? taskbarIcon.icon : null;
};

const delayDisplayPreview = (app, setActiveApp) => {
    setTimeout(() => {
        setActiveApp(app);
    }, 300)
}

const delayRemovePreview = (setHoveredApp, timeoutRef)  => {
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
        setHoveredApp(null);
    }, 800)
}

const renderTaskbarApp = (app, isActive, hoveredApp, handleRemoveTaskbarApp, setActiveApp, setHoveredApp, width, timeoutRef) => {
    const appIcon = matchIcon(app)

    return (
        <>
        <nav 
            className={`active-apps--app ${width < 750 ? "shrink" : ""} ${isActive ? "active" : ""}`}
            onClick={() => setActiveApp(app)}
            onMouseOver={() => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current)
                }
                delayDisplayPreview(app, setHoveredApp)}}
            onMouseLeave={() => delayRemovePreview(setHoveredApp, timeoutRef)}
        >
            {appIcon && <img src={appIcon}  alt={app} />}
            <h4>{app}</h4>
        </nav>
        <nav 
        className={`active-apps--app--preview ${hoveredApp ? "hovered" : ""}`}
        onMouseOver={() => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }}
        onMouseLeave={() => delayRemovePreview(setHoveredApp, timeoutRef)}
        >
            <div>
                <img alt="Pikachu" src={pikachu} />
                <IoClose 
                size={25} 
                color="red"
                className="active-apps--app--preview-close"
                onClick={() => handleRemoveTaskbarApp(app)}
                />
            </div>
        </nav>
        </>
    )
}

const ActiveApps = ({ taskbarApps, handleRemoveTaskbarApp }) => {
    const [activeApp, setActiveApp] = useState(null);
    const [hoveredApp, setHoveredApp] = useState(null);
    const { width } = calcWindowSize();
    const timeoutRef = useRef(null);

    const adaptSliceToWidth = () => {
        const taskbarMaxWidth = 768; // The max width of the taskbar in px
        const appWidthLarge = 200; // Width of each app when screen width > 750px
        const appWidthSmall = 50;  // Width of each app when screen width <= 750px
    
        if (width > 768) {
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
                        {renderTaskbarApp(app, isActive, isHovered, handleRemoveTaskbarApp, setActiveApp, setHoveredApp, width, timeoutRef)}
                    </div>
                );
            })}
        </div>
    );
};

export default ActiveApps