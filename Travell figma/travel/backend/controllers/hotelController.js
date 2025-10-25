const DUMMY_HOTELS_DB = require('../dummyData');

// Utility function to apply all filters/sorting
const applyFiltersAndSort = (hotels, query) => {
    let result = [...hotels]; // Start with a copy of all hotels

    // --- 1. FILTERING LOGIC (Matching the frontend's FiltersSidebar) ---
    const { min: minPrice = 300, max: maxPrice = 900 } = query.priceRange || {};
    const selectedStars = query.star ? (Array.isArray(query.star) ? query.star.map(Number) : [Number(query.star)]) : [];
    
    result = result.filter(hotel => {
        // Price Range Filter (example)
        if (hotel.price < minPrice || hotel.price > maxPrice) {
            return false;
        }

        // Star Rating Filter
        if (selectedStars.length > 0 && !selectedStars.includes(hotel.star)) {
            return false;
        }
        
        // You would add Review, Property, and Facilities filters here...
        // e.g., if (query.facilities && !query.facilities.every(f => hotel.facilities.includes(f))) return false;

        return true;
    });

    // --- 2. SORTING LOGIC (Matching the frontend's sort dropdown) ---
    if (query.sortBy === 'Price: Low to High') {
        result.sort((a, b) => a.price - b.price);
    } else {
        // Default is 'Recommended' or high rating
        result.sort((a, b) => b.rating - a.rating);
    }

    // You can adjust the "11 hotels found" count in the response (optional)
    const count = result.length;
    return { hotels: result, count }; 
};

// --- CONTROLLER FUNCTIONS ---

exports.getHotels = (req, res) => {
    // The frontend sends filters as query parameters (e.g., /api/hotels?star=5&sortBy=...)
    // console.log("Received Query:", req.query); 
    
    // For now, we simulate the logic by directly using the frontend's query
    const { hotels, count } = applyFiltersAndSort(DUMMY_HOTELS_DB, req.query);

    res.status(200).json(hotels); // Send the filtered/sorted data
    // Note: In a real app, the `count` would also be returned for the frontend display
};

exports.getHotelById = (req, res) => {
    const hotelId = parseInt(req.params.id);
    const hotel = DUMMY_HOTELS_DB.find(h => h.id === hotelId);

    if (hotel) {
        res.status(200).json(hotel);
    } else {
        res.status(404).json({ message: 'Hotel not found' });
    }
};