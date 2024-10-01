import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';

const hairstyles = [
  require('../images/img1.png'),
  require('../images/img2.png'),
  require('../images/img3.png'),
  '/images/img2.png',
  '/images/img3.png',
  // Add more hairstyle image URLs as needed
];

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [currentHairstyleIndex, setCurrentHairstyleIndex] = useState(0);
  const [capturedImage, setCapturedImage] = useState(null);
  const [overlayPosition, setOverlayPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [overlaySize, setOverlaySize] = useState({ width: 200, height: 200 });

  const selectHairstyle = (index) => {
    setCurrentHairstyleIndex(index);
  };

  const increaseSize = () => {
    setOverlaySize((prevSize) => ({
      width: prevSize.width + 10,
      height: prevSize.height + 10,
    }));
  };

  const decreaseSize = () => {
    setOverlaySize((prevSize) => ({
      width: Math.max(50, prevSize.width - 10),
      height: Math.max(50, prevSize.height - 10),
    }));
  };

  const captureImage = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const hairstyleImg = new Image();
      hairstyleImg.onload = () => {
        ctx.drawImage(
          hairstyleImg,
          overlayPosition.x,
          overlayPosition.y,
          overlaySize.width,
          overlaySize.height
        );
        setCapturedImage(canvas.toDataURL('image/png'));
      };
      hairstyleImg.src = hairstyles[currentHairstyleIndex];
    };
    img.src = imageSrc;
  }, [currentHairstyleIndex, overlayPosition, overlaySize]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const rect = e.target.getBoundingClientRect();
      setOverlayPosition({
        x: e.clientX - rect.left - overlaySize.width / 2,
        y: e.clientY - rect.top - overlaySize.height / 2,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const scaleChange = e.deltaY * -0.01;
    setOverlaySize((prevSize) => ({
      width: Math.max(50, prevSize.width + scaleChange * 10),
      height: Math.max(50, prevSize.height + scaleChange * 10),
    }));
  };

  return (
    <div>
      <div 
        style={{ position: 'relative', width: '640px', height: '480px', margin: 'auto' }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onWheel={handleWheel}
      >
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/png"
          videoConstraints={{ width: 640, height: 480 }}
          style={{ width: '100%', height: '100%' }}
        />
        <img
          src={hairstyles[currentHairstyleIndex]}
          alt="Hairstyle overlay"
          style={{
            position: 'absolute',
            left: `${overlayPosition.x}px`,
            top: `${overlayPosition.y}px`,
            width: `${overlaySize.width}px`,
            height: `${overlaySize.height}px`,
            cursor: 'move',
            userSelect: 'none',
          }}
          onMouseDown={handleMouseDown}
          draggable="false"
        />
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <button onClick={decreaseSize}>Decrease Size</button>
        <button onClick={increaseSize}>Increase Size</button>
        <button onClick={captureImage}>Capture Image</button>
      </div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {hairstyles.map((hairstyle, index) => (
          <img
            key={index}
            src={hairstyle}
            alt={`Hairstyle ${index + 1}`}
            style={{
              width: '60px',
              height: '60px',
              cursor: 'pointer',
              border: index === currentHairstyleIndex ? '2px solid blue' : 'none',
            }}
            onClick={() => selectHairstyle(index)}
          />
        ))}
      </div>
      {capturedImage && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h3>Captured Image:</h3>
          <img src={capturedImage} alt="Captured" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;