import emule from "../../../assets/icons/emuleIcon.ico";
import excel from "../../../assets/icons/excelIcon.ico";
import frontpage from "../../../assets/icons/frontpageIcon.ico";
import limewire from "../../../assets/icons/limewire.ico";
import mahjong from "../../../assets/icons/MahjongIcon.ico";
import msn from "../../../assets/icons/MSNIcon.ico";
import movies from "../../../assets/icons/MoviesIcon.ico";
import vlc from "../../../assets/icons/vlcIcon.ico";
import winamp from "../../../assets/icons/winampIcon.ico";
import word from "../../../assets/icons/WordIcon.ico";
import folder from "../../../assets/icons/FolderIcon.ico";
import nero from "../../../assets/icons/fire-nero.ico";
import daemon from "../../../assets/icons/daemon.ico";
import photoshop from "../../../assets/icons/photoshop.ico";
import flash from "../../../assets/icons/flash.ico";
import winrar from "../../../assets/icons/winrar.ico";
import skype from "../../../assets/icons/skype.svg";
import norton from "../../../assets/icons/norton.svg";
import ccleaner from "../../../assets/icons/ccleaner.png";
import winzip from "../../../assets/icons/WinZip_2006.png";
import firefox from "../../../assets/icons/firefox.svg";
import irfanview from "../../../assets/icons/irfanview.ico";
import real from "../../../assets/icons/RealPlayer_2004.svg";
import quick from "../../../assets/icons/quicktime.png";
import acrobat from "../../../assets/icons/Acrobat_2006.svg";

const renderProgramList = (programL) => {

    const programList = programL ? programListLong : programListShort

    return (
        programList.map((program) => {
            return (
                <>
                    <span className="start-menu__program">
                        <img alt={program.alt} src={program.app ? program.src : folder} />
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
        app: true,
    },
    {
        alt: "Excel",
        title: "Excel",
        src: excel,
        app: true,
    },
    {
        alt: "FrontPage",
        title: "FrontPage",
        src: frontpage,
        app: true,
    },
    {
        alt: "LimeWire",
        title: "LimeWire",
        src: limewire,
        app: true,
    },
    {
        alt: "Mahjong",
        title: "Mahjong",
        src: mahjong,
        app: true,
    },
    {
        alt: "MSN Messenger",
        title: "MSN Messenger",
        src: msn,
        app: true,
    },
    {
        alt: "Movies",
        title: "Movies",
        src: movies,
        app: true,
    },
    {
        alt: "VLC Media Player",
        title: "VLC Media Player",
        src: vlc,
        app: true,
    },
    {
        alt: "Winamp",
        title: "Winamp",
        src: winamp,
        app: true,
    },
    {
        alt: "Word",
        title: "Word",
        src: word,
        app: true,
    },
];

const programListLong = [
    {
        alt: "Windows Calendar",
        title: "Windows Calendar",
        src: "calendar",
        app: false,
    },
    {
        alt: "Windows Defender",
        title: "Windows Defender",
        src: "defender",
        app: false,
    },
    {
        alt: "Microsoft Office Suite 2007",
        title: "Microsoft Office Suite 2007",
        src: "",
        app: false,
    },
    {
        alt: "Windows DVD Maker",
        title: "Windows DVD Maker",
        src: "dvd",
        app: false,
    },
    {
        alt: "MSN Messenger",
        title: "MSN Messenger",
        src: msn,
        app: true,
    },
    {
        alt: "Norton Antivirus",
        title: "Norton Antivirus",
        src: norton,
        app: true,
    },
    {
        alt: "Windows Movie Maker",
        title: "Windows Movie Maker",
        src: "movie",
        app: false,
    },
    {
        alt: "Windows Updates",
        title: "Windows Updates",
        src: "updates",
        app: false,
    },
    {
        alt: "Daemon",
        title: "Daemon",
        src: daemon,
        app: true,
    },
    {
        alt: "Emule",
        title: "Emule",
        src: emule,
        app: true,
    },
    {
        alt: "Adobe Flash Player",
        title: "Adobe Flash Player",
        src: flash,
        app: true,
    },
    {
        alt: "Nero Burning ROM",
        title: "Nero",
        src: nero,
        app: true,
    },
    {
        alt: "Limewire",
        title: "Limewire",
        src: limewire,
        app: true,
    },
    {
        alt: "Games",
        title: "Games",
        src: "",
        app: false,
    }, {
        alt: "Photoshop",
        title: "Photoshop",
        src: photoshop,
        app: true,
    },
    {
        alt: "Skype",
        title: "Skype",
        src: skype,
        app: true,
    },
    {
        alt: "Winamp",
        title: "Winamp",
        src: winamp,
        app: true,
    },
    {
        alt: "WinRar",
        title: "WinRar",
        src: winrar,
        app: true,
    },
    {
        alt: "VLC Media Player",
        title: "VLC Media Player",
        src: vlc,
        app: true,
    },
    {
        alt: "Utilities",
        title: "Utilities",
        src: "",
        app: false,
    },
    {
        alt: "CCleaner",
        title: "CCleaner",
        src: ccleaner,
        app: true,
    },
    {
        alt: "WinZip",
        title: "WinZip",
        src: winzip,
        app: true,
    },
    {
        alt: "Firefox",
        title: "Firefox",
        src: firefox,
        app: true,
    },
    {
        alt: "IrfanView",
        title: "IrfanView",
        src: irfanview,
        app: true,
    },
    {
        alt: "RealPlayer",
        title: "RealPlayer",
        src: real,
        app: true,
    },
    {
        alt: "QuickTime",
        title: "QuickTime",
        src: quick,
        app: true,
    },
    {
        alt: "Acrobat",
        title: "Acrobat",
        src: acrobat,
        app: true,
    }
];



export { renderProgramList }