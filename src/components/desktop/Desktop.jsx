import "./Desktop.scss";
import desktopIcons from "./components/desktopIcons";
import desktopPdfs from "./components/desktopPdfs";
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
import { useAppLogic } from "../../hooks/AppLogic";
import Resume from "../content/resume/Resume";

const Desktop = ({ displayMsn, displayTech, handleDisplayApp, displayDocuments, displayProjects, folderPositions, handleDisplayPdf, handleCloseTab, openedPdfs, activeTab, setActiveTab, handleActiveTab }) => {

    const { DesktopIcon, DesktopPdf } = useAppLogic();

    return (
        <div className="desktop">

            <section className="desktop__main">

                <div className="desktop__main__icons">

                    {desktopIcons.map(icon => (
                        <Draggable
                            key={uuidv4()}>
                            <div>
                                <DesktopIcon
                                    icon={icon}
                                    handleDisplayApp={handleDisplayApp}
                                />
                            </div>
                        </Draggable>
                    ))}

                    {desktopPdfs.map(pdf => (
                        <Draggable
                            key={uuidv4()}>
                            <div>
                                <DesktopPdf
                                    pdf={pdf}
                                    handleDisplayPdf={handleDisplayPdf}
                                />
                            </div>
                        </Draggable>
                    ))}

                </div>

                <div className="desktop__main__pdfs">

                    {openedPdfs.length > 0 && (
                        <Draggable
                            key={uuidv4()}
                            defaultPosition={{ x: 100, y: -400 }}
                        >
                            <div style={{ position: "absolute" }}>
                                <Pdf
                                    handleCloseTab={handleCloseTab}
                                    openedPdfs={openedPdfs}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                    handleActiveTab={handleActiveTab}
                                >
                                    {openedPdfs.map((pdf) => (
                                        <div
                                            key={pdf}
                                            style={{
                                                display:
                                                    activeTab === pdf
                                                        ? "block"
                                                        : "none",
                                            }}
                                        >
                                            {pdf === "About" && <About />}
                                            {pdf === "Features" && <Features />}
                                            {pdf === "Resume" && <Resume />}
                                        </div>
                                    ))}
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

{/*
                    {displayMsn && (
                        <div className="desktop__msn">
                            <Msn handleDisplayApp={handleDisplayApp} />
                        </div>
                    )}

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