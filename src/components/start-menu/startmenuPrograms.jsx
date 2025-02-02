import "./StartMenuMobile.scss";
import emule from "../../assets/icons/EmuleIcon.ico";
import excel from "../../assets/icons/excelIcon.ico";
import frontpage from "../../assets/icons/frontpageIcon.ico";
import limewire from "../../assets/icons/limewire.ico";
import mahjong from "../../assets/icons/MahjongIcon.ico";
import msn from "../../assets/icons/MSNIcon.ico";
import movies from "../../assets/icons/MoviesIcon.ico";
import vlc from "../../assets/icons/vlcIcon.ico";
import winamp from "../../assets/icons/winampIcon.ico";
import word from "../../assets/icons/WordIcon.ico";
import folder from "../../assets/icons/FolderIcon.ico";
import nero from "../../assets/icons/fire-nero.ico";
import daemon from "../../assets/icons/daemon.ico";
import photoshop from "../../assets/icons/photoshop.ico";
import flash from "../../assets/icons/flash.ico";
import winrar from "../../assets/icons/winrar.ico";
import skype from "../../assets/icons/skype.svg";
import norton from "../../assets/icons/norton.svg";
import ccleaner from "../../assets/icons/ccleaner.png";
import winzip from "../../assets/icons/WinZip_2006.png";
import firefox from "../../assets/icons/firefox.svg";
import irfanview from "../../assets/icons/irfanview.ico";
import real from "../../assets/icons/RealPlayer_2004.svg";
import quick from "../../assets/icons/quicktime.png";
import acrobat from "../../assets/icons/Acrobat_2006.svg";

const renderProgramList = (programL) => {

    const programList = programL ? programListLong : programListShort

    return (
        programList.map((program) => {
            return (
                <>
                    <span className="start-menu__program">
                        <img alt={program.alt} src={program.src} />
                        <h3>{program.title}</h3>
                    </span>
                </>
            )
        })
    )
}

const programListShort = [
    {
        alt: "Emule",
        title: "Emule",
        src: emule,
    },
    {
        alt: "Excel",
        title: "Excel",
        src: excel,
    },
    {
        alt: "FrontPage",
        title: "FrontPage",
        src: frontpage,
    },
    {
        alt: "LimeWire",
        title: "LimeWire",
        src: limewire,
    },
    {
        alt: "Mahjong",
        title: "Mahjong",
        src: mahjong,
    },
    {
        alt: "MSN Messenger",
        title: "MSN Messenger",
        value: "MSN",
        src: msn,
    },
    {
        alt: "Movies",
        title: "Movies",
        src: movies,
    },
    {
        alt: "VLC Media Player",
        title: "VLC Media Player",
        src: vlc,
    },
    {
        alt: "Winamp",
        title: "Winamp",
        src: winamp,
    },
    {
        alt: "Word",
        title: "Word",
        src: word,
    },
];

const programListLong = [
    {
        alt: "Windows Calendar",
        title: "Windows Calendar",
        src: folder,
        app: folder,
    },
    {
        alt: "Windows Defender",
        title: "Windows Defender",
        src: folder,
    },
    {
        alt: "Microsoft Office Suite 2007",
        title: "Microsoft Office Suite 2007",
        src: folder,
    },
    {
        alt: "Windows DVD Maker",
        title: "Windows DVD Maker",
        src: folder,
    },
    {
        alt: "MSN Messenger",
        title: "MSN Messenger",
        src: msn,
    },
    {
        alt: "Norton Antivirus",
        title: "Norton Antivirus",
        src: norton,
    },
    {
        alt: "Windows Movie Maker",
        title: "Windows Movie Maker",
        src: folder,
    },
    {
        alt: "Windows Updates",
        title: "Windows Updates",
        src: folder,
    },
    {
        alt: "Daemon",
        title: "Daemon",
        src: daemon,
    },
    {
        alt: "Emule",
        title: "Emule",
        src: emule,
    },
    {
        alt: "Adobe Flash Player",
        title: "Adobe Flash Player",
        src: flash,
    },
    {
        alt: "Nero Burning ROM",
        title: "Nero",
        src: nero,
    },
    {
        alt: "Limewire",
        title: "Limewire",
        src: limewire,
    },
    {
        alt: "Games",
        title: "Games",
        src: folder,
    },
    {
        alt: "Photoshop",
        title: "Photoshop",
        src: photoshop,
    },
    {
        alt: "Skype",
        title: "Skype",
        src: skype,
    },
    {
        alt: "Winamp",
        title: "Winamp",
        src: winamp,
    },
    {
        alt: "WinRar",
        title: "WinRar",
        src: winrar,
    },
    {
        alt: "VLC Media Player",
        title: "VLC Media Player",
        src: vlc,
    },
    {
        alt: "Utilities",
        title: "Utilities",
        src: folder,
    },
    {
        alt: "CCleaner",
        title: "CCleaner",
        src: ccleaner,
    },
    {
        alt: "WinZip",
        title: "WinZip",
        src: winzip,
    },
    {
        alt: "Firefox",
        title: "Firefox",
        src: firefox,
    },
    {
        alt: "IrfanView",
        title: "IrfanView",
        src: irfanview,
    },
    {
        alt: "RealPlayer",
        title: "RealPlayer",
        src: real,
    },
    {
        alt: "QuickTime",
        title: "QuickTime",
        src: quick,
    },
    {
        alt: "Acrobat",
        title: "Acrobat",
        src: acrobat,
    },
    {
        alt: "Excel",
        title: "Excel",
        src: excel,
    },
    {
        alt: "FrontPage",
        title: "FrontPage",
        src: frontpage,
    },
    {
        alt: "Mahjong",
        title: "Mahjong",
        src: mahjong,
    },
    {
        alt: "Movies",
        title: "Movies",
        src: movies,
    },
    {
        alt: "Word",
        title: "Word",
        src: word,
    }
];


export { renderProgramList, programListLong }