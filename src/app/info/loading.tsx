'use client';

import { Oval } from 'react-loader-spinner';

export default function Loading() {
    return (
        <div className="mx-auto flex h-screen w-screen items-center justify-center">
            <Oval
                visible={true}
                height="80"
                width="80"
                color="#F5C111"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}
