// Home page template
const homePage = `
    <div id="home" class="page">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="lg:col-span-2">
                <div class="flex items-center gap-2 mb-4">
                    <h2 class="text-3xl font-bold">Welcome to your travel hub</h2>
                    <span class="badge badge-primary">Powered by AI</span>
                </div>
                <p class="text-gray-600 mb-8">Start planning your next adventure with our AI-powered assistant, leveraging cutting-edge technology to provide personalized recommendations.</p>
                <div class="card h-[600px] flex flex-col overflow-hidden">
                    <div class="bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-white">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <i class="fas fa-robot text-xl"></i>
                                <h3 class="font-bold">Travel Assistant</h3>
                            </div>
                            <div class="flex gap-2">
                                <button class="p-1.5 rounded-full hover:bg-white/20 transition"><i class="fas fa-sync-alt"></i></button>
                                <button class="p-1.5 rounded-full hover:bg-white/20 transition"><i class="fas fa-expand"></i></button>
                            </div>
                        </div>
                    </div>
                    <div id="chat-box" class="flex-1 p-6 overflow-y-auto space-y-4">
                        <div class="flex items-start gap-3">
                            <div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0"><i class="fas fa-robot"></i></div>
                            <div class="chat-bubble-ai p-4 rounded-lg max-w-md">
                                <p>👋 Hello! I'm your AI travel assistant powered by Gemini. Ask me for destination ideas, flight options, or hotel recommendations for your next trip!</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 border-t bg-gray-50">
                        <div class="flex flex-wrap items-center gap-2 mb-2">
                            <button class="quick-prompt-btn bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full hover:bg-purple-200 transition">Beach vacation in June</button>
                            <button class="quick-prompt-btn bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full hover:bg-purple-200 transition">Cheap flights to Italy</button>
                            <button class="quick-prompt-btn bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full hover:bg-purple-200 transition">Best hotels in Tokyo</button>
                        </div>
                        <div class="relative">
                            <input id="chat-input" type="text" placeholder="Ask about places, hotels, or flights..." class="w-full bg-white border border-gray-200 focus:ring-purple-500 focus:border-purple-500 rounded-full pl-5 pr-12 py-3">
                            <button id="chat-send-btn" class="absolute right-3 top-1/2 -translate-y-1/2 text-purple-600 hover:text-purple-800 transition"><i class="fas fa-paper-plane text-xl"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="space-y-8">
                <div class="card p-6">
                    <h3 class="font-bold text-xl mb-4">Weather</h3>
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500">Paris, France</p>
                            <div class="flex items-center">
                                <span class="text-4xl font-bold">72°</span>
                                <span class="text-gray-500 ml-1">F</span>
                            </div>
                            <p class="text-gray-500">Sunny</p>
                        </div>
                        <div class="text-5xl text-yellow-400">
                            <i class="fas fa-sun"></i>
                        </div>
                    </div>
                    <div class="mt-4 border-t pt-4 grid grid-cols-4 gap-2 text-center">
                        <div>
                            <p class="text-gray-500 text-sm">Mon</p>
                            <i class="fas fa-sun text-yellow-400"></i>
                            <p class="text-sm font-bold">73°</p>
                        </div>
                        <div>
                            <p class="text-gray-500 text-sm">Tue</p>
                            <i class="fas fa-cloud-sun text-gray-400"></i>
                            <p class="text-sm font-bold">68°</p>
                        </div>
                        <div>
                            <p class="text-gray-500 text-sm">Wed</p>
                            <i class="fas fa-cloud text-gray-400"></i>
                            <p class="text-sm font-bold">65°</p>
                        </div>
                        <div>
                            <p class="text-gray-500 text-sm">Thu</p>
                            <i class="fas fa-sun text-yellow-400"></i>
                            <p class="text-sm font-bold">70°</p>
                        </div>
                    </div>
                </div>
                
                <div class="card p-6">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="font-bold text-xl">Recent Searches</h3>
                        <button class="text-sm text-purple-600 hover:underline">Clear All</button>
                    </div>
                    <div class="space-y-3">
                        <div class="flex items-center hover:bg-gray-50 p-2 rounded-lg transition cursor-pointer">
                            <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                                <i class="fas fa-search text-xs"></i>
                            </div>
                            <div>
                                <p class="font-medium">Hotels in Barcelona</p>
                                <p class="text-xs text-gray-500">2 days ago</p>
                            </div>
                        </div>
                        <div class="flex items-center hover:bg-gray-50 p-2 rounded-lg transition cursor-pointer">
                            <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                                <i class="fas fa-search text-xs"></i>
                            </div>
                            <div>
                                <p class="font-medium">Flights to Tokyo</p>
                                <p class="text-xs text-gray-500">5 days ago</p>
                            </div>
                        </div>
                        <div class="flex items-center hover:bg-gray-50 p-2 rounded-lg transition cursor-pointer">
                            <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                                <i class="fas fa-search text-xs"></i>
                            </div>
                            <div>
                                <p class="font-medium">Weekend trips from NYC</p>
                                <p class="text-xs text-gray-500">1 week ago</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="card p-6">
                    <h3 class="font-bold text-xl mb-4">Currency Exchange</h3>
                    <div class="flex justify-between items-center mb-3">
                        <div class="flex items-center">
                            <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                                <span class="text-xs font-bold">$</span>
                            </div>
                            <p>USD</p>
                        </div>
                        <i class="fas fa-exchange-alt text-gray-400"></i>
                        <div class="flex items-center">
                            <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                                <span class="text-xs font-bold">€</span>
                            </div>
                            <p>EUR</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <input type="number" value="1" class="w-full bg-gray-50 border-gray-200 rounded-lg p-2">
                            <p class="text-xs text-gray-500 mt-1">US Dollar</p>
                        </div>
                        <div>
                            <input type="number" value="0.93" class="w-full bg-gray-50 border-gray-200 rounded-lg p-2">
                            <p class="text-xs text-gray-500 mt-1">Euro</p>
                        </div>
                    </div>
                    <div class="text-center mt-4">
                        <p class="text-sm text-gray-500">1 USD = 0.93 EUR</p>
                        <p class="text-xs text-gray-400">Updated: Today, ${new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-10">
            <h2 class="text-2xl font-bold mb-6">Trending Destinations</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                ${[
                    {
                        img: 'https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        name: 'Paris',
                        country: 'France',
                        rating: 4.8
                    },
                    {
                        img: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        name: 'Venice',
                        country: 'Italy',
                        rating: 4.7
                    },
                    {
                        img: 'https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        name: 'Kyoto',
                        country: 'Japan',
                        rating: 4.9
                    },
                    {
                        img: 'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                        name: 'Santorini',
                        country: 'Greece',
                        rating: 4.8
                    }
                ].map(dest => `
                    <div class="card overflow-hidden hover:shadow-lg transition-all duration-300">
                        <img src="${dest.img}" class="w-full h-44 object-cover">
                        <div class="p-4">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h3 class="font-bold text-lg">${dest.name}</h3>
                                    <p class="text-gray-500 text-sm">${dest.country}</p>
                                </div>
                                <div class="flex items-center">
                                    <i class="fas fa-star text-yellow-400 mr-1"></i>
                                    <span class="text-sm font-medium">${dest.rating}</span>
                                </div>
                            </div>
                            <div class="flex mt-4 pt-4 border-t justify-between">
                                <button class="text-sm text-purple-600 hover:text-purple-800 font-medium">Explore</button>
                                <button class="favorite-btn text-gray-400 hover:text-pink-500 transition" data-id="${dest.name.toLowerCase()}" data-name="${dest.name}">
                                    <i class="far fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
`;

export default homePage;
