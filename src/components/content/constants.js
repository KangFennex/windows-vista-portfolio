import wordFile from "../../assets/desktop-icons/File114.ico";

// tech icons
import mongodb from "../../assets/tech-icons/mongodb.png";
import mongoose from "../../assets/tech-icons/mongoose.png";
import ejs from "../..//assets/tech-icons/ejs.png";
import bootstrap from "../../assets/tech-icons/bootstrap.png";
import express from "../../assets/tech-icons/express.png";
import reactjs from "../../assets/tech-icons/reactjs.png";
import scss from "../../assets/tech-icons/scss.png";
import tailwind from "../../assets/tech-icons/tailwind.png";
import aws from "../../assets/tech-icons/aws.png";
import javascript from "../../assets/tech-icons/javascript.png";
import css from "../../assets/tech-icons/css.png";
import redux from "../../assets/tech-icons/redux.png";
import api from "../../assets/tech-icons/api.png";
import git from "../../assets/tech-icons/git.png";
import photoshop from "../../assets/tech-icons/photoshop.png";
import node from "../../assets/tech-icons/node.png";

// Project images
import bankist from "../../assets/projects-imgs/bankist.png";
import bankist2 from "../../assets/projects-imgs/bankist2.png";
import discountsCalc from "../../assets/projects-imgs/discounts-calc.png";
import newsHomepage from "../../assets/projects-imgs/news-homepage.png";
import softway from "../../assets/projects-imgs/softway.png";
import markdown from "../../assets/projects-imgs/markdown-previewer.png";
import drumMachine from "../../assets/projects-imgs/drum-machine.png";
import quoteMachine from "../../assets/projects-imgs/quote-machine.png";
import templeSeti from "../../assets/projects-imgs/temple-of-seti.png";
import yelpCamp from "../../assets/projects-imgs/yelpcamp.png";
import space from "../../assets/projects-imgs/space-tourism.png";
import portfolio from "../../assets/projects-imgs/portfolio.png";
import sneakers from "../../assets/projects-imgs/sneakers.png";
import housing from "../../assets/projects-imgs/house-marketplace.png";
import clock25 from "../../assets/projects-imgs/clock25.png";

