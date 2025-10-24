import React from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar, faBed, faBath, faUser as faUserSolid, faCheckCircle, faGlobe, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Dummy Data (to be replaced with data from an API or file)
const DUMMY_HOTEL = {
    id: 1,
    name: 'The May Fair Hotel',
    location: 'Paris, France - View on map',
    images: [
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1596436889106-be35e84e97d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    star: 5,
    rating: 4.8,
    reviewCount: 4,
    price: 550,
    description: 'The May Fair Hotel, a Radisson Collection Hotel, is a landmark destination in London’s most exclusive neighborhood. A hotel of two distinct personalities: bold and daring to the front, and a tranquil urban oasis to the back. A haven of calm in the city, the May Fair Hotel, with its sleek, contemporary style, is the perfect location for both business and pleasure. The hotel’s unique location, in the heart of London, provides guests with an ideal base to explore the city’s many attractions.',
    highlights: [
        { icon: 'fas', name: 'Free breakfast' },
        { icon: 'fas', name: 'Service VIP' },
        { icon: 'fas', name: 'Wake-up call' },
        { icon: 'fas', name: 'Bicycle hire' },
    ],
    rooms: [
        { id: 1, name: 'Standard Room with City View', price: 250, image: 'https://images.unsplash.com/photo-1606558661642-167814c81045?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, name: 'Luxury Suite', price: 500, image: 'https://images.unsplash.com/photo-1596436889106-be35e84e97d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    ],
    reviews: [
        { id: 1, author: 'S. Alston', rating: 4.5, date: '11/02/2024', comment: 'Easy way to discover the city, the staff was extremely friendly and helpful.' },
        { id: 2, author: 'J. Smith', rating: 5, date: '10/25/2024', comment: 'Beautiful spot with a lovely view. The service was top-notch.' },
    ],
};

const DUMMY_TOURS = [
    { id: 1, name: 'Group Tour', price: 340, image: 'https://images.unsplash.com/photo-1606558661642-167814c81045?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', type: 'Popular', description: 'Discover Serenity, Exploration, and Enlightenment.' },
    { id: 2, name: 'Honeymoon Tour', price: 360, image: 'https://images.unsplash.com/photo-1517457210711-74b880175d65?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', type: 'Featured', description: 'Embracing City Lights, Landm. and Iconic Culture.' },
    { id: 3, name: 'Wildlife & Safari', price: 760, image: 'https://images.unsplash.com/photo-1546182990-fdb24d8d14d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', type: 'Popular', description: 'Exploring Ancient Ruins, Histor Landmarks, And Cultural.' },
];

const DUMMY_GUIDES = [
    { id: 1, name: 'Mateo Daniel', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, name: 'Elias Josiah', image: 'https://images.unsplash.com/photo-1519085360753-af0f389040d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, name: 'Milos Jaxon', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, name: 'Silas Nicholas', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

const DUMMY_ARTICLES = [
    { id: 1, title: 'Spiritual Sojourn: Pilgrimage Tours For Soul Seekers', image: 'https://images.unsplash.com/photo-1563299797-09d5690b074e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, title: 'Wine Country Escapes: Vineyard Tours For Connoisseurs', image: 'https://images.unsplash.com/photo-1510414963039-b9034f710f64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDBwYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

// Reusable Star Rating component
const StarRating = ({ rating, size = 'lg', totalStars = 5 }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);
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

// Hotel Details Component
const HotelDetails = () => {
    const { id } = useParams();
    const hotel = DUMMY_HOTEL; // Using a single dummy hotel for demonstration

    if (!hotel) {
        return <div className="text-center py-5">Hotel not found.</div>;
    }

    return (
        <div className="bg-light min-vh-100">
            {/* Main Content */}
            <div className="container py-5">
                <div className="row g-4">
                    {/* Left Column - Hotel Info */}
                    <div className="col-lg-8">
                        {/* Gallery */}
                        <div className="row g-2 mb-4">
                            <div className="col-12">
                                <img src={hotel.images[0]} alt="Main hotel view" className="img-fluid rounded shadow-sm w-100" style={{ maxHeight: '400px', objectFit: 'cover' }} />
                            </div>
                            <div className="col-12 d-flex flex-wrap gap-2 justify-content-center">
                                {hotel.images.slice(1).map((img, index) => (
                                    <img key={index} src={img} alt={`Hotel gallery thumbnail ${index + 1}`} className="img-fluid rounded shadow-sm" style={{ width: 'calc(25% - 8px)', height: '100px', objectFit: 'cover' }} />
                                ))}
                            </div>
                        </div>

                        {/* Description and Highlights */}
                        <div className="p-4 rounded-3 shadow-sm bg-white mb-4">
                            <h4 className="fw-bold mb-3">Description</h4>
                            <p className="text-muted mb-4">{hotel.description}</p>
                            <h6 className="fw-bold mb-2">Highlights:</h6>
                            <div className="d-flex flex-wrap gap-3">
                                {hotel.highlights.map((highlight, index) => (
                                    <span key={index} className="badge bg-light text-dark p-2 border rounded-pill">
                                        <FontAwesomeIcon icon={highlight.icon === 'fas' ? faCheckCircle : faCheckCircle} className="me-2" />
                                        {highlight.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Rooms & Availability */}
                        <div className="p-4 rounded-3 shadow-sm bg-white mb-4">
                            <h4 className="fw-bold mb-3">Select Your Room</h4>
                            <div className="d-flex mb-3">
                                <input type="date" className="form-control me-2" />
                                <input type="date" className="form-control me-2" />
                                <select className="form-select me-2">
                                    <option>1 Adult</option>
                                    <option>2 Adults</option>
                                </select>
                                <button className="btn btn-primary px-4">Check Availability</button>
                            </div>
                            {hotel.rooms.map(room => (
                                <div key={room.id} className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={room.image} className="img-fluid rounded-start w-100" style={{ height: '200px', objectFit: 'cover' }} alt={room.name} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title fw-bold">{room.name}</h5>
                                                <p className="card-text text-muted mb-2">Lorem ipsum dolor sit amet consectetur.</p>
                                                <div className="d-flex align-items-center mb-3">
                                                    <span className="badge bg-light text-dark me-2">
                                                        <FontAwesomeIcon icon={faBed} className="me-1" /> 2 Beds
                                                    </span>
                                                    <span className="badge bg-light text-dark me-2">
                                                        <FontAwesomeIcon icon={faBath} className="me-1" /> 1 Bath
                                                    </span>
                                                    <span className="badge bg-light text-dark me-2">
                                                        <FontAwesomeIcon icon={faUserSolid} className="me-1" /> 2 People
                                                    </span>
                                                </div>
                                                <h5 className="text-success fw-bold">${room.price} <span className="small text-muted fw-normal">/ night</span></h5>
                                                <button className="btn btn-primary mt-2">Book Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Reviews */}
                        <div className="p-4 rounded-3 shadow-sm bg-white mb-4">
                            <h4 className="fw-bold mb-3">Reviews ({hotel.reviews.length})</h4>
                            {hotel.reviews.map(review => (
                                <div key={review.id} className="border-bottom pb-3 mb-3">
                                    <div className="d-flex align-items-center mb-2">
                                        <img src="https://via.placeholder.com/50" alt="User" className="rounded-circle me-3" />
                                        <div>
                                            <h6 className="mb-0 fw-bold">{review.author}</h6>
                                            <small className="text-muted">{review.date}</small>
                                        </div>
                                        <div className="ms-auto">
                                            <StarRating rating={review.rating} size="sm" />
                                        </div>
                                    </div>
                                    <p className="mb-0 text-muted">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Booking and Information */}
                    <div className="col-lg-4">
                        <div className="p-4 rounded-3 shadow-sm bg-white mb-4">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-success fw-bold mb-0">${hotel.price} <span className="small text-muted fw-normal">/ night</span></h4>
                                <div className="text-end">
                                    <span className="badge bg-info text-white p-2 rounded-2 fw-bold">{hotel.rating}/5</span>
                                    <p className="small text-muted mb-0">{hotel.reviewCount} reviews</p>
                                </div>
                            </div>
                            <StarRating rating={hotel.star} totalStars={5} size="sm" />
                            <hr />
                            <h6 className="fw-bold mb-3">What this place offers:</h6>
                            <ul className="list-unstyled">
                                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> Free Wi-Fi</li>
                                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> Swimming Pool</li>
                                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> Air Conditioning</li>
                                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> Free Breakfast</li>
                                <li className="mb-2"><FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /> Laundry service</li>
                            </ul>
                            <div className="d-grid mt-4">
                                <button className="btn btn-primary btn-lg fw-bold">Book Now</button>
                            </div>
                        </div>
                        {/* Map Section */}
                        <div className="p-4 rounded-3 shadow-sm bg-white mb-4">
                            <h4 className="fw-bold mb-3">Location</h4>
                            <div style={{ height: '200px', backgroundColor: '#e9ecef', borderRadius: '8px' }}>
                                {/* Placeholder for a map component, like react-google-maps */}
                                <div className="d-flex align-items-center justify-content-center h-100 text-muted">
                                    Google Maps Placeholder
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* The rest of the content remains the same */}
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Types of Tours</h2>
                    <p className="lead text-muted">A tour guide helps visitors to discover a place of interest.</p>
                </div>
                <div className="row g-4">
                    {DUMMY_TOURS.map(tour => (
                        <div key={tour.id} className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm">
                                <img src={tour.image} className="card-img-top" alt={tour.name} style={{ height: '200px', objectFit: 'cover' }} />
                                <div className="card-body text-center">
                                    <span className="badge bg-primary text-white p-2 mb-2">{tour.type}</span>
                                    <h5 className="card-title fw-bold">{tour.name}</h5>
                                    <p className="card-text text-muted">{tour.description}</p>
                                    <h5 className="fw-bold text-success mt-3">${tour.price}</h5>
                                    <Link to={`/tours/${tour.id}`} className="btn btn-outline-primary mt-2">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5">
                    <Link to="/tours" className="btn btn-outline-dark fw-bold px-4 py-2">View All Packages</Link>
                </div>
            </div>

            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Our Tour Guide</h2>
                    <p className="lead text-muted">Meet our experienced tour guides.</p>
                </div>
                <div className="row g-4">
                    {DUMMY_GUIDES.map(guide => (
                        <div key={guide.id} className="col-md-3 text-center">
                            <div className="card border-0 shadow-sm">
                                <img src={guide.image} alt={guide.name} className="card-img-top rounded-top" style={{ height: '300px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="fw-bold mb-0">{guide.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Most Recent Article</h2>
                    <p className="lead text-muted">Stay up to date with our latest travel tips and stories.</p>
                </div>
                <div className="row g-4">
                    {DUMMY_ARTICLES.map(article => (
                        <div key={article.id} className="col-md-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <img src={article.image} alt={article.title} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">{article.title}</h5>
                                    <Link to={`/blog/${article.id}`} className="btn btn-link p-0">Read More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container-fluid py-5 bg-dark text-white text-center">
                <h2 className="fw-bold mb-4">Instagram</h2>
                <div className="row g-0">
                    {DUMMY_TOURS.map(tour => (
                        <div key={tour.id} className="col-lg-2 col-md-4 col-6 p-0">
                            <img src={tour.image} alt="Instagram" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;