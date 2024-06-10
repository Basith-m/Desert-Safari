// src/components/Gallery.js
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import desert1 from "../assets/Carousel-1.jpg";
import desert2 from "../assets/Carousel-2.jpg";
import desert3 from "../assets/IMG_0803.jpg";
import desert4 from "../assets/IMG_0913.jpg";
// Import other images similarly

const images = [
  {
    original: desert1,
    thumbnail: desert1,
  },
  {
    original: desert2,
    thumbnail: desert2,
  },
  {
    original: desert3,
    thumbnail: desert3,
  },
  {
    original: desert4,
    thumbnail: desert4,
  },
  // Add other images similarly
];

const Gallery = () => {
  return (
    <div className="gallery d-flex flex-column align-items-center">
      <h3 className="gallery-heading">Photo Gallery</h3>
      <div className="gallery-container">
        <ImageGallery autoPlay={true}  items={images} />
      </div>
    </div>
  );
};

export default Gallery;
