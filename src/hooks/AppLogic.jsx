import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useAppLogic = () => {
    const [displayMsn, setDisplayMsn] = useState(false);
    const [displayTech, setDisplayTech] = useState(false);
    const [displayDocuments, setDisplayDocuments] = useState(false);
    const [displayProjects, setDisplayProjects] = useState(false);
    const [displayAbout, setDisplayAbout] = useState(false);
    const [displayFeatures, setDisplayFeatures] = useState(false);
    const [openedFolders, setOpenedFolders] = useState([]);
    const [openedPdfs, setOpenedPdfs] = useState([]);
    const [activeTab, setActiveTab] = useState(null);
    const [folderPositions, setFolderPositions] = useState({
        Documents: { x: 0, y: -200 },
        Tech: { x: 0, y: -200 },
        MSN: { x: 0, y: -200 },
        Projects: { x: 0, y: -200 },
        Features: { x: 0, y: -200 },
        About: { x: 0, y: -100 },
    });

    const handleDisplayPdf = (pdf) => {
        if (!openedPdfs.includes(pdf)) {
            setOpenedPdfs([...openedPdfs, pdf]);
        }
        setActiveTab(pdf);
    };

    const handleActiveTab = (pdf) => {
        setActiveTab(pdf);
    };

    const handleCloseTab = (pdf) => {
        const closedIndex = openedPdfs.indexOf(pdf);

        if (activeTab === pdf) {
            if (openedPdfs.length > 1) {
                const newActiveTab = openedPdfs[closedIndex === 0 ? 1 : 0];
                setActiveTab(newActiveTab);
            } else {
                setActiveTab(null);
            }
        }

        setOpenedPdfs((prev) => prev.filter((p) => p !== pdf));
    };

    const handleDisplayApp = (app) => {
        const offsetX = 20;
        const offsetY = -20;
        const newPosition = {
            x: folderPositions[app].x + offsetX,
            y: folderPositions[app].y + offsetY,
        };

        setFolderPositions((prev) => ({
            ...prev,
            [app]: newPosition,
        }));

        if (app === "MSN") {
            setDisplayMsn((prev) => !prev);
        } else if (app === "Tech") {
            setDisplayTech((prev) => !prev);
        } else if (app === "Documents") {
            setDisplayDocuments((prev) => !prev);
        } else if (app === "Projects") {
            setDisplayProjects((prev) => !prev);
        } else if (app === "About") {
            setDisplayAbout((prev) => !prev);
        } else if (app === "Features") {
            setDisplayFeatures((prev) => !prev);
        }

        setOpenedFolders((prev) => {
            if (prev.includes(app)) {
                return prev.filter((folder) => folder !== app);
            } else {
                return [...prev, app];
            }
        });

        if (!displayMsn && !displayTech && !displayDocuments && !displayProjects) {
            setFolderPositions({
                Documents: { x: 0, y: -200 },
                Tech: { x: 0, y: -200 },
                MSN: { x: 0, y: -200 },
                Projects: { x: 0, y: -200 },
            });
        }
    };

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
    
    const DesktopPdf = ({ pdf, handleDisplayPdf }) => {
        return (
            <div className="desktop__main__icon"
                key={uuidv4()}
                onDoubleClick={() => handleDisplayPdf(pdf.value)}
            >
                <img src={pdf.icon} alt={pdf.alt} />
                <p>{pdf.value}</p>
            </div>
        )
    };

    return {
        displayMsn,
        displayTech,
        displayDocuments,
        displayProjects,
        displayAbout,
        displayFeatures,
        openedFolders,
        openedPdfs,
        activeTab,
        folderPositions,
        handleDisplayPdf,
        handleActiveTab,
        handleCloseTab,
        handleDisplayApp,
        setActiveTab,
        DesktopIcon,
        DesktopPdf,
    };
};