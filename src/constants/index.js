import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    threejs,
    workout,
    thewell,
    rd,
    eva,
    graph
} from "../assets";

export const navLinks = [
    {
        id: "",
        title: "Home",
    },
    {
        id: "about",
        title: "Overview",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Work Projects",
        icon: web,
        link: "/workprojects"
    },
    {
        title: "Side Projects",
        icon: mobile,
        link: "/sideprojects"
    },
    {
        title: "Backend Developer",
        icon: backend,
        link: "/"
    },
    {
        title: "Content Creator",
        icon: creator,
        link: "/"
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const workprojects = [
    {
        name: "Scientific Visualization",
        description:
            "",
        tags: [
            {
                name: "SimonsFoundation",
                color: "",
            },
            {
                name: "NYC",
                color: "",
            },
            {
                name: "Summer2024",
                color: "",
            }
        ],
        image: thewell,
        source_code_link: "https://polymathic-ai.org/the_well/",
    },
    {
        name: "GPU-Accelerated Numerical Simulation",
        description:
            "",
        tags: [
            {
                name: "SimonsFoundation",
                color: "",
            },
            {
                name: "NYC",
                color: "",
            },
            {
                name: "Summer2024",
                color: "",
            }
        ],
        image: rd,
        source_code_link: "https://github.com/flatironinstitute/rd_webgpu",
    },
    {
        name: "EVA Wardrobe",
        description:
            "",
        tags: [
            {
                name: "Startup",
                color: "",
            },
            {
                name: "NYC",
                color: "",
            }
        ],
        image: eva,
        source_code_link: "https://evawardrobe.com/",
    }
];

const researchprojects = [
    {
        name: "Augmented Reality for Retinal Laser Therapy",
        description:
            "",
        tags: [
            // {
            //     name: "Machine Learning",
            //     color: "",
            // },
            // {
            //     name: "Python",
            //     color: "",
            // },
            // {
            //     name: "Java",
            //     color: "",
            // },
        ],
        image: thewell,
        source_code_link: "https://polymathic-ai.org/the_well/",
    },
    {
        name: "Graphically Modeling Text Coherence for Automated Essay Scoring",
        description:
            "",
        tags: [
            // {
            //     name: "Machine Learning",
            //     color: "",
            // },
            // {
            //     name: "Python",
            //     color: "",
            // },
            // {
            //     name: "Java",
            //     color: "",
            // },
        ],
        image: graph,
        source_code_link: "https://sites.google.com/view/cs333aes/overview",
    }
];

const sideprojects = [
    {
        name: "Workout Routine Generator",
        description:
            "This is a simple Python CLI program that generates a customized workout routine based on user inputs.",
        tags: [
            {
                name: "Python",
                color: "",
            },
            {
                name: "CLI",
                color: "",
            },
            {
                name: "I/O",
                color: "",
            }
        ],
        image: workout,
        source_code_link: "https://github.com/yankunm/100/tree/main/001",
    }
];

export { services, technologies, experiences, testimonials, researchprojects, workprojects, sideprojects };
