// /backend/controllers/villasController.js
const { DUMMY_VILLAS_DB, DUMMY_SIDEBAR_DATA } = require('../dummyVillasData');

/**
 * @route GET /api/villas
 * @desc Get all blog posts along with sidebar data (categories, recent posts, tags)
 */
exports.getVillasData = (req, res) => {
    // Determine which posts are 'recent' (e.g., the first 3 posts)
    const recentPosts = DUMMY_VILLAS_DB.slice(0, 3).map(post => ({
        // Use post date and title for the recent posts list
        date: `${post.date}, 2024`, 
        title: post.title,
        image: post.image
    }));

    // Combine all data needed by the frontend in a single, efficient response
    const villasData = {
        posts: DUMMY_VILLAS_DB, 
        sidebar: {
            categories: DUMMY_SIDEBAR_DATA.categories,
            recentPosts: recentPosts, 
            tags: DUMMY_SIDEBAR_DATA.tags
        }
    };

    // Simulate success
    res.status(200).json(villasData);
};

/**
 * @route GET /api/villas/:id
 * @desc Get a single blog post by ID 
 */
exports.getVillaPostById = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = DUMMY_VILLAS_DB.find(p => p.id === postId);

    if (post) {
        res.status(200).json(post);
    } else {
        res.status(404).json({ message: 'Blog post not found' });
    }
};

/**
 * @route POST /api/subscribe 
 * @desc Handles newsletter subscriptions (placeholder logic)
 */
exports.handleSubscription = (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email is required for subscription.' });
    }
    
    // In a real application, you would save this email to a database (e.g., Firestore)
    console.log(`New subscriber email received: ${email}`); 
    
    res.status(200).json({ message: `Thank you for subscribing, ${email}! You will receive the next newsletter.` });
};
