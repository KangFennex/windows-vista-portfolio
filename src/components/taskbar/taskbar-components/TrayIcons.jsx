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

    const getVisibleIconsRange = () => {
        if (width <= 750) return 2;
        if (width <= 1000) return 5;
        return 6
    }

    return (
        <div className="tray-icons">
            {trayIconsList.slice(0,getVisibleIconsRange()).map((icon, index) => (
                <span key={index}>
                    {renderTrayIcons(icon)}
                </span>
            ))}
        </div>
    );
}

export default TrayIcons