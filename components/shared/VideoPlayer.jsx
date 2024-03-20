"use client"
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const VideoPlayer = ({ src }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [ref, inView] = useInView({
      threshold: 0.5, // Trigger when 50% of the video is in view
    });

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const handleCanPlay = () => {
                if (inView) {
                    video.play().catch(error => console.error("Video play failed:", error));
                    setIsPlaying(true);
                }
            };

            video.addEventListener('canplay', handleCanPlay);

            return () => {
                video.removeEventListener('canplay', handleCanPlay);
            };
        }
    }, [inView]);

    useEffect(() => {
        if (isPlaying) {
            videoRef.current.play().catch(error => console.error("Video play failed:", error));
        } else {
            videoRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        console.log(isPlaying);
    }, [isPlaying]);

    return (
      <video ref={videoRef} controls={true} className="mx-auto rounded-xl animated-border !border-[4px]">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
};

export default VideoPlayer;

