import "./Winamp.scss";
import { useState } from "react";
import Draggable from "react-draggable";
import background from "./widget-components/winamp/skin-img/b.png";
import icon from "./widget-components/winamp/skin-img/icon.png";
import screenIcon from "./widget-components/winamp/skin-img/screenicon.png";
import play from "./widget-components/winamp/skin-img/play.png";
import n from "./widget-components/winamp/skin-img/n.png";
import h from "./widget-components/winamp/skin-img/h.png";
import hit from "./widget-components/winamp/skin-img/hit.png";

const Winamp = () => {

    const [hoverButton1, setHoverButton1] = useState(false);
    const [clickButton1, setClickButton1] = useState(false);

    return (
        <Draggable>
        <div className="winamp">
            <div className="winamp__container">
                <img src={background} alt="winamp background" className="winamp__background" />
                <img src={icon} alt="icons" className="winamp__icon" />
                <img src={screenIcon} alt="screen icon" className="winamp__screen-icon" />
                <img src={n} 
                alt="normal button" 
                className="winamp__n" 
                onMouseOver={() => setHoverButton1(true)} 
                onMouseOut={() => setHoverButton1(false)}
                onMouseDown={() => setClickButton1(true)}
                onMouseUp={() => setClickButton1(false)}
                />
                {hoverButton1 && <img src={h} alt="normal button" className="winamp__h" />}
                {clickButton1 && <img src={hit} alt="normal button" className="winamp__hit" />}
            </div>
        </div>
        </Draggable>
    )
};

export default Winamp;