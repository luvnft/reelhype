export default function StoryPage() {
    return (
        <div className="gap-6sssssss flex flex-col lg:gap-4">
            <OurStory />
            <Solution />
        </div>
    );
}

const OurStory = () => {
    return (
        <div className=" mx-auto mt-10 max-w-4xl rounded-lg  lg:mt-20 lg:p-6">
            <h1 className="mb-2 font-secondary text-3xl text-sm font-bold lg:mb-4 lg:text-4xl">
                How ReelConvo Came to Life
            </h1>
            <h2 className="mb-2 font-secondary text-sm text-xl font-semibold lg:mb-6 lg:text-2xl">
                Discover the journey behind the ultimate trailer experience.
            </h2>
            <p className="mb-2 text-sm text-gray-300 lg:mb-4 lg:text-lg">
                At ReelConvo, were passionate about movies and TV shows. Our
                journey began with a simple question: How can we make the
                trailer-watching experience more interactive and engaging?
            </p>
            <p className="mb-2 text-sm text-gray-300 lg:mb-4 lg:text-lg">
                As avid movie enthusiasts, we found ourselves wanting more than
                just watching trailers. We wanted to discuss, debate, and share
                our excitement with others. This led us to create ReelConvo.
            </p>
            <p className="mb-2 text-sm text-gray-300 lg:mb-4 lg:text-lg">
                From late-night brainstorming sessions to countless coding
                marathons, our journey has been filled with challenges and
                triumphs. Each step brought us closer to creating a platform
                that truly connects trailer enthusiasts.
            </p>
            <p className="mb-2 text-sm text-gray-300 lg:mb-4 lg:text-lg">
                Our vision is to build a vibrant community where trailer fans
                can come together to watch, discuss, and engage. We believe in
                the power of conversation and aim to make ReelConvo the ultimate
                hub for trailer talk.
            </p>
        </div>
    );
};

const Solution = () => {
    return (
        <div className=" mx-auto max-w-4xl rounded-lg   shadow-md lg:p-6">
            <h1 className="mb-2 font-secondary text-4xl text-sm font-bold lg:mb-4">
                Why ReelConvo is the Perfect Solution?
            </h1>
            <h2 className="mb-2 font-secondary text-2xl text-lg font-semibold lg:mb-6">
                Transforming the trailer-watching experience with real-time
                conversations.
            </h2>
            <p className="mb-2 text-sm text-gray-300 lg:mb-4 lg:text-lg">
                Trailer enthusiasts often feel disconnected while watching
                trailers alone. They lack a platform to share their thoughts,
                get real-time feedback, and engage in meaningful discussions.
            </p>
            <p className="mb-2 text-sm lg:mb-4 lg:text-lg">
                ReelConvo bridges this gap by providing a platform where users
                can watch trailers together, join live audio conversations, and
                dive deep into movie and TV show discussions. Our real-time chat
                and interactive features make the trailer-watching experience
                more engaging and social.
            </p>
            <h3 className="mb-2 font-secondary text-sm text-xl font-semibold lg:mb-4">
                Key Features:
            </h3>
            <ul className="mb-2 list-inside list-disc text-sm lg:mb-4 lg:text-lg">
                <li className="lg: mb-2 text-sm lg:mb-2">
                    Watch trailers seamlessly.
                </li>
                <li className="lg: mb-2 text-sm lg:mb-2">
                    Join live audio conversations and chat in real-time.
                </li>
                <li className="mb-2 lg:mb-2">
                    Get AI-powered insights and summaries.
                </li>
                <li className="mb-2 text-sm  lg:mb-2">
                    Engage with a community of movie and TV show enthusiasts.
                </li>
            </ul>
            <h3 className="mb-2 text-sm text-xl font-semibold lg:mb-4 lg:font-secondary">
                Benefits:
            </h3>
            <p className="mb-2 text-sm lg:mb-4 lg:text-lg">
                With ReelConvo, users can enhance their trailer-watching
                experience, stay updated with the latest releases, and connect
                with like-minded individuals. Its not just about watching
                trailers; its about experiencing them together.
            </p>
        </div>
    );
};
