// Profile page template
const profilePage = `
    <div id="profile" class="page">
        <div class="card p-8 flex flex-col md:flex-row items-center gap-8 mb-8">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" class="w-24 h-24 rounded-full">
            <div>
                <h2 class="text-3xl font-bold">Sophia Carter</h2>
                <p class="text-gray-600">Travel enthusiast, exploring the world one city at a time. ✈️</p>
                <p class="text-sm text-gray-500 mt-2">Joined in 2021</p>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="card p-6 text-center">
                <p class="text-4xl font-bold text-purple-600">12</p>
                <p class="text-gray-500">Trips Planned</p>
            </div>
            <div class="card p-6 text-center">
                 <p class="text-4xl font-bold text-pink-600">8</p>
                <p class="text-gray-500">Destinations Visited</p>
            </div>
        </div>
         <div class="card p-6 mt-8">
            <h3 class="font-bold text-xl mb-4">Upcoming Trips</h3>
            <div class="card flex items-center p-4">
               <img src="https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-holiday-161251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="w-24 h-24 rounded-lg object-cover">
               <div class="ml-4">
                   <h4 class="font-bold">Trip to Kyoto</h4>
                   <p class="text-sm text-gray-500">October 10 - October 18, 2024</p>
                   <button class="mt-2 text-sm font-semibold text-purple-600 hover:underline">View Itinerary &rarr;</button>
               </div>
            </div>
        </div>
    </div>
`;

export default profilePage;
