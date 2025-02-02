import firefox from "../../../assets/icons/Firefox-logo.svg";
import msnIcon from "../../../assets/icons/MSNIcon.ico";
import notepadIcon from "../../../assets/icons/NotepadIcon.ico";
import winamp from "../../../assets/icons/winampIcon.ico";
import diskFolder from "../../../assets/icons/DiskFolder.ico";
import moviesIcon from "../../../assets/icons/MoviesIcon.ico";
import solitaryIcon from "../../../assets/icons/SolitaryIcon.ico";
import wordIcon from "../../../assets/icons/WordIcon.ico";
import nero from "../../../assets/icons/fire-nero.ico";
import daemon from "../../../assets/icons/daemon.ico";
import photoshop from "../../../assets/icons/photoshop.ico";
import limewire from "../../../assets/icons/limewire.ico";
import excel from "../../../assets/icons/excelIcon.ico";
import emule from "../../../assets/icons/emuleIcon.ico";

import mike from "../../../assets/icons/H&D054.ico";
import keyboard from "../../../assets/icons/KB013.ico";
import signal from "../../../assets/icons/Net054.ico";
import sound from "../../../assets/icons/Tray087.ico";
import network from "../../../assets/icons/Tray112.ico";


const taskbarIcons = [
    {
        id: 0,
        icon: firefox,
        alt:"Firefox",
        value:"Firefox",
    },
    {
        id: 1,
        icon: msnIcon,
        alt:"MSN",
        value:"MSN",
    },
    {
        id: 2,
        icon: notepadIcon,
        alt:"Notepad",
        value:"Notepad",
    },
    {
        id: 3,
        icon: winamp,
        alt:"Winamp",
        value: "Winamp",
    },
    {
        id: 4,
        icon: solitaryIcon,
        alt: "Solitary",
        value:"Solitary",
    },
    {
        id: 5,
        icon: moviesIcon,
        alt:"Movies",
        value: "Movies",
    },
    {
        id: 6,
        icon: diskFolder,
        alt:"Disk",
        value: "DVD",
    },
    {
        id: 7,
        icon: wordIcon,
        alt:"Word",
        value: "Word",
    },

    {
        id: 8,
        icon: nero,
        alt:"Nero",
        value: "Nero",
    },
    {
        id: 9,
        icon: daemon,
        alt:"Daemon",
        value: "Daemon",
    },
    {
        id: 10,
        icon: photoshop,
        alt:"Photoshop",
        value: "Photoshop",
    },
    {
        id: 11,
        icon: excel,
        alt:"Excel",
        value: "Excel",
    },
    {
        id: 12,
        icon: emule,
        alt:"Emule",
        value: "Emule",
    },
    {
        id: 13,
        icon: limewire,
        alt:"Limewire",
        value: "Limewire",
    }
]

const trayIconsList = [
    {
        id: 1,
        icon: sound,
        alt:"Sound",
        value: "Sound",
    },
    {
        id: 4,
        icon: network,
        alt:"Network",
        value: "Network",
    },
    {
        id: 1,
        icon: keyboard,
        alt:"Keyboard",
        value: "Keyboard",
    },
    {
        id: 0,
        icon: mike,
        alt:"Mike",
        value: "Mike",
    },
    {
        id: 2,
        icon: signal,
        alt:"Signal",
        value: "Signal",
    },


]

export {taskbarIcons, trayIconsList}