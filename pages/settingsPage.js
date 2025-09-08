// Settings page template
const settingsPage = `
    <div id="settings" class="page">
        <div class="relative mb-8">
            <div class="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl opacity-90"></div>
            <div class="relative p-8 text-white">
                <h2 class="text-3xl font-bold mb-2">Account Settings</h2>
                <p class="text-white/90 max-w-2xl">Manage your profile, preferences, and application settings.</p>
            </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-6">
            <div class="lg:col-span-1">
                <div class="sticky top-24">
                    <div class="bg-white rounded-xl shadow-sm p-4 mb-4">
                        <div class="flex flex-col items-center">
                            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" class="w-24 h-24 rounded-full border-4 border-purple-200">
                            <h3 class="font-bold mt-2">Sophia Carter</h3>
                            <p class="text-sm text-gray-500">Premium Member</p>
                            <button class="text-sm text-purple-600 hover:underline mt-1">Change Picture</button>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
                        <a href="#account" class="block p-4 border-l-4 border-purple-500 bg-purple-50">
                            <div class="flex items-center">
                                <i class="fas fa-user-circle text-purple-600 mr-3"></i>
                                <span class="font-semibold">Account</span>
                            </div>
                        </a>
                        <a href="#preferences" class="block p-4 border-l-4 border-transparent hover:bg-gray-50">
                            <div class="flex items-center">
                                <i class="fas fa-sliders-h text-gray-600 mr-3"></i>
                                <span class="font-semibold">Preferences</span>
                            </div>
                        </a>
                        <a href="#appearance" class="block p-4 border-l-4 border-transparent hover:bg-gray-50">
                            <div class="flex items-center">
                                <i class="fas fa-paint-brush text-gray-600 mr-3"></i>
                                <span class="font-semibold">Appearance</span>
                            </div>
                        </a>
                        <a href="#notifications" class="block p-4 border-l-4 border-transparent hover:bg-gray-50">
                            <div class="flex items-center">
                                <i class="fas fa-bell text-gray-600 mr-3"></i>
                                <span class="font-semibold">Notifications</span>
                            </div>
                        </a>
                        <a href="#privacy" class="block p-4 border-l-4 border-transparent hover:bg-gray-50">
                            <div class="flex items-center">
                                <i class="fas fa-shield-alt text-gray-600 mr-3"></i>
                                <span class="font-semibold">Privacy</span>
                            </div>
                        </a>
                        <a href="#api" class="block p-4 border-l-4 border-transparent hover:bg-gray-50">
                            <div class="flex items-center">
                                <i class="fas fa-key text-gray-600 mr-3"></i>
                                <span class="font-semibold">API Settings</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="lg:col-span-3 space-y-8">
                <div id="account" class="card p-6">
                    <h3 class="text-xl font-bold mb-6 flex items-center">
                        <i class="fas fa-user-circle text-purple-600 mr-3"></i>
                        Account Information
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <label class="font-semibold text-sm block mb-1">Full Name</label>
                            <input type="text" value="Sophia Carter" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 focus:ring-purple-500">
                        </div>
                        <div>
                            <label class="font-semibold text-sm block mb-1">Email Address</label>
                            <input type="email" value="sophia.carter@example.com" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 focus:ring-purple-500">
                        </div>
                        <div>
                            <label class="font-semibold text-sm block mb-1">Phone Number</label>
                            <input type="tel" value="+1 (555) 123-4567" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 focus:ring-purple-500">
                        </div>
                        <div>
                            <label class="font-semibold text-sm block mb-1">Password</label>
                            <input type="password" value="********" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 focus:ring-purple-500">
                        </div>
                        <p class="text-sm text-gray-500">Last updated: August 15, 2025</p>
                        <div class="flex justify-end">
                            <button class="btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
                
                <div id="preferences" class="card p-6">
                    <h3 class="text-xl font-bold mb-6 flex items-center">
                        <i class="fas fa-sliders-h text-purple-600 mr-3"></i>
                        Travel Preferences
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <label class="font-semibold text-sm block mb-1">Default Currency</label>
                            <select class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 focus:ring-purple-500">
                                <option selected>USD - US Dollar</option>
                                <option>EUR - Euro</option>
                                <option>GBP - British Pound</option>
                                <option>JPY - Japanese Yen</option>
                                <option>CAD - Canadian Dollar</option>
                            </select>
                        </div>
                        <div>
                            <label class="font-semibold text-sm block mb-1">Language</label>
                            <select class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 focus:ring-purple-500">
                                <option selected>English</option>
                                <option>Spanish</option>
                                <option>French</option>
                                <option>German</option>
                                <option>Japanese</option>
                            </select>
                        </div>
                        <div>
                            <label class="font-semibold text-sm block mb-1">Distance Unit</label>
                            <div class="flex gap-4">
                                <label class="flex items-center">
                                    <input type="radio" name="distance" checked class="text-purple-600 focus:ring-purple-500">
                                    <span class="ml-2">Miles</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" name="distance" class="text-purple-600 focus:ring-purple-500">
                                    <span class="ml-2">Kilometers</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label class="font-semibold text-sm block mb-1">Temperature Unit</label>
                            <div class="flex gap-4">
                                <label class="flex items-center">
                                    <input type="radio" name="temp" checked class="text-purple-600 focus:ring-purple-500">
                                    <span class="ml-2">Fahrenheit</span>
                                </label>
                                <label class="flex items-center">
                                    <input type="radio" name="temp" class="text-purple-600 focus:ring-purple-500">
                                    <span class="ml-2">Celsius</span>
                                </label>
                            </div>
                        </div>
                        <div class="flex justify-end">
                            <button class="btn-primary">Save Preferences</button>
                        </div>
                    </div>
                </div>
                
                <div id="api" class="card p-6">
                    <h3 class="text-xl font-bold mb-6 flex items-center">
                        <i class="fas fa-key text-purple-600 mr-3"></i>
                        API Settings
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <label class="font-semibold text-sm block mb-1">Gemini API Key</label>
                            <div class="relative">
                                <input type="password" value="gemini_api_key_here" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pr-10 focus:ring-purple-500">
                                <button class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>
                        <div>
                            <label class="font-semibold text-sm block mb-1">Google Search API Key</label>
                            <div class="relative">
                                <input type="password" value="google_search_api_key_here" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pr-10 focus:ring-purple-500">
                                <button class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>
                        <div>
                            <label class="font-semibold text-sm block mb-1">YouTube API Key</label>
                            <div class="relative">
                                <input type="password" value="youtube_api_key_here" class="w-full bg-gray-50 border-gray-200 rounded-lg p-3 pr-10 focus:ring-purple-500">
                                <button class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>
                        <div class="flex justify-end">
                            <button class="btn-primary">Update API Keys</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

export default settingsPage;
