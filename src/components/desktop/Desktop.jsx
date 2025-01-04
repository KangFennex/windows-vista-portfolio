import "./Desktop.scss";
import desktopIcons from "../desktop/desktop-components/desktop-icons/desktopIcons";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
import Msn from "../apps/Msn";
import TodoApp from "../widgets/TodoApp";
import WeatherApp from "../widgets/WeatherApp";
import StickyNote from "../widgets/StickyNote";
import Winamp from "../widgets/Winamp";

const DesktopIcon = ({ icon, handleDisplayApp }) => {
    return (
        <div className="desktop__main__icon"
            key={uuidv4()}
            onDoubleClick={() => handleDisplayApp(icon.value)}
        >
            <img src={icon.icon} alt={icon.alt} />
            <p>{icon.value}</p>
        </div>
    )
}

const Desktop = ({ displayMsn, handleDisplayApp }) => {

    return (
        <div className="desktop">
            <section className="desktop__main">

                <div>
                    <div className="desktop__main__icons">
                        {desktopIcons.map(icon => (
                            <Draggable
                            key={uuidv4()}
                            >
                                <div>
                                <DesktopIcon icon={icon} handleDisplayApp={handleDisplayApp} />
                                </div>
                            </Draggable>
                        ))}
                    </div>
                </div>


                <div className="desktop__main__apps">
                    {displayMsn && (
                        <div className="desktop__msn">
                            <Msn handleDisplayApp={handleDisplayApp} />
                        </div>

                    )}

                    <div className="desktop__winamp">
                        <Winamp />
                    </div>
                </div>
            </section>

            <section className="desktop__widgets">

                <div className="desktop__weather-app">
                    <WeatherApp />
                </div>

                <div className="desktop__sticky-note">
                    <StickyNote />
                </div>

                <div className="desktop__todo">
                    <TodoApp />
                </div>
            </section>

        </div>
    )
}

export default Desktop