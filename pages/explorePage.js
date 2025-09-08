// Explore page template
const explorePage = `
    <div id="explore" class="page">
        <div class="relative mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl opacity-90"></div>
            <div class="relative p-8 text-white">
                <h2 class="text-3xl font-bold mb-2">Explore Places</h2>
                <p class="text-white/90 max-w-2xl">Discover amazing destinations, hotels, and flights for your next adventure.</p>
                <div class="mt-6 relative max-w-xl">
                    <input id="explore-search" type="text" placeholder="Search destinations, hotels, or activities..." class="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder-white/80 rounded-lg p-4 pl-5 pr-12 focus:ring-white">
                    <button id="explore-search-btn" class="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-gray-200 transition">
                        <i class="fas fa-search text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <div class="mb-8">
            <div class="flex border-b border-gray-200 overflow-x-auto hide-scrollbar mb-6">
                <button class="explore-tab-label px-6 py-3 font-semibold text-gray-600 hover:text-purple-600 border-b-2 border-transparent active" data-target="destinations-content">Destinations</button>
                <button class="explore-tab-label px-6 py-3 font-semibold text-gray-600 hover:text-purple-600 border-b-2 border-transparent" data-target="hotels-content">Hotels</button>
                <button class="explore-tab-label px-6 py-3 font-semibold text-gray-600 hover:text-purple-600 border-b-2 border-transparent" data-target="flights-content">Flights</button>
            </div>
            
            <div id="destinations-content" class="explore-tab-content">
                <div class="flex justify-between items-center mb-6">
                    <div class="flex items-center overflow-x-auto hide-scrollbar space-x-2">
                        <button class="destination-filter bg-purple-600 text-white px-3 py-1.5 rounded-full text-sm font-medium" data-filter="all">All</button>
                        <button class="destination-filter bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium" data-filter="beach">Beaches</button>
                        <button class="destination-filter bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium" data-filter="city">Cities</button>
                        <button class="destination-filter bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium" data-filter="mountain">Mountains</button>
                        <button class="destination-filter bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium" data-filter="countryside">Countryside</button>
                        <button class="destination-filter bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium" data-filter="island">Islands</button>
                    </div>
                    <div class="relative">
                        <select class="bg-gray-50 border border-gray-200 text-gray-700 py-2 pl-3 pr-8 rounded-lg focus:ring-purple-500">
                            <option>Recommended</option>
                            <option>Highest Rated</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${[
                        {
                            img: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            name: 'Amalfi Coast',
                            country: 'Italy',
                            rating: 4.9,
                            tags: ['Beach', 'Cultural'],
                            price: 120
                        },
                        {
                            img: 'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            name: 'Kyoto',
                            country: 'Japan',
                            rating: 4.8,
                            tags: ['Cultural', 'Historical'],
                            price: 95
                        },
                        {
                            img: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            name: 'Barcelona',
                            country: 'Spain',
                            rating: 4.7,
                            tags: ['City', 'Beach'],
                            price: 85
                        },
                        {
                            img: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            name: 'Bali',
                            country: 'Indonesia',
                            rating: 4.8,
                            tags: ['Beach', 'Nature'],
                            price: 75
                        },
                        {
                            img: 'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            name: 'Santorini',
                            country: 'Greece',
                            rating: 4.9,
                            tags: ['Beach', 'Luxury'],
                            price: 150
                        },
                        {
                            img: 'https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            name: 'Swiss Alps',
                            country: 'Switzerland',
                            rating: 4.9,
                            tags: ['Mountain', 'Adventure'],
                            price: 110
                        }
                    ].map(destination => `
                        <div class="card overflow-hidden hover:shadow-lg transition-all duration-300">
                            <div class="relative">
                                <img src="${destination.img}" class="w-full h-48 object-cover">
                                <button class="favorite-btn absolute top-3 right-3 bg-white/80 hover:bg-white w-8 h-8 rounded-full flex items-center justify-center text-gray-700 hover:text-pink-500 transition" data-id="${destination.name.toLowerCase()}" data-name="${destination.name}">
                                    <i class="far fa-heart"></i>
                                </button>
                            </div>
                            <div class="p-5">
                                <div class="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 class="font-bold text-lg">${destination.name}</h3>
                                        <p class="text-gray-500 text-sm">${destination.country}</p>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-star text-yellow-400 mr-1"></i>
                                        <span class="text-sm font-medium">${destination.rating}</span>
                                    </div>
                                </div>
                                <div class="flex space-x-2 mb-3">
                                    ${destination.tags.map(tag => `<span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">${tag}</span>`).join('')}
                                </div>
                                <div class="flex justify-between items-center pt-3 border-t border-gray-100">
                                    <p class="font-bold text-purple-600">$${destination.price} <span class="text-gray-500 font-normal text-sm">/ day</span></p>
                                    <button class="text-sm text-purple-600 hover:text-purple-800 font-medium">View Details</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="flex justify-center mt-8">
                    <button class="btn-secondary flex items-center gap-2">
                        <i class="fas fa-spinner"></i> Load More Destinations
                    </button>
                </div>
            </div>
            
            <div id="hotels-content" class="explore-tab-content hidden">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${[
                        {
                            img: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            name: 'Grand Plaza Hotel',
                            location: 'Paris, France',
                            rating: 4.8,
                            tags: ['5-star', 'Spa'],
                            price: 299
                        },
                        {
                            img: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            name: 'Oceanview Resort',
                            location: 'Bali, Indonesia',
                            rating: 4.9,
                            tags: ['Beach', 'Pool'],
                            price: 249
                        },
                        {
                            img: 'https://images.pexels.com/photos/2736388/pexels-photo-2736388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            name: 'Alpine Lodge',
                            location: 'Zurich, Switzerland',
                            rating: 4.7,
                            tags: ['Mountain', 'Luxury'],
                            price: 320
                        },
                        {
                            img: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            name: 'Metropolitan Suites',
                            location: 'New York, USA',
                            rating: 4.6,
                            tags: ['City View', 'Gym'],
                            price: 389
                        },
                        {
                            img: 'https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            name: 'Cherry Blossom Inn',
                            location: 'Kyoto, Japan',
                            rating: 4.9,
                            tags: ['Cultural', 'Garden'],
                            price: 270
                        },
                        {
                            img: 'https://images.pexels.com/photos/2029719/pexels-photo-2029719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                            name: 'Sunset Resort & Spa',
                            location: 'Santorini, Greece',
                            rating: 4.9,
                            tags: ['Sea View', 'Infinity Pool'],
                            price: 450
                        }
                    ].map(hotel => `
                        <div class="card overflow-hidden hover:shadow-lg transition-all duration-300">
                            <div class="relative">
                                <img src="${hotel.img}" class="w-full h-48 object-cover">
                                <button class="favorite-btn absolute top-3 right-3 bg-white/80 hover:bg-white w-8 h-8 rounded-full flex items-center justify-center text-gray-700 hover:text-pink-500 transition" data-id="${hotel.name.toLowerCase()}" data-name="${hotel.name}" data-type="hotel">
                                    <i class="far fa-heart"></i>
                                </button>
                                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                    <div class="flex justify-between">
                                        <div class="flex space-x-1">
                                            ${hotel.tags.map(tag => `<span class="text-xs bg-white/90 text-gray-800 px-2 py-0.5 rounded-full">${tag}</span>`).join('')}
                                        </div>
                                        <div class="flex items-center bg-white/90 px-2 py-0.5 rounded-full">
                                            <i class="fas fa-star text-yellow-400 mr-1 text-xs"></i>
                                            <span class="text-xs font-medium text-gray-800">${hotel.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-5">
                                <h3 class="font-bold text-lg">${hotel.name}</h3>
                                <div class="flex items-center text-gray-500 text-sm mt-1 mb-3">
                                    <i class="fas fa-map-marker-alt mr-1"></i>
                                    <span>${hotel.location}</span>
                                </div>
                                <div class="flex justify-between items-center pt-3 border-t border-gray-100">
                                    <p class="font-bold text-purple-600">$${hotel.price} <span class="text-gray-500 font-normal text-sm">/ night</span></p>
                                    <button class="text-sm text-purple-600 hover:text-purple-800 font-medium">View Deal</button>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="flex justify-center mt-8">
                    <button class="btn-secondary flex items-center gap-2">
                        <i class="fas fa-spinner"></i> Load More Hotels
                    </button>
                </div>
            </div>
            
            <div id="flights-content" class="explore-tab-content hidden">
                ${[
                    {
                        airline: 'United Airlines',
                        logo: 'https://placehold.co/30x30?text=UA',
                        from: 'New York (JFK)',
                        to: 'London (LHR)',
                        departure: '10:00 AM',
                        arrival: '10:30 PM',
                        duration: '7h 30m',
                        stops: 'Direct',
                        price: 549
                    },
                    {
                        airline: 'British Airways',
                        logo: 'https://placehold.co/30x30?text=BA',
                        from: 'San Francisco (SFO)',
                        to: 'Tokyo (HND)',
                        departure: '1:15 PM',
                        arrival: '6:30 PM',
                        duration: '11h 15m',
                        stops: '1 Stop (LAX)',
                        price: 876
                    },
                    {
                        airline: 'Emirates',
                        logo: 'https://placehold.co/30x30?text=EM',
                        from: 'Los Angeles (LAX)',
                        to: 'Dubai (DXB)',
                        departure: '3:45 PM',
                        arrival: '7:20 PM',
                        duration: '15h 35m',
                        stops: 'Direct',
                        price: 1120
                    },
                    {
                        airline: 'Lufthansa',
                        logo: 'https://placehold.co/30x30?text=LH',
                        from: 'Chicago (ORD)',
                        to: 'Berlin (BER)',
                        departure: '8:30 PM',
                        arrival: '11:45 AM',
                        duration: '9h 15m',
                        stops: 'Direct',
                        price: 672
                    },
                    {
                        airline: 'Singapore Airlines',
                        logo: 'https://placehold.co/30x30?text=SG',
                        from: 'New York (JFK)',
                        to: 'Singapore (SIN)',
                        departure: '11:50 PM',
                        arrival: '6:15 AM',
                        duration: '18h 25m',
                        stops: '1 Stop (FRA)',
                        price: 1350
                    }
                ].map(flight => `
                    <div class="card p-5 hover:shadow-lg transition-all duration-300 mb-4">
                        <div class="grid grid-cols-12 items-center gap-4">
                            <div class="col-span-2 md:col-span-1">
                                <img src="${flight.logo}" class="w-8 h-8 object-contain mx-auto">
                            </div>
                            <div class="col-span-10 md:col-span-3">
                                <p class="font-medium">${flight.airline}</p>
                                <p class="text-xs text-gray-500">Economy</p>
                            </div>
                            <div class="col-span-5 md:col-span-2">
                                <p class="font-bold">${flight.departure}</p>
                                <p class="text-xs text-gray-500">${flight.from}</p>
                            </div>
                            <div class="col-span-2 md:col-span-1 flex justify-center">
                                <div class="text-gray-300">
                                    <i class="fas fa-plane"></i>
                                </div>
                            </div>
                            <div class="col-span-5 md:col-span-2">
                                <p class="font-bold">${flight.arrival}</p>
                                <p class="text-xs text-gray-500">${flight.to}</p>
                            </div>
                            <div class="col-span-6 md:col-span-1">
                                <p class="text-sm font-medium">${flight.duration}</p>
                                <p class="text-xs text-gray-500">${flight.stops}</p>
                            </div>
                            <div class="col-span-6 md:col-span-2 text-right">
                                <p class="font-bold text-purple-600">$${flight.price}</p>
                                <button class="mt-1 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full hover:bg-purple-200 transition">Select</button>
                            </div>
                        </div>
                    </div>
                `).join('')}
                
                <div class="flex justify-center mt-8">
                    <button class="btn-secondary flex items-center gap-2">
                        <i class="fas fa-spinner"></i> Load More Flights
                    </button>
                </div>
            </div>
        </div>
    </div>
`;

export default explorePage;
