import { IoIosBook, IoIosBrush } from "react-icons/io";
import { TbLanguage } from "react-icons/tb";
import { MdFastfood } from "react-icons/md";
import { CgMathDivide } from "react-icons/cg";
import { FaChess, FaLanguage, FaSchool } from "react-icons/fa";
import { BiJoystick, BiBasketball } from "react-icons/bi";
import { ReactNode } from "react";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import ErrorIcon from "@mui/icons-material/Error";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SendIcon from "@mui/icons-material/Send";
import theme from "@/styles/theme";

interface navbarItemsProps {
    color: string;
    size: string;
}

/**
 *  navbar constants
 */

export const navbarPage = {
    navbarItems: ({
        color,
        size,
    }: navbarItemsProps): {
        data: string;
        href: string;
        icon: ReactNode;
    }[] => {
        return [
            {
                data: "navbar.navItems.home",
                href: "/",
                icon: (
                    <HomeIcon
                        sx={{
                            color: color,
                            width: size,
                            height: size,
                            transition: "0.7s ease",
                        }}
                    />
                ),
            },
            {
                data: "navbar.navItems.academic",
                href: "/curriculum",
                icon: (
                    <DashboardIcon
                        sx={{
                            color: color,
                            width: size,
                            height: size,
                            transition: "0.7s ease",
                        }}
                    />
                ),
            },
            {
                data: "navbar.navItems.engage",
                href: "/levels",
                icon: (
                    <PlagiarismIcon
                        sx={{
                            color: color,
                            width: size,
                            height: size,
                            transition: "0.7s ease",
                        }}
                    />
                ),
            },
            {
                data: "navbar.navItems.about",
                href: "/about",
                icon: (
                    <ErrorIcon
                        sx={{
                            color: color,
                            width: size,
                            height: size,
                            transition: "0.7s ease",
                        }}
                    />
                ),
            },
            {
                data: "navbar.navItems.contact",
                href: "/latest",
                icon: (
                    <ContactPhoneIcon
                        sx={{
                            color: color,
                            width: size,
                            height: size,
                            transition: "0.7s ease",
                        }}
                    />
                ),
            },
            {
                data: "navbar.navItems.unlock",
                href: "/registration",
                icon: (
                    <LockOpenIcon
                        sx={{
                            color: color,
                            width: size,
                            height: size,
                            transition: "0.7s ease",
                        }}
                    />
                ),
            },
            {
                data: "navbar.navItems.jobs",
                href: "/jobs",
                icon: (
                    <SendIcon
                        sx={{
                            color: color,
                            width: size,
                            height: size,
                            transition: "0.7s ease",
                        }}
                    />
                ),
            },
        ];
    },
};

/**
 *  landing page constants
 */
