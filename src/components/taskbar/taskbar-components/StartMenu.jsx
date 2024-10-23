import "./StartMenu.scss";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { renderProgramList, programListLong } from "./startmenuPrograms";
import { FaPowerOff } from "react-icons/fa";
import { IoLockClosedSharp } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";

const shortcutList1 = ["Michel", "Documents", "Pictures", "Music", "Games"];
const shortcutList2 = ["Recent", "Computer", "Network", "Connect To"];
const shortcutList3 = ["Control Panel", "Default Program", "Help and Support"];

const renderShortcutList = (list) => {
    return list.map((listEl, i) => {
        return (
            <h4 key={i}>{listEl}</h4>
        );
    });
};

const StartMenu = ({ setDisplayStartMenu }) => {
    const [expandAllProgram, setExpandAllProgram] = useState(false)
    const [powerSize, setPowerSize] = useState(15);
    const [lockSize, setLockSize] = useState(15);
    const [arrowSize, setArrowSize] = useState(20);

    const [searchTerm, setSearchTerm] = useState(null);
    const [apps, setApps] = useState(null);

    const menuRef = useRef();

    const handleExpandAllProgram = () => {
        setExpandAllProgram(!expandAllProgram)
    }

    const handleClick = (setSizeFunc, originalSize, newSize) => {
        setSizeFunc(newSize);
        setTimeout(() => {
            setSizeFunc(originalSize);
        }, 100);
    };

    // Function to handle the search input
    const handleSearchInput = (input) => {
        setSearchTerm(input);

        const filteredApps = programListLong.filter((app) =>
            app.title.toLowerCase().includes(input.toLowerCase())
        );

        setApps(filteredApps.length ? filteredApps : null);
    };

    // Function to remove Start Menu if user clicks outside or resize window
    useEffect(() => {
        function handleClickOutside(event) {

            // Check if the click target contains the icon element
            const iconEl = document.querySelector(".taskbar__start-menu");
            if (iconEl && iconEl.contains(event.target)) {
                return;
            }

            // Make the menu disappear if you click outside of it
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setDisplayStartMenu(false);
            }
        }

        // Make the menu disappear if you resize the screen
        function handleWindowResize() {
            setDisplayStartMenu(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("resize", handleWindowResize);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [setDisplayStartMenu])

    return (
        <div
            className="start-menu"
            ref={menuRef}
        >
            <div className="start-menu__container">
                <div className="programs">

                    {!searchTerm && (
                        <>
                            {/* Most used programs */}
                            <span className={`programs__container ${expandAllProgram ? "expanded" : ""}`}>
                                {renderProgramList(expandAllProgram)}
                            </span>

                            {/* Expand to all programs */}
                            <span className="programs__all-programs" onClick={handleExpandAllProgram}>
                                {!expandAllProgram ? (
                                    <>
                                        <MdArrowRight size={25} className="all-programs-arrow" />
                                        <h4>All Programs</h4>
                                    </>
                                ) : (
                                    <>
                                        <MdArrowLeft size={25} className="all-programs-arrow" />
                                        <h4>Back</h4>
                                    </>
                                )}
                            </span>
                        </>
                    )}
                    {/* Search research */}
                    {searchTerm && (
                        <span className="programs__search-results">
                            {apps && apps.map((app, index) => (
                                <div key={index} className="programs__search-results--result">
                                    <div>
                                        <img src={app.src} alt={app.title} />
                                    </div>
                                    <h3>{app.title}</h3>
                                </div>
                            ))}
                        </span>
                    )}
                </div>


                <div className="avatar"></div>
                <div className="shortcuts">
                    <div>{renderShortcutList(shortcutList1)}</div>
                    <div>{renderShortcutList(shortcutList2)}</div>
                    <div>{renderShortcutList(shortcutList3)}</div>
                </div>

                {/* Search Function */}
                <div className="search">
                    <input
                        value={searchTerm}
                        placeholder="Start Search"
                        onChange={(e) => handleSearchInput(e.target.value)}
                    />
                </div>

                <div className="power">

                    {/* Power Off Button */}
                    <span onClick={() => handleClick(setPowerSize, 15, 13)}>
                        <FaPowerOff size={powerSize} color="white" />
                    </span>

                    {/* Lock Button */}
                    <span onClick={() => handleClick(setLockSize, 15, 13)}>
                        <IoLockClosedSharp size={lockSize} color="white" />
                    </span>

                    {/* Arrow Button */}
                    <span>
                        <MdArrowRight size={arrowSize} color="white" />
                    </span>
                </div>
            </div>
        </div >
    )
}

export default StartMenu