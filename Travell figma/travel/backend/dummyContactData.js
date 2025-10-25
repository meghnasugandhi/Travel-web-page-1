/**
 * Dummy data for Contact Form submissions.
 * This file can be used for testing backend logic,
 * setting up mock databases, or demonstrating retrieval functionality.
 */

const dummyContactData = [
    {
        id: "c-001",
        name: "Jane Doe",
        email: "jane.doe@testmail.com",
        phone: "+1-555-123-4567",
        message: "I am interested in the premium package tours you offer. Can someone call me back to discuss customization options?",
        dateSubmitted: "2024-05-15T10:30:00Z"
    },
    {
        id: "c-002",
        name: "John Smith",
        email: "john.smith@fakedomain.net",
        phone: "+44-207-946-0645",
        message: "Your website looks great! I noticed a small bug on the booking page when selecting dates on a mobile device. Just wanted to let you know.",
        dateSubmitted: "2024-05-14T14:45:00Z"
    },
    {
        id: "c-003",
        name: "Alice Johnson",
        email: "alice.j@corpmail.org",
        phone: "+61-2-9018-0200",
        message: "We are planning a corporate retreat for 50 people in December. Please send a prospectus outlining multi-day adventure tours near Sydney.",
        dateSubmitted: "2024-05-13T09:00:00Z"
    },
];

module.exports = dummyContactData;
