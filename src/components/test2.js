import React, { useRef, useEffect, useState } from 'react';

// URL of OpenCV.js
const openCVJsUrl = 'https://docs.opencv.org/4.x/opencv.js';

const WebcamCapture = () => {
    const [isOpenCvReady, setIsOpenCvReady] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [hairstyleImage, setHairstyleImage] = useState(null);

    // Load OpenCV.js
    useEffect(() => {
        const loadOpenCv = () => {
            if (window.cv) {
                setIsOpenCvReady(true);
                return;
            }

            const script = document.createElement('script');
            script.src = openCVJsUrl;
            script.async = true;
            script.onload = () => {
                if (window.cv) {
                    setIsOpenCvReady(true);
                }
            };
            script.onerror = (error) => {
                console.error('Failed to load OpenCV.js:', error);
            };
            document.body.appendChild(script);
        };

        loadOpenCv();
    }, []);

    // Load hairstyle image
    useEffect(() => {
        if (isOpenCvReady) {
            const loadHairstyleImage = () => {
                const img = new Image();
                img.src = '/images/img1.png'; // Ensure this path is correct
                img.onload = () => {
                    if (window.cv) {
                        const canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext('2d', { willReadFrequently: true });
                        ctx.drawImage(img, 0, 0);
                        const imgData = ctx.getImageData(0, 0, img.width, img.height);
                        const mat = window.cv.matFromImageData(imgData);
                        setHairstyleImage(mat);
                    }
                };
                img.onerror = (err) => {
                    console.error('Error loading hairstyle image:', err);
                };
            };

            loadHairstyleImage();
        }
    }, [isOpenCvReady]);

    // Start video and processing
    useEffect(() => {
        if (videoRef.current && isOpenCvReady && hairstyleImage) {
            const video = videoRef.current;

            // Setup video stream
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    video.srcObject = stream;
                    video.play();
                })
                .catch((err) => {
                    console.error('Error accessing webcam:', err);
                });

            // Process video frames
            const processVideo = () => {
                if (video && video.readyState === video.HAVE_ENOUGH_DATA) {
                    const canvas = canvasRef.current;
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;

                    const ctx = canvas.getContext('2d', { willReadFrequently: true });
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const mat = window.cv.matFromImageData(imgData);

                    // Display hairstyle image (this is an example, adjust as needed)
                    if (hairstyleImage) {
                        const size = new window.cv.Size(canvas.width, canvas.height);
                        const resizedHairstyle = new window.cv.Mat();
                        window.cv.resize(hairstyleImage, resizedHairstyle, size);
                        window.cv.imshow(canvas, resizedHairstyle);
                        resizedHairstyle.delete();
                    }

                    mat.delete();
                }
                requestAnimationFrame(processVideo);
            };

            processVideo();

            // Cleanup on unmount
            return () => {
                if (video.srcObject) {
                    const tracks = video.srcObject.getTracks();
                    tracks.forEach(track => track.stop());
                }
            };
        }
    }, [isOpenCvReady, hairstyleImage]);

    return (
        <div>
            <div style={{ position: 'relative', width: '80%', height: '70%', margin: 'auto' }}>
                <video ref={videoRef} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000 }} />
            </div>
        </div>
    );
};

export default WebcamCapture;



import React, { useRef, useEffect, useState } from 'react';

// URL of OpenCV.js
const openCVJsUrl = 'https://docs.opencv.org/4.x/opencv.js';

// URL of Haar Cascade XML
const haarCascadeUrl = 'https://cdn.jsdelivr.net/npm/opencv-js@4.5.1/haarcascades/haarcascade_frontalface_default.xml';

