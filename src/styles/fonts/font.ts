import { Urbanist, Inter } from "next/font/google";

export const urbanist = Urbanist({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-urbanist",
});

export const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});