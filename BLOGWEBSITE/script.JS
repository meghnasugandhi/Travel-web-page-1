// Blog data
const blogPosts = [
    {
        id: 1,
        title: "Artificial Intelligence: Shaping the Future of Technology",
        excerpt: "Explore how AI is revolutionizing industries and transforming the way we interact with technology in our daily lives.",
        content: "Artificial Intelligence has become one of the most transformative technologies of our time. From machine learning algorithms that power recommendation systems to neural networks that enable autonomous vehicles, AI is reshaping every aspect of our digital world. In this comprehensive article, we'll explore the current state of AI technology, its applications across various industries, and what the future holds for this revolutionary field. <br><br>The advancements in AI are truly astounding. We're seeing its application in diverse fields like healthcare, finance, education, and transportation. In healthcare, AI assists in diagnosing diseases, personalizing treatments, and drug discovery. Financial institutions use AI for fraud detection, algorithmic trading, and personalized banking services. Education benefits from AI-powered tutoring systems and adaptive learning platforms. Even in our daily lives, AI is present in voice assistants, smart home devices, and personalized recommendations. The ethical considerations and societal impact of AI are also crucial discussions as this technology continues to evolve.",
        date: "2024-05-20",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&h=600&fit=crop", // Larger image for modal
        tags: ["AI", "Machine Learning", "Technology", "Future"],
        author: "Sarah Johnson",
        comments: []
    },
    {
        id: 2,
        title: "The Rise of Quantum Computing: A New Era Begins",
        excerpt: "Discover the incredible potential of quantum computing and how it's set to solve problems that classical computers never could.",
        content: "Quantum computing represents a fundamental shift in how we approach computational problems. Unlike classical computers that use bits to process information in binary, quantum computers use quantum bits or 'qubits' that can exist in multiple states simultaneously. This quantum superposition, along with quantum entanglement, enables quantum computers to perform certain calculations exponentially faster than their classical counterparts. <br><br>The implications of quantum computing are vast and far-reaching. It promises to revolutionize fields like cryptography, materials science, drug development, and complex system optimization. Imagine breaking currently unbreakable encryption codes, designing new materials with unprecedented properties, or simulating molecular interactions with perfect accuracy. While still in its early stages of development, the progress in quantum hardware and algorithms is rapid, suggesting that a new era of computation is indeed on the horizon. Challenges remain, including maintaining qubit coherence and scaling up quantum systems, but the potential rewards are immense.",
        date: "2024-05-18",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1000&h=600&fit=crop",
        tags: ["Quantum Computing", "Innovation", "Science", "Future Tech"],
        author: "Dr. Michael Chen",
        comments: []
    },
    {
        id: 3,
        title: "Web Development Trends 2024: What's Hot and What's Not",
        excerpt: "Stay ahead of the curve with the latest web development trends, frameworks, and best practices that are defining modern web experiences.",
        content: "The web development landscape is constantly evolving, with new frameworks, tools, and methodologies emerging regularly. In 2024, we're seeing significant shifts towards more performant, accessible, and user-centric web experiences. From the rise of edge computing to the adoption of new CSS features, developers have more tools than ever to create amazing web applications. <br><br>Key trends include the continued dominance of React, Vue, and Angular, but with a growing emphasis on smaller, faster libraries like Svelte and SolidJS. Server-side rendering (SSR) and static site generation (SSG) are becoming standard practice for performance. Accessibility (A11y) is finally getting the attention it deserves, with developers prioritizing inclusive design. The backend-for-frontend (BFF) pattern, WebAssembly for high-performance applications, and the rise of Web3 technologies are also shaping the future. Staying updated requires continuous learning and experimentation.",
        date: "2024-05-15",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1000&h=600&fit=crop",
        tags: ["Web Development", "JavaScript", "CSS", "Frontend"],
        author: "Alex Rodriguez",
        comments: []
    },
    {
        id: 4,
        title: "Cybersecurity in the Age of Remote Work",
        excerpt: "Learn about the critical cybersecurity challenges and solutions for protecting digital assets in our increasingly connected world.",
        content: "As remote work becomes the norm, cybersecurity has never been more critical. Organizations worldwide are grappling with new security challenges as employees access corporate resources from various locations and devices. This shift has expanded the attack surface significantly, making traditional perimeter-based security models obsolete. <br><br>The primary challenges include securing home networks, managing cloud security, preventing phishing attacks targeting remote workers, and ensuring data privacy across distributed teams. Solutions involve multi-factor authentication (MFA), zero-trust network access (ZTNA), robust endpoint detection and response (EDR) solutions, and continuous cybersecurity training for employees. The human element remains the weakest link, so fostering a security-aware culture is paramount. Adapting to the new remote work paradigm requires a proactive and adaptive cybersecurity strategy to protect sensitive information and maintain business continuity.",
        date: "2024-05-12",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&h=600&fit=crop",
        tags: ["Cybersecurity", "Remote Work", "Privacy", "Security"],
        author: "Emily Davis",
        comments: []
    }
];

