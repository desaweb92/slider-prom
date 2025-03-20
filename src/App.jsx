import React from 'react';
import Intro from './components/Intro';

const App = () => {
  // Helados Normales
  const normalFlavors = [
    { imageSrc: 'https://imgur.com/hQqyxG8.jpg', title: 'Sabor 1', price: '$5', wholesalePrice: '$4.50' },
    { imageSrc: 'https://imgur.com/Slyin1j.jpg', title: 'Sabor 2', price: '$6' , wholesalePrice: '$4.50' },
    { imageSrc: 'https://imgur.com/H8fglzZ.jpg', title: 'Sabor 3', price: '$5' , wholesalePrice: '$4.50' },
    { imageSrc: 'https://imgur.com/CpXa1cc.jpg', title: 'Sabor 4', price: '$5' , wholesalePrice: '$4.50' },
    { imageSrc: 'https://imgur.com/dCjWCVp.jpg', title: 'Sabor 5', price: '$5' , wholesalePrice: '$4.50' },
    { imageSrc: 'https://imgur.com/iYPPdZW.jpg', title: 'Sabor 6', price: '$5' , wholesalePrice: '$4.50' },
    { imageSrc: 'https://imgur.com/uuPqcIY.jpg', title: 'Sabor 7', price: '$5' , wholesalePrice: '$4.50' },
    { imageSrc: 'https://imgur.com/2KqAQkM.jpg', title: 'Sabor 8', price: '$5' , wholesalePrice: '$4.50' },
    { imageSrc: 'https://imgur.com/s3GPJLQ.jpg', title: 'Sabor 9', price: '$5' , wholesalePrice: '$4.50' },
    { imageSrc: 'https://imgur.com/Zr2hmJk.jpg', title: 'Sabor 10', price: '$5' , wholesalePrice: '$4.50' },
    { imageSrc: 'https://imgur.com/FJLo7aA.jpg', title: 'Sabor 11', price: '$5' , wholesalePrice: '$4.50' },
    { imageSrc: 'https://imgur.com/N6bgzxv.jpg', title: 'Sabor 12', price: '$5' , wholesalePrice: '$4.50' },
  ];

  // Helados Especiales
  const specialFlavors = [
    { imageSrc: 'https://imgur.com/hQqyxG8.jpg', title: 'Especial 1', price: '$5', wholesalePrice: '$6.50' },
    { imageSrc: 'https://imgur.com/Slyin1j.jpg', title: 'Especial 2', price: '$6' , wholesalePrice: '$6.50' },
    { imageSrc: 'https://imgur.com/H8fglzZ.jpg', title: 'Especial 3', price: '$5' , wholesalePrice: '$6.50' },
    { imageSrc: 'https://imgur.com/CpXa1cc.jpg', title: 'Especial 4', price: '$5' , wholesalePrice: '$6.50' },
    { imageSrc: 'https://imgur.com/dCjWCVp.jpg', title: 'Especial 5', price: '$5' , wholesalePrice: '$6.50' },
    { imageSrc: 'https://imgur.com/iYPPdZW.jpg', title: 'Especial 6', price: '$5' , wholesalePrice: '$6.50' },
    { imageSrc: 'https://imgur.com/uuPqcIY.jpg', title: 'Especial 7', price: '$5' , wholesalePrice: '$6.50' },
    { imageSrc: 'https://imgur.com/2KqAQkM.jpg', title: 'Especial 8', price: '$5' , wholesalePrice: '$6.50' },
    { imageSrc: 'https://imgur.com/s3GPJLQ.jpg', title: 'Especial 9', price: '$5' , wholesalePrice: '$6.50' },
    { imageSrc: 'https://imgur.com/Zr2hmJk.jpg', title: 'Especial 10', price: '$5' , wholesalePrice: '$6.50' },
    { imageSrc: 'https://imgur.com/FJLo7aA.jpg', title: 'Especial 11', price: '$5' , wholesalePrice: '$6.50' },
    { imageSrc: 'https://imgur.com/N6bgzxv.jpg', title: 'Especial 12', price: '$5' , wholesalePrice: '$6.50' },
  ];

  // Combinar ambos arreglos
  const slides = [...normalFlavors, ...specialFlavors];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-white">
      <Intro slides={slides} normalCount={normalFlavors.length} />
    </div>
  );
};

export default App;
