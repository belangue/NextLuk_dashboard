import React, { useRef, useCallback, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';

const hairstyles = [
    '/images/img6.png',
    // '/images/img2.png',
    // '/images/img3.png',
    // Add more hairstyles as needed
];

const WebcamCapture = () => {
    const webcamRef = useRef(null);
    const canvasRef = useRef(null);
    const [isModelLoaded, setIsModelLoaded] = useState(false);
    const [hairstyleImages, setHairstyleImages] = useState([]);
    const [currentHairstyleIndex, setCurrentHairstyleIndex] = useState(0);

    const loadModels = async () => {
        try {
            await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
            await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
            console.log('Face detection models loaded successfully');
            setIsModelLoaded(true);
        } catch (error) {
            console.error('Error loading face detection models:', error);
        }
    };

    const loadHairstyleImages = async () => {
        try {
            const loadedImages = await Promise.all(
                hairstyles.map((src) => {
                    return new Promise((resolve, reject) => {
                        const img = new Image();
                        img.onload = () => {
                            console.log(`Loaded image: ${src}`);
                            resolve(img);
                        };
                        img.onerror = (e) => {
                            console.error(`Failed to load image: ${src}`, e);
                            reject(e);
                        };
                        img.src = src;
                    });
                })
            );
            console.log('All images loaded:', loadedImages);
            setHairstyleImages(loadedImages);
        } catch (error) {
            console.error('Error loading hairstyle images:', error);
        }
    };

    const detectFaces = useCallback(async () => {
        const video = webcamRef.current.video;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            console.error('Failed to get canvas context');
            return;
        }

        if (video && canvas && video.readyState === 4 && isModelLoaded && hairstyleImages.length > 0) {
            const displaySize = { width: video.videoWidth, height: video.videoHeight };
            faceapi.matchDimensions(canvas, displaySize);

            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
            console.log('Face detections:', detections);

            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw a basic rectangle to check canvas visibility
            ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // Semi-transparent red
            ctx.fillRect(10, 10, 100, 100);

            resizedDetections.forEach((detection) => {
                const landmarks = detection.landmarks;
                const jawOutline = landmarks.getJawOutline();
                const topOfHead = jawOutline[0];
                const leftSideOfFace = jawOutline[1];
                const rightSideOfFace = jawOutline[jawOutline.length - 2];

                const faceWidth = rightSideOfFace.x - leftSideOfFace.x;
                const faceHeight = landmarks.positions[8].y - topOfHead.y;

                const hairstyleWidth = faceWidth * 1.5;
                const hairstyleHeight = faceHeight * 1.5;
                const hairstyleX = leftSideOfFace.x - (hairstyleWidth - faceWidth) / 2;
                const hairstyleY = topOfHead.y - hairstyleHeight / 3;

                console.log('Drawing hairstyle:', {
                    imageIndex: currentHairstyleIndex,
                    x: hairstyleX,
                    y: hairstyleY,
                    width: hairstyleWidth,
                    height: hairstyleHeight,
                });

                // Draw a background color to verify the area where the hairstyle should be drawn
                ctx.fillStyle = 'rgba(0, 255, 0, 0.5)'; // Semi-transparent green
                ctx.fillRect(hairstyleX, hairstyleY, hairstyleWidth, hairstyleHeight);

                if (hairstyleImages[currentHairstyleIndex]) {
                    ctx.drawImage(
                        hairstyleImages[currentHairstyleIndex],
                        hairstyleX,
                        hairstyleY,
                        hairstyleWidth,
                        hairstyleHeight
                    );
                    console.log('Draw image with index:', currentHairstyleIndex);
                } else {
                    console.error('Hairstyle image not found for index:', currentHairstyleIndex);
                }

                // Draw face landmarks and detections
                faceapi.draw.drawDetections(canvas, resizedDetections);
                faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
            });
        }
        requestAnimationFrame(detectFaces);
    }, [isModelLoaded, hairstyleImages, currentHairstyleIndex]);

    useEffect(() => {
        loadModels();
        loadHairstyleImages();
    }, []);

    useEffect(() => {
        detectFaces();
        return () => {
            cancelAnimationFrame(detectFaces);
        };
    }, [detectFaces]);

    useEffect(() => {
        const handleResize = () => {
            const video = webcamRef.current.video;
            const canvas = canvasRef.current;
            if (video && canvas) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nextHairstyle = () => {
        setCurrentHairstyleIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % hairstyleImages.length;
            console.log('Next hairstyle index:', newIndex);
            return newIndex;
        });
    };

    const prevHairstyle = () => {
        setCurrentHairstyleIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + hairstyleImages.length) % hairstyleImages.length;
            console.log('Previous hairstyle index:', newIndex);
            return newIndex;
        });
    };

    return (
        <div>
            <div style={{ position: 'relative', width: '80%', height: '70%', margin: 'auto' }}>
                <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <canvas
                    ref={canvasRef}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 100000, // Ensure canvas is above video
                        backgroundColor: 'transparent', // Ensure no background color issues
                    }}
                />
            </div>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <button onClick={prevHairstyle}>Previous Hairstyle</button>
                <button onClick={nextHairstyle}>Next Hairstyle</button>
            </div>
        </div>
    );
};

export default WebcamCapture;