// DOM Elements
const header = document.getElementById('header');
const navMenu = document.getElementById('navMenu');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const searchInput = document.getElementById('searchInput');
const blogGrid = document.getElementById('blogGrid');
const scrollTop = document.getElementById('scrollTop');
const loading = document.getElementById('loading');
const notificationContainer = document.getElementById('notification-container');

// Modal Elements
const postModalOverlay = document.getElementById('postModalOverlay');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalPostDetails = document.getElementById('modalPostDetails');


// --- Core Blog Functionality ---

/**
 * Initializes the blog by showing a loading animation, then hiding it and rendering posts.
 */
function initBlog() {
    showLoading();
    setTimeout(() => {
        hideLoading();
        renderBlogPosts(blogPosts);
    }, 1500); // Simulate network delay for loading
}

/**
 * Shows the loading animation and hides the blog grid.
 */
function showLoading() {
    loading.style.display = 'flex'; // Use flex to center spinner
    blogGrid.style.display = 'none'; // Hide blog grid while loading
}

/**
 * Hides the loading animation and shows the blog grid.
 */
function hideLoading() {
    loading.style.display = 'none';
    blogGrid.style.display = 'grid'; // Show blog grid after loading
}

/**
 * Renders blog posts to the blog grid.
 * @param {Array<Object>} posts - An array of blog post objects to render.
 */
function renderBlogPosts(posts) {
    blogGrid.innerHTML = ''; // Clear existing posts
    if (posts.length === 0) {
        blogGrid.innerHTML = '<p class="no-results">No blog posts found matching your search.</p>';
        return;
    }
    posts.forEach((post, index) => {
        const postElement = createBlogCard(post);
        // Stagger animation for each card for a nicer effect
        postElement.style.animationDelay = `${index * 0.1}s`;
        blogGrid.appendChild(postElement);
    });
}

/**
 * Creates an HTML article element for a single blog post.
 * @param {Object} post - The blog post object.
 * @returns {HTMLElement} The created article element.
 */
