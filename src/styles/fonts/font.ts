import { Inter, Urbanist } from 'next/font/google';
import localFont from 'next/font/local';

export const urbanist = Urbanist({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-urbanist',
});

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const lato = localFont({
    src: [
        {
            path: './Lato-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Lato-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './Lato-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './Lato-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
    ],
    variable: '--font-lato',
});

export const poppins = localFont({
    src: [
        {
            path: './Poppins-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Poppins-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './Poppins-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './Poppins-MediumItalic.ttf',
            weight: '500',
            style: 'italic',
        },
        {
            path: './Poppins-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './Poppins-SemiBoldItalic.ttf',
            weight: '600',
            style: 'italic',
        },
        {
            path: './Poppins-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './Poppins-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
    ],
    variable: '--font-poppins',
});

export const pacifico = localFont({
    src: [
        {
            path: './Pacifico-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-pacifico',
});
