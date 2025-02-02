import desktop from "../../../assets/desktop-icons/Display001.ico";
import pc from "../../../assets/desktop-icons/this-pc.png";
import folder from "../../../assets/desktop-icons/Folder197.ico";
import msn from "../../../assets/desktop-icons/MSNIcon.ico";
import word from "../../../assets/desktop-icons/WordIcon.ico";
import about from "../../../assets/desktop-icons/Folder026.ico";
import book from "../../../assets/desktop-icons/Folder212.ico";
import folder1 from "../../../assets/desktop-icons/Folder1.png";
import folder2 from "../../../assets/desktop-icons/Folder2.png";
import folder3 from "../../../assets/desktop-icons/Folder3.png";

const desktopIcons = [
    {
        id: 0,
        icon: pc,
        alt:"This PC",
        value:"This PC",
        type: "directory",
    },
    {
        id: 1,
        icon: folder3,
        alt:"Documents",
        value:"Documents",
        type: "folder",
    },
    {
        id: 3,
        icon: folder2,
        alt:"My tech",
        value:"Tech",
        type: "app",
    },
    {
        id: 4,
        icon: folder3,
        alt:"Projects",
        value:"Projects",
        type: "folder",
    },
    {
        id: 2,
        icon: msn,
        alt:"MSN",
        value:"MSN",
        type: "app",
    },
];

export default desktopIcons