function createBlogCard(post) {
    const card = document.createElement('article');
    card.className = 'blog-card';
    card.setAttribute('id', `post-${post.id}`); // Add ID for direct linking/sharing
    card.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="blog-image">
        <div class="blog-content">
            <div class="blog-date">
                <i class="fas fa-calendar-alt"></i>
                ${formatDate(post.date)}
            </div>
            <h2 class="blog-title">${post.title}</h2>
            <p class="blog-excerpt">${post.excerpt}</p>
            <div class="blog-tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <a href="#" class="read-more" onclick="openPost(${post.id}); event.preventDefault();">
                Read More <i class="fas fa-arrow-right"></i>
            </a>
            <div class="social-share">
                <a href="#" class="social-btn facebook" onclick="sharePost('facebook', ${post.id}); event.preventDefault();">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-btn twitter" onclick="sharePost('twitter', ${post.id}); event.preventDefault();">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-btn linkedin" onclick="sharePost('linkedin', ${post.id}); event.preventDefault();">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="social-btn whatsapp" onclick="sharePost('whatsapp', ${post.id}); event.preventDefault();">
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
            <div class="comments-section">
                <div class="comments-header">
                    <h3><i class="fas fa-comments"></i> Comments (${post.comments.length})</h3>
                </div>
                <form class="comment-form" onsubmit="addComment(event, ${post.id})">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Your Name" required id="name-${post.id}">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" rows="3" placeholder="Write your comment..." required id="comment-${post.id}"></textarea>
                    </div>
                    <button type="submit" class="btn-primary">
                        <i class="fas fa-paper-plane"></i>
                        Post Comment
                    </button>
                </form>
                <div class="comments-list" id="comments-${post.id}">
                    ${renderComments(post.comments)}
                </div>
            </div>
        </div>
    `;
    return card;
}


// --- Interactive Features ---

/**
 * Renders the comments for a given blog post.
 * @param {Array<Object>} comments - An array of comment objects.
 * @returns {string} HTML string representing the comments.
 */
function renderComments(comments) {
    if (comments.length === 0) {
        return '<p class="no-comments">No comments yet. Be the first to comment!</p>';
    }
    return comments.map(comment => `
        <div class="comment">
            <div class="comment-author">
                <i class="fas fa-user-circle"></i>
                ${comment.name}
                <span class="comment-date">${formatDate(comment.date)}</span>
            </div>
            <div class="comment-text">${comment.text}</div>
        </div>
    `).join('');
}

/**
 * Handles the submission of a new comment.
 * @param {Event} event - The form submission event.
 * @param {number} postId - The ID of the post to which the comment is being added.
 */
function addComment(event, postId) {
    event.preventDefault(); // Prevent default form submission
    const nameInput = document.getElementById(`name-${postId}`);
    const commentInput = document.getElementById(`comment-${postId}`);
    const commentsContainer = document.getElementById(`comments-${postId}`);

    const newComment = {
        name: nameInput.value.trim(),
        text: commentInput.value.trim(),
        date: new Date().toISOString()
    };

    if (newComment.name === '' || newComment.text === '') {
        showNotification('Please fill in both name and comment fields.', 'error');
        return;
    }

    // Find the post and add comment
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
        post.comments.push(newComment);
        // Update comments display
        commentsContainer.innerHTML = renderComments(post.comments);

        // Update comments count
        const commentsHeader = commentsContainer.parentElement.querySelector('.comments-header h3');
        commentsHeader.innerHTML = `<i class="fas fa-comments"></i> Comments (${post.comments.length})`;

        // Clear form
        nameInput.value = '';
        commentInput.value = '';

        // Show success message
        showNotification('Comment added successfully!');
    } else {
        showNotification('Error: Post not found.', 'error');
    }
}

/**
 * Formats a date string into a more readable format.
 * @param {string} dateString - The date string to format (e.g., "2024-05-20").
 * @returns {string} The formatted date string (e.g., "May 20, 2024").
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

/**
 * Opens a full blog post in a modal overlay.
 * @param {number} postId - The ID of the post to open.
 */
function openPost(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (post) {
        modalPostDetails.innerHTML = `
            <img src="${post.image}" alt="${post.title}" class="modal-post-image">
            <h1 class="modal-post-title">${post.title}</h1>
            <div class="modal-post-meta">
                <span><i class="fas fa-calendar-alt"></i> ${formatDate(post.date)}</span>
                <span><i class="fas fa-user"></i> By ${post.author}</span>
            </div>
            <div class="modal-post-content">
                ${post.content}
            </div>
            <div class="modal-post-tags">
                ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        `;
        postModalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling the background
    } else {
        showNotification('Post not found!', 'error');
    }
}

/**
 * Closes the full post modal overlay.
 */
function closePostModal() {
    postModalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Event listener for closing the modal
closeModalBtn.addEventListener('click', closePostModal);

// Close modal if clicking outside the content (on the overlay itself)
postModalOverlay.addEventListener('click', (event) => {
    if (event.target === postModalOverlay) {
        closePostModal();
    }
});


/**
 * Shares a blog post to various social media platforms.
 * @param {string} platform - The social media platform ('facebook', 'twitter', 'linkedin', 'whatsapp').
 * @param {number} postId - The ID of the post to share.
 */
function sharePost(platform, postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) {
        console.error('Post not found for sharing.');
        return;
    }

    const currentUrl = window.location.href.split('#')[0]; // Get base URL without hash
    // Create a deep link to the post section on the current page for sharing
    const postShareUrl = encodeURIComponent(`${currentUrl}#post-${postId}`);
    const postTitle = encodeURIComponent(post.title);
    const postExcerpt = encodeURIComponent(post.excerpt); // Used for LinkedIn summary

    let urlToOpen = '';

    switch (platform) {
        case 'facebook':
            urlToOpen = `https://www.facebook.com/sharer/sharer.php?u=${postShareUrl}`;
            break;
        case 'twitter':
            urlToOpen = `https://twitter.com/intent/tweet?url=${postShareUrl}&text=${postTitle}&hashtags=${post.tags.join(',')}`;
            break;
        case 'linkedin':
            urlToOpen = `https://www.linkedin.com/shareArticle?mini=true&url=${postShareUrl}&title=${postTitle}&summary=${postExcerpt}&source=${encodeURIComponent('TechVibe')}`;
            break;
        case 'whatsapp':
            urlToOpen = `https://api.whatsapp.com/send?text=${postTitle}%0A${postShareUrl}`; // %0A for newline
            break;
        default:
            console.warn('Unknown sharing platform:', platform);
            return;
    }

    if (urlToOpen) {
        window.open(urlToOpen, '_blank', 'width=600,height=400');
    }
}

