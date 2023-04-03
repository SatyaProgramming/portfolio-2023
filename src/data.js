import p1 from "./assets/project-1.png";
import p2 from "./assets/project-2.png";
import p4 from "./assets/project-4.png";
import p6 from "./assets/project-6.png";

export const filters = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Dashboard",
        id: "dashboard",
    },
    
    {
        name: "Website",
        id: "website",
    },
];

export const projects = [
    {
        name: "Dhanlabh",
        image: p1,
        tags: ["dashboard", "Website"],
    },
    {
        name: "The Design Loft",
        image: p2,
        tags: ["dashboard", "website"],
    },
    {
        name: "TrendTrove",
        image: p4,
        tags: ["Website"],
    },
    {
        name: "Food-court",
        image: p6,
        tags: ["dashboard"],
    },
];

export const achievements = [
    {
        id: 1,
        year: 20,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 1,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 20,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 20,
        description: "COMMUNITY<br />POSTS",
    },
];
