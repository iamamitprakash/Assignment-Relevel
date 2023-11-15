// src/DogGallery.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DogGallery = () => {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random/5');
        setDogImages(response.data.message);
      } catch (error) {
        console.error('Error fetching dog images:', error);
      }
    };

    fetchDogImages();
  }, []);

  return (
    <div>
      <h2>Random Dog Images</h2>
      <div>
        {dogImages.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Dog ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default DogGallery;