/**
 * Toggles the visibility of the mobile navigation menu.
 */
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
    mobileMenuBtn.querySelector('i').classList.toggle('fa-times'); // Change icon to 'X'
});

// Close mobile menu when a nav link is clicked (for smooth scrolling)
navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        // Smooth scroll to section
        const targetId = link.getAttribute('href').substring(1); // Remove '#'
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            event.preventDefault(); // Prevent default jump
            const headerOffset = header.offsetHeight; // Get header height
            const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset - 20; // Add some extra padding

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        // Close mobile menu
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        }
    });
});


/**
 * Adds a 'scrolled' class to the header when the user scrolls down,
 * and removes it when scrolled back to the top.
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) { // Adjust threshold as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/**
 * Controls the visibility of the scroll-to-top button and
 * implements smooth scrolling when clicked.
 */
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) { // Show button after scrolling 400px
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to the top
    });
});

/**
 * Implements search functionality for blog posts with debouncing.
 */
let searchTimeout;
searchInput.addEventListener('keyup', (event) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredPosts = blogPosts.filter(post =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.content.toLowerCase().includes(searchTerm) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            post.author.toLowerCase().includes(searchTerm)
        );
        renderBlogPosts(filteredPosts);
    }, 300); // Debounce search to prevent too many re-renders
});


// --- Notification System ---

/**
 * Displays a temporary notification message to the user.
 * @param {string} message - The message to display.
 * @param {string} type - The type of notification ('success' or 'error'). Defaults to 'success'.
 */
function showNotification(message, type = 'success') {
    // Create notification container if it doesn't exist
    if (!notificationContainer) {
        console.error('Notification container not found!');
        return;
    }

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    notificationContainer.appendChild(notification);

    // Show the notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10); // Small delay to allow CSS transition to work

    // Hide and remove the notification after a delay
    setTimeout(() => {
        notification.classList.remove('show');
        notification.addEventListener('transitionend', () => {
            notification.remove();
        }, { once: true }); // Remove listener after it fires once
    }, 3000); // Hide after 3 seconds
}


// --- Initial Setup Call ---

// Call initBlog when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initBlog);