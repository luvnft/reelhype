import React from 'react';

const OurStory = () => {
  return (
    <div className="our-story lg:mt-20 mt-10 max-w-4xl mx-auto lg:p-6  rounded-lg shadow-md">
      <h1 className="lg:text-4xl text-3xl font-bold lg:mb-4 mb-2 text-sm font-secondary">How ReelConvo Came to Life</h1>
      <h2 className="lg:text-2xl text-xl font-semibold lg:mb-6 mb-2 text-sm font-secondary">Discover the journey behind the ultimate trailer experience.</h2>
      <p className="lg:mb-4 mb-2 text-sm lg:text-lg text-gray-300">
        At ReelConvo, we're passionate about movies and TV shows. Our journey began with a simple question: How can we make the trailer-watching experience more interactive and engaging?
      </p>
      <p className="lg:mb-4 mb-2 text-sm lg:text-lg text-gray-300">
        As avid movie enthusiasts, we found ourselves wanting more than just watching trailers. We wanted to discuss, debate, and share our excitement with others. This led us to create ReelConvo.
      </p>
      <p className="lg:mb-4 mb-2 text-sm lg:text-lg text-gray-300">
        From late-night brainstorming sessions to countless coding marathons, our journey has been filled with challenges and triumphs. Each step brought us closer to creating a platform that truly connects trailer enthusiasts.
      </p>
      <p className="lg:mb-4 mb-2 text-sm lg:text-lg text-gray-300">
        Our vision is to build a vibrant community where trailer fans can come together to watch, discuss, and engage. We believe in the power of conversation and aim to make ReelConvo the ultimate hub for trailer talk.
      </p>
    </div>
  );
};

const Solution = () => {
  return (
    <div className="solution max-w-4xl mx-auto lg:p-6   rounded-lg shadow-md">
      <h1 className="text-4xl font-bold lg:mb-4 mb-2 text-sm font-secondary">Why ReelConvo is the Perfect Solution?</h1>
      <h2 className="text-2xl font-semibold lg:mb-6 mb-2 text-lg font-secondary">Transforming the trailer-watching experience with real-time conversations.</h2>
      <p className="lg:mb-4 mb-2 text-sm lg:text-lg text-gray-300">
        Trailer enthusiasts often feel disconnected while watching trailers alone. They lack a platform to share their thoughts, get real-time feedback, and engage in meaningful discussions.
      </p>
      <p className="lg:mb-4 mb-2 text-sm lg:text-lg">
        ReelConvo bridges this gap by providing a platform where users can watch trailers together, join live audio conversations, and dive deep into movie and TV show discussions. Our real-time chat and interactive features make the trailer-watching experience more engaging and social.
      </p>
      <h3 className="text-xl font-semibold lg:mb-4 mb-2 text-sm lg:font-secondary">Key Features:</h3>
      <ul className="list-disc list-inside lg:mb-4 mb-2 text-sm lg:text-lg">
        <li className="lg:mb-2 mb-2text-sm lg:">Watch trailers seamlessly.</li>
        <li className="lg:mb-2 mb-2text-sm lg:">Join live audio conversations and chat in real-time.</li>
        <li className="lg:mb-2 mb-2">Get AI-powered insights and summaries.</li>
        <li className="lg:mb-2 mb-2text-sm lg:">Engage with a community of movie and TV show enthusiasts.</li>
      </ul>
      <h3 className="text-xl font-semibold lg:mb-4 mb-2 text-sm lg:font-secondary">Benefits:</h3>
      <p className="lg:mb-4 mb-2 text-sm lg:text-lg">
        With ReelConvo, users can enhance their trailer-watching experience, stay updated with the latest releases, and connect with like-minded individuals. It's not just about watching trailers; it's about experiencing them together.
      </p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div>
      <OurStory />
      <Solution />
    </div>
  );
};

export default AboutPage;
