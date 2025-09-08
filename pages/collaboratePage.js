// Collaborate page template
const collaboratePage = `
    <div id="collaborate" class="page">
        <div class="relative mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl opacity-90"></div>
            <div class="relative p-8 text-white">
                <h2 class="text-3xl font-bold mb-2">Plan Together</h2>
                <p class="text-white/90 max-w-2xl">Collaborate with friends and family to create the perfect trip itinerary.</p>
            </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <!-- Current Collaborations -->
            <div class="lg:col-span-2 space-y-6">
                <div class="card p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold">Your Collaborations</h3>
                        <button class="btn-primary-sm">
                            <i class="fas fa-plus mr-2"></i> Create New
                        </button>
                    </div>
                    
                    <!-- Active collaboration 1 -->
                    <div class="card border border-gray-200 hover:shadow-md transition mb-4">
                        <div class="p-5">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h4 class="font-bold text-lg">Summer in Tokyo</h4>
                                    <div class="flex items-center text-gray-500 text-sm mt-1">
                                        <span class="flex items-center">
                                            <i class="far fa-calendar-alt mr-1"></i> 
                                            Jun 15-28, 2025
                                        </span>
                                        <span class="mx-3">•</span>
                                        <span class="flex items-center">
                                            <i class="fas fa-users mr-1"></i>
                                            4 collaborators
                                        </span>
                                    </div>
                                </div>
                                <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Active</span>
                            </div>
                            
                            <div class="flex -space-x-2 mt-4">
                                <img src="https://i.pravatar.cc/40?u=a042581f4e29026704d" class="w-8 h-8 rounded-full border-2 border-white" title="You">
                                <img src="https://i.pravatar.cc/40?u=a042581f4e29026704e" class="w-8 h-8 rounded-full border-2 border-white" title="Emma Watson">
                                <img src="https://i.pravatar.cc/40?u=a042581f4e29026704f" class="w-8 h-8 rounded-full border-2 border-white" title="James Smith">
                                <img src="https://i.pravatar.cc/40?u=a042581f4e29026704g" class="w-8 h-8 rounded-full border-2 border-white" title="Olivia Johnson">
                            </div>
                            
                            <div class="flex mt-4 pt-4 border-t">
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-blue-600 h-2.5 rounded-full" style="width: 65%"></div>
                                </div>
                                <span class="text-sm font-medium text-gray-500 ml-2">65%</span>
                            </div>
                            
                            <div class="flex justify-between mt-4">
                                <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                    Continue Planning
                                </button>
                                <button class="text-gray-500 hover:text-gray-700 text-sm">
                                    <i class="fas fa-ellipsis-h"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Active collaboration 2 -->
                    <div class="card border border-gray-200 hover:shadow-md transition mb-4">
                        <div class="p-5">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h4 class="font-bold text-lg">Road Trip: Pacific Coast Highway</h4>
                                    <div class="flex items-center text-gray-500 text-sm mt-1">
                                        <span class="flex items-center">
                                            <i class="far fa-calendar-alt mr-1"></i> 
                                            Aug 5-15, 2025
                                        </span>
                                        <span class="mx-3">•</span>
                                        <span class="flex items-center">
                                            <i class="fas fa-users mr-1"></i>
                                            2 collaborators
                                        </span>
                                    </div>
                                </div>
                                <span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Active</span>
                            </div>
                            
                            <div class="flex -space-x-2 mt-4">
                                <img src="https://i.pravatar.cc/40?u=a042581f4e29026704d" class="w-8 h-8 rounded-full border-2 border-white" title="You">
                                <img src="https://i.pravatar.cc/40?u=a042581f4e29026704h" class="w-8 h-8 rounded-full border-2 border-white" title="Daniel Brown">
                            </div>
                            
                            <div class="flex mt-4 pt-4 border-t">
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-blue-600 h-2.5 rounded-full" style="width: 35%"></div>
                                </div>
                                <span class="text-sm font-medium text-gray-500 ml-2">35%</span>
                            </div>
                            
                            <div class="flex justify-between mt-4">
                                <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                    Continue Planning
                                </button>
                                <button class="text-gray-500 hover:text-gray-700 text-sm">
                                    <i class="fas fa-ellipsis-h"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Past collaboration -->
                    <div class="card border border-gray-200 hover:shadow-md transition opacity-75">
                        <div class="p-5">
                            <div class="flex justify-between items-start">
                                <div>
                                    <h4 class="font-bold text-lg">Barcelona Weekend</h4>
                                    <div class="flex items-center text-gray-500 text-sm mt-1">
                                        <span class="flex items-center">
                                            <i class="far fa-calendar-alt mr-1"></i> 
                                            Mar 12-15, 2025
                                        </span>
                                        <span class="mx-3">•</span>
                                        <span class="flex items-center">
                                            <i class="fas fa-users mr-1"></i>
                                            3 collaborators
                                        </span>
                                    </div>
                                </div>
                                <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Completed</span>
                            </div>
                            
                            <div class="flex -space-x-2 mt-4">
                                <img src="https://i.pravatar.cc/40?u=a042581f4e29026704d" class="w-8 h-8 rounded-full border-2 border-white" title="You">
                                <img src="https://i.pravatar.cc/40?u=a042581f4e29026704j" class="w-8 h-8 rounded-full border-2 border-white" title="Sophia Williams">
                                <img src="https://i.pravatar.cc/40?u=a042581f4e29026704k" class="w-8 h-8 rounded-full border-2 border-white" title="Noah Davis">
                            </div>
                            
                            <div class="flex mt-4 pt-4 border-t">
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-gray-600 h-2.5 rounded-full" style="width: 100%"></div>
                                </div>
                                <span class="text-sm font-medium text-gray-500 ml-2">100%</span>
                            </div>
                            
                            <div class="flex justify-between mt-4">
                                <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                    View Itinerary
                                </button>
                                <button class="text-gray-500 hover:text-gray-700 text-sm">
                                    <i class="fas fa-ellipsis-h"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Invite Section -->
            <div class="space-y-6">
                <div class="card p-6">
                    <h3 class="font-bold text-xl mb-4">Invite Collaborators</h3>
                    <p class="text-gray-600 mb-4">Share the trip planning experience with friends and family.</p>
                    
                    <div class="space-y-4">
                        <div>
                            <label class="font-semibold text-sm block mb-1">Email Address</label>
                            <input type="email" placeholder="Enter email address" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 focus:ring-blue-500">
                        </div>
                        <div>
                            <label class="font-semibold text-sm block mb-1">Trip to Share</label>
                            <select class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 focus:ring-blue-500">
                                <option>Summer in Tokyo</option>
                                <option>Road Trip: Pacific Coast Highway</option>
                                <option>Barcelona Weekend</option>
                            </select>
                        </div>
                        <div>
                            <label class="font-semibold text-sm block mb-1">Permission Level</label>
                            <select class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 focus:ring-blue-500">
                                <option>Can Edit</option>
                                <option>Can View</option>
                            </select>
                        </div>
                        <button class="btn-primary w-full">Send Invitation</button>
                    </div>
                </div>
                
                <div class="card p-6">
                    <h3 class="font-bold text-xl mb-4">Pending Invitations</h3>
                    <div class="space-y-4">
                        <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                                <p class="font-semibold">michael.johnson@example.com</p>
                                <p class="text-sm text-gray-500">Summer in Tokyo • Can Edit</p>
                            </div>
                            <button class="text-gray-400 hover:text-gray-600"><i class="fas fa-times"></i></button>
                        </div>
                        <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div>
                                <p class="font-semibold">alex.smith@example.com</p>
                                <p class="text-sm text-gray-500">Road Trip: Pacific Coast Highway • Can View</p>
                            </div>
                            <button class="text-gray-400 hover:text-gray-600"><i class="fas fa-times"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

export default collaboratePage;
