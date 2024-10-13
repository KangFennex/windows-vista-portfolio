import "./ShortcutsApps.scss";
import { MdOutlineNavigateNext } from "react-icons/md";
import { taskbarIcons } from "../taskbar-components/taskbarIcons";
import calcWindowSize from "../../utils/calcWindowSize";

const ShortcutsApps = ({ shortcutsExpand, setShortcutsExpand, handleAddTaskbarApps }) => {
    const { width } = calcWindowSize();

    const getVisibleIconsRange = () => {
        if (width <= 750) return 2;
        if (width <= 1000) return 4;
        return 6
    }

    const handleShortcutsExpand = () => {
        setShortcutsExpand(!shortcutsExpand)
    }

    return (
        <>
            {taskbarIcons.slice(0, getVisibleIconsRange()).map((icon) => {
                return (
                    <div
                        key={icon.value}
                        className="taskbar__icons--icon"
                        onClick={() => handleAddTaskbarApps(icon.value)}>
                        <img
                            alt={icon.alt}
                            src={icon.icon}
                            value={icon.value}
                        />
                    </div>
                )
            })}
            <div className={`taskbar__icons--expand-arrows ${shortcutsExpand ? "expanded" : ""}`}
                onClick={handleShortcutsExpand}
            >
                <MdOutlineNavigateNext size={15} color="white"
                    className="taskbar__icons--expand-arrows--arrow"
                />
                <MdOutlineNavigateNext size={15} color="white"
                    className="taskbar__icons--expand-arrows--arrow"
                />
                <nav>
                    {shortcutsExpand && (
                        <div
                            className="taskbar__icons--expanded-icons"
                        >
                            {taskbarIcons.slice(getVisibleIconsRange(), taskbarIcons.length).map((icon) => {
                                return (
                                <div
                                key={icon.value}
                                className="taskbar__icons--expanded-icons--icon"
                                onClick={() => handleAddTaskbarApps(icon.value)}
                            >
                                <img
                                    alt={icon.alt}
                                    src={icon.icon}
                                    value={icon.value}
                                />
                                <h4>{icon.value}</h4>
                            </div>
)})}
                        </div>
                    )}
                </nav>
            </div>
        </>
    )
}

export default ShortcutsApps;

