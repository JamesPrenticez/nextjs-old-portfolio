export const data = [
  {
    id: 1,
    title: "Tea Time",
    desc: "Dev Academy Bootcamp Final Project. Group work with four other amazing people to create a MVP in 1 week. Automated solution to pick your favourite recipes for the week and generate a shopping list to buy all the ingrediants",
    tech: ["React", "Redux", "Express", "Knex", "Postgres/Sqlite3", "Jest"],
    images: ["/projects/teatime0.webp", "/img/teatime1.png", "/img/teatime2.png", "/img/teatime3.png", "/img/teatime4.png"],
    img: {
      src: "/projects/teatime.avif",
      alt: "TeaTime - Landing Page",
      width: 1919,
      height: 937,
    },
    link: "",
    video: "https://www.youtube.com/watch?v=ejJew8nsYeY",
    tags: ["all", "group", "database"],
    color: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,200,200,1) 100%)"
  },
  {
    id: 2,
    title: "Developer.Blog",
    desc: "This is a personal project developed as part of my portfolio project to show potential employers",
    tech: ["Next.js", "Redux", "Prisma", "Postgres/Sqlite3", "Draft.js", "React-hook-form"],
    link: "https://blog-jamesprenticez.vercel.app/",
    video: "",
    images: ["/projects/blog0.webp", "/img/blog1.png", "/img/blog2.png", "/img/blog3.png", "/img/blog4.png", "/img/blog5.png", "/img/blog6.png",  "/img/blog7.png",],
    img: {
      src: "/projects/blog.avif",
      alt: "Developer.Blog - Landing Page",
      width: 1500,
      height: 732,
    },
    tags: ["all", "hobby", "blog", "authentication"],
    color: "radial-gradient(circle, rgba(255,0,255,1) 0%, rgba(171,0,255,1) 83%)"
  },
  {
    id: 3,
    title: "Egyptian NFT's",
    desc: "Mint a hero and fight the boss in a turn based card game https://rinkeby.etherscan.io/address/0x4b8A189189f8c1d3B3E7bDE7E6B32004580D3889 https://testnets.opensea.io/assets/0x4b8A189189f8c1d3B3E7bDE7E6B32004580D3889/1",
    tech: ["Next.js", "Solidity", "Hardhat", "Open Zeppelin", "Ethers", "Rinkeby Testnet"],
    images: ["/projects/egyptian0.webp", "/img/egyptian1.png", "/img/egyptian2.png", "/img/egyptian3.png", "/img/egyptian4.png", "/img/egyptian5.png"],
    img: {
      src: "/projects/egyptian.avif",
      alt: "Egyptian NFT - Landing Page",
      width: 1500,
      height: 732,
    },
    link: "",
    video: "",
    tags: ["all", "hobby", "crypto"],
    color: "radial-gradient(circle, rgba(220,38,38,1) 0%, rgba(251,191,36,1) 100%)"
  },
  {
    id: 4,
    title: "Habit Tracker",
    desc: "Habit Tracking to do list with agregated data and statistics for the entire year",
    tech: ["Next.js", "Redux", "Prisma", "Postgres/Sqlite3", "Moment"],
    link: "https://selfregulator-jamesprenticez.vercel.app/",
    video: "",
    images: ["/projects/selfregulator0.webp"],
    img: {
      src: "/projects/habit.avif",
      alt: "SelfRegulator - Landing Page",
      width: 1500,
      height: 732,
    },
    tags: ["all", "database", "authentication"],
    color: "radial-gradient(circle, rgba(0,255,29,1) 0%, rgba(159,255,0,1) 100%)",
  },
  {
    id: 5,
    title: "Sorting Algorithim Visualizer",
    desc: "Post photos and have your friends like and comment", 
    tech: ["Next.js", "Redux", "Prisma", "Postgres/Sqlite3", "Firebase"],
    link: "",
    video: "",
    images: ["/img/algo.avif"],
    img: {
      src: "/projects/algo.avif",
      alt: "Sorting Algorithim - Landing Page",
      width: 1919,
      height: 937,
    },
    tags: ["all", "Python"],
    color: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
  },
  {
    id: 6,
    title: "Invoice Data Extractor",
    desc: "",
    tech: ["Python", "Fast API", "Next.js", "XMLHTTPRequest", "Cloudinary"],
    link: "",
    video: "",
    images: [],
    img: {
      src: "/projects/default.avif",
      alt: "Invoice Extractor - Landing Page",
      width: 1919,
      height: 937,
    },
    tags: ["all", "Next.js"],
    color: "radial-gradient(circle, rgba(37,99,235,1) 0%, rgba(56,189,248,1) 100%)"
  },
]

export const techSkills = [
  {
    id: 1,
    title: "HTML",
    desc: "",
    rating: 95,
  },
  {
    id: 2,
    title: "CSS",
    desc: "",
    rating: 95,
  },
  {
    id: 3,
    title: "JavaScript",
    desc: "",
    rating: 85,
  },
  {
    id: 4,
    title: "Relational Databases",
    desc: "",
    rating: 80,
  },
  {
    id: 5,
    title: "React/Next",
    content: "I enjoy developing with the power of React at my fingertips I admire the virtual DOM, the elegance of reusable components and the logicality of JSX, on top of all of that I love the extension of Next.js for its out of the box routing, image optimization and ofcoure the speed the server side rendering offers.",
    rating: 80,
  },
  {
    id: 6,
    title: "Python",
    desc: "",
    rating: 60,
  },
  {
    id: 7,
    title: "Algorithims",
    desc: "",
    rating: 50,
  }
]

import { AnalyticalIcon, CommunicationIcon, IdeasIcon, ProblemSolvingIcon, TenacityIcon } from "./components/icons/common"

export const softSkills = [
  {
    id: 1,
    title: "Turning Idea into Reality",
    content: "For me, taking a problem and finding a solution yields enormous satisfaction.",
    icon: <IdeasIcon/>
  },
  {
    id: 2,
    title: "Tenacity",
    content: "",
    icon: <TenacityIcon/>
  },
  {
    id: 3,
    title: "Problem Solving",
    content: "",
    icon: <ProblemSolvingIcon/>
  },
  {
    id: 4,
    title: "Analytical",
    content: "",
    icon: <AnalyticalIcon/>
  },
  {
    id: 5,
    title: "Communicator",
    content: "Writing code and build cool things is more about people than zeros and ones. I am at good listening to what people say, there needs and consearns. I like to collaborate and share ideas with the project team. I make sure all voices are heard and that every one its on the same page and upto date with the progress of a project. ",
    icon: <CommunicationIcon/>
  },
]