import React, { useState, useEffect } from 'react';

// Main App component
const App = () => {
    // State to manage the currently active page/view
    const [currentPage, setCurrentPage] = useState('home');
    // State to manage the list of artworks displayed on the site
    const [artworks, setArtworks] = useState([]);
    // State for the "Sell Art" form inputs
    const [newArtwork, setNewArtwork] = useState({
        title: '',
        artist: '',
        price: '',
        imageUrl: '',
        description: '',
    });
    // State to control the visibility of the "Sell Art" modal
    const [isSellModalOpen, setIsSellModalOpen] = useState(false);
    // State to control the visibility of the success message after selling art
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    // State to manage items in the cart (each item will have quantity)
    const [cart, setCart] = useState([]);
    // State to manage items in the wishlist
    const [wishlist, setWishlist] = useState([]);
    // State for user authentication
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null); // Stores user info if logged in

    // New state for the currently selected artwork for detailed view
    const [selectedArtwork, setSelectedArtwork] = useState(null);
    // New state to control the visibility of the detailed product modal
    const [isProductModalOpen, setIsProductModalOpen] = useState(false);


    // Initial artwork data (mock data)
    useEffect(() => {
        setArtworks([
            { id: 1, title: 'Mystic Forest', artist: 'Sophia Lee', price: '450.00', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/2/KH/VP/WT/9107407/digital-art-wall-painting-for-home-nature-landscape-forest-painting.jpg', description: 'A vibrant blend of colors and forms, evoking a sense of calm and energy.' },
            { id: 2, title: 'Skyward Gaze', artist: 'Marcus Chen', price: '720.00', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMc98gLNtQ80RlIvOa3O08IIHf_VrpF3AgYw&s', description: 'Captures the serene beauty of a city waking up, with soft light and shadows.' },
            { id: 3, title: 'Enchanted Meadow', artist: 'Elena Petrova', price: '300.00', imageUrl: 'https://static.wixstatic.com/media/24f05d_394eaf83d0e24395ab49c0075b0eda3c~mv2.png/v1/fill/w_442,h_560,al_c,lg_1,q_85,enc_avif,quality_auto/24f05d_394eaf83d0e24395ab49c0075b0eda3c~mv2.png', description: 'An idyllic scene of wildflowers swaying gently in a summer breeze.' },
            { id: 4, title: 'Urban Echoes', artist: 'David Kim', price: '680.00', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcExTcO5vg3X3bjhjlT5kfrIn9VtSuJMHRug&s', description: 'A mesmerizing depiction of a starry night, full of wonder and mystery.' },
            { id: 5, title: 'Crimson Sunset', artist: 'Aisha Rahman', price: '550.00', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUabm4k5ch5g-crhkhysnE6_PG5uMX27ijg&s', description: 'Explores the profound beauty and mystery of the underwater world.' },
            { id: 6, title: 'Geometric Ascent', artist: 'Carlos Rivera', price: '490.00', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkcm0Gz48WTa0UACmiW169qEEoncTzU2rkA&s', description: 'A modern piece playing with shapes and lines, creating dynamic visual patterns.' },
            { id: 7, title: 'Tranquil Stream', artist: 'Olivia Brown', price: '380.00', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj034EB4omlyXLbrbvjARzNtmXsnLQb6MiCw&s', description: 'A serene landscape capturing the golden hues of an autumn forest.' },
            { id: 8, title: 'Abstract Vista', artist: 'Noah Davis', price: '950.00', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkg5dKnTF8xv43NpysrQcdj-NBVY7YiIWQMg&s', description: 'An imaginative piece depicting a vibrant journey through space.' },
            { id: 9, title: 'River Landscape', artist: 'Adriaen van de Velde', price: '1200.00', imageUrl: 'https://cdn.britannica.com/60/95760-050-899F8959-River-Landscape-canvas-oil-Adriaen-van-de-1663.jpg', description: 'A classic Dutch Golden Age landscape painting.' },
            { id: 10, title: 'Abstract Reflection', artist: 'New Artist', price: '600.00', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8Yt3-hbgD1H_XrmOFx6ejd4SOfHRGYcu7Q&s', description: 'A vibrant abstract piece with intriguing reflections.' },
        ]);
    }, []);

    // Handle input changes for the "Sell Art" form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewArtwork({ ...newArtwork, [name]: value });
    };

    // Handle submission of the "Sell Art" form
    const handleSellSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!newArtwork.title || !newArtwork.artist || !newArtwork.price || !newArtwork.imageUrl) {
            // Using a simple alert for now, could be a custom modal
            alert('Please fill in all required fields.');
            return;
        }

        // Add a new ID to the artwork (simple increment for mock data)
        const newId = artworks.length > 0 ? Math.max(...artworks.map(art => art.id)) + 1 : 1;
        const artToAdd = { ...newArtwork, id: newId, price: parseFloat(newArtwork.price).toFixed(2) };
        setArtworks([...artworks, artToAdd]); // Add new artwork to the list
        setIsSellModalOpen(false); // Close the modal
        setShowSuccessMessage(true); // Show success message
        setNewArtwork({ title: '', artist: '', price: '', imageUrl: '', description: '' }); // Reset form
        setTimeout(() => setShowSuccessMessage(false), 3000); // Hide success message after 3 seconds
    };

    // Simulate buying an artwork
    const handleBuyArt = (artTitle) => {
        alert(`You've successfully purchased "${artTitle}"! (This is a simulation)`);
    };

    // Handle adding an artwork to the cart
    const handleAddToCart = (art) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === art.id);
            if (existingItem) {
                // If item already in cart, increment quantity
                return prevCart.map(item =>
                    item.id === art.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Otherwise, add new item with quantity 1
                return [...prevCart, { ...art, quantity: 1 }];
            }
        });
        alert(`"${art.title}" added to cart!`);
    };

    // Handle removing an artwork from the cart
    const handleRemoveFromCart = (artId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== artId));
    };

    // Handle updating quantity in cart
    const handleUpdateCartQuantity = (artId, newQuantity) => {
        setCart((prevCart) =>
            prevCart.map(item =>
                item.id === artId ? { ...item, quantity: Math.max(1, newQuantity) } : item
            )
        );
    };

    // Handle adding an artwork to the wishlist
    const handleAddToWishlist = (art) => {
        setWishlist((prevWishlist) => {
            if (prevWishlist.some(item => item.id === art.id)) {
                alert(`"${art.title}" is already in your wishlist!`);
                return prevWishlist;
            } else {
                alert(`"${art.title}" added to wishlist!`);
                return [...prevWishlist, art];
            }
        });
    };

    // Handle removing an artwork from the wishlist
    const handleRemoveFromWishlist = (artId) => {
        setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== artId));
    };

    // Mock authentication functions
    const handleLogin = () => {
        setIsLoggedIn(true);
        setUser({ name: 'Art Enthusiast', email: 'user@example.com' });
        alert('Logged in successfully!');
        setCurrentPage('account'); // Redirect to account dashboard
    };

    const handleSignup = () => {
        alert('Signed up successfully! Please log in.');
        // In a real app, you'd navigate to login page or directly log them in
    };

    const handleSignout = () => {
        setIsLoggedIn(false);
        setUser(null);
        setCart([]); // Clear cart on logout
        setWishlist([]); // Clear wishlist on logout
        alert('Logged out successfully!');
        setCurrentPage('home'); // Redirect to home page
    };

    // Function to open the product detail modal
    const handleProductClick = (art) => {
        setSelectedArtwork(art);
        setIsProductModalOpen(true);
    };

    // Function to close the product detail modal
    const closeProductModal = () => {
        setIsProductModalOpen(false);
        setSelectedArtwork(null);
    };

    // Component for the navigation bar
    const Navbar = () => (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <span>ArtGallery</span>
                </div>
                <ul className="navbar-nav">
                    <li>
                        <button
                            onClick={() => setCurrentPage('home')}
                            className={`nav-button ${currentPage === 'home' ? 'active' : ''}`}
                        >
                            <span>Home</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setCurrentPage('buyArt')}
                            className={`nav-button ${currentPage === 'buyArt' ? 'active' : ''}`}
                        >
                            <span>Buy Art</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setIsSellModalOpen(true)} // Open modal on click
                            className="nav-button" // Removed 'sell-button' class to make it same color as others
                        >
                            <span>Sell Art</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setCurrentPage('wishlist')}
                            className={`nav-button ${currentPage === 'wishlist' ? 'active' : ''}`}
                        >
                            <span>Wishlist {wishlist.length > 0 && <span className="nav-badge">{wishlist.length}</span>}</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setCurrentPage('cart')}
                            className={`nav-button ${currentPage === 'cart' ? 'active' : ''}`}
                        >
                            <span>Cart {cart.length > 0 && <span className="nav-badge">{cart.reduce((total, item) => total + item.quantity, 0)}</span>}</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setCurrentPage('account')}
                            className={`nav-button ${currentPage === 'account' ? 'active' : ''}`}
                        >
                            <span>Account</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setCurrentPage('about')}
                            className={`nav-button ${currentPage === 'about' ? 'active' : ''}`}
                        >
                            <span>About</span>
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setCurrentPage('contact')}
                            className={`nav-button ${currentPage === 'contact' ? 'active' : ''}`}
                        >
                            <span>Contact</span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );

    // Component for the Home page
    const HomePage = () => (
        <div className="home-page">
            <h1 className="home-title">
                Discover Your Next Masterpiece
            </h1>
            <p className="home-description">
                Explore a curated collection of unique artworks from talented artists worldwide.
                Find, buy, and sell art with ease.
            </p>
            <div className="home-buttons">
                <button
                    onClick={() => setCurrentPage('buyArt')}
                    className="home-button explore-button"
                >
                    <span>Explore Art</span>
                </button>
                <button
                    onClick={() => setIsSellModalOpen(true)}
                    className="home-button sell-your-art-button"
                >
                    <span>Sell Your Art</span>
                </button>
            </div>

            {/* Featured Artworks Section */}
            <div className="featured-artworks-section">
                <h2 className="section-title">Featured Artworks</h2>
                <div className="artwork-grid">
                    {artworks.slice(0, 3).map(art => ( // Show first 3 artworks as featured
                        <div key={art.id} className="artwork-card" onClick={() => handleProductClick(art)}>
                            <img
                                src={art.imageUrl}
                                alt={art.title}
                                className="artwork-image"
                                onError={(e) => { e.target.onerror = null; e.target.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2IWL_Nwgz9ajqTKkK40Dm_iYXCbmsSQ7-g&s`; }} // Fallback image
                            />
                            <div className="artwork-details">
                                <h3 className="artwork-title">{art.title}</h3>
                                <p className="artwork-artist">By <span className="artist-name">{art.artist}</span></p>
                                <p className="artwork-price">${art.price}</p>
                                <div className="card-actions">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleBuyArt(art.title); }} // Stop propagation to prevent modal from opening
                                        className="action-button buy-now"
                                    >
                                        Buy Now
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleAddToCart(art); }} // Stop propagation to prevent modal from opening
                                        className="action-button add-to-cart"
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleAddToWishlist(art); }} // Stop propagation to prevent modal from opening
                                        className="action-button wishlist"
                                    >
                                        {/* Updated Wishlist Icon to SVG for a more "classy" look */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="wishlist-icon">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    // Component for the Buy Art page
    const BuyArtPage = () => (
        <div className="buy-art-page">
            <h2 className="section-title">Our Art Collection</h2>
            {artworks.length === 0 ? (
                <p className="no-artworks-message">No artworks available yet. Be the first to sell!</p>
            ) : (
                <div className="artwork-grid">
                    {artworks.map(art => (
                        <div key={art.id} className="artwork-card" onClick={() => handleProductClick(art)}>
                            <img
                                src={art.imageUrl}
                                alt={art.title}
                                className="artwork-image"
                                onError={(e) => { e.target.onerror = null; e.target.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2IWL_Nwgz9ajqTKkK40Dm_iYXCbmsSQ7-g&s`; }} // Fallback image
                            />
                            <div className="artwork-details">
                                <h3 className="artwork-title">{art.title}</h3>
                                <p className="artwork-artist">By <span className="artist-name">{art.artist}</span></p>
                                <p className="artwork-description">{art.description}</p>
                                <p className="artwork-price">${art.price}</p>
                                <div className="card-actions">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleBuyArt(art.title); }}
                                        className="action-button buy-now"
                                    >
                                        Buy Now
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleAddToCart(art); }}
                                        className="action-button add-to-cart"
                                    >
                                        Add to Cart
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); handleAddToWishlist(art); }}
                                        className="action-button wishlist"
                                    >
                                        {/* Updated Wishlist Icon to SVG */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="wishlist-icon">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    // Component for the Cart page
    const CartPage = () => {
        const totalCartPrice = cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);

        return (
            <div className="cart-page">
                <h2 className="section-title">Your Shopping Cart</h2>
                {cart.length === 0 ? (
                    <p className="empty-message">Your cart is empty. Start adding some masterpieces!</p>
                ) : (
                    <>
                        <div className="cart-items-container">
                            {cart.map(item => (
                                <div key={item.id} className="cart-item-card">
                                    <img src={item.imageUrl} alt={item.title} className="cart-item-image"
                                        onError={(e) => { e.target.onerror = null; e.target.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2IWL_Nwgz9ajqTKkK40Dm_iYXCbmsSQ7-g&s`; }} />
                                    <div className="cart-item-details">
                                        <h3 className="cart-item-title">{item.title}</h3>
                                        <p className="cart-item-artist">By {item.artist}</p>
                                        <p className="cart-item-price">${item.price}</p>
                                    </div>
                                    <div className="cart-item-quantity-controls">
                                        <button
                                            onClick={() => handleUpdateCartQuantity(item.id, item.quantity - 1)}
                                            className="quantity-button"
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="quantity-display">{item.quantity}</span>
                                        <button
                                            onClick={() => handleUpdateCartQuantity(item.id, item.quantity + 1)}
                                            className="quantity-button"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button
                                        onClick={() => handleRemoveFromCart(item.id)}
                                        className="remove-from-cart-button"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                            <p className="cart-total">Total: <span>${totalCartPrice}</span></p>
                            <button className="checkout-button">Proceed to Checkout</button>
                        </div>
                    </>
                )}
            </div>
        );
    };

    // Component for the Wishlist page
    const WishlistPage = () => (
        <div className="wishlist-page">
            <h2 className="section-title">Your Wishlist</h2>
            {wishlist.length === 0 ? (
                <p className="empty-message">Your wishlist is empty. Explore art and add your favorites!</p>
            ) : (
                <div className="wishlist-items-container">
                    {wishlist.map(item => (
                        <div key={item.id} className="wishlist-item-card">
                            <img src={item.imageUrl} alt={item.title} className="wishlist-item-image"
                                onError={(e) => { e.target.onerror = null; e.target.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2IWL_Nwgz9ajqTKkK40Dm_iYXCbmsSQ7-g&s`; }} />
                            <div className="wishlist-item-details">
                                <h3 className="wishlist-item-title">{item.title}</h3>
                                <p className="wishlist-item-artist">By {item.artist}</p>
                                <p className="wishlist-item-price">${item.price}</p>
                            </div>
                            <div className="wishlist-actions">
                                <button
                                    onClick={() => handleAddToCart(item)}
                                    className="wishlist-add-to-cart-button"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => handleRemoveFromWishlist(item.id)}
                                    className="remove-from-wishlist-button"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );

    // Component for the Account page/dashboard
    const AccountPage = () => (
        <div className="account-page">
            <h2 className="section-title">Your Account</h2>
            {isLoggedIn ? (
                <div className="account-dashboard">
                    <p className="welcome-message">Welcome, {user.name}!</p>
                    <div className="dashboard-sections">
                        <div className="dashboard-card">
                            <h3>Sales Dashboard</h3>
                            <p>Total Sales: $1,250.00 (Mock Data)</p>
                            <p>Artworks Sold: 3 (Mock Data)</p>
                            <button className="dashboard-button">View Sales History</button>
                        </div>
                        <div className="dashboard-card">
                            <h3>Purchase History</h3>
                            <p>Total Purchases: $800.00 (Mock Data)</p>
                            <p>Artworks Bought: 2 (Mock Data)</p>
                            <button className="dashboard-button">View Purchase History</button>
                        </div>
                    </div>
                    <button onClick={handleSignout} className="signout-button">Sign Out</button>
                </div>
            ) : (
                <div className="auth-section">
                    <p className="auth-message">Please log in or sign up to access your dashboard.</p>
                    <div className="auth-buttons">
                        <button onClick={handleLogin} className="auth-button login-button">Log In</button>
                        <button onClick={handleSignup} className="auth-button signup-button">Sign Up</button>
                    </div>
                </div>
            )}
        </div>
    );


    // Component for the About page
    const AboutPage = () => (
        <div className="about-page">
            <h2 className="section-title">About ArtGallery</h2>
            <p className="about-text">
                Welcome to ArtGallery, your premier online destination for discovering and acquiring unique artworks.
                Our mission is to connect talented artists with art lovers around the globe, fostering a vibrant
                community where creativity thrives and art finds its true home.
            </p>
            <p className="about-text">
                We believe in making art accessible to everyone. Whether you're a seasoned collector or
                just starting your art journey, ArtGallery offers a seamless and inspiring experience.
                Browse through diverse collections, find pieces that resonate with your soul, or showcase
                your own creations to a global audience.
            </p>
            <p className="about-text">
                Join us in celebrating the beauty and power of art!
            </p>
        </div>
    );

    // Component for the Contact page
    const ContactPage = () => (
        <div className="contact-page">
            <h2 className="section-title">Contact Us</h2>
            <p className="contact-text">
                Have questions, feedback, or a special request? We'd love to hear from you!
                Reach out to us through the following channels:
            </p>
            <div className="contact-info">
                <div className="contact-item">
                    <span>Email: <a href="mailto:support@artgallery.com" className="contact-link">support@artgallery.com</a></span>
                </div>
                <div className="contact-item">
                    <span>Phone: +1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                    <span>Address: 123 Art Lane, Creativity City, AC 12345</span>
                </div>
            </div>
            <p className="contact-note">
                We typically respond within 24-48 hours.
            </p>
        </div>
    );

    // Render the current page based on `currentPage` state
    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage />;
            case 'buyArt':
                return <BuyArtPage />;
            case 'cart':
                return <CartPage />;
            case 'wishlist':
                return <WishlistPage />;
            case 'account':
                return <AccountPage />;
            case 'about':
                return <AboutPage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage />;
        }
    };

    // New Product Detail Modal Component
    const ProductModal = ({ artwork, onClose, onAddToCart, onAddToWishlist }) => {
        if (!artwork) return null; // Don't render if no artwork is selected

        return (
            <div className="modal-overlay">
                <div className="modal-content product-detail-modal">
                    <button
                        onClick={onClose}
                        className="modal-close-button"
                    >
                        X
                    </button>
                    <div className="product-modal-content-inner">
                        <img
                            src={artwork.imageUrl}
                            alt={artwork.title}
                            className="product-modal-image"
                            onError={(e) => { e.target.onerror = null; e.target.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy2IWL_Nwgz9ajqTKkK40Dm_iYXCbmsSQ7-g&s`; }}
                        />
                        <div className="product-modal-details">
                            <h2 className="product-modal-title">{artwork.title}</h2>
                            <p className="product-modal-artist">By <span>{artwork.artist}</span></p>
                            <p className="product-modal-description">{artwork.description}</p>
                            <p className="product-modal-price">${artwork.price}</p>
                            <div className="product-modal-actions">
                                <button
                                    onClick={() => { onAddToCart(artwork); onClose(); }} // Add to cart and close modal
                                    className="action-button add-to-cart"
                                >
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => { onAddToWishlist(artwork); }}
                                    className="action-button wishlist"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="wishlist-icon">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="app-container">
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

                body {
                    margin: 0;
                    font-family: 'Inter', sans-serif;
                    color: #333;
                    /* Background image with fade effect */
                    background-image: linear-gradient(rgba(240, 240, 245, 0.8), rgba(224, 224, 232, 0.8)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-beuNwJZEdCtbCYr4ZahE26ZejYzjAegXqA&s');
                    background-size: cover;
                    background-attachment: fixed;
                    background-position: center;
                }

                .app-container {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }

                /* Navbar */
                .navbar {
                    background: linear-gradient(to right, #915d94, #a4709d); /* Lighter purple gradient */
                    padding: 1rem 1.5rem;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                    border-bottom-left-radius: 15px;
                    border-bottom-right-radius: 15px;
                }

                .navbar-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                }

                @media (min-width: 768px) {
                    .navbar-container {
                        flex-direction: row;
                    }
                }

                .navbar-brand {
                    color: white;
                    font-size: 2.25rem;
                    font-weight: 800;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .navbar-nav {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 1rem;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                @media (min-width: 768px) {
                    .navbar-nav {
                        flex-wrap: nowrap;
                        gap: 0.5rem; /* Reduced gap to accommodate fixed width buttons */
                    }
                }

                .nav-button {
                    background-color: transparent;
                    border: none;
                    color: white;
                    padding: 0.75rem 0.5rem; /* Adjusted padding */
                    border-radius: 8px;
                    font-size: 1.125rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                    display: flex;
                    align-items: center;
                    justify-content: center; /* Center content horizontally */
                    min-width: 110px; /* Set a minimum width for uniform size */
                    box-sizing: border-box; /* Include padding in the width */
                    position: relative; /* For badge positioning */
                    text-shadow: 0 1px 2px rgba(0,0,0,0.2); /* Subtle text shadow */
                }

                .nav-button:hover {
                    background-color: rgba(255, 255, 255, 0.35); /* More visible hover */
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
                    transform: translateY(-3px);
                }
                .nav-button:active {
                    transform: translateY(1px); /* Simulates press */
                    box-shadow: 0 2px 5px rgba(0,0,0,0.15);
                }


                .nav-button.active {
                    background-color: white;
                    color: #7A0080; /* Matches navbar gradient start color */
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                }

                .nav-badge {
                    background-color: #FFB800; /* Richer Gold */
                    color: #7A0080;
                    font-size: 0.75rem;
                    font-weight: 700;
                    border-radius: 50%;
                    padding: 0.2rem 0.5rem;
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    min-width: 20px;
                    text-align: center;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                }

                /* Main Content Area */
                main {
                    flex-grow: 1;
                    max-width: 1200px;
                    margin: 2rem auto;
                    padding: 1.5rem;
                }

                /* Success Message */
                .success-message {
                    position: fixed;
                    top: 80px;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #28a745; /* Bootstrap-like success green */
                    color: white;
                    padding: 1rem 1.5rem;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    z-index: 50;
                    animation: fadeInOut 3s forwards;
                }

                @keyframes fadeInOut {
                    0% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
                    10% { opacity: 1; transform: translateX(-50%) translateY(0); }
                    90% { opacity: 1; transform: translateX(-50%) translateY(0); }
                    100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
                }

                /* Page Styles (Home, Buy Art, About, Contact, Cart, Wishlist, Account) */
                .home-page, .buy-art-page, .about-page, .contact-page, .cart-page, .wishlist-page, .account-page {
                    background: linear-gradient(to br, #f0f0f5, #e0e0e8); /* Soft greyish-blue gradient */
                    border-radius: 15px;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                    padding: 2.5rem;
                    margin: 1rem 0;
                    min-height: calc(100vh - 180px); /* Adjust based on navbar/footer height */
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
                
                .home-page {
                    justify-content: flex-start; /* Align content to top for featured artworks */
                    padding-top: 5rem;
                }

                .home-title {
                    font-size: 3.5rem;
                    font-weight: 800;
                    color: #2c3e50; /* Darker text */
                    margin-bottom: 1.5rem;
                    line-height: 1.2;
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
                }

                .home-description {
                    font-size: 1.25rem;
                    color: #555;
                    margin-bottom: 2rem;
                    max-width: 600px;
                }

                .home-buttons {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .home-button {
                    border: none;
                    padding: 1rem 2rem;
                    border-radius: 9999px; /* full rounded */
                    font-size: 1.25rem;
                    font-weight: 600;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    position: relative; /* For button effects */
                    overflow: hidden; /* For ripple effect */
                }

                .home-button::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: rgba(255, 255, 255, 0.1);
                    top: 0;
                    left: 0;
                    transform: scale(0);
                    opacity: 0;
                    border-radius: 50%;
                    transition: all 0.5s ease-out;
                }

                .home-button:hover::after {
                    transform: scale(2);
                    opacity: 1;
                }

                .home-button:hover {
                    transform: scale(1.05);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
                }
                .home-button:active {
                    transform: translateY(1px); /* Simulates press */
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }

                .explore-button {
                    background: linear-gradient(to right, #a4709d, #b98bb3); /* Lighter purple gradient */
                    color: white;
                    border: 1px solid #915d94; /* Darker border */
                }

                .explore-button:hover {
                    background: linear-gradient(to right, #b98bb3, #a4709d); /* Darker purple on hover */
                }

                .sell-your-art-button {
                    background: linear-gradient(to right, #FFDDAA, #FFCC88); /* Lighter Gold to Orange gradient */
                    color: #7A0080;
                    border: 1px solid #E0C16C; /* Darker gold border */
                }

                .sell-your-art-button:hover {
                    background: linear-gradient(to right, #FFCC88, #FFB366); /* Slightly darker gradient on hover */
                }

                .section-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 2.5rem;
                    text-align: center;
                    width: 100%;
                }

                .empty-message {
                    text-align: center;
                    color: #777;
                    font-size: 1.25rem;
                    padding: 2rem;
                }

                /* Artwork Grid */
                .artwork-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 2rem;
                    width: 100%;
                    max-width: 1200px;
                    margin-top: 4rem; /* For Home page featured section */
                }

                .artwork-card {
                    background-color: white;
                    border-radius: 12px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
                    overflow: hidden;
                    transition: all 0.3s ease-in-out;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid #e0e0e0; /* Subtle card border */
                    cursor: pointer; /* Indicate clickable */
                }

                .artwork-card:hover {
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
                    transform: translateY(-5px);
                }

                .artwork-image {
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                    object-position: center;
                    border-top-left-radius: 12px;
                    border-top-right-radius: 12px;
                    transition: transform 0.3s ease-in-out;
                }

                .artwork-card:hover .artwork-image {
                    transform: scale(1.05);
                }

                .artwork-details {
                    padding: 1.5rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }

                .artwork-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #2d3748; /* Dark text */
                    margin-bottom: 0.5rem;
                }

                .artwork-artist {
                    color: #4a5568; /* Medium-dark text */
                    font-size: 1.125rem;
                    margin-bottom: 0.5rem;
                }

                .artist-name {
                    font-weight: 600;
                }

                .artwork-description {
                    color: #718096; /* Gray text */
                    font-size: 1rem;
                    margin-bottom: 1rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .artwork-price {
                    color: #7A0080; /* Primary purple */
                    font-size: 2.25rem;
                    font-weight: 800;
                    margin-bottom: 1rem;
                }

                .card-actions {
                    display: flex;
                    gap: 0.5rem;
                    margin-top: auto; /* Push buttons to bottom */
                    flex-wrap: wrap; /* Allow wrapping on smaller screens */
                    justify-content: center;
                }

                .action-button {
                    flex: 1; /* Allow buttons to grow */
                    min-width: 90px; /* Minimum width for buttons */
                    background: linear-gradient(to right, #b98bb3, #a4709d); /* Lighter Purple gradient */
                    color: white;
                    padding: 0.75rem 0.5rem;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: 600;
                    border: none; /* Removed border */
                    cursor: pointer;
                    transition: all 0.3s ease-in-out;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Classier shadow */
                    text-align: center;
                    position: relative; /* For glossy effect */
                    overflow: hidden;
                    letter-spacing: 0.05em; /* Slightly increased letter spacing */
                    text-transform: uppercase; /* Uppercase text */
                }

                .action-button::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
                    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
                    opacity: 0;
                    border-radius: 50%;
                    transform: scale(0.1);
                }

                .action-button:hover::before {
                    opacity: 1;
                    transform: scale(1);
                }


                .action-button:hover {
                    background: linear-gradient(to right, #a4709d, #915d94); /* Darker gradient on hover */
                    transform: translateY(-3px);
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
                }
                .action-button:active {
                    transform: translateY(1px); /* Simulates press */
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }


                .action-button.buy-now {
                    background: linear-gradient(to right, #915d94, #a4709d); /* Consistent lighter primary purple gradient */
                }
                .action-button.buy-now:hover {
                    background: linear-gradient(to right, #a4709d, #915d94);
                }


                .action-button.add-to-cart {
                    background: linear-gradient(to right, #7ED37E, #6BBF6B); /* Lighter Green gradient for cart */
                }
                .action-button.add-to-cart:hover {
                    background: linear-gradient(to right, #6BBF6B, #5BAA5B);
                }
                
                .action-button.wishlist {
                    background: linear-gradient(to right, #FF8080, #FF6666); /* Lighter Red gradient for wishlist */
                    flex: 0 0 auto; /* Don't grow, keep original width */
                    width: 45px; /* Slightly adjusted size for icon */
                    padding: 0.75rem 0; /* Adjust padding for icon */
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); /* Consistent classy shadow */
                    animation: none; /* Removed pulse animation */
                }
                .wishlist-icon {
                    width: 24px; /* SVG icon size */
                    height: 24px;
                    color: white; /* Color of the heart icon */
                }

                .action-button.wishlist:hover {
                    background: linear-gradient(to right, #FF6666, #FF4D4D); /* Darker red on hover */
                    transform: translateY(-3px); /* Consistent hover effect */
                }


                /* About Page */
                .about-page, .contact-page, .account-page {
                    text-align: center;
                    padding: 4rem 2rem;
                }

                .about-text, .contact-text {
                    font-size: 1.125rem;
                    color: #555;
                    line-height: 1.6;
                    max-width: 768px;
                    margin: 0 auto 1.5rem auto;
                }

                .contact-info {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .contact-item {
                    font-size: 1.25rem;
                    color: #333;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .contact-link {
                    color: #007bff; /* Standard blue link */
                    text-decoration: none;
                    transition: text-decoration 0.3s ease;
                }

                .contact-link:hover {
                    text-decoration: underline;
                }

                .contact-note {
                    text-align: center;
                    color: #777;
                    font-size: 0.875rem;
                }

                /* Cart Page */
                .cart-page, .wishlist-page {
                    text-align: center;
                }

                .cart-items-container, .wishlist-items-container {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    width: 100%;
                    max-width: 800px;
                    margin-top: 2rem;
                }

                .cart-item-card, .wishlist-item-card {
                    display: flex;
                    align-items: center;
                    background-color: white;
                    border-radius: 10px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                    padding: 1rem;
                    gap: 1rem;
                    transition: all 0.2s ease-in-out;
                    border: 1px solid #e0e0e0;
                }

                .cart-item-card:hover, .wishlist-item-card:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
                }

                .cart-item-image, .wishlist-item-image {
                    width: 80px;
                    height: 80px;
                    object-fit: cover;
                    border-radius: 8px;
                }

                .cart-item-details, .wishlist-item-details {
                    flex-grow: 1;
                    text-align: left;
                }

                .cart-item-title, .wishlist-item-title {
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #2c3e50;
                    margin-bottom: 0.25rem;
                }

                .cart-item-artist, .wishlist-item-artist {
                    font-size: 0.9rem;
                    color: #777;
                }

                .cart-item-price, .wishlist-item-price {
                    font-size: 1.1rem;
                    font-weight: 700;
                    color: #7A0080;
                    margin-top: 0.5rem;
                }

                .cart-item-quantity-controls {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .quantity-button {
                    background-color: #ddd;
                    border: none;
                    border-radius: 5px;
                    width: 30px;
                    height: 30px;
                    font-size: 1.2rem;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background-color 0.2s ease;
                }

                .quantity-button:hover:not(:disabled) {
                    background-color: #ccc;
                }

                .quantity-button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                .quantity-display {
                    font-size: 1.1rem;
                    font-weight: 600;
                    min-width: 25px;
                    text-align: center;
                }

                .remove-from-cart-button, .remove-from-wishlist-button {
                    background: linear-gradient(to right, #FF8080, #FF6666); /* Lighter Red gradient */
                    color: white;
                    border: none;
                    border-radius: 8px;
                    padding: 0.5rem 0.75rem;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;
                    margin-left: 1rem;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }

                .remove-from-cart-button:hover, .remove-from-wishlist-button:hover {
                    background: linear-gradient(to right, #FF6666, #FF4D4D);
                    transform: scale(1.05);
                }
                
                .wishlist-add-to-cart-button {
                    background: linear-gradient(to right, #7ED37E, #6BBF6B); /* Lighter Green gradient */
                    color: white;
                    border: none;
                    border-radius: 8px;
                    padding: 0.5rem 0.75rem;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: all 0.2s ease-in-out;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }

                .wishlist-add-to-cart-button:hover {
                    background: linear-gradient(to right, #6BBF6B, #5BAA5B);
                    transform: scale(1.05);
                }

                .cart-summary {
                    margin-top: 2rem;
                    padding: 1.5rem;
                    background-color: white;
                    border-radius: 10px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
                    width: 100%;
                    max-width: 800px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 1rem;
                    border: 1px solid #e0e0e0;
                }

                .cart-total {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #2c3e50;
                }

                .cart-total span {
                    color: #7A0080;
                }

                .checkout-button {
                    background: linear-gradient(to right, #915d94, #a4709d); /* Lighter Primary purple gradient */
                    color: white;
                    border: none;
                    border-radius: 8px;
                    padding: 0.75rem 1.5rem;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .checkout-button:hover {
                    background: linear-gradient(to right, #a4709d, #915d94);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                }

                /* Account Page Specific Styles */
                .account-dashboard {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    max-width: 800px;
                    gap: 2rem;
                    padding-top: 2rem;
                }

                .welcome-message {
                    font-size: 1.8rem;
                    font-weight: 600;
                    color: #2c3e50;
                    margin-bottom: 1.5rem;
                }

                .dashboard-sections {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1.5rem;
                    width: 100%;
                }

                @media (min-width: 600px) {
                    .dashboard-sections {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                .dashboard-card {
                    background-color: white;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                    padding: 1.5rem;
                    text-align: left;
                    border: 1px solid #e0e0e0;
                    transition: all 0.3s ease;
                }

                .dashboard-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
                }

                .dashboard-card h3 {
                    font-size: 1.5rem;
                    color: #7A0080;
                    margin-bottom: 1rem;
                    border-bottom: 2px solid #e0e0e0;
                    padding-bottom: 0.5rem;
                }

                .dashboard-card p {
                    font-size: 1.1rem;
                    color: #555;
                    margin-bottom: 0.75rem;
                }

                .dashboard-button {
                    background: linear-gradient(to right, #6C757D, #5A6268); /* Lighter Gray gradient */
                    color: white;
                    border: none;
                    border-radius: 8px;
                    padding: 0.75rem 1.25rem;
                    font-size: 0.95rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-top: 1rem;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }

                .dashboard-button:hover {
                    background: linear-gradient(to right, #5A6268, #4D5257);
                    transform: translateY(-2px);
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                }

                .signout-button {
                    background: linear-gradient(to right, #FF8080, #FF6666); /* Lighter Red gradient */
                    color: white;
                    border: none;
                    border-radius: 8px;
                    padding: 0.8rem 2rem;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin-top: 2.5rem;
                    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
                }

                .signout-button:hover {
                    background: linear-gradient(to right, #FF6666, #FF4D4D);
                    transform: translateY(-2px);
                }

                .auth-section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                    padding-top: 2rem;
                }

                .auth-message {
                    font-size: 1.25rem;
                    color: #555;
                    margin-bottom: 1rem;
                }

                .auth-buttons {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .auth-button {
                    background: linear-gradient(to right, #915d94, #a4709d); /* Lighter Primary purple gradient */
                    color: white;
                    border: none;
                    border-radius: 8px;
                    padding: 0.8rem 2rem;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
                }

                .auth-button:hover {
                    background: linear-gradient(to right, #a4709d, #915d94);
                    transform: translateY(-2px);
                }

                .login-button {
                    background: linear-gradient(to right, #915d94, #a4709d);
                }

                .signup-button {
                    background: linear-gradient(to right, #FFDDAA, #FFCC88); /* Lighter Gold to Orange gradient */
                    color: #7A0080;
                }
                .signup-button:hover {
                    background: linear-gradient(to right, #FFCC88, #FFB366);
                }


                /* Modal */
                .modal-overlay {
                    position: fixed;
                    inset: 0;
                    background-color: rgba(0, 0, 0, 0.75); /* Darker overlay */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    z-index: 50;
                    animation: fadeIn 0.3s ease-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .modal-content {
                    background-color: white;
                    border-radius: 12px;
                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4); /* More prominent shadow */
                    padding: 2.5rem;
                    width: 100%;
                    max-width: 550px; /* Slightly wider modal */
                    position: relative;
                    transform: scale(1);
                    opacity: 1;
                    transition: all 0.3s ease-out;
                    animation: slideIn 0.3s ease-out;
                    border: 1px solid #e0e0e0;
                }

                @keyframes slideIn {
                    from { transform: translateY(-50px) scale(0.9); opacity: 0; }
                    to { transform: translateY(0) scale(1); opacity: 1; }
                }

                .modal-close-button {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: none;
                    border: none;
                    color: #888;
                    font-size: 1.75rem;
                    font-weight: bold;
                    cursor: pointer;
                    transition: color 0.3s ease, transform 0.2s ease-in-out;
                }

                .modal-close-button:hover {
                    color: #333;
                    transform: rotate(90deg);
                }

                .modal-title {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 1.5rem;
                    text-align: center;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }

                .form-label {
                    display: block;
                    color: #555;
                    font-size: 1.125rem;
                    font-weight: 500;
                    margin-bottom: 0.5rem;
                }

                .form-input, .form-textarea {
                    width: 100%;
                    padding: 0.85rem; /* Slightly more padding */
                    border: 1px solid #ddd; /* Lighter border */
                    border-radius: 8px;
                    font-size: 1rem;
                    box-sizing: border-box;
                    transition: border-color 0.3s ease, box-shadow 0.3s ease;
                }

                .form-input:focus, .form-textarea:focus {
                    outline: none;
                    border-color: #7A0080; /* Primary purple */
                    box-shadow: 0 0 0 3px rgba(122, 0, 128, 0.2); /* Soft shadow */
                }

                .form-textarea {
                    resize: vertical;
                    min-height: 80px;
                }

                .form-required {
                    color: #dc3545; /* Bootstrap-like danger red */
                }

                .submit-button {
                    background: linear-gradient(to right, #915d94, #a4709d); /* Lighter Primary purple gradient */
                    color: white;
                    padding: 0.9rem 1.25rem; /* More padding */
                    border-radius: 8px;
                    font-size: 1.25rem;
                    font-weight: 600;
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15); /* Slightly more shadow */
                }

                .submit-button:hover {
                    background: linear-gradient(to right, #a4709d, #915d94);
                    transform: translateY(-2px);
                    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
                }
                .submit-button:active {
                    transform: translateY(1px);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                }

                /* Responsive Adjustments */
                @media (max-width: 768px) {
                    .home-title {
                        font-size: 2.5rem;
                    }

                    .home-description {
                        font-size: 1rem;
                    }

                    .home-buttons {
                        flex-direction: column;
                    }

                    .home-button {
                        width: 100%;
                    }

                    .artwork-grid {
                        grid-template-columns: 1fr;
                    }

                    .artwork-title {
                        font-size: 1.25rem;
                    }

                    .artwork-price {
                        font-size: 1.75rem;
                    }

                    .modal-content {
                        padding: 1.5rem;
                    }
                    .card-actions {
                        flex-direction: column; /* Stack buttons vertically */
                    }
                    .action-button {
                        width: 100%; /* Full width when stacked */
                    }
                    .action-button.wishlist {
                        width: auto; /* Auto width for heart when stacked */
                        flex: none;
                        padding: 0.75rem 1.25rem; /* Restore padding */
                    }
                    .cart-item-card, .wishlist-item-card, .dashboard-card {
                        flex-direction: column;
                        text-align: center;
                    }
                    .cart-item-details, .wishlist-item-details {
                        text-align: center;
                    }
                    .cart-item-quantity-controls {
                        margin-top: 1rem;
                    }
                    .remove-from-cart-button, .remove-from-wishlist-button {
                        margin-top: 1rem;
                        margin-left: 0;
                    }
                    .auth-buttons {
                        flex-direction: column;
                    }
                    .auth-button {
                        width: 100%;
                    }

                    .product-modal-content-inner {
                        flex-direction: column;
                    }
                    .product-modal-image {
                        max-width: 100%;
                        height: auto;
                    }
                }

                @media (max-width: 480px) {
                    .navbar-brand {
                        font-size: 1.75rem;
                    }
                    .nav-button {
                        font-size: 0.9rem;
                        padding: 0.5rem 0.8rem;
                    }
                    .home-title {
                        font-size: 2rem;
                    }
                    .home-description {
                        font-size: 0.9rem;
                    }
                }

                /* Product Detail Modal Specific Styles */
                .product-detail-modal {
                    max-width: 900px; /* Larger modal for product details */
                }

                .product-modal-content-inner {
                    display: flex;
                    gap: 2rem;
                    align-items: flex-start;
                }

                .product-modal-image {
                    width: 50%;
                    max-width: 400px; /* Max width for image */
                    height: auto;
                    border-radius: 10px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    flex-shrink: 0; /* Prevent image from shrinking */
                }

                .product-modal-details {
                    flex-grow: 1;
                    text-align: left;
                }

                .product-modal-title {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: #2c3e50;
                    margin-bottom: 0.75rem;
                }

                .product-modal-artist {
                    font-size: 1.5rem;
                    color: #555;
                    margin-bottom: 1rem;
                }

                .product-modal-description {
                    font-size: 1.15rem;
                    color: #666;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }

                .product-modal-price {
                    font-size: 3rem;
                    font-weight: 900;
                    color: #7A0080;
                    margin-bottom: 2rem;
                }

                .product-modal-actions {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                `}
            </style>

            <Navbar />

            <main>
                {/* Success message modal */}
                {showSuccessMessage && (
                    <div className="success-message">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>Artwork added successfully!</span>
                    </div>
                )}

                {renderPage()}
            </main>

            {/* Sell Art Modal */}
            {isSellModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button
                            onClick={() => setIsSellModalOpen(false)}
                            className="modal-close-button"
                        >
                            X
                        </button>
                        <h2 className="modal-title">Sell Your Artwork</h2>
                        <form onSubmit={handleSellSubmit} className="form-container">
                            <div className="form-group">
                                <label htmlFor="title" className="form-label">
                                    Artwork Title <span className="form-required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={newArtwork.title}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    placeholder="e.g., Abstract Sunset"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="artist" className="form-label">
                                    Artist Name <span className="form-required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="artist"
                                    name="artist"
                                    value={newArtwork.artist}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    placeholder="e.g., Jane Doe"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price" className="form-label">
                                    Price ($) <span className="form-required">*</span>
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={newArtwork.price}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    placeholder="e.g., 299.99"
                                    min="0"
                                    step="0.01"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="imageUrl" className="form-label">
                                    Image URL <span className="form-required">*</span>
                                </label>
                                <input
                                    type="url"
                                    id="imageUrl"
                                    name="imageUrl"
                                    value={newArtwork.imageUrl}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    placeholder="e.g., https://example.com/my-art.jpg"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description" className="form-label">
                                    Description (Optional)
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={newArtwork.description}
                                    onChange={handleInputChange}
                                    rows="3"
                                    className="form-textarea"
                                    placeholder="Tell us about your artwork..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="submit-button"
                            >
                                List My Artwork
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Product Detail Modal */}
            {isProductModalOpen && (
                <ProductModal
                    artwork={selectedArtwork}
                    onClose={closeProductModal}
                    onAddToCart={handleAddToCart}
                    onAddToWishlist={handleAddToWishlist}
                />
            )}
        </div>
    );
};

export default App; // Export the App component as default
