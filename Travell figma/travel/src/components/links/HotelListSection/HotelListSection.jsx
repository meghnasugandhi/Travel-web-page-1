import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar, faMapMarkerAlt, faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

// DUMMY DATA (Replace with real data)
const DUMMY_HOTELS = [
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

// Sub-component for Star Rating
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

// Hotel Card Component with a clickable Link
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

// Sidebar with Filters
const FiltersSidebar = ({ filters, setFilters }) => {
    const handlePriceChange = (e) => {
        const { value } = e.target;
        setFilters(prev => ({ ...prev, priceRange: { min: value, max: 900 } }));
    };
    const handleCheckboxChange = (group, value) => {
        setFilters(prev => ({
            ...prev,
            [group]: prev[group].includes(value)
                ? prev[group].filter(item => item !== value)
                : [...prev[group], value]
        }));
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
                    <input type="range" className="form-range" min="300" max="900" value={filters.priceRange.min} name="min" onChange={handlePriceChange} />
                </div>
                <div className="d-flex justify-content-between small text-muted">
                    <span>${filters.priceRange.min}</span>
                    <span>${filters.priceRange.max}</span>
                </div>
            </div>
            <div className="mb-4">
                <h6 className="fw-bold">Hotel Star</h6>
                {starOptions.map(star => (
                    <div className="form-check" key={`star-${star}`}>
                        <input className="form-check-input" type="checkbox" id={`star-${star}`}
                            checked={filters.star.includes(star)} onChange={() => handleCheckboxChange('star', star)} />
                        <label className="form-check-label" htmlFor={`star-${star}`}>
                            <StarRating rating={star} size="sm" />
                        </label>
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <h6 className="fw-bold">Review Score</h6>
                {reviewOptions.map(review => (
                    <div className="form-check" key={review}>
                        <input className="form-check-input" type="checkbox" id={`review-${review}`}
                            checked={filters.review.includes(review)} onChange={() => handleCheckboxChange('review', review)} />
                        <label className="form-check-label" htmlFor={`review-${review}`}>
                            {review}
                        </label>
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <h6 className="fw-bold">Property Type</h6>
                {propertyOptions.map(prop => (
                    <div className="form-check" key={prop}>
                        <input className="form-check-input" type="checkbox" id={`prop-${prop}`}
                            checked={filters.property.includes(prop)} onChange={() => handleCheckboxChange('property', prop)} />
                        <label className="form-check-label" htmlFor={`prop-${prop}`}>
                            {prop}
                        </label>
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <h6 className="fw-bold">Facilities</h6>
                {facilitiesOptions.map(fac => (
                    <div className="form-check" key={fac}>
                        <input className="form-check-input" type="checkbox" id={`fac-${fac}`}
                            checked={filters.facilities.includes(fac)} onChange={() => handleCheckboxChange('facilities', fac)} />
                        <label className="form-check-label" htmlFor={`fac-${fac}`}>
                            {fac}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Hotel List Section Component (contains filters and listings)
const HotelListSection = () => {
    const [filters, setFilters] = useState({
        priceRange: { min: 300, max: 900 },
        star: [],
        review: [],
        property: [],
        facilities: []
    });
    return (
        <div className="container py-5">
            <div className="row g-4">
                <div className="col-lg-3"><FiltersSidebar filters={filters} setFilters={setFilters} /></div>
                <div className="col-lg-9">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="mb-0 fw-bold">11 hotels found</h4>
                        <div className="d-flex align-items-center">
                            <span className="me-2">Sort by:</span>
                            <select className="form-select w-auto">
                                <option>Recommended</option>
                                <option>Price: Low to High</option>
                            </select>
                        </div>
                    </div>
                    {DUMMY_HOTELS.map(hotel => (<HotelListingCard key={hotel.id} hotel={hotel} />))}
                </div>
            </div>
        </div>
    );
};

// Newsletter Section Component
const NewsletterSection = () => {
    return (
        <div className="bg-primary text-white py-5 px-3">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 text-center text-lg-start">
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                            <FontAwesomeIcon icon={faPhoneVolume} size="2x" className="me-3" />
                            <div>
                                <h5 className="mb-0">More Inquiry</h5>
                                <h3 className="fw-bold mb-0">+990-737 621432</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 text-center">
                        <h4 className="fw-bold mb-1">Join The Newsletter</h4>
                        <p className="small mb-3">To receive our best monthly deals</p>
                        <div className="d-flex justify-content-center">
                            <div className="input-group" style={{ maxWidth: '300px' }}>
                                <input type="email" className="form-control" placeholder="Enter your email address.." />
                                <button className="btn btn-success" type="button">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </button>
                            </div>
                        </div>
                    </div>
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

// This is the main component that gets rendered by the route
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