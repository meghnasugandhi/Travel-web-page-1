// /backend/dummyData.js
const DUMMY_HOTELS = [
    // ... (Hotel 1: The May Fair Hotel) ...
    {
        id: 1,
        name: 'The May Fair Hotel',
        location: 'Paris - View on map',
        image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.8,
        star: 5,
        reviewCount: 4,
        price: 550,
        facilities: ['Wake-up call', 'Bicycle hire', 'Flat Tv', 'Free breakfast', 'Service VIP']
    },
    // ... (Hotel 2: Stewart Hotel) ...
    {
        id: 2,
        name: 'Stewart Hotel',
        location: 'Los Angeles - View on map',
        image: 'https://images.unsplash.com/photo-1566073771259-d368772249d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4.4,
        star: 4,
        reviewCount: 5,
        price: 900,
        facilities: ['Wake-up call', 'Car hire', 'Bicycle hire', 'Free breakfast', 'Service VIP']
    },
];

module.exports = DUMMY_HOTELS;