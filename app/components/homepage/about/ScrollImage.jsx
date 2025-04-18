"use client"
import { personalData } from "@/utils/data/personal-data";
import { useEffect, useRef, useState } from 'react';

export default function ScrollImage() {
  const imageRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log('Intersection Observer Entry:', entry); // Log entry details

        if (entry.isIntersecting) {
          console.log('Image is in view!');
          setIsInView(true); // Trigger effect when image enters viewport
        } else {
          console.log('Image is out of view!');
          setIsInView(false); // Reset effect when it leaves
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the image is in view
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {};
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <img
        ref={imageRef}
        src={personalData.profile}
        width={280}
        height={280}
        alt="Connor Magnuson"
        className={`rounded-lg transition-all duration-1000 ease-in-out transform ${
          isInView
            ? 'grayscale-0 scale-110'  // Removes grayscale and scales up
            : 'grayscale scale-100'     // Default grayscale and normal scale
        } cursor-pointer`}
      />
  );
}
