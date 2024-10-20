import calcWindowSize from "../../utils/calcWindowSize";
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
    const { width } = calcWindowSize();

    const getVisibleTrayIconsRange = () => {
        if (width <= 750) return 2;
        if (width <= 1000) return 3;
        return 4
    }

    return (
        <div className="tray-icons">
            {trayIconsList.slice(0, getVisibleTrayIconsRange()).map((icon, index) => (
                <span key={index}>
                    {renderTrayIcons(icon)}
                </span>
            ))}
        </div>
    );
}

export default TrayIcons