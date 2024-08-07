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

export const bebas = localFont({
    src: [
        {
            path: './BebasNeue-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-bebas',
});
