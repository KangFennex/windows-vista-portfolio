import "./Viewer.scss";
import {
    MdCropSquare,
    MdOutlineClose
} from "react-icons/md";
import { VscChromeMinimize } from "react-icons/vsc";
import logo from "../../../assets/start-menu/Renard-logo.png";

const Viewer = ({ children, handleDisplayApp, openedWindow }) => {
    return (
        <div className="viewer">
            <div className="viewer__header">
                <div className="viewer__header--left">
                    <img src={logo} alt="Renard logo" />
                </div>
                <div className="viewer__header--right">
                    <VscChromeMinimize size={10} color="white" className="viewer__header--nav-button"/>
                    <MdCropSquare size={10} color="white" className="viewer__header--nav-button"/>
                    <MdOutlineClose size={10} color="white" className="viewer__header--nav-button"
                    onClick={() => handleDisplayApp(openedWindow)}
                    />
                </div>
            </div>
            <div className="viewer__content">
                {children}
            </div>
        </div>
    );
}

export default Viewer;