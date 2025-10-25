import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'; // Import Axios for API calls
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

// --- CONFIGURATION ---
const API_BASE_URL = 'http://localhost:5000/api'; // Base URL for the backend
// ---

// Sub-component for Star Rating (No changes needed here)
const StarRating = ({ rating, size = 'lg' }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return (
        <div className="d-flex align-items-center text-warning">
            {[...Array(fullStars)].map((_, i) => (
                <FontAwesomeIcon key={`full-${i}`} icon={fasStar} size={size} className="me-1" />
            ))}
            {hasHalfStar && <FontAwesomeIcon icon={fasStar} size={size} className="me-1" />}
            {[...Array(emptyStars)].map((_, i) => (
                <FontAwesomeIcon key={`empty-${i}`} icon={farStar} size={size} className="me-1" />
            ))}
        </div>
    );
};

// Hotel Card Component (No changes needed here)
const HotelListingCard = ({ hotel }) => (
    <div className="card mb-4 shadow-sm border-0">
        <div className="row g-0">
            <div className="col-md-4">
                <Link to={`/hotels/${hotel.id}`}>
                    <img src={hotel.image} className="img-fluid rounded-start w-100 h-100" style={{ objectFit: 'cover' }} alt={hotel.name} />
                </Link>
            </div>
            <div className="col-md-8">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start">
                        <div>
                            <span className="badge bg-danger rounded-pill px-3 py-2 me-2">Featured</span>
                            <h5 className="card-title fw-bold mt-2">{hotel.name}</h5>
                            <StarRating rating={hotel.star} size="sm" />
                            <p className="card-text text-muted small mt-1">{hotel.location}</p>
                        </div>
                        <div className="text-end">
                            <span className="badge bg-info text-white p-2 mb-2 rounded-2 fw-bold">{hotel.rating}/5</span>
                            <p className="small text-muted">{hotel.reviewCount} reviews</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h6 className="fw-bold">Facilities:</h6>
                        <div className="d-flex flex-wrap gap-2">
                            {hotel.facilities.map((fac, index) => (
                                <span key={index} className="badge bg-light text-dark p-2 border rounded-pill">{fac}</span>
                            ))}
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-end mt-4">
                        <h4 className="fw-bold text-success mb-0">${hotel.price} <span className="small text-muted fw-normal">/ night</span></h4>
                        <Link to={`/hotels/${hotel.id}`} className="btn btn-primary fw-bold px-4">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// Sidebar with Filters (Updated to handle price range as min/max strings for API)
const FiltersSidebar = ({ filters, setFilters, handleSortChange }) => {
    
    // Updates only the min value of the price range (max is fixed at 900 for now)
    const handlePriceChange = (e) => {
        const { value } = e.target;
        setFilters(prev => ({ ...prev, min: value, max: 900 })); // Use min/max directly for simpler API query
    };

    // Handles checkboxes for Star, Review, Property, Facilities
    const handleCheckboxChange = (group, value) => {
        setFilters(prev => {
            const currentValues = Array.isArray(prev[group]) ? prev[group] : [];
            const newValues = currentValues.includes(value)
                ? currentValues.filter(item => item !== value)
                : [...currentValues, value];
            return { ...prev, [group]: newValues };
        });
    };

    const starOptions = [5, 4, 3, 2, 1];
    const reviewOptions = ['5 Excellent', '4 Very Good', '3 Good', '2 Fair', '1 Poor'];
    const propertyOptions = ['Apartments', 'Hotels', 'Homestays', 'Villas'];
    const facilitiesOptions = ['Wake-up call', 'Car hire', 'Bicycle hire', 'Flat Tv', 'Laundry and dry cleaning', 'Free breakfast'];
    
    return (
        <div className="p-4 rounded-3 shadow-sm bg-white">
            <h5 className="fw-bold mb-3">Filters</h5>
            <hr />
            <div className="mb-4">
                <h6 className="fw-bold">Price Range ($)</h6>
                <div className="d-flex align-items-center mb-3">
                    {/* Note: The 'range' input will control the 'min' filter in this setup */}
                    <input type="range" className="form-range" min="300" max="900" 
                        value={filters.min} name="min" onChange={handlePriceChange} />
                </div>
                <div className="d-flex justify-content-between small text-muted">
                    <span>${filters.min}</span>
                    <span>${filters.max}</span>
                </div>
            </div>
            
            {/* Star Filter */}
            <div className="mb-4">
                <h6 className="fw-bold">Hotel Star</h6>
                {starOptions.map(star => (
                    <div className="form-check" key={`star-${star}`}>
                        <input className="form-check-input" type="checkbox" id={`star-${star}`}
                            checked={filters.star.includes(star)} 
                            onChange={() => handleCheckboxChange('star', star)} />
                        <label className="form-check-label" htmlFor={`star-${star}`}>
                            <StarRating rating={star} size="sm" />
                        </label>
                    </div>
                ))}
            </div>
            
            {/* Review Score Filter (Add more checks/labels as needed for other filters) */}
            {/* ... (rest of the filters like Review, Property, Facilities) ... */}
            
            <div className="mb-4">
                <h6 className="fw-bold">Review Score</h6>
                {reviewOptions.map(review => (
                    <div className="form-check" key={review}>
                        <input className="form-check-input" type="checkbox" id={`review-${review}`}
                            checked={filters.review.includes(review)} onChange={() => handleCheckboxChange('review', review)} />
                        <label className="form-check-label" htmlFor={`review-${review}`}>{review}</label>
                    </div>
                ))}
            </div>
             <div className="mb-4">
                <h6 className="fw-bold">Property Type</h6>
                {propertyOptions.map(prop => (
                    <div className="form-check" key={prop}>
                        <input className="form-check-input" type="checkbox" id={`prop-${prop}`}
                            checked={filters.property.includes(prop)} onChange={() => handleCheckboxChange('property', prop)} />
                        <label className="form-check-label" htmlFor={`prop-${prop}`}>{prop}</label>
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <h6 className="fw-bold">Facilities</h6>
                {facilitiesOptions.map(fac => (
                    <div className="form-check" key={fac}>
                        <input className="form-check-input" type="checkbox" id={`fac-${fac}`}
                            checked={filters.facilities.includes(fac)} onChange={() => handleCheckboxChange('facilities', fac)} />
                        <label className="form-check-label" htmlFor={`fac-${fac}`}>{fac}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Hotel List Section Component (UPDATED TO FETCH DATA)
const HotelListSection = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortOption, setSortOption] = useState('Recommended');
    
    // Initial filter state, modified to use flat min/max for easier API call
    const [filters, setFilters] = useState({
        min: 300, 
        max: 900,
        star: [],
        review: [],
        property: [],
        facilities: []
    });

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    // Function to fetch data whenever filters or sort options change
    const fetchHotels = useCallback(async () => {
        setLoading(true);
        try {
            // Build query parameters from filters and sort option
            const queryParams = new URLSearchParams();
            
            // Add price range
            queryParams.append('min', filters.min);
            queryParams.append('max', filters.max);
            
            // Add multi-select filters (star is the most important for now)
            filters.star.forEach(star => queryParams.append('star', star));
            // Add sort option
            queryParams.append('sortBy', sortOption);

            // You would add other filters here:
            // filters.review.forEach(r => queryParams.append('review', r));
            // filters.facilities.forEach(f => queryParams.append('facilities', f));
            
            const url = `${API_BASE_URL}/hotels?${queryParams.toString()}`;
            // console.log("Fetching:", url); // Debugging line

            const response = await axios.get(url);
            setHotels(response.data);
            
        } catch (error) {
            console.error("Error fetching hotels:", error);
            // Optionally, set an error state here
        } finally {
            setLoading(false);
        }
    }, [filters, sortOption]); // Dependency array: re-run on filter/sort change

    // useEffect hook to call the fetch function on component load and state changes
    useEffect(() => {
        fetchHotels();
    }, [fetchHotels]);


    // Placeholder count, needs to be replaced if the backend returns a count
    const hotelCount = hotels.length; 

    return (
        <div className="container py-5">
            <div className="row g-4">
                <div className="col-lg-3"><FiltersSidebar filters={filters} setFilters={setFilters} /></div>
                <div className="col-lg-9">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="mb-0 fw-bold">{hotelCount} hotels found</h4>
                        <div className="d-flex align-items-center">
                            <span className="me-2">Sort by:</span>
                            <select className="form-select w-auto" value={sortOption} onChange={handleSortChange}>
                                <option>Recommended</option>
                                <option>Price: Low to High</option>
                            </select>
                        </div>
                    </div>
                    {loading ? (
                        <div className="text-center p-5">Loading hotels...</div>
                    ) : hotelCount === 0 ? (
                        <div className="alert alert-warning text-center">No hotels match your filters.</div>
                    ) : (
                        hotels.map(hotel => (<HotelListingCard key={hotel.id} hotel={hotel} />))
                    )}
                </div>
            </div>
        </div>
    );
};

// Newsletter Section Component (UPDATED TO HANDLE SUBMISSION)
const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Clear previous messages
        
        if (!email) {
            setMessage('Please enter a valid email address.');
            setIsSuccess(false);
            return;
        }

        try {
            const response = await axios.post(`${API_BASE_URL}/subscribe`, { email });
            setMessage(response.data.message);
            setIsSuccess(true);
            setEmail(''); // Clear the input on success
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Subscription failed. Server error.';
            setMessage(errorMsg);
            setIsSuccess(false);
            console.error("Subscription Error:", error);
        }
    };

    return (
        <div className="bg-primary text-white py-5 px-3">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    {/* Inquiry Section (Keep as is, since it's just display) */}
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 text-center text-lg-start">
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                            <FontAwesomeIcon icon={faPhoneVolume} size="2x" className="me-3" />
                            <div>
                                <h5 className="mb-0">More Inquiry</h5>
                                <h3 className="fw-bold mb-0">+990-737 621432</h3>
                            </div>
                        </div>
                    </div>
                    
                    {/* Newsletter Submission Form (UPDATED) */}
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 text-center">
                        <h4 className="fw-bold mb-1">Join The Newsletter</h4>
                        <p className="small mb-3">To receive our best monthly deals</p>
                        <form onSubmit={handleSubmit} className="d-flex justify-content-center">
                            <div className="input-group" style={{ maxWidth: '300px' }}>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Enter your email address.." 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button className="btn btn-success" type="submit">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </button>
                            </div>
                        </form>
                        {message && (
                            <p className={`small mt-2 ${isSuccess ? 'text-success' : 'text-danger'}`}>
                                {message}
                            </p>
                        )}
                    </div>
                    
                    {/* Send Mail Section (Keep as is, since it's just display) */}
                    <div className="col-lg-4 col-md-6 text-center text-lg-end">
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
                            <div className="me-3 text-end">
                                <h5 className="mb-0">Send Mail</h5>
                                <h3 className="fw-bold mb-0">info@example.com</h3>
                            </div>
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main component (No changes needed here)
const MyHotelPage = () => (
    <div className="bg-light min-vh-100">
        <div className="container-fluid bg-secondary bg-opacity-10 py-5 text-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1549442967-0c1505c92b23?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}>
            <div className="d-flex flex-column justify-content-center h-100 text-white">
                <h1 className="display-4 fw-bold">Let's Explore Your Family Trip.</h1>
            </div>
        </div>
        <HotelListSection />
        <NewsletterSection />
    </div>
);

export default MyHotelPage;