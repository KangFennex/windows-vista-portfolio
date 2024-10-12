import "./TrayIcons.scss";
import { trayIconsList } from "./taskbarIcons";

const renderTrayIcons = (icon) => {
    return (
        <span>
            <img
                alt={icon.alt}
                src={icon.icon}
                value={icon.value}
            />
        </span>
    )
}

const TrayIcons = () => {
    return (
        <div className="tray-icons">
            {trayIconsList.map((icon, index) => (
                <span key={index}>
                    {renderTrayIcons(icon)}
                </span>
            ))}
        </div>
    );
}

export default TrayIcons