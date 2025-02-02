import "./Folder.scss";
import { useState } from "react";
import {
    MdCropSquare,
    MdOutlineClose
} from "react-icons/md";
import { VscChromeMinimize } from "react-icons/vsc";
import {
    HiArrowSmLeft,
    HiOutlineArrowSmRight,
    HiRefresh,
} from "react-icons/hi";
import { VscSearch } from "react-icons/vsc";
import {
    GiTargetDummy,
    GiBurningDot,
} from "react-icons/gi";
import {
    IoMdArrowDropright,
    IoMdArrowDropdown,
} from "react-icons/io";
import { BsFiles } from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";
import { PiFloppyDiskBackLight } from "react-icons/pi";
import desktopIcons from "../../desktop/components/desktopIcons";
import folderItems from "../../content/constants";
import { v4 as uuidv4 } from "uuid";

const ITEMS = ["Desktop", "Documents", "Projects", "Tech"];

const NavigationList = ({ openFolder, setOpenFolder, setDirectory }) => {

    const renderFolderContent = (folder, className) => {
        if (!folder) {
            return <div>No links available for {openFolder}</div>;
        }

        return (
            <div className={className}>
                {folder.content.map((contentItem) => (
                    <span
                        key={contentItem.value}
                        className="folder__links--link"
                        onClick={() => setDirectory(contentItem.value)}
                    >
                        {contentItem.value === "Tech" && <img src={contentItem.icon} alt={contentItem.value} />}
                        <h4>{contentItem.value}</h4>
                    </span>
                ))}
            </div>
        );
    };

    const renderLinks = (item) => {
        if (item === "Desktop") {
            return (
                <div className="folder__links--desktop">
                    {desktopIcons.map((icon) => (
                        icon.type === "folder" && (
                            <span
                                key={uuidv4()}
                                onClick={() => setDirectory(icon.value)}
                            >
                                <h4>{icon.value}</h4>
                            </span>
                        )
                    ))}
                </div>
            );

        } else {
            const folder = folderItems.find(f => f.value === item);
            const className = `folder__links--${item.toLowerCase()}`;
            return renderFolderContent(folder, className);
        }
    };

    const handleClick = (item) => {
        setOpenFolder((prev) => (prev === item ? null : item));
    };

    return (
        <div>
            {ITEMS.map((item, index) => (
                <div key={index}>
                    <nav
                        className="folder__content--directory-link"
                        onClick={() => handleClick(item)}
                        role="button"
                        aria-expanded={openFolder === item}
                    >
                        {openFolder === item ? (
                            <IoMdArrowDropdown size={15} />
                        ) : (
                            <IoMdArrowDropright size={15} />
                        )}
                        <h4>{item}</h4>
                    </nav>
                    {openFolder === item && <div className="folder__links">{renderLinks(item)}</div>}
                </div>
            ))}
        </div>
    );
};

const FolderButtons = ({ handleDisplayApp, folderName }) => (
    <nav className="folder__buttons">
        <div>
            <span><VscChromeMinimize size={13} /></span>
            <span><MdCropSquare size={10} /></span>
            <span><MdOutlineClose
                size={11}
                onClick={() => { handleDisplayApp(folderName) }}
            /></span>
        </div>
    </nav>
);

const FolderNav = ({ folderName }) => (
    <nav className="folder__nav">
        <span className="folder__nav--arrows">
            <HiArrowSmLeft size={20} className="folder__nav--arrows-arrow" />
            <HiOutlineArrowSmRight size={20} className="folder__nav--arrows-arrow" />
        </span>
        <span className="folder__nav--directory">
            <div>
                <GiTargetDummy size={12} />
            </div>
            <div>
                <span><IoMdArrowDropright size={15} /><h4>Kangkm</h4></span>
                <span>
                    <IoMdArrowDropright size={15} />
                    <h4>{folderName}</h4>
                </span>
            </div>
            <div>
                <HiRefresh size={14} />
            </div>
        </span>
        <span className="folder__nav--search">
            <input placeholder="Search" />
            <VscSearch size={12} className="folder__nav--search-icon" />
        </span>
    </nav>
);

const FolderOptions = () => (
    <nav className="folder__content--options options">
        <span>
            <BsFiles size={13} />
            <h4>Organise</h4>
            <IoMdArrowDropdown size={10} />
        </span>
        <span>
            <AiOutlinePicture size={13} />
            <h4>Views</h4>
            <IoMdArrowDropdown size={10} />
        </span>
        <span>
            <PiFloppyDiskBackLight size={13} />
            <h4>Save Search</h4>
            <IoMdArrowDropdown size={10} />
        </span>
        <span>
            <GiBurningDot size={13} />
            <h4>Burn</h4>
            <IoMdArrowDropdown size={10} />
        </span>
    </nav>
);

const FolderFiles = ({ folderName }) => {
    const folder = folderItems.find((item) => item.value === folderName);

    return (
        <nav className="folder__content--files files">
            {!folder || !Array.isArray(folder.content) ? (
                <div>No files found</div>
            ) : (
                folder.content.map((file) => (
                    <div key={uuidv4()} className="folder__content--files-file">
                        <img src={file.icon} alt={file.value} />
                        <h4>{file.value}</h4>
                    </div>
                ))
            )}
        </nav>
    );
};



const Folder = ({ handleDisplayApp, folderName }) => {
    const [openFolder, setOpenFolder] = useState("");
    const [directory, setDirectory] = useState("");

    return (
        <div className="folder">
            <div className="folder__container">
                <FolderButtons
                    handleDisplayApp={handleDisplayApp}
                    folderName={folderName}
                />
                <FolderNav
                    folderName={folderName}
                />
                <div className="folder__content">
                    <FolderOptions />
                    <div className="folder__content--directory directory">
                        <nav className="folder__content--directory-links">
                            <NavigationList
                                openFolder={openFolder}
                                setOpenFolder={setOpenFolder}
                                setDirectory={setDirectory}
                            />
                        </nav>
                    </div>
                    <div className="folder__content--files files" />
                    <FolderFiles
                        directory={directory}
                        folderName={folderName}
                    />
                </div>
            </div>
        </div>
    );
};

export default Folder