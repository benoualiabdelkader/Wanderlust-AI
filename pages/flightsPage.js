// Flights page template
const flightsPage = `
    <div id="flights" class="page">
        <div class="relative mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-sky-600 to-teal-500 rounded-xl opacity-90"></div>
            <div class="relative p-8 text-white">
                <h2 class="text-3xl font-bold mb-2">Find the Perfect Flight</h2>
                <p class="text-white/90 max-w-2xl">Search for flights across multiple airlines with our AI-powered flight search engine.</p>
            </div>
        </div>

        <div class="card p-6 mb-8">
            <div class="flex gap-4 mb-6 border-b pb-4">
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="trip-type" class="form-radio text-sky-600" checked>
                    <span class="font-medium">Round Trip</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="trip-type" class="form-radio text-sky-600">
                    <span class="font-medium">One Way</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="trip-type" class="form-radio text-sky-600">
                    <span class="font-medium">Multi-City</span>
                </label>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
                <div class="lg:col-span-2 grid grid-cols-2 gap-4">
                    <div>
                        <label class="font-semibold text-sm block mb-1">From</label>
                        <div class="relative">
                            <i class="fas fa-plane-departure absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            <input type="text" value="New York (JFK)" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pl-10 focus:ring-sky-500">
                        </div>
                    </div>
                    <div>
                        <label class="font-semibold text-sm block mb-1">To</label>
                        <div class="relative">
                            <i class="fas fa-plane-arrival absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            <input type="text" value="Paris (CDG)" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pl-10 focus:ring-sky-500">
                        </div>
                    </div>
                </div>
                <div class="lg:col-span-2 grid grid-cols-2 gap-4">
                    <div>
                        <label class="font-semibold text-sm block mb-1">Departure</label>
                        <div class="relative">
                            <i class="fas fa-calendar absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            <input type="date" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pl-10 focus:ring-sky-500">
                        </div>
                    </div>
                    <div>
                        <label class="font-semibold text-sm block mb-1">Return</label>
                        <div class="relative">
                            <i class="fas fa-calendar-alt absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            <input type="date" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pl-10 focus:ring-sky-500">
                        </div>
                    </div>
                </div>
                <div>
                    <label class="font-semibold text-sm block mb-1">Travelers</label>
                    <div class="relative">
                        <i class="fas fa-user-friends absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <select class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pl-10 focus:ring-sky-500">
                            <option>1 Adult</option>
                            <option>2 Adults</option>
                            <option>1 Adult, 1 Child</option>
                            <option>2 Adults, 1 Child</option>
                            <option>2 Adults, 2 Children</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label class="font-semibold text-sm block mb-1">Class</label>
                    <div class="relative">
                        <i class="fas fa-chair absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <select class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pl-10 focus:ring-sky-500">
                            <option>Economy</option>
                            <option>Premium Economy</option>
                            <option>Business</option>
                            <option>First Class</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="mt-6 flex justify-end">
                <button class="btn-primary flex items-center gap-2 px-8">
                    <i class="fas fa-search"></i> Search Flights
                </button>
            </div>
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-6">
            <button class="bg-sky-100 text-sky-800 font-semibold px-6 py-2 rounded-full flex items-center gap-2 hover:bg-sky-200 transition">
                <i class="fas fa-dollar-sign"></i> Cheapest
            </button>
            <button class="bg-white border border-gray-200 font-semibold px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-50 transition">
                <i class="fas fa-bolt"></i> Fastest
            </button>
            <button class="bg-white border border-gray-200 font-semibold px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-50 transition">
                <i class="fas fa-star"></i> Recommended
            </button>
            <button class="bg-white border border-gray-200 font-semibold px-6 py-2 rounded-full flex items-center gap-2 hover:bg-gray-50 transition">
                <i class="fas fa-leaf"></i> Eco-Friendly
            </button>
        </div>

        <div class="space-y-6">
            ${[
                { airline: 'Delta Airlines', logo: 'dl', price: 550, stops: 'Nonstop', duration: '8h 00m', departure: '10:00 AM', arrival: '12:00 PM', from: 'JFK', to: 'CDG', ecoFriendly: true },
                { airline: 'United Airlines', logo: 'ua', price: 480, stops: '1 Stop', duration: '9h 45m', departure: '8:30 AM', arrival: '11:15 PM', from: 'JFK', to: 'CDG', stopDetails: 'LHR (1h 30m)' },
                { airline: 'Air France', logo: 'af', price: 620, stops: 'Nonstop', duration: '7h 45m', departure: '6:15 PM', arrival: '8:00 AM', from: 'JFK', to: 'CDG', preferred: true },
            ].map(flight => `
                <div class="card p-6 hover:shadow-lg transition-all duration-300 ${flight.preferred ? 'border-l-4 border-sky-500' : ''}">
                    <div class="grid grid-cols-12 items-center gap-4">
                        <div class="col-span-12 md:col-span-2 flex items-center gap-3">
                            <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                <span class="font-bold text-gray-700">${flight.logo.toUpperCase()}</span>
                            </div>
                            <div>
                                <p class="font-bold">${flight.airline}</p>
                                <p class="text-xs text-gray-500">Flight ${Math.floor(Math.random() * 1000) + 1000}</p>
                            </div>
                        </div>
                        
                        <div class="col-span-12 md:col-span-3 flex flex-col items-center md:items-start">
                            <div class="flex items-center gap-3">
                                <p class="text-xl font-bold">${flight.departure}</p>
                                <div class="flex flex-col items-center px-2">
                                    <div class="w-16 h-0.5 bg-gray-300 relative">
                                        ${flight.stops === 'Nonstop' ? '' : `<div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-gray-400"></div>`}
                                    </div>
                                    <p class="text-xs text-gray-500 mt-1">${flight.stops}</p>
                                </div>
                                <p class="text-xl font-bold">${flight.arrival}</p>
                            </div>
                            <div class="flex justify-between w-full text-xs text-gray-500 mt-1">
                                <span>${flight.from}</span>
                                <span class="text-center">${flight.duration}</span>
                                <span>${flight.to}</span>
                            </div>
                            ${flight.stops !== 'Nonstop' ? `<p class="text-xs text-gray-500 mt-1">Stop: ${flight.stopDetails}</p>` : ''}
                        </div>
                        
                        <div class="col-span-6 md:col-span-3 flex flex-wrap gap-2">
                            ${flight.ecoFriendly ? `<span class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs flex items-center gap-1"><i class="fas fa-leaf"></i> Low Emissions</span>` : ''}
                            ${flight.preferred ? `<span class="bg-sky-100 text-sky-700 px-2 py-1 rounded-full text-xs flex items-center gap-1"><i class="fas fa-thumbs-up"></i> Recommended</span>` : ''}
                            <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">In-flight Wifi</span>
                            <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">USB Power</span>
                        </div>
                        
                        <div class="col-span-6 md:col-span-2 text-center md:text-left">
                            <p class="font-bold text-2xl text-sky-600">$${flight.price}</p>
                            <p class="text-xs text-gray-500">Round Trip, per person</p>
                        </div>
                        
                        <div class="col-span-12 md:col-span-2 flex justify-center md:justify-end">
                            <button class="btn-primary w-full md:w-auto">Select</button>
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
`;

export default flightsPage;
