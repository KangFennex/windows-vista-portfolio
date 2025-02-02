import "./Desktop.scss";
import desktopIcons from "./components/desktopIcons";
import { v4 as uuidv4 } from "uuid";
import Draggable from "react-draggable";
import Msn from "../apps/messenger/Msn";
import TodoApp from "../widgets/TodoApp";
import WeatherApp from "../widgets/WeatherApp";
import StickyNote from "../widgets/StickyNote";
import Winamp from "../widgets/Winamp";
import Folder from "../apps/folder/Folder";
import Window from "../apps/viewer/Viewer";
import Features from "../content/features/features";
import About from "../content/about/About";
import Pdf from "../apps/pdf/Pdf";

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
};

const Desktop = ({ displayMsn, displayTech, handleDisplayApp, displayDocuments, displayProjects, folderPositions, displayAbout, displayFeatures }) => {

    return (
        <div className="desktop">

            <section className="desktop__main">

                <div className="desktop__main__icons">
                    {desktopIcons.map(icon => (
                        <Draggable
                            key={uuidv4()}
                        >
                            <div>
                                <DesktopIcon
                                    icon={icon}
                                    handleDisplayApp={handleDisplayApp} />
                            </div>
                        </Draggable>
                    ))}

                </div>

                <div className="desktop__main__pdfs">

                {displayAbout && (
                        <Draggable
                            key={uuidv4()}
                            defaultPosition={folderPositions.About}
                        >
                            <div style={{ position: "absolute" }}>
                            <Pdf
                                handleDisplayApp={handleDisplayApp}
                                openedPdf="About"
                                displayAbout={displayAbout}
                                displayFeatures={displayFeatures}
                                >
                                <About />
                            </Pdf>
                            </div>
                        </Draggable>
                    )}
                    
                    {displayFeatures && (
                        <Draggable
                            key={uuidv4()}
                            defaultPosition={folderPositions.Features}
                        >
                        <div style={{ position: "absolute" }}>
                            <Pdf
                                handleDisplayApp={handleDisplayApp}
                                openedPdf="Features"
                                displayAbout={displayAbout}
                                displayFeatures={displayFeatures}
                                >
                                <Features />
                            </Pdf>
                        </div>
                        </Draggable>
                    )}

                </div>

                <div className="desktop__main__folders">
                    {displayDocuments && (
                        <Draggable
                            key={uuidv4()}
                            defaultPosition={folderPositions.Documents}
                            style={{ position: "absolute", zIndex: 100 }}
                        >
                            <div className="desktop__documents">
                                <Folder
                                    folderName="Documents"
                                    handleDisplayApp={handleDisplayApp}
                                />
                            </div>
                        </Draggable>
                    )}

                    {displayTech && (
                        <Draggable
                            key={uuidv4()}
                            defaultPosition={folderPositions.Tech}
                            style={{ position: "absolute", zIndex: 5 }}
                        >
                            <div className="desktop__tech">
                                <Folder
                                    folderName="Tech"
                                    handleDisplayApp={handleDisplayApp}
                                />
                            </div>
                        </Draggable>
                    )}

                    {displayProjects && (
                        <Draggable
                            key={uuidv4()}
                            defaultPosition={folderPositions.Projects}
                            style={{ position: "absolute" }}
                        >
                            <div className="desktop__projects">
                                <Folder
                                    folderName="Projects"
                                    handleDisplayApp={handleDisplayApp}
                                />
                            </div>
                        </Draggable>
                    )}
                </div>

                <div className="desktop__main__apps">

                    {displayMsn && (
                        <div className="desktop__msn">
                            <Msn handleDisplayApp={handleDisplayApp} />
                        </div>
                    )}

                    {/*
                    <div className="desktop__winamp">
                        <Winamp />
                    </div>
*/}

                </div>
            </section>

            {/*
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
            */}
        </div>
    )
}

export default Desktop