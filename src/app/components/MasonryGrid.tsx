import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ImageModal from '../gallery/_components/ImageModal';

const MasonryGrid = () => {
  const images = [
    "/gallery/img2.jpg",
    "/gallery/img3.jpg",
    "/gallery/img4.jpg",
    "/gallery/img5.jpg",
    "/gallery/img6.jpg",
    "/gallery/img7.jpg",
    "/gallery/img9.jpg",
    "/gallery/img10.jpg",
    "/gallery/img11.jpg",
    "/gallery/img12.jpg",
    "/gallery/img13.jpg",
    "/gallery/img14.jpg",
    "/gallery/img15.jpg",
    "/gallery/img16.jpg",
    "/gallery/img17.jpg",
    "/gallery/P1030783.jpg",
    "/gallery/P1030785.jpg",
    "/gallery/P1030788.jpg",
    "/gallery/P1030789.jpg",
    "/gallery/P1030790.jpg",
    "/gallery/P1030791.jpg",
    "/gallery/P1030793.jpg",
    "/gallery/P1030794.jpg",
    "/gallery/P1030801.jpg",
    "/gallery/P1030803.jpg",
    "/gallery/P1030804.jpg",
    "/gallery/P1030806.jpg",
    "/gallery/P1030807.jpg",
    "/gallery/P1030808.jpg",
    "/gallery/P1030810.jpg",
    "/gallery/P1030811.jpg",
    "/gallery/P1030812.jpg",
    "/gallery/P1030813.jpg",
    "/gallery/P1030815.jpg",
    "/gallery/P1030817.jpg",
  ];

  // Function to randomly vary image height
  const getRandomHeight = () => {
    const minHeight = 200; // Minimum height for images
    const maxHeight = 400; // Maximum height for images
    return `${Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight}px`;
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };


  return (
    <div>

    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry
        columnsCount={4}
        gutter="10px"
        className="space-y-4 md:px-40 px:10"
      >
        {images.map((image, i) => (
          <img
            onClick={() => openModal(image)}
            key={i}
            src={image}
            alt={`Gallery image ${i}`}
            style={{
              width: '100%',
              display: 'block',
              height: getRandomHeight(), // Randomly set height
              objectFit: 'cover', // Ensure images cover the div area
            }}
            className='rounded-md'
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>

      {selectedImage && (
          <ImageModal
          imageSrc={selectedImage!}
          altText="Selected image"
          isOpen={!!selectedImage}
          onClose={closeModal}
          />
        )}
    </div>
  )
  
};

export default MasonryGrid;
