import React, { useState, useRef, useEffect } from 'react';
import P5SketchWrapper from './P5SketchWrapper'; // Updated import name
import { mintArt } from '../api';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ArtGenerator = () => {
    const [p5Params, setP5Params] = useState({
        lineCount: 10,
        lineLength: 50,
        strokeWeight: 1,
        colorHue: 0,
        colorSaturation: 80,
        colorBrightness: 90,
        backgroundHue: 0,
        backgroundSaturation: 10,
        backgroundBrightness: 95,
        complexity: 0.5,
        randomSeed: 0,
        shapeType: 'line' // 'line', 'circle', 'square'
    });
    const [artDataUrl, setArtDataUrl] = useState(null);
    const sketchRef = useRef();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

    // Function to generate a new random seed
    const generateNewSeed = () => {
        setP5Params(prev => ({
            ...prev,
            randomSeed: Math.floor(Math.random() * 1000000)
        }));
    };

    // Callback from P5SketchWrapper when sketch is initialized or redrawn
    const onSketchReady = (p5Instance) => {
        sketchRef.current = p5Instance;
        // console.log("p5 instance ready:", p5Instance);
    };

    const handleGenerateArt = () => {
        if (sketchRef.current && sketchRef.current.redrawSketch) {
            sketchRef.current.redrawSketch(); // Trigger redraw
            // Give p5.js a moment to render before capturing
            setTimeout(() => {
                const canvas = sketchRef.current.canvas;
                if (canvas) {
                    setArtDataUrl(canvas.toDataURL('image/png'));
                }
            }, 50); // Small delay
        }
    };

    const handleMintArt = async () => {
        if (!isLoggedIn) {
            alert('You must be logged in to mint art!');
            navigate('/login');
            return;
        }

        if (!artDataUrl) {
            alert('Please generate art first!');
            return;
        }

        // Convert data URL to Blob
        const blob = await (await fetch(artDataUrl)).blob();
        const file = new File([blob], `abstract_art_${Date.now()}.png`, { type: 'image/png' });

        const formData = new FormData();
        formData.append('image', file);
        formData.append('p5_params', JSON.stringify(p5Params)); // Stringify JSON
        formData.append('is_public', true); // Or add a checkbox for public/private

        try {
            await mintArt(formData);
            alert('Art successfully minted!');
            setArtDataUrl(null); // Clear preview
            // Optionally, navigate to my art page or gallery
            navigate('/my-art');
        } catch (error) {
            console.error('Error minting art:', error);
            alert('Failed to mint art. Please try again. ' + (error.response?.data?.message || error.message));
        }
    };

    // Initialize with a random seed on component mount
    useEffect(() => {
        generateNewSeed();
    }, []);

    return (
        <div className="art-generator-container">
            <div className="controls-panel">
                <h2>Art Controls</h2>
                <div className="control-group">
                    <label>Lines/Shapes Count: {p5Params.lineCount}</label>
                    <input
                        type="range"
                        min="5"
                        max="200"
                        value={p5Params.lineCount}
                        onChange={(e) => setP5Params({ ...p5Params, lineCount: Number(e.target.value) })}
                    />
                </div>
                <div className="control-group">
                    <label>Element Size: {p5Params.lineLength}</label>
                    <input
                        type="range"
                        min="10"
                        max="200"
                        value={p5Params.lineLength}
                        onChange={(e) => setP5Params({ ...p5Params, lineLength: Number(e.target.value) })}
                    />
                </div>
                <div className="control-group">
                    <label>Stroke Weight: {p5Params.strokeWeight}</label>
                    <input
                        type="range"
                        min="0.5"
                        max="10"
                        step="0.1"
                        value={p5Params.strokeWeight}
                        onChange={(e) => setP5Params({ ...p5Params, strokeWeight: Number(e.target.value) })}
                    />
                </div>
                <div className="control-group">
                    <label>Color Hue: {p5Params.colorHue}</label>
                    <input
                        type="range"
                        min="0"
                        max="360"
                        value={p5Params.colorHue}
                        onChange={(e) => setP5Params({ ...p5Params, colorHue: Number(e.target.value) })}
                    />
                </div>
                <div className="control-group">
                    <label>Color Saturation: {p5Params.colorSaturation}</label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={p5Params.colorSaturation}
                        onChange={(e) => setP5Params({ ...p5Params, colorSaturation: Number(e.target.value) })}
                    />
                </div>
                <div className="control-group">
                    <label>Color Brightness: {p5Params.colorBrightness}</label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={p5Params.colorBrightness}
                        onChange={(e) => setP5Params({ ...p5Params, colorBrightness: Number(e.target.value) })}
                    />
                </div>
                <div className="control-group">
                    <label>Background Hue: {p5Params.backgroundHue}</label>
                    <input
                        type="range"
                        min="0"
                        max="360"
                        value={p5Params.backgroundHue}
                        onChange={(e) => setP5Params({ ...p5Params, backgroundHue: Number(e.target.value) })}
                    />
                </div>
                <div className="control-group">
                    <label>Background Saturation: {p5Params.backgroundSaturation}</label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={p5Params.backgroundSaturation}
                        onChange={(e) => setP5Params({ ...p5Params, backgroundSaturation: Number(e.target.value) })}
                    />
                </div>
                <div className="control-group">
                    <label>Background Brightness: {p5Params.backgroundBrightness}</label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={p5Params.backgroundBrightness}
                        onChange={(e) => setP5Params({ ...p5Params, backgroundBrightness: Number(e.target.value) })}
                    />
                </div>
                <div className="control-group">
                    <label>Complexity/Turbulence: {p5Params.complexity}</label>
                    <input
                        type="range"
                        min="0.1"
                        max="2"
                        step="0.05"
                        value={p5Params.complexity}
                        onChange={(e) => setP5Params({ ...p5Params, complexity: Number(e.target.value) })}
                    />
                </div>
                <div className="control-group">
                    <label>Shape Type:</label>
                    <select
                        value={p5Params.shapeType}
                        onChange={(e) => setP5Params({ ...p5Params, shapeType: e.target.value })}
                    >
                        <option value="line">Line</option>
                        <option value="circle">Circle</option>
                        <option value="square">Square</option>
                    </select>
                </div>
                <div className="control-group">
                    <label>Random Seed: {p5Params.randomSeed}</label>
                    <button onClick={generateNewSeed}>New Seed</button>
                </div>

                <div className="control-buttons">
                    <button className="generate-button" onClick={handleGenerateArt}>Generate Art</button>
                    {artDataUrl && (
                        <button className="mint-button" onClick={handleMintArt}>
                            {isLoggedIn ? 'Mint Art' : 'Login to Mint'}
                        </button>
                    )}
                </div>
            </div>

            <div className="canvas-container">
                <P5SketchWrapper sketchParams={p5Params} onSketchReady={onSketchReady} />
            </div>
        </div>
    );
};

export default ArtGenerator;