export const landingPage = {
    welcomeSquares: [
        {
            radiusMobile: ["1.5vw", "1.1.1.0"],
            radiusDesktop: ["0.5vw", "1.1.1.0"],
            bgcolor: theme.palette.orange.main,
            rows: "5 / 7",
            cols: "15 / 17",
        },
        {
            radiusMobile: ["3vw", "1.1.1.0"],
            radiusDesktop: ["1.5vw", "1.1.1.0"],
            bgcolor: theme.palette.brown.main,
            rows: "7 / 11",
            cols: "15 / 19",
        },
        {
            radiusMobile: ["2.5vw", "1.1.0.1"],
            radiusDesktop: ["1.2vw", "1.1.0.1"],
            bgcolor: theme.palette.basic.light,
            rows: "11 / 14",
            cols: "4 / 7",
        },
        {
            radiusMobile: ["6vw", "1.0.1.1"],
            radiusDesktop: ["3vw", "1.0.1.1"],
            bgcolor: theme.palette.orange.main,
            rows: "11 / 19",
            cols: "7 / 15",
        },
        {
            radiusMobile: ["5vw", "0.1.1.1"],
            radiusDesktop: ["2.2vw", "0.1.1.1"],
            bgcolor: theme.palette.blue.dark,
            rows: "11 / 17",
            cols: "15 / 21",
        },
        {
            radiusMobile: ["1.5vw", "0.1.1.1"],
            radiusDesktop: ["0.5vw", "0.1.1.1"],
            bgcolor: theme.palette.brown.main,
            rows: "17 / 19",
            cols: "15 / 17",
        },
    ],

    whyAIS_icons: [
        {
            src: "/landingPage/islamic-icon.png",
            alt: "islamic-icon",
            text: "landingPage.whyAISSection.items.item1",
        },
        {
            src: "/landingPage/cambridge-icon.png",
            alt: "cambridge-icon",
            text: "landingPage.whyAISSection.items.item2",
        },
        {
            src: "/landingPage/cheap-zone-icon.png",
            alt: "cheap-zone-icon",
            text: "landingPage.whyAISSection.items.item3",
        },
    ],

    newsSquares: [
        {
            radiusMobile: ["1.5vw", "1.1.0.1"],
            radiusDesktop: ["0.8vw", "1.1.0.1"],
            bgcolor: theme.palette.blue.dark,
            rows: "3 / 5",
            cols: "8 / 10",
        },
        {
            radiusMobile: ["1.5vw", "1.1.0.1"],
            radiusDesktop: ["1.5vw", "1.1.0.1"],
            bgcolor: theme.palette.basic.light,
            rows: "1 / 5",
            cols: "10 / 14",
        },
        {
            radiusMobile: ["1.5vw", "1.1.0.1"],
            radiusDesktop: ["1.2vw", "1.1.1.0"],
            bgcolor: theme.palette.orange.main,
            rows: "2 / 5",
            cols: "14 / 17",
        },
        {
            radiusMobile: ["1.5vw", "1.1.0.1"],
            radiusDesktop: ["1.2vw", "1.0.1.1"],
            bgcolor: theme.palette.brown.main,
            rows: "5 / 8",
            cols: "11 / 14",
        },
    ],

    news: [
        {
            title: "AIS Received Rahmaniya School Delegation",
            src: "/landingPage/news1.jpeg",
        },
        {
            title: "'Ebadur Rahman' institute in AIS",
            src: "/landingPage/news2.jpeg",
        },
    ],

    newsFeatures: [
        "landingPage.newsSection.job",
        "landingPage.newsSection.student",
        "landingPage.newsSection.registration",
        "landingPage.newsSection.staff",
        "landingPage.newsSection.curriculum",
        "landingPage.newsSection.website",
        "landingPage.newsSection.levels",
        "landingPage.newsSection.data",
    ],
};

/**
 *  curreculum page constants
 */
export const curriculumPage = {
    courseSquares: [
        "curriculumPage.courseSquares.languages",
        "curriculumPage.courseSquares.islamic",
        "curriculumPage.courseSquares.modern",
    ],

    languages: [
        {
            title: "curriculumPage.languages.arabic",
            content: "curriculumPage.languages.arabicContent",
        },
        {
            title: "curriculumPage.languages.english",
            content: "curriculumPage.languages.englishContent",
        },
        {
            title: "curriculumPage.languages.malay",
            content: "curriculumPage.languages.malayContent",
        },
    ],

    clubsItems: (size: string, color: string) => [
        { text: "Art Club", icon: <IoIosBrush size={size} color={color} /> },
        { text: "Arabic Club", icon: <IoIosBook size={size} color={color} /> },
        { text: "French Club", icon: <TbLanguage size={size} color={color} /> },
        {
            text: "Cooking Club",
            icon: <MdFastfood size={size} color={color} />,
        },
        { text: "Math Club", icon: <CgMathDivide size={size} color={color} /> },
        { text: "Chess Club", icon: <FaChess size={size} color={color} /> },
    ],

    activitiesItems: (size: string, color: string) => [
        {
            text: "Leisure Trips",
            icon: <BiJoystick size={size} color={color} />,
        },
        { text: "Library Day", icon: <IoIosBook size={size} color={color} /> },
        {
            text: "Sports Day",
            icon: <BiBasketball size={size} color={color} />,
        },
        {
            text: "Cultural Competitions",
            icon: <FaLanguage size={size} color={color} />,
        },
        {
            text: "Math Competitions",
            icon: <CgMathDivide size={size} color={color} />,
        },
        {
            text: "Educational Trips",
            icon: <FaSchool size={size} color={color} />,
        },
    ],
};
