import React, { useRef, useCallback, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import { IMAGES } from '../images/images';

const hairstyles = [
  '/images/image11.jpg',
  '/images/image12.jpg',
  '/images/image13.jpg',
  // ... more hairstyles
];

const WebcamCapture = () => {

  const picture = useRef()
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });
  const [localCoords, setLocalCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = event => {

    picture.current.style.left = `${event.clientX - 800}px`     // 👇️ Get the mouse position relative to the element
    picture.current.style.top = `${event.clientY -200}px`     // 👇️ Get the mouse position relative to the element
    setLocalCoords({
      x: event.clientX - event.target.offsetLeft - 500,
      y: event.clientY - event.target.offsetTop -500,
    });

    console.log(localCoords);

  };

  useEffect(() => {
    const handleGlobalMouseMove = event => {
      setGlobalCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleGlobalMouseMove,
      );
    };
  }, []);





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

  const handleVideoOnPlay = useCallback(async () => {
    if (!isModelLoaded || hairstyleImages.length === 0) {
      console.log('Models or hairstyles not loaded yet');
      return;
    }

    const video = webcamRef.current.video;
    const canvas = canvasRef.current;

    const detectFaces = async () => {
      if (video.readyState === 4) {
        const displaySize = { width: video.videoWidth, height: video.videoHeight };
        faceapi.matchDimensions(canvas, displaySize);

        const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
        console.log('Face detections:', detections);

        if (detections.length === 0) {
          console.log('No faces detected');
          requestAnimationFrame(detectFaces);
          return;
        }

        const resizedDetections = faceapi.resizeResults(detections, displaySize);

        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

        resizedDetections.forEach(detection => {
          const landmarks = detection.landmarks;
          const jawOutline = landmarks.getJawOutline();
          const topOfHead = jawOutline[0];
          const leftSideOfFace = jawOutline[1];
          const rightSideOfFace = jawOutline[jawOutline.length - 2];

          const faceWidth = rightSideOfFace.x - leftSideOfFace.x;
          const faceHeight = landmarks.positions[8].y - topOfHead.y;

          const hairstyleWidth = faceWidth * 1.8;  // Increased width
          const hairstyleHeight = faceHeight * 1.5;  // Increased height
          const hairstyleX = topOfHead.x - (hairstyleWidth - faceWidth) / 2;
          const hairstyleY = topOfHead.y - hairstyleHeight / 2;  // Moved up

          console.log('Drawing hairstyle:', {
            imageIndex: currentHairstyleIndex,
            x: hairstyleX,
            y: hairstyleY,
            width: hairstyleWidth,
            height: hairstyleHeight
          });

          canvas.getContext('2d').drawImage(
            hairstyleImages[currentHairstyleIndex],
            hairstyleX,
            hairstyleY,
            hairstyleWidth,
            hairstyleHeight
          );

          // Draw a red rectangle to visualize hairstyle position
          canvas.getContext('2d').strokeStyle = 'red';
          canvas.getContext('2d').lineWidth = 2;
          canvas.getContext('2d').strokeRect(hairstyleX, hairstyleY, hairstyleWidth, hairstyleHeight);

          faceapi.draw.drawDetections(canvas, resizedDetections);
          faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        });
      }
      requestAnimationFrame(detectFaces);
    };

    detectFaces();
  }, [isModelLoaded, hairstyleImages, currentHairstyleIndex]);

  useEffect(() => {
    loadModels();
    loadHairstyleImages();
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
      <div   style={{ position: 'relative', width: '500px', height: '500px', margin: 'auto' }}>
        <div
          ref={picture}
         
          className="" 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onMouseMove={handleMouseMove}
          >
          <img ref={picture} src={IMAGES.lorem} className='ty-5' alt="" width={200} style={{
            // transform:[]
            zIndex: 1000
          }} />
        </div>
        <Webcam
          mirrored
          type=''
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          onPlay={handleVideoOnPlay}
        
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button onClick={prevHairstyle}>Previous Hairstyle</button>
        <button onClick={nextHairstyle}>Next Hairstyle</button>
      </div>
    </div>
  );
};

export default WebcamCapture;