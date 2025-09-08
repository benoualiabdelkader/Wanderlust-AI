// Hotels page template
const hotelsPage = `
    <div id="hotels" class="page">
        <div class="relative mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-90"></div>
            <div class="relative p-8 text-white">
                <h2 class="text-3xl font-bold mb-2">Find Perfect Hotels</h2>
                <p class="text-white/90 max-w-2xl">Discover the best hotels for your next trip with our personalized recommendations.</p>
            </div>
        </div>
        
        <div class="card p-6 mb-8">
            <h3 class="text-xl font-bold mb-6">Search for Hotels</h3>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                    <label class="font-semibold text-sm block mb-1">Destination</label>
                    <div class="relative">
                        <i class="fas fa-map-marker-alt absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input type="text" placeholder="City or hotel name" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pl-10 focus:ring-indigo-500">
                    </div>
                </div>
                <div>
                    <label class="font-semibold text-sm block mb-1">Check-in</label>
                    <div class="relative">
                        <i class="fas fa-calendar absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input type="date" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pl-10 focus:ring-indigo-500">
                    </div>
                </div>
                <div>
                    <label class="font-semibold text-sm block mb-1">Check-out</label>
                    <div class="relative">
                        <i class="fas fa-calendar-alt absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input type="date" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pl-10 focus:ring-indigo-500">
                    </div>
                </div>
                <div>
                    <label class="font-semibold text-sm block mb-1">Guests</label>
                    <div class="relative">
                        <i class="fas fa-user-friends absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <select class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pl-10 focus:ring-indigo-500">
                            <option>1 adult</option>
                            <option>2 adults</option>
                            <option>2 adults, 1 child</option>
                            <option>2 adults, 2 children</option>
                            <option>3 adults</option>
                            <option>4+ adults</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="mt-6 flex flex-wrap gap-4">
                <div class="flex items-center">
                    <input type="checkbox" id="pool" class="rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="pool" class="ml-2 text-sm text-gray-600">Pool</label>
                </div>
                <div class="flex items-center">
                    <input type="checkbox" id="parking" class="rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="parking" class="ml-2 text-sm text-gray-600">Free Parking</label>
                </div>
                <div class="flex items-center">
                    <input type="checkbox" id="breakfast" class="rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="breakfast" class="ml-2 text-sm text-gray-600">Breakfast Included</label>
                </div>
                <div class="flex items-center">
                    <input type="checkbox" id="wifi" class="rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="wifi" class="ml-2 text-sm text-gray-600">Free WiFi</label>
                </div>
                <div class="flex items-center">
                    <input type="checkbox" id="pets" class="rounded text-indigo-600 focus:ring-indigo-500">
                    <label for="pets" class="ml-2 text-sm text-gray-600">Pet Friendly</label>
                </div>
            </div>
            <div class="mt-6">
                <button class="btn-primary w-full md:w-auto">
                    <i class="fas fa-search mr-2"></i>Search Hotels
                </button>
            </div>
        </div>
        
        <h3 class="text-2xl font-bold mb-6">Featured Hotels</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            ${[
                {
                    img: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    name: 'Grand Plaza Hotel',
                    location: 'Paris, France',
                    rating: 4.8,
                    features: ['Spa', 'Pool', 'Restaurant'],
                    price: 299
                },
                {
                    img: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    name: 'Beachfront Resort',
                    location: 'Cancun, Mexico',
                    rating: 4.9,
                    features: ['Beach', 'Pool', 'All-inclusive'],
                    price: 349
                },
                {
                    img: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    name: 'City Lights Hotel',
                    location: 'Tokyo, Japan',
                    rating: 4.7,
                    features: ['City View', 'Spa', 'Restaurant'],
                    price: 279
                },
                {
                    img: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    name: 'Mountain Lodge',
                    location: 'Aspen, Colorado',
                    rating: 4.8,
                    features: ['Ski-in/Ski-out', 'Fireplace', 'Spa'],
                    price: 319
                },
                {
                    img: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    name: 'Sunset Suites',
                    location: 'Santorini, Greece',
                    rating: 4.9,
                    features: ['Ocean View', 'Private Pool', 'Luxury'],
                    price: 399
                },
                {
                    img: 'https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    name: 'Historic Grand Hotel',
                    location: 'Vienna, Austria',
                    rating: 4.7,
                    features: ['Historic', 'Luxury', 'Restaurant'],
                    price: 329
                }
            ].map(hotel => `
                <div class="card overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div class="relative">
                        <img src="${hotel.img}" class="w-full h-48 object-cover">
                        <button class="favorite-btn absolute top-3 right-3 bg-white/80 hover:bg-white w-8 h-8 rounded-full flex items-center justify-center text-gray-700 hover:text-pink-500 transition" data-id="${hotel.name.toLowerCase()}" data-name="${hotel.name}" data-type="hotel">
                            <i class="far fa-heart"></i>
                        </button>
                        <div class="absolute top-3 left-3 bg-white/90 px-2 py-0.5 rounded-full flex items-center">
                            <i class="fas fa-star text-yellow-400 mr-1 text-xs"></i>
                            <span class="text-xs font-medium text-gray-800">${hotel.rating}</span>
                        </div>
                    </div>
                    <div class="p-5">
                        <h3 class="font-bold text-lg">${hotel.name}</h3>
                        <div class="flex items-center text-gray-500 text-sm mt-1">
                            <i class="fas fa-map-marker-alt mr-1"></i>
                            <span>${hotel.location}</span>
                        </div>
                        <div class="flex flex-wrap gap-1 mt-3">
                            ${hotel.features.map(feature => `
                                <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">${feature}</span>
                            `).join('')}
                        </div>
                        <div class="flex justify-between items-center mt-4 pt-4 border-t">
                            <p class="font-bold text-purple-600">$${hotel.price} <span class="text-gray-500 font-normal text-sm">/ night</span></p>
                            <button class="text-sm text-purple-600 hover:text-purple-800 font-medium">View Details</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <div class="card p-6 mb-8">
            <h3 class="text-xl font-bold mb-4 flex items-center">
                <i class="fas fa-lightbulb text-yellow-500 mr-2"></i> Need Inspiration?
            </h3>
            <p class="text-gray-600 mb-6">Not sure where to stay? Let our AI assistant help you find the perfect hotel based on your preferences.</p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button class="p-4 border rounded-lg hover:border-purple-500 hover:shadow-sm transition text-center">
                    <i class="fas fa-umbrella-beach text-3xl text-blue-500 mb-2"></i>
                    <p class="font-semibold">Beach Resorts</p>
                </button>
                <button class="p-4 border rounded-lg hover:border-purple-500 hover:shadow-sm transition text-center">
                    <i class="fas fa-city text-3xl text-indigo-500 mb-2"></i>
                    <p class="font-semibold">City Escapes</p>
                </button>
                <button class="p-4 border rounded-lg hover:border-purple-500 hover:shadow-sm transition text-center">
                    <i class="fas fa-snowflake text-3xl text-teal-500 mb-2"></i>
                    <p class="font-semibold">Winter Getaways</p>
                </button>
            </div>
        </div>
    </div>
`;

export default hotelsPage;
