// Inspiration page template
const inspirationPage = `
    <div id="inspiration" class="page">
        <div class="relative mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-400 rounded-xl opacity-90"></div>
            <div class="relative p-8 text-white">
                <div class="flex items-center gap-3 mb-2">
                    <h2 class="text-3xl font-bold">Inspiration Feed</h2>
                    <span class="badge badge-accent">New</span>
                </div>
                <p class="text-white/90 max-w-2xl">Discover articles, experiences, videos and ideas for your next trip.</p>
            </div>
        </div>
        
        <div class="mb-10">
            <h3 class="text-2xl font-bold mb-6 flex items-center">
                <i class="fab fa-youtube text-red-600 mr-3"></i> Featured Travel Videos
            </h3>
            <div id="youtube-videos" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="card overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div class="relative">
                        <img src="https://i.ytimg.com/vi/bD0KaJ6Upi4/hqdefault.jpg" class="w-full h-48 object-cover">
                        <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <i class="fas fa-play-circle text-4xl text-white"></i>
                        </div>
                    </div>
                    <div class="p-4">
                        <h4 class="font-bold">10 Places You Need To Visit In Europe</h4>
                        <p class="text-gray-600 text-sm mt-1">Discover the must-visit destinations across Europe's stunning landscapes and historic cities.</p>
                        <div class="flex items-center justify-between mt-3">
                            <p class="text-sm text-gray-500">10M views</p>
                            <button class="text-red-600 hover:text-red-700"><i class="fas fa-external-link-alt"></i></button>
                        </div>
                    </div>
                </div>
                <div class="card overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div class="relative">
                        <img src="https://i.ytimg.com/vi/AM0GGY-98Sg/hqdefault.jpg" class="w-full h-48 object-cover">
                        <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <i class="fas fa-play-circle text-4xl text-white"></i>
                        </div>
                    </div>
                    <div class="p-4">
                        <h4 class="font-bold">Japan Travel Guide: Tokyo, Kyoto, Osaka</h4>
                        <p class="text-gray-600 text-sm mt-1">Experience the perfect blend of tradition and modernity in Japan's iconic cities.</p>
                        <div class="flex items-center justify-between mt-3">
                            <p class="text-sm text-gray-500">5.7M views</p>
                            <button class="text-red-600 hover:text-red-700"><i class="fas fa-external-link-alt"></i></button>
                        </div>
                    </div>
                </div>
                <div class="card overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div class="relative">
                        <img src="https://i.ytimg.com/vi/3SsK-cxlj_w/hqdefault.jpg" class="w-full h-48 object-cover">
                        <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <i class="fas fa-play-circle text-4xl text-white"></i>
                        </div>
                    </div>
                    <div class="p-4">
                        <h4 class="font-bold">Bali: Island Paradise Travel Guide</h4>
                        <p class="text-gray-600 text-sm mt-1">Explore the breathtaking beaches, lush landscapes, and spiritual retreats of Bali.</p>
                        <div class="flex items-center justify-between mt-3">
                            <p class="text-sm text-gray-500">8.3M views</p>
                            <button class="text-red-600 hover:text-red-700"><i class="fas fa-external-link-alt"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 flex justify-center">
                <button id="load-more-videos" class="btn-secondary flex items-center gap-2">
                    <i class="fas fa-sync-alt"></i> Load More Videos
                </button>
            </div>
        </div>
        
        <h3 class="text-2xl font-bold mb-6 flex items-center">
            <i class="fas fa-book-open text-purple-600 mr-3"></i> Travel Articles & Guides
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${[
                {title: 'Hidden Gems of the Scottish Highlands', cat: 'Adventure', img: 'https://images.pexels.com/photos/1590141/pexels-photo-1590141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
                {title: 'A Family Adventure in the Swiss Alps', cat: 'Family', img: 'https://images.pexels.com/photos/772693/pexels-photo-772693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
                {title: 'Luxury Getaway in the Maldives', cat: 'Luxury', img: 'https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
                {title: 'Backpacking Through Southeast Asia', cat: 'Budget', img: 'https://images.pexels.com/photos/2662216/pexels-photo-2662216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
                {title: 'Exploring the Ancient Wonders of Peru', cat: 'Adventure', img: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
                {title: 'Romantic Escape to the Italian Coast', cat: 'Luxury', img: 'https://images.pexels.com/photos/1638324/pexels-photo-1638324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            ].map(item => `
                <div class="card overflow-hidden hover:shadow-lg transition-all duration-300">
                    <img src="${item.img}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <p class="text-purple-600 font-semibold text-sm">${item.cat.toUpperCase()}</p>
                        <h3 class="text-xl font-bold mt-1 mb-2">${item.title}</h3>
                        <p class="text-gray-600 text-sm mb-4">Explore rugged beauty and create unforgettable memories.</p>
                        <div class="flex items-center justify-between">
                            <a href="#" class="font-semibold text-purple-600 hover:underline">Read More &rarr;</a>
                            <button class="text-gray-400 hover:text-pink-500 transition"><i class="far fa-heart"></i></button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
`;

export default inspirationPage;
