
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="flex h-full w-full justify-center border-t  border-gray-700">
            <div className="flex w-full  flex-wrap justify-between  gap-3 space-y-3 px-4  py-4 lg:flex-row lg:px-20 xl:px-20 ">
                <div className="flex flex-col">
                    <div className="text-gray-400">
                        <h3>© 2024 ReelHype</h3>
                        <p>All Rights Reserved</p>
                    </div>
                </div>

                <div className="flex flex-col gap-1 ">
                    <div className="flex flex-row gap-3 lg:gap-10">
                        <Link
                            href="https://github.com/evansso-bit/convofy"
                            className="flex flex-row items-center gap-2 text-gray-400"
                            target="_blank"
                        >

                            <p>Github</p>
                        </Link>
                        <Link
                            href="https://twitter.com/evansso_"
                            className="flex flex-row items-center gap-2 text-gray-400"
                            target="_blank"
                        >
                    
                            <p>Twitter</p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
