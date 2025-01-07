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
    thewell,
    rd,
    eva,
    graph,
    graphalgo,
    ants,
    drawingtool
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
            "Visualization Pipeline for 15TB+ Dataset at Polymathic AI in NYC in Summer 2024",
        image: thewell,
        website_link: "https://polymathic-ai.org/the_well/",
        demo_link: "https://huggingface.co/spaces/polymathic-ai/TheWell"
    },
    {
        name: "Reaction Diffusion on GPU",
        description:
            "Numerical simulation pipeline implemented with WebGPU at Polymathic AI Summer 2024",
        image: rd,
        website_link: "https://github.com/flatironinstitute/rd_webgpu",
        demo_link: "https://flatironinstitute.github.io/rd_webgpu/rd2d.html"
    },
    {
        name: "EVA (Duke X Cornell)",
        description:
            "Co-founder for Startup since Summer 2023, developing image processing and 3D VTON",
        image: eva,
        website_link: "https://evawardrobe.com/",
        demo_link: "https://apps.apple.com/us/app/eva-wardrobe/id6469431884"
    }
];

const researchprojects = [
    {
        name: "Augmented Reality for Retinal Laser Therapy",
        description:
            "",
        image: thewell,
        source_code_link: "https://polymathic-ai.org/the_well/",
    },
    {
        name: "Graphically Modeling Text Coherence for Automated Essay Scoring",
        description:
            "",
        image: graph,
        source_code_link: "https://sites.google.com/view/cs333aes/overview",
    }
];

const sideprojects = [
    {
        name: "Algorithm Visualizer",
        description:
            "Visualize how different graph algorithms traverse through a maze.",
        image: graphalgo,
        source_code_link: "https://github.com/yankunm/graphAlgorithmVisualizer",
        demo_link: "https://editor.p5js.org/alex.meng/full/4lNqpY9np"
    },
    {
        name: "Nylanderia Fulva",
        description:
            "A swarm of ants you can feed, created with geometric shapes and polar coordinates.",
        image: ants,
        source_code_link: "https://github.com/yankunm/CreativeCodingGallery",
        demo_link: "https://editor.p5js.org/alex.meng/full/sZDDDBkLP"
    },
    {
        name: "Drawing Tool",
        description:
            "Using Keyboard Shortcut to create a Drawing tool where you can draw digitally faster.",
        image: drawingtool,
        source_code_link: "https://github.com/yankunm/CreativeCodingGallery/tree/main",
        demo_link: "https://editor.p5js.org/alex.meng/sketches/C_vdzdw1Q"
    },

];

export { services, technologies, experiences, testimonials, researchprojects, workprojects, sideprojects };
