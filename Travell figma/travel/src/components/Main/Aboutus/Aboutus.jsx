import React from "react";
import ab1 from'../../../assets/images/ab1.png'
import ab2 from'../../../assets/images/ab2.png'
import ab3 from'../../../assets/images/ab3.png'
import ab4 from'../../../assets/images/ab4.png'

const Aboutus = () => {
    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <h1 style={styles.mainTitle}>Let's Know About Our Journey For TripRex</h1>
                
                <div style={styles.content}>
                    <div style={styles.textContent}>
                        <h2 style={styles.subtitle}>Mission & Vision</h2>
                        <h3 style={styles.focusTitle}>Focus On Customer</h3>
                        <p style={styles.description}>
                            Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor erat felis and sed vehicula tortor malesuada gravida. 
                            Mauris volutpat enim quis pulv gont congue. Suspendisse ullamcorper, enim vitae tristique blandit, eratot augue torel 
                            tempo libero, non porta lectus tortor et elit. Quisque finibusot enim et eratourgt gravida, eu elementum turpis lacinia. 
                            Integer female go tellus ligula, atiendora and condimentum.
                        </p>
                        
                        {/* Small button in the corner below the text */}
                        <div style={styles.buttonContainer}>
                            <button style={styles.cornerButton}>
                                <span style={styles.buttonText}>More About</span>
                                <span style={styles.customerCount}>0+ Customer</span>
                            </button>
                        </div>
                    </div>
                    
                    <div style={styles.sideImages}>
                        <div style={styles.imageGrid}>
                            <div style={styles.imageRow}>
                                <div style={styles.imageContainer}>
                                    <img src={ab1} alt="TripRex" style={styles.gridImage} />
                                </div>
                                <div style={styles.imageContainer}>
                                    <img src={ab2} alt="TripRex" style={styles.gridImage} />
                                </div>
                            </div>
                            <div style={styles.imageRow}>
                                <div style={styles.imageContainer}>
                                    <img src={ab3} alt="TripRex" style={styles.gridImage} />
                                </div>
                                <div style={styles.imageContainer}>
                                    <img src={ab4} alt="TripRex" style={styles.gridImage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style={styles.divider}></div>
            </div>
        </section>
    );
}

const styles = {
    section: {
        padding: "60px 20px",
        backgroundColor: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        lineHeight: 1.6,
    },
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
    },
    mainTitle: {
        fontSize: "2.5rem",
        fontWeight: "700",
        color: "#2c3e50",
        marginBottom: "50px",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "1px",
    },
    content: {
        display: "flex",
        gap: "40px",
        marginBottom: "40px",
        alignItems: "flex-start",
    },
    textContent: {
        flex: "1",
        marginBottom: "30px",
        position: "relative",
    },
    buttonContainer: {
        position: "absolute",
        bottom: "0",
        right: "0",
        marginTop: "30px",
    },
    cornerButton: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "12px 20px",
        backgroundColor: "#3498db",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        minWidth: "120px",
    },
    buttonText: {
        fontSize: "14px",
        fontWeight: "600",
        marginBottom: "4px",
    },
    customerCount: {
        fontSize: "12px",
        opacity: "0.9",
    },
    sideImages: {
        flex: "0 0 45%",
    },
    imageGrid: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    imageRow: {
        display: "flex",
        gap: "15px",
    },
    imageContainer: {
        flex: "1",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    gridImage: {
        width: "100%",
        height: "180px",
        objectFit: "cover",
        display: "block",
    },
    subtitle: {
        fontSize: "1.8rem",
        fontWeight: "600",
        color: "#2c3e50",
        marginBottom: "10px",
    },
    focusTitle: {
        fontSize: "1.4rem",
        fontWeight: "500",
        color: "#3498db",
        marginBottom: "20px",
        fontStyle: "italic",
    },
    description: {
        fontSize: "1.1rem",
        color: "#34495e",
        lineHeight: "1.7",
        marginBottom: "60px", // Added space for the button
    },
    divider: {
        height: "2px",
        backgroundColor: "#ddd",
        margin: "40px 0",
        position: "relative",
    },
};

// Add hover effects
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        // Image hover effects
        const imageContainers = document.querySelectorAll('[style*="box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)"]');
        imageContainers.forEach(container => {
            container.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
            });
            container.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            });
        });
        
        // Button hover effect
        const button = document.querySelector('[style*="background-color: #3498db"]');
        if (button) {
            button.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#2980b9';
                this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
                this.style.transform = 'translateY(-2px)';
            });
            button.addEventListener('mouseleave', function() {
                this.style.backgroundColor = '#3498db';
                this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                this.style.transform = 'translateY(0)';
            });
        }
    });
}

export default Aboutus;