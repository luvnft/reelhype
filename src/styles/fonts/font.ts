import localFont from 'next/font/local';


export const questrial = localFont({
    src: [
        {
            path: './Questrial-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
       
    ],
    variable: '--font-questrial',
});

export const muli = localFont({
    src: [

        {
            path: './Muli.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './Muli-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './Muli-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './Muli-LightItalic.ttf',
            weight: '300',
            style: 'italic',
        },
        {
            path: './Muli-SemiBold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './Muli-Semi-BoldItalic.ttf',
            weight: '600',
            style: 'italic',
        },
        {
            path: './Muli-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './Muli-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
    ],
    variable: '--font-muli',
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