const WebcamCapture = () => {
  const [isOpenCvReady, setIsOpenCvReady] = useState(false);
  const [faceCascade, setFaceCascade] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [hairstyleImage, setHairstyleImage] = useState(null);

  // Load OpenCV.js
  useEffect(() => {
    const loadOpenCv = () => {
      if (window.cv) {
        setIsOpenCvReady(true);
        return;
      }

      const script = document.createElement('script');
      script.src = openCVJsUrl;
      script.async = true;
      script.onload = () => {
        if (window.cv) {
          setIsOpenCvReady(true);
        }
      };
      script.onerror = (error) => {
        console.error('Failed to load OpenCV.js:', error);
      };
      document.body.appendChild(script);
    };

    loadOpenCv();
  }, []);

  // Load Haar Cascade XML
  useEffect(() => {
    const loadHaarCascade = async () => {
      try {
        const response = await fetch(haarCascadeUrl);
        const xmlData = await response.text();
        const blob = new Blob([xmlData], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);

        if (window.cv) {
          const faceCascade = new window.cv.CascadeClassifier();
          faceCascade.load(url);
          setFaceCascade(faceCascade);
        }
      } catch (error) {
        console.error('Failed to load Haar Cascade XML:', error);
      }
    };

    if (isOpenCvReady) {
      loadHaarCascade();
    }
  }, [isOpenCvReady]);

  // Load hairstyle image
  useEffect(() => {
    if (isOpenCvReady) {
      const loadHairstyleImage = () => {
        const img = new Image();
        img.src = '/images/img1.png'; // Ensure this path is correct
        img.onload = () => {
          if (window.cv) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const imgData = ctx.getImageData(0, 0, img.width, img.height);

            // Create OpenCV Mat from ImageData
            const mat = window.cv.matFromImageData(imgData);
            setHairstyleImage(mat);
          }
        };
        img.onerror = (err) => {
          console.error('Error loading hairstyle image:', err);
        };
      };

      loadHairstyleImage();
    }
  }, [isOpenCvReady]);

  // Start video and processing
  useEffect(() => {
    if (videoRef.current && isOpenCvReady && hairstyleImage && faceCascade) {
      const video = videoRef.current;

      // Setup video stream
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => {
          console.error('Error accessing webcam:', err);
        });

      // Process video frames
      const processVideo = () => {
        if (video && video.readyState === video.HAVE_ENOUGH_DATA) {
          try {
            const canvas = canvasRef.current;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const mat = window.cv.matFromImageData(imgData);

            // Detect faces
            const faces = new window.cv.RectVector();
            faceCascade.detectMultiScale(mat, faces);

            // Draw hairstyle on detected faces
            for (let i = 0; i < faces.size(); i++) {
              const face = faces.get(i);
              const faceRect = new window.cv.Rect(face.x, face.y, face.width, face.height);

              // Calculate the hairstyle size based on the face size
              const hairstyleWidth = faceRect.width * 1.5; // Adjust this multiplier as needed
              const hairstyleHeight = hairstyleWidth * (hairstyleImage.rows / hairstyleImage.cols);

              // Calculate the position to draw the hairstyle
              const x = faceRect.x - (hairstyleWidth - faceRect.width) / 2;
              const y = faceRect.y - hairstyleHeight / 2;

              // Resize hairstyle image to fit the detected face
              const size = new window.cv.Size(hairstyleWidth, hairstyleHeight);
              const resizedHairstyle = new window.cv.Mat();
              window.cv.resize(hairstyleImage, resizedHairstyle, size);

              // Convert the resized hairstyle to RGBA for canvas compatibility
              const rgbaMat = new window.cv.Mat();
              window.cv.cvtColor(resizedHairstyle, rgbaMat, window.cv.COLOR_BGR2RGBA);
              const resizedHairstyleImageData = new ImageData(new Uint8ClampedArray(rgbaMat.data), rgbaMat.cols, rgbaMat.rows);

              // Draw hairstyle image on canvas
              ctx.putImageData(resizedHairstyleImageData, x, y);

              // Clean up
              resizedHairstyle.delete();
              rgbaMat.delete();
            }

            mat.delete();
          } catch (error) {
            console.error('Error processing video:', error);
          }
        }
        requestAnimationFrame(processVideo);
      };

      processVideo();

      // Cleanup on unmount
      return () => {
        if (video.srcObject) {
          const tracks = video.srcObject.getTracks();
          tracks.forEach(track => track.stop());
        }
      };
    }
  }, [isOpenCvReady, hairstyleImage, faceCascade]);

  return (
    <div>
      <div style={{ position: 'relative', width: '80%', height: '70%', margin: 'auto' }}>
        <video ref={videoRef} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000 }} />
      </div>
    </div>
  );
};

export default WebcamCapture;
