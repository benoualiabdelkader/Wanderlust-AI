// YouTube videos rendering
async function renderYouTubeVideos() {
    console.log("Rendering YouTube videos...");
    const videoContainer = document.getElementById('youtube-videos');
    const loadMoreBtn = document.getElementById('load-more-videos');
    
    if (!videoContainer) return;
    
    // Default videos (in case API fails)
    const defaultVideos = [
        {
            id: { videoId: 'bD0KaJ6Upi4' },
            snippet: {
                title: '10 Places You Need To Visit In Europe',
                description: 'Discover the must-visit destinations across Europe\'s stunning landscapes and historic cities.',
                channelTitle: 'Travel Guides',
                thumbnails: { high: { url: 'https://i.ytimg.com/vi/bD0KaJ6Upi4/hqdefault.jpg' } }
            }
        },
        {
            id: { videoId: 'AM0GGY-98Sg' },
            snippet: {
                title: 'Japan Travel Guide: Tokyo, Kyoto, Osaka',
                description: 'Experience the perfect blend of tradition and modernity in Japan\'s iconic cities.',
                channelTitle: 'World Explorers',
                thumbnails: { high: { url: 'https://i.ytimg.com/vi/AM0GGY-98Sg/hqdefault.jpg' } }
            }
        },
        {
            id: { videoId: '3SsK-cxlj_w' },
            snippet: {
                title: 'Bali: Island Paradise Travel Guide',
                description: 'Explore the breathtaking beaches, lush landscapes, and spiritual retreats of Bali.',
                channelTitle: 'Tropical Adventures',
                thumbnails: { high: { url: 'https://i.ytimg.com/vi/3SsK-cxlj_w/hqdefault.jpg' } }
            }
        }
    ];
    
    // Try to fetch videos from YouTube API
    try {
        if (YOUTUBE_API_KEY && YOUTUBE_API_KEY !== 'YOUR_YOUTUBE_API_KEY') {
            const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=travel%20destinations&type=video&key=${YOUTUBE_API_KEY}`);
            if (response.ok) {
                const data = await response.json();
                renderVideos(data.items);
                return;
            }
        }
        // Fall back to default videos if API fails
        renderVideos(defaultVideos);
    } catch (error) {
        console.error("Failed to fetch YouTube videos:", error);
        renderVideos(defaultVideos);
    }
    
    function renderVideos(videos) {
        videoContainer.innerHTML = videos.map(video => `
            <div class="card overflow-hidden hover:shadow-lg transition-all duration-300">
                <div class="relative">
                    <img src="${video.snippet.thumbnails.high.url}" class="w-full h-48 object-cover">
                    <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <i class="fas fa-play-circle text-4xl text-white"></i>
                    </div>
                </div>
                <div class="p-4">
                    <h4 class="font-bold">${video.snippet.title}</h4>
                    <p class="text-gray-600 text-sm mt-1">${video.snippet.description.substring(0, 100)}...</p>
                    <div class="flex items-center justify-between mt-3">
                        <p class="text-sm text-gray-500">${video.snippet.channelTitle}</p>
                        <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank" class="text-red-600 hover:text-red-700">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Load more videos when button is clicked
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', async () => {
            loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            
            try {
                if (YOUTUBE_API_KEY && YOUTUBE_API_KEY !== 'YOUR_YOUTUBE_API_KEY') {
                    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=travel%20destinations&type=video&key=${YOUTUBE_API_KEY}&pageToken=CAUQAA`);
                    if (response.ok) {
                        const data = await response.json();
                        const newVideos = data.items.map(video => `
                            <div class="card overflow-hidden hover:shadow-lg transition-all duration-300">
                                <div class="relative">
                                    <img src="${video.snippet.thumbnails.high.url}" class="w-full h-48 object-cover">
                                    <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                        <i class="fas fa-play-circle text-4xl text-white"></i>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <h4 class="font-bold">${video.snippet.title}</h4>
                                    <p class="text-gray-600 text-sm mt-1">${video.snippet.description.substring(0, 100)}...</p>
                                    <div class="flex items-center justify-between mt-3">
                                        <p class="text-sm text-gray-500">${video.snippet.channelTitle}</p>
                                        <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank" class="text-red-600 hover:text-red-700">
                                            <i class="fas fa-external-link-alt"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        `).join('');
                        
                        videoContainer.innerHTML += newVideos;
                    }
                }
            } catch (error) {
                console.error("Error fetching more videos:", error);
            } finally {
                loadMoreBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Load More Videos';
            }
        });
    }
}
