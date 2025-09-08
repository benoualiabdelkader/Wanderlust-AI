// Favorites page template
const favoritesPage = `
    <div id="favorites" class="page">
        <h2 class="text-3xl font-bold mb-8">Saved Items</h2>
        <div class="flex border-b mb-6">
            <button class="py-2 px-4 text-purple-600 border-b-2 border-purple-600 font-semibold">Hotels</button>
            <button class="py-2 px-4 text-gray-500 hover:text-purple-600">Flights</button>
            <button class="py-2 px-4 text-gray-500 hover:text-purple-600">Destinations</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${[...Array(6)].map((_, i) => `
            <div class="card">
                <img src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="w-full h-48 object-cover rounded-t-lg">
                <div class="p-4 flex justify-between items-center">
                    <h3 class="font-bold">The Grand Budapest Hotel</h3>
                    <button class="text-pink-500 hover:text-pink-700"><i class="fas fa-trash"></i></button>
                </div>
            </div>
            `).join('')}
        </div>
    </div>
`;

export default favoritesPage;
