// /backend/dummyTourData.js
const DUMMY_TOURS = [
    {
        id: 1,
        duration: '1 Week',
        location: 'Egypt',
        title: 'Discover Serenity, Exploration, And Enlightenment.',
        description: 'SAINT MARTIN → KHADRACHORI → COX’S BAZAR → BL',
        originalPrice: 340, // Changed to number for sorting/filtering
        currentPrice: 460,
        // In a real app, you would use a direct URL here, but keeping placeholder
        image: 'path/to/ab1.png', 
    },
    {
        id: 2,
        duration: '5 Days / 4 Night',
        location: 'Indonesia',
        title: 'Embracing City Lights, Landm, And Iconic Culture.',
        description: 'BANDAR BAN → COX’S BAZAR → SAINT MARTIN → SEJ',
        originalPrice: 240,
        currentPrice: 380,
        image: 'path/to/ab2.png',
    },
    {
        id: 3,
        duration: '10 Days / 11 Night',
        location: 'New York',
        title: 'Immersive Cultural Expirees, Local Cuisine.',
        description: 'SADEX VALLEY → SEA BEACH → BANDAR BAN → COX’S',
        originalPrice: 500,
        currentPrice: 680,
        image: 'path/to/ab3.png',
    },
    {
        id: 4,
        duration: '4 Days / 5 Night',
        location: 'Saudi Arabia',
        title: 'Exploring Energy, Landmarks, And Timeless Traditions.',
        description: 'SADEX VALLEY → SEA BEACH → SAINT MARTIN → KHAC',
        originalPrice: 460,
        currentPrice: 670,
        image: 'path/to/ab4.png',
    },
    {
        id: 5,
        duration: '4 Days / 5 Night',
        location: 'Brazil + Sweden',
        title: 'Embark Tranquility, Adventure, And Spiritual.',
        description: 'SAINT MARTIN → COX’S BAZAR → SADEX VALLEY → SEJ',
        originalPrice: 460,
        currentPrice: 670,
        image: 'path/to/Logo1.png',
    },
    {
        id: 6,
        duration: '7 Days / 8 Night',
        location: 'Australia + Sweden',
        title: 'Immersive Cultural Expirees, Local Cuisine.',
        description: 'SADEX VALLEY → SEA BEACH → BANDAR BAN → COX’S',
        originalPrice: 500,
        currentPrice: 680,
        image: 'path/to/Ballon.png',
    },
];

module.exports = DUMMY_TOURS;