const folderItems = [
    {
        value: "Documents",
        type: "folder",
        content: [
            {
                value: "Resume",
                type: "file",
                icon: wordFile,
            },
            {
                value: "Cover Letter",
                type: "file",
                icon: wordFile,
            },
            {
                value: "References",
                type: "file",
                icon: wordFile,
            },
        ],
    },
    {
        value: "Tech",
        type: "folder",
        content: [
            {
                id: "css",
                value: "CSS",
                icon: css,
                label: "CSS",
                category: "front-end",
            },
            {
                id: "javascript",
                value: "JavaScript",
                icon: javascript,
                label: "Javascript",
                category: "front-end",
            },
            {
                id: "scss",
                value: "SCSS",
                icon: scss,
                label: "SCSS",
                category: "front-end",
            },
            {
                id: "react",
                value: "React",
                icon: reactjs,
                label: "React JS",
                category: "front-end",
            },
            {
                id: "git",
                value: "Git",
                icon: git,
                label: "GIT",
                category: "back-end",
            },
            {
                id: "redux",
                value: "REDUX",
                icon: redux,
                label: "Redux",
                category: "front-end",
            },
            {
                id: "mongodb",
                value: "MongoDB",
                icon: mongodb,
                label: "Mongo DB",
                category: "back-end",
            },
            {
                id: "photoshop",
                value: "Photoshop",
                icon: photoshop,
                label: "Photoshop",
                category: "front-end",
            },
            {
                id: "api",
                value: "API",
                icon: api,
                label: "API",
                category: "back-end",
            },
            {
                id: "node",
                value: "Node.js",
                icon: node,
                label: "Node.js",
                category: "back-end",
            },
            {
                id: "mongoose",
                value: "Mongoose",
                icon: mongoose,
                label: "Mongoose",
                category: "back-end",
            },
            {
                id: "tailwind",
                value: "Tailwind",
                icon: tailwind,
                label: "Tailwind",
                category: "front-end",
            },
            {
                id: "ejs",
                value: "EJS",
                icon: ejs,
                label: "EJS",
                category: "front-end"
            },
            {
                id: "bootstrap",
                value: "Bootstrap",
                icon: bootstrap,
                label: "Bootstrap",
                category: "front-end"
            },
            {
                id: "express",
                value: "Express",
                icon: express,
                label: "Express",
                category: "back-end"
            },
        ],
    },
    {
        value: "Projects",
        type: "folder",
        content: [
            {
                id: 13,
                value: "YelpCamp",
                category: "website",
                technologies: [mongodb, mongoose, ejs, bootstrap, express],
                icon: yelpCamp,
                subtitle: "A Yelp-like website to list campgrounds",
                summary: "YelpCamp is a web app offers a login function powered by MongoDB and Passport and the option for users to create, modify, and delete campgrounds and display them on a map.",
                features: ["Express Middleware", "Express Error Handling", "Joi Validator", "Cookies", "Mapbox implementation", "Database Security"],
                link: "https://yelpcamp-ye9z.onrender.com",
            },
            {
                id: 14,
                value: "Space Tourism Website",
                technologies: [reactjs, scss],
                icon: space,
                subtitle: "Space Tourism showcases it's destinations, crew, and tech",
                summary: "Space Tourism is a inter-planetary shuttle service. The website includes three different types of smooth transitions.",
                features: ["Framer-Motion", "Responsive Design"],
                link: "https://space-tourism-website-fm2.netlify.app",

            },
            {
                id: 7,
                value: "Personal Portfolio",
                category: "website",
                technologies: [reactjs, scss],
                icon: portfolio,
                subtitle: "A portfolio build around the theme of the desert",
                summary: "I built my portfolio to showcase what I have learned so far. TBC",
                features: ["Parallax Effect", "Framer-Motion", "Responsive Design"],
                link: "https://kangkm.netlify.app",
            },
            {
                id: 12,
                value: "Sneakers Landing Page",
                category: "website",
                technologies: [reactjs, tailwind],
                icon: sneakers,
                subtitle: "A product landing page for a sneaker",
                summary: "This project was built as part of a Frontend Mentor Challenge. I used it as an opportunity to practice state management (Zustand), hone my skills with Tailwind and Framer-Motion, and create a lightbox from scratch. It includes logic to make the sidebar menu and the cart disappear on resize or click outside the element. I paid particular attention to make it visually appealing. One issue remains with the cart in medium-size screens.",
                features: ["Zustand", "Framer-Motion", "Tailwind"],
                link: "https://sneaker-product-landing-page.netlify.app"
            },
            {
                id: 8,
                value: "Housing Marketplace",
                category: "website",
                technologies: [reactjs, aws],
                icon: housing,
                subtitle: "Interactive Housing Marketplace Platform",
                summary:
                    "Developed as part of the React Front to Back 2022 course, this project allows users to explore properties. Users can browse through a  selection of rental and purchase listings with the possibility of creating their personalized access using Firebase authentication. Users can then edit, and manage their own property listings effortlessly, all accessible from their unique user profile.",
                features: ["AWS user login", "Create/edit listings", "Profile view"],
                link: "https://bright-mandazi-d30993.netlify.app",
            },
            {
                id: 2,
                value: "Bankist App",
                category: "website",
                technologies: [javascript, css],
                icon: bankist2,
                subtitle: "The Bankist's web app with a deposit and withdrawal function",
                summary:
                    "This is a continuation of the Bankist website project. The goal was to implement key functionalities with Javascript to simulate a banking web app's user experience.",
                features: [
                    "Login function",
                    "Sorting",
                    "Money Transfer",
                    "Loan Request",
                    "Account Deletion",
                ],
                link: "https://famous-moonbeam-55d065.netlify.app",
            },
            {
                id: 1,
                value: "Bankist Website",
                category: "website",
                technologies: [javascript, css],
                icon: bankist,
                subtitle: "A bank website built with vanilla JS",
                summary:
                    "This project is a recreation of the Bankist website, built as part of the course 'The Complete JavaScript Course 2023: From Zero to Expert!' by Jonas Schmedtmann. The goal of this project is to practice and apply various JavaScript concepts to create an interactive bank website.",
                features: [
                    "Modal window",
                    "Menu fade animation",
                    "Reveal Sections",
                    "Lazy loading images",
                    "Slider",
                ],
                link: "https://clever-longma-e1e272.netlify.app",
                repository:
                    "https://github.com/KangFennex/Bankist-Website---Javascript-Course/tree/main",
            },
            {
                id: 6,
                value: "Discount Calculator",
                category: "tool",
                technologies: [javascript, css],
                icon: discountsCalc,
                subtitle:
                    "A tool to calculate discounts based on membership cost and rental turnover",
                summary:
                    "This project was built for coworkers at the sales' department who needed a simple and swift tool to calculate discounts based on the membership cost, number of rental units and the rental turnover (in French).",
                features: ["vanilla JS"],
                link: "https://calculateur-rabais-pex.netlify.app",
            },
            {
                id: 10,
                value: "News Homepage",
                category: "website",
                technologies: [javascript, css],
                icon: newsHomepage,
                subtitle: "Tech news website's homepage",
                summary:
                    "A sample for a tech news website's homepage built as part of the challenges offered by Frontend Mentor. I used this project as an opportunity to practice CSS Grid.",
                features: ["CSS Grid", "Mobile-first Webflow", "Responsive Design"],
                link: "https://news-homepage-frontend-mentor1.netlify.app",
            },
            {
                id: 11,
                value: "Softway Grocery",
                category: "website",
                technologies: [reactjs, redux, css],
                icon: softway,
                subtitle: "A shopping cart using Redux toolkit",
                summary: "This shopping cart was built in order to practice state management using Redux Toolkit. It includes logics for discounted items and a responsive design.",
                features: [
                    "Redux toolkit",
                    "Item Discounts",
                    "React Router",
                    "Responsive Design",
                ],
                link: "https://softway-grocery-app.netlify.app",
            },
            {
                id: 4,
                value: "Markdown Previewer",
                category: "tool",
                technologies: [reactjs, css],
                icon: markdown,
                subtitle: "A markdown previewer using the Marked library",
                summary:
                    "This project was built as part of the FreeCodeCamp's Front End Development Libraries certification process. It makes use the the Marked library to parse the HTML fed by the user and displays the result in the previewer. It built without instructions.",
                features: ["Use of a library", "Appealing design", "Responsiveness"],
                link: "https://dainty-boba-245427.netlify.app",
            },
            {
                id: 5,
                value: "Drum Machine",
                category: "tool",
                technologies: [reactjs, css],
                icon: drumMachine,
                subtitle: "A drum machine with an appealing design",
                summary:
                    "This project was built as part of the FreeCodeCamp's Front End Development Libraries certification process. It integrates an on/off function and volume control. I put a particular focus on creating a visually appealing app that appears real. It built without instructions.",
                features: ["On/Off function", "Volume Control"],
                link: "https://rad-crumble-fbf99b.netlify.app",
            },
            {
                id: 14,
                value: "25 + 5 Clock",
                category: "tool",
                technologies: [css],
                icon: clock25,
                subtitle: "25 + 5 clock",
                summary: "A simple 25 + 5 clock built as part of the FreeCodeCamp's Front End Development Libraries certification process. It integrates a countdown that can be set by the user. Once finished, an alarm sets off and the 5 minutes countdown begins.",
                features: ["Alarm set off", "useEffect"],
                link: "https://illustrious-conkies-89d8c1.netlify.app",
            },
            {
                id: 3,
                value: "Random Quote Machine",
                category: "tool",
                technologies: [reactjs, api, css],
                icon: quoteMachine,
                subtitle: "Quote Generator",
                summary:
                    "This project was built as part of the FreeCodeCamp's Front End Development Libraries certification process. Built without instructions, it makes use of an API and CSS animations to achieve the animated coloured border.",
                features: ["API"],
                link: "https://random-quote-machine-fcc-kangkm.netlify.app",
            },

            {
                id: 9,
                value: "The Temple of Seti I",
                category: "website",
                technologies: [javascript, css],
                icon: templeSeti,
                subtitle: "My very first website",
                summary: "This is the first website I built as part of Colt Steele's The Web Developer Bootcamp 2023. I used the project as an opportunity to look back at my trip to Egypt. An emphasis was put on responsiveness and I used vanilla Javascript for the image carousel.",
                features: ["Responsive Design", "Bootstrap", "Image Carousel"],
                link: "https://temple-of-seti-abydos.netlify.app",
            },
        ],
    },
];

export default folderItems;