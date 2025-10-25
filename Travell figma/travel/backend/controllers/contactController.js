/**
 * Contact Form Controller
 * Handles the logic for receiving and processing contact form submissions.
 */

// Helper function to simulate asynchronous tasks (like sending an email or saving to DB)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * @desc Submit a contact form request
 * @route POST /api/contact
 * @access Public
 */
const submitContactForm = async (req, res) => {
    // 1. Extract data from the request body
    const { name, phone, email, message } = req.body;

    // 2. Basic validation
    if (!name || !phone || !email || !message) {
        // 400 Bad Request
        return res.status(400).json({ 
            success: false, 
            message: 'Please ensure all required fields (Name, Phone, Email, Message) are filled out.' 
        });
    }

    // 3. Email validation (simple check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        // 400 Bad Request
        return res.status(400).json({ 
            success: false, 
            message: 'Please enter a valid email address.' 
        });
    }

    // --- 4. Processing Logic (Simulated) ---
    try {
        
        // In a production application, you would replace the console.log with:
        // 1. Email sending logic (e.g., Nodemailer, SendGrid)
        // 2. Database storage (e.g., to save the inquiry in Firestore/MongoDB)
        
        console.log(`\n--- New Contact Form Submission ---`);
        console.log(`From: ${name} (${email})`);
        console.log(`Phone: ${phone}`);
        console.log(`Message: "${message.substring(0, 50)}..."`);
        console.log(`Status: Successfully processed. (Simulated)`);
        
        // Simulate network/processing delay
        await delay(500); 

        // 5. Send a success response back to the client
        return res.status(200).json({
            success: true,
            message: 'Thank you for your message! We will get back to you shortly.'
        });

    } catch (error) {
        console.error('Error processing contact form:', error);
        // 500 Internal Server Error
        return res.status(500).json({
            success: false,
            message: 'A server error occurred while submitting the form. Please try again later.'
        });
    }
};

module.exports = {
    submitContactForm,
};
