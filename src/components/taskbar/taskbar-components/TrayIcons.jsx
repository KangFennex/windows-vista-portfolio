import calcWindowSize from "../../utils/calcWindowSize";
import "./TrayIcons.scss";
import { trayIconsList } from "./taskbarIcons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsThreeDotsVertical } from "react-icons/bs";

const springFromBottom = {
    hidden: {
        y: 800,
    },
    visible: {
        y: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            mass: 0.4,
            damping: 8,
        },
    },
    exit: {
        y: 800,
        transition: {
            type: "spring",
            stiffness: 50,
            mass: 0.4,
            damping: 8,
        },
    },
};

const renderTrayIcons = (icon) => {
    return (
        <span
            key={icon.value}
        >
            <img
                alt={icon.alt}
                src={icon.icon}
                value={icon.value}
            />
        </span>
    )
}

const renderExpandedTrayIcons = (icon) => {
    return (
        <span
            key={icon.value}
            className="tray-icons__expanded-icons--icon"
        >
            <img
                alt={icon.alt}
                src={icon.icon}
                value={icon.value}
            />
        </span>
    )
}

const TrayIcons = () => {
    const [expandTrayIcons, setExpandTrayIcons] = useState(false);
    const { width } = calcWindowSize();

    const handleExpandTrayIcons = () => {
        setExpandTrayIcons(!expandTrayIcons)
    }

    const getVisibleTrayIconsRange = () => {
        if (width <= 750) return 2;
        if (width <= 1000) return 3;
        return 5
    }

    return (
        <div className="tray-icons">
            <AnimatePresence>
                {expandTrayIcons && (
                    <motion.div
                        variants={springFromBottom}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="tray-icons__expanded-icons"
                    >
                        {trayIconsList.slice(getVisibleTrayIconsRange(), trayIconsList.length).map((icon) => (
                            renderExpandedTrayIcons(icon)
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            {trayIconsList.slice(0, getVisibleTrayIconsRange()).map((icon) => (
                renderTrayIcons(icon)
            ))}
            <span
                className={`${expandTrayIcons ? "expanded" : ""}`}
            ><BsThreeDotsVertical
                    size={15}
                    className="tray-icons__expand-icon"
                    onClick={handleExpandTrayIcons}
                /></span>
        </div>
    );
}

export default TrayIcons