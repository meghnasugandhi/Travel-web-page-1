import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5SketchWrapper = ({ sketchParams, onSketchReady }) => {
    const sketchRef = useRef();
    const p5InstanceRef = useRef(null);

    useEffect(() => {
        // This function defines the p5.js sketch
        const sketch = (p) => {
            let img; // To hold the captured image

            p.setup = () => {
                p.createCanvas(500, 500).parent(sketchRef.current);
                p.colorMode(p.HSB, 360, 100, 100, 1); // Set color mode to HSB
                p.noLoop(); // Only draw when explicitly told to
                p.redrawSketch(); // Initial draw
                if (onSketchReady) {
                    // Expose methods to parent component
                    onSketchReady({
                        redrawSketch: p.redrawSketch,
                        canvas: p.canvas // Expose the canvas element
                    });
                }
            };

            p.draw = () => {
                // Not used with noLoop(), drawing happens in redrawSketch
            };

            p.redrawSketch = () => {
                p.randomSeed(sketchParams.randomSeed); // Apply random seed
                p.noiseSeed(sketchParams.randomSeed); // Apply noise seed for consistent patterns

                // Background
                p.background(sketchParams.backgroundHue, sketchParams.backgroundSaturation, sketchParams.backgroundBrightness);

                // Drawing parameters
                p.strokeWeight(sketchParams.strokeWeight);
                p.fill(sketchParams.colorHue, sketchParams.colorSaturation, sketchParams.colorBrightness, 0.7); // Semi-transparent fill

                for (let i = 0; i < sketchParams.lineCount; i++) {
                    let x1 = p.random(p.width);
                    let y1 = p.random(p.height);

                    // Use Perlin noise for organic movement/placement
                    let noiseX = p.noise(x1 * sketchParams.complexity * 0.01, y1 * sketchParams.complexity * 0.01);
                    let noiseY = p.noise(y1 * sketchParams.complexity * 0.01, x1 * sketchParams.complexity * 0.01);

                    let x2 = x1 + p.map(noiseX, 0, 1, -sketchParams.lineLength, sketchParams.lineLength);
                    let y2 = y1 + p.map(noiseY, 0, 1, -sketchParams.lineLength, sketchParams.lineLength);

                    // Randomize color slightly for variety
                    let currentHue = (sketchParams.colorHue + p.random(-20, 20) + 360) % 360;
                    let currentSaturation = p.constrain(sketchParams.colorSaturation + p.random(-10, 10), 0, 100);
                    let currentBrightness = p.constrain(sketchParams.colorBrightness + p.random(-10, 10), 0, 100);
                    p.stroke(currentHue, currentSaturation, currentBrightness);
                    p.fill(currentHue, currentSaturation, currentBrightness, 0.7);


                    switch (sketchParams.shapeType) {
                        case 'line':
                            p.line(x1, y1, x2, y2);
                            break;
                        case 'circle':
                            p.circle(x1, y1, sketchParams.lineLength * (p.random(0.5, 1.5)));
                            break;
                        case 'square':
                            p.rectMode(p.CENTER);
                            p.square(x1, y1, sketchParams.lineLength * (p.random(0.5, 1.5)));
                            break;
                        default:
                            p.line(x1, y1, x2, y2);
                    }

                    // Optional: add more complex patterns here based on noise
                    if (p.random() < sketchParams.complexity * 0.1) {
                        p.push();
                        p.translate(x1, y1);
                        p.rotate(p.map(p.noise(x1 * 0.005, y1 * 0.005), 0, 1, 0, p.TWO_PI));
                        p.line(0, 0, sketchParams.lineLength / 2, 0);
                        p.pop();
                    }
                }
            };
        };

        // Initialize p5.js sketch
        p5InstanceRef.current = new p5(sketch);

        // Cleanup function
        return () => {
            if (p5InstanceRef.current) {
                p5InstanceRef.current.remove();
            }
        };
    }, []); // Run only once on mount

    // Update sketch parameters when they change
    useEffect(() => {
        if (p5InstanceRef.current && p5InstanceRef.current.redrawSketch) {
            p5InstanceRef.current.redrawSketch();
        }
    }, [sketchParams]); // Redraw whenever sketchParams change

    return <div ref={sketchRef} className="p5-canvas-wrapper"></div>;
};

export default P5SketchWrapper;