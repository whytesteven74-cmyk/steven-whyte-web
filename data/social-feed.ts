export interface SocialPost {
    id: string;
    type: 'native' | 'tiktok' | 'youtube';
    url: string; // Video URL for native, or embed URL for others
    thumbnail?: string;
    caption: string;
    views?: string;
    likes?: string;
}

export const socialFeedData: SocialPost[] = [
    {
        id: '1',
        type: 'native',
        url: 'https://videos.pexels.com/video-files/4763826/4763826-uhd_1440_2560_24fps.mp4',
        thumbnail: 'https://images.pexels.com/videos/4763826/free-video-4763826.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        caption: 'Finding peace in the little moments. 🌿 #healing #nature',
        views: '1.2k',
        likes: '124'
    },
    {
        id: '2',
        type: 'native',
        url: 'https://videos.pexels.com/video-files/8553653/8553653-uhd_1440_2732_25fps.mp4',
        thumbnail: 'https://images.pexels.com/videos/8553653/free-video-8553653.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        caption: 'The journey is not valid without the struggle. Keep going. 💪',
        views: '3.5k',
        likes: '450'
    },
    {
        id: '3',
        type: 'native',
        url: 'https://videos.pexels.com/video-files/5644127/5644127-uhd_1440_2560_24fps.mp4',
        thumbnail: 'https://images.pexels.com/videos/5644127/free-video-5644127.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        caption: 'Morning walks are my therapy. ☀️ #mentalhealth',
        views: '890',
        likes: '85'
    },
    {
        id: '4',
        type: 'native',
        url: 'https://videos.pexels.com/video-files/6952936/6952936-uhd_1440_2732_25fps.mp4',
        thumbnail: 'https://images.pexels.com/videos/6952936/free-video-6952936.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        caption: 'Connection is everything. 💚',
        views: '2.1k',
        likes: '210'
    }
];
