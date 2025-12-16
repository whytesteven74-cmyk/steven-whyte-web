
import React from 'react';

export const TikTokEmbed = ({ videoId }: { videoId: string }) => {
    return (
        <div className="w-full h-full flex items-center justify-center bg-black rounded-lg overflow-hidden">
            <iframe
                src={`https://www.tiktok.com/embed/v2/${videoId}`}
                className="w-full h-full"
                style={{ minHeight: '550px' }}
                allowFullScreen
                scrolling="no"
                frameBorder="0"
            ></iframe>
        </div>
    );
};
