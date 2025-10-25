// /backend/dummyVillasData.js
// Mock data for the Villas/Blog Posts.

const DUMMY_VILLAS_DB = [
    { 
        id: 1, 
        date: '06 February', 
        title: 'Spiritual Sojourn: Pilgrimage Tours For Soul Seekers',
        views: 287,
        readTime: '1 Min Read',
        comments: 0,
        excerpt: 'NSuspendisse bibendum efficitur orci, a pretium erat mattis nec. Vestibulum ante urna ipsumi primisot inisetahtajeni faucibus orci luctus erenjot ultrices posuere cubilia andit.',
        image: 'path/to/ab1.png' // Used to map to a placeholder image in the frontend
    },
    { 
        id: 2, 
        date: '06 February', 
        title: 'Wine Country Escapes: Vineyard Tours For Connoisseurs',
        views: 260,
        readTime: '1 Min Read',
        comments: 0,
        excerpt: 'NSuspendisse bibendum efficitur orci, a pretium erat mattis nec. Vestibulum ante urna ipsumi primisot inisetahtajeni faucibus orci luctus erenjot ultrices posuere cubilia andit.',
        image: 'path/to/ab2.png'
    },
    { 
        id: 3, 
        date: '06 February', 
        title: 'Thrills & Chills: Extreme Sports Tours For Adrenaline Junkies',
        views: 211,
        readTime: '1 Min Read',
        comments: 0,
        excerpt: 'NSuspendisse bibendum efficitur orci, a pretium erat mattis nec. Vestibulum ante urna ipsumi primisot inisetahtajeni faucibus orci luctus erenjot ultrices posuere cubilia andit.',
        image: 'path/to/ab3.png'
    },
    // Add more posts for a multi-page view simulation
    { 
        id: 4, 
        date: '05 February', 
        title: 'Hidden Gems: Exploring Lesser-Known Destinations',
        views: 150,
        readTime: '2 Min Read',
        comments: 5,
        excerpt: 'Discover the world\'s best-kept secrets. These places offer unique experiences away from the usual tourist crowds and mass market destinations.',
        image: 'path/to/ab1.png'
    },
    { 
        id: 5, 
        date: '04 February', 
        title: 'A Guide to Luxury Villa Rentals in Bali',
        views: 400,
        readTime: '3 Min Read',
        comments: 12,
        excerpt: 'Find your perfect tropical escape. We review the top luxury villas in Seminyak, Ubud, and Canggu, detailing amenities and booking tips.',
        image: 'path/to/ab2.png'
    },
    { 
        id: 6, 
        date: '03 February', 
        title: 'Eco-Tourism: How to Travel Sustainably',
        views: 320,
        readTime: '2 Min Read',
        comments: 8,
        excerpt: 'Learn about sustainable travel practices, including choosing eco-friendly accommodations and supporting local conservation efforts worldwide.',
        image: 'path/to/ab3.png'
    },
];

const DUMMY_SIDEBAR_DATA = {
    categories: [
        { name: 'Adventure Safari', count: 3 },
        { name: 'City Discovery', count: 5 },
        { name: 'Cruise Voyage', count: 5 },
        { name: 'Cultural Exploration', count: 4 },
        { name: 'Educational Journey', count: 5 },
        { name: 'Luxury Retreat', count: 7 },
        { name: 'Nature Excursion', count: 7 },
        { name: 'Photography Expedition', count: 2 },
    ],
    tags: ['Adventure', 'City Tour', 'Cruise', 'Cultural', 'Nature Excursion', 'Photography', 'Road Trip', 'Tourism', 'Wildlife']
};

module.exports = { DUMMY_VILLAS_DB, DUMMY_SIDEBAR_DATA };
