// Planner page template
const plannerPage = `
    <div id="planner" class="page">
        <div class="relative mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-xl opacity-90"></div>
            <div class="relative p-8 text-white">
                <h2 class="text-3xl font-bold mb-2">Trip Planner</h2>
                <p class="text-white/90 max-w-2xl">Create personalized itineraries with our AI-powered planner using Gemini and Google Search.</p>
            </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div class="card p-6 lg:col-span-1">
                <h3 class="text-xl font-bold mb-6">Plan New Trip</h3>
                <div class="space-y-4">
                    <div>
                        <label class="font-semibold text-sm block mb-1">Destination</label>
                        <div class="relative">
                            <i class="fas fa-map-marker-alt absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            <input id="trip-destination" type="text" placeholder="e.g., Paris, France" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pl-10 focus:ring-indigo-500">
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="font-semibold text-sm block mb-1">Start Date</label>
                            <div class="relative">
                                <i class="fas fa-calendar absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input id="trip-start" type="date" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pl-10 focus:ring-indigo-500">
                            </div>
                        </div>
                        <div>
                            <label class="font-semibold text-sm block mb-1">End Date</label>
                            <div class="relative">
                                <i class="fas fa-calendar-alt absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input id="trip-end" type="date" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pl-10 focus:ring-indigo-500">
                            </div>
                        </div>
                    </div>
                    <div>
                        <label class="font-semibold text-sm block mb-1">Trip Style</label>
                        <div class="relative">
                            <i class="fas fa-tag absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            <select id="trip-style" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pl-10 focus:ring-indigo-500">
                                <option>Sightseeing</option>
                                <option>Adventure</option>
                                <option>Relaxation</option>
                                <option>Culinary</option>
                                <option>Cultural</option>
                                <option>Family-friendly</option>
                                <option>Budget</option>
                                <option>Luxury</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="font-semibold text-sm block mb-1">Number of Travelers</label>
                        <div class="relative">
                            <i class="fas fa-user-friends absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                            <input id="trip-travelers" type="number" min="1" value="2" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pl-10 focus:ring-indigo-500">
                        </div>
                    </div>
                    <button id="generate-trip-btn" class="btn-primary w-full flex items-center justify-center gap-2">
                        <i class="fas fa-magic"></i> Generate Trip Itinerary
                    </button>
                </div>
            </div>
            
            <div class="lg:col-span-2">
                <div class="flex justify-between items-center mb-6">
                    <div>
                        <h2 class="text-2xl font-bold">Trip to Paris</h2>
                        <p class="text-gray-600">July 15 - July 20, 2025</p>
                    </div>
                    <div class="flex gap-2">
                        <button class="btn-secondary"><i class="fas fa-share-alt mr-2"></i>Share</button>
                        <button class="btn-secondary"><i class="fas fa-download mr-2"></i>Export</button>
                    </div>
                </div>
                
                <div class="relative pl-8 space-y-6 border-l-2 border-purple-200">
                    <!-- Day 1 -->
                    <div class="card p-6 relative hover:shadow-lg transition-all duration-300">
                        <div class="absolute -left-12 top-6 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center border-4 border-white">
                            <i class="fas fa-plane-departure"></i>
                        </div>
                        <div class="flex justify-between items-start">
                            <h3 class="font-bold text-lg">Day 1: Arrival and Eiffel Tower</h3>
                            <button class="text-gray-400 hover:text-purple-600"><i class="fas fa-edit"></i></button>
                        </div>
                        <p class="text-sm text-gray-500 mt-1 mb-3">Monday, July 15, 2025</p>
                        <div class="space-y-3">
                            <div class="flex items-start gap-3">
                                <div class="bg-indigo-100 text-indigo-700 p-1 rounded flex-shrink-0 mt-0.5"><i class="fas fa-plane text-sm"></i></div>
                                <div>
                                    <p class="font-medium">Arrive at Charles de Gaulle Airport (CDG)</p>
                                    <p class="text-sm text-gray-500">10:00 AM - Take a taxi to your hotel (approximately €60)</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="bg-purple-100 text-purple-700 p-1 rounded flex-shrink-0 mt-0.5"><i class="fas fa-hotel text-sm"></i></div>
                                <div>
                                    <p class="font-medium">Check in to Hotel Le Marais</p>
                                    <p class="text-sm text-gray-500">1:00 PM - 4-star boutique hotel in the heart of Paris</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="bg-pink-100 text-pink-700 p-1 rounded flex-shrink-0 mt-0.5"><i class="fas fa-monument text-sm"></i></div>
                                <div>
                                    <p class="font-medium">Visit the Eiffel Tower</p>
                                    <p class="text-sm text-gray-500">5:00 PM - Book summit access tickets in advance (€29.40/adult)</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="bg-red-100 text-red-700 p-1 rounded flex-shrink-0 mt-0.5"><i class="fas fa-utensils text-sm"></i></div>
                                <div>
                                    <p class="font-medium">Dinner at Les Ombres</p>
                                    <p class="text-sm text-gray-500">8:00 PM - Rooftop restaurant with Eiffel Tower views</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Day 2 -->
                    <div class="card p-6 relative hover:shadow-lg transition-all duration-300">
                        <div class="absolute -left-12 top-6 w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-full flex items-center justify-center border-4 border-white">
                            <i class="fas fa-landmark"></i>
                        </div>
                        <div class="flex justify-between items-start">
                            <h3 class="font-bold text-lg">Day 2: Louvre and Seine River Cruise</h3>
                            <button class="text-gray-400 hover:text-purple-600"><i class="fas fa-edit"></i></button>
                        </div>
                        <p class="text-sm text-gray-500 mt-1 mb-3">Tuesday, July 16, 2025</p>
                        <div class="space-y-3">
                            <div class="flex items-start gap-3">
                                <div class="bg-yellow-100 text-yellow-700 p-1 rounded flex-shrink-0 mt-0.5"><i class="fas fa-coffee text-sm"></i></div>
                                <div>
                                    <p class="font-medium">Breakfast at Café de Flore</p>
                                    <p class="text-sm text-gray-500">9:00 AM - Iconic café frequented by Parisian intellectuals</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="bg-blue-100 text-blue-700 p-1 rounded flex-shrink-0 mt-0.5"><i class="fas fa-palette text-sm"></i></div>
                                <div>
                                    <p class="font-medium">Visit the Louvre Museum</p>
                                    <p class="text-sm text-gray-500">11:00 AM - See the Mona Lisa and Venus de Milo (€17/adult)</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="bg-green-100 text-green-700 p-1 rounded flex-shrink-0 mt-0.5"><i class="fas fa-ship text-sm"></i></div>
                                <div>
                                    <p class="font-medium">Seine River Cruise</p>
                                    <p class="text-sm text-gray-500">6:00 PM - Sunset cruise with champagne (€35/person)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Day 3 -->
                    <div class="card p-6 relative hover:shadow-lg transition-all duration-300">
                        <div class="absolute -left-12 top-6 w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 text-white rounded-full flex items-center justify-center border-4 border-white">
                            <i class="fas fa-palette"></i>
                        </div>
                        <div class="flex justify-between items-start">
                            <h3 class="font-bold text-lg">Day 3: Montmartre and Sacré-Cœur</h3>
                            <button class="text-gray-400 hover:text-purple-600"><i class="fas fa-edit"></i></button>
                        </div>
                        <p class="text-sm text-gray-500 mt-1 mb-3">Wednesday, July 17, 2025</p>
                        <div class="space-y-3">
                            <div class="flex items-start gap-3">
                                <div class="bg-purple-100 text-purple-700 p-1 rounded flex-shrink-0 mt-0.5"><i class="fas fa-church text-sm"></i></div>
                                <div>
                                    <p class="font-medium">Visit Sacré-Cœur Basilica</p>
                                    <p class="text-sm text-gray-500">10:00 AM - Free entry, €6 for dome access</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="bg-pink-100 text-pink-700 p-1 rounded flex-shrink-0 mt-0.5"><i class="fas fa-store-alt text-sm"></i></div>
                                <div>
                                    <p class="font-medium">Explore Place du Tertre</p>
                                    <p class="text-sm text-gray-500">1:00 PM - Artist square with portrait painters</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex justify-center">
                        <button class="btn-secondary flex items-center gap-2">
                            <i class="fas fa-plus"></i> Show More Days
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="card p-6 mb-8">
            <h3 class="text-xl font-bold mb-4 flex items-center">
                <i class="fas fa-search text-purple-600 mr-2"></i> Paris Travel Information
                <span class="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Powered by Google Search</span>
            </h3>
            
            <div class="space-y-6">
                <div>
                    <h4 class="font-semibold mb-2">Weather in July</h4>
                    <p class="text-gray-600">July is typically warm and sunny in Paris with average temperatures ranging from 16°C to 25°C (61°F to 77°F). It's one of the hottest months of the year, so light clothing is recommended.</p>
                </div>
                
                <div>
                    <h4 class="font-semibold mb-2">Local Transportation</h4>
                    <p class="text-gray-600">Paris has an excellent public transportation system including the Metro, buses, and RER trains. Consider purchasing a Paris Visite pass for unlimited travel (€12 for 1 day, zone 1-3).</p>
                </div>
                
                <div>
                    <h4 class="font-semibold mb-2">Must-Visit Attractions</h4>
                    <div class="flex flex-wrap gap-2 mt-1">
                        <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">Eiffel Tower</span>
                        <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">Louvre Museum</span>
                        <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">Notre-Dame Cathedral</span>
                        <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">Arc de Triomphe</span>
                        <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">Montmartre</span>
                        <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">Luxembourg Gardens</span>
                        <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-sm">Musée d'Orsay</span>
                    </div>
                </div>
            </div>
            
            <button id="load-more-info" class="mt-4 text-purple-600 font-semibold flex items-center hover:underline">
                <i class="fas fa-sync-alt mr-1"></i> Load More Information
            </button>
        </div>
    </div>
`;

export default plannerPage;
