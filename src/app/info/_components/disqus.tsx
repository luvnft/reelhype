'use client';

import { siteConfig } from '@/config/site';
import { DiscussionEmbed } from 'disqus-react';

const Disqus = ({
    id,
    title,
    media_type,
}: {
    id: string;
    title: string;
    media_type: string;
}) => {
    const disqusShortname = 'cinematic-one';

    const disqusConfig = {
        url: `${siteConfig.url}/info/${media_type}/${id}`,
        identifier: id,
        title: title,
    };

    return (
        <div className="article-container font-sans">
            <DiscussionEmbed
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    );
};

export { Disqus };
