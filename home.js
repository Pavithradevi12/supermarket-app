import React, { useState, useEffect } from 'react';
import axios from 'axios';  
import supermarketImage from '../assets/home7.jpg'; 
import anotherImage from '../assets/home8j.jpg'; 
import extraImage1 from '../assets/home9.jpeg';
import extraImage2 from '../assets/home10.jpeg';
import extraImage3 from '../assets/home11.jpeg';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const images = [supermarketImage, anotherImage, extraImage1, extraImage2, extraImage3]; 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);

  }, [images.length]);

  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then(response => {
        // Handle the response data here
        console.log(response.data);
      })
      .catch(error => {
        // Handle errors here
        console.error('Error fetching data:', error);
      });
  }, []); // This will run once when the component mounts

  return (
    <div>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      <div className="explore-btn"><Link to="/cart">Explore More............</Link></div>
    </div>
  );
};

export default Home;
