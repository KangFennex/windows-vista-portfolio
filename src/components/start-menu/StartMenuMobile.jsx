import "./StartMenuMobile.scss";
import { useState } from "react";
import { programListMobile } from "./startMenuMobilePrograms";

const startMenuMobileApps = (startApp, finishApp) => {

    const [clickedTile, setClickedTile] = useState(null);

    const handleTileClick = (appTitle) => {
        setClickedTile(appTitle);

        setTimeout(() => {
            setClickedTile(null);
        }, 200);
    };

    return programListMobile.slice(startApp, finishApp).map((app) => {
        return (
            <span
                key={app.title}
                className={`start-menu-mobile--tile ${clickedTile === app.title ? 'clicked' : ''}`}
                onClick={() => handleTileClick(app.title)}
            >
                <img alt={app.alt} src={app.src} />
                <h4>{app.title}</h4>
            </span>
        )
    })
};

const StartMenuMobile = () => {

    return (
        <div className="start-menu-mobile">
            <div className="start-menu-mobile__container">
                <div className="start-menu-mobile--tiles row-1">{startMenuMobileApps(0, 6)}</div>
                <div className="start-menu-mobile--tiles row-2">{startMenuMobileApps(6, 11)}</div>
                <div className="start-menu-mobile--tiles row-3">{startMenuMobileApps(11, 17)}</div>
                <div className="start-menu-mobile--tiles row-4">{startMenuMobileApps(17, 26)}</div>
            </div>
        </div>
    )
}

export default StartMenuMobile