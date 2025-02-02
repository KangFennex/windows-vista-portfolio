import { useState, useRef, useEffect } from "react";
import "./Pdf.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaHomeSolid } from "react-icons/lia";
import {
    MdCropSquare,
    MdOutlineClose,
    MdOutlineStarBorder,
} from "react-icons/md";
import { VscSearch } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";
import { PiFloppyDiskBackLight } from "react-icons/pi";
import { IoCloudUploadSharp, IoPrintOutline } from "react-icons/io5";
import { LuShare2 } from "react-icons/lu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { TbTextGrammar } from "react-icons/tb";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";
import { HiMagnifyingGlassPlus, HiOutlineMagnifyingGlassMinus } from "react-icons/hi2";

const Pdf = ({ children, handleCloseTab, openedPdfs, activeTab, handleActiveTab }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [pages, setPages] = useState([]);
    const contentRef = useRef(null);

    // Split content into pages
    useEffect(() => {
        if (contentRef.current) {
            const contentHeight = contentRef.current.scrollHeight;
            const pageHeight = 340;
            const totalPages = Math.ceil(contentHeight / pageHeight);

            const newPages = [];
            for (let i = 0; i < totalPages; i++) {
                newPages.push(
                    <div
                        key={i}
                        style={{
                            height: `${pageHeight}px`,
                            overflow: "hidden",
                        }}
                    >
                        {children}
                    </div>
                );
            }
            setPages(newPages);
        }
    }, [children]);

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1));
    };

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    const handleTabs = () => {
        return openedPdfs.map((pdf) => (
            <div
                key={pdf}
                className={`pdf__header__tabs--tab ${activeTab === pdf ? "activeTab" : ""}`}
                onClick={() => handleActiveTab(pdf)}
            >
                <MdOutlineStarBorder size={17} className="pdf__header__tabs--tab-star" />
                <h2>{pdf}</h2>
                {activeTab === pdf && (
                    <MdOutlineClose
                        size={15}
                        className="pdf__header__tabs--tab-close"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCloseTab(pdf);
                        }}
                    />
                )}
            </div>
        ));
    };

    const renderTools = () => {
        const tools = ["All tools", "Edit", "Convert", "E-Sign"];

        return tools.map((tool, index) => (
            <div key={index} className="pdf__tools--tool">{tool}</div>
        ));
    };

    return (
        <div className="pdf">
            <div className="pdf__container">
                <header className="pdf__header">
                    <div className="pdf__header__menu">
                        <nav className="pdf__header__menu--icon">
                            <GiHamburgerMenu size={20} />
                        </nav>
                        <nav className="pdf__header__menu--home">
                            <LiaHomeSolid size={20} />
                        </nav>
                    </div>

                    <div className="pdf__header__tabs">
                        {handleTabs()}
                    </div>

                    <div className="pdf__header__buttons">
                        <VscChromeMinimize size={20} color="white" className="pdf__header__buttons--button" />
                        <MdCropSquare size={20} color="white" className="pdf__header__buttons--button" />
                        <MdOutlineClose
                            size={20} color="white"
                            className="pdf__header__buttons--button"
                            onClick={() => handleCloseTab(activeTab)}
                        />
                    </div>
                </header>

                <section className="pdf__tools">
                    {renderTools()}
                    <div className="pdf__tools--tool"><VscSearch size={17} /></div>
                    <div className="pdf__tools--tool"><PiFloppyDiskBackLight size={17} /></div>
                    <div className="pdf__tools--tool"><IoCloudUploadSharp size={17} /></div>
                    <div className="pdf__tools--tool"><IoPrintOutline size={17} /></div>
                    <div className="pdf__tools--tool"><LuShare2 size={17} /></div>
                    <div className="pdf__tools--tool"><HiOutlineDotsHorizontal size={17} /></div>
                </section>

                <section className="pdf__side-panel">
                    <div className="pdf__side-panel--tool"><TbTextGrammar size={17} /></div>
                    <div className="pdf__side-panel--tool"><HiOutlineDotsHorizontal size={17} /></div>
                    <div className="pdf__side-panel--tool">{currentPage + 1}</div>
                    <div className="pdf__side-panel--tool">{pages.length}</div>
                    <div className="pdf__side-panel--tool" onClick={handlePrevPage}>
                        <MdKeyboardArrowUp size={17} />
                    </div>
                    <div className="pdf__side-panel--tool" onClick={handleNextPage}>
                        <MdKeyboardArrowDown size={17} />
                    </div>
                    <div className="pdf__side-panel--tool"><IoMdRefresh size={17} /></div>
                    <div className="pdf__side-panel--tool"><HiMagnifyingGlassPlus size={17} /></div>
                    <div className="pdf__side-panel--tool"><HiOutlineMagnifyingGlassMinus size={17} /></div>
                </section>

                <section className="pdf__content" ref={contentRef}>
                    {pages[currentPage]}
                </section>
            </div>
        </div>
    );
};

export default Pdf;