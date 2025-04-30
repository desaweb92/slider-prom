import React from 'react';
import Intro from './components/Intro';

const App = () => {
  // Helados Normales
  const normalFlavors = [
    { imageSrc: 'https://imgur.com/cEtgvse.jpg', title: 'Bati bati', price: '45 Bs', wholesalePrice: '0.35$', type: 'normal' },
    { imageSrc: 'https://imgur.com/HrAJHLN.jpg', title: 'Chicle', price: '45 Bs', wholesalePrice: '0.35$', type: 'normal' },
    { imageSrc: 'https://imgur.com/HB50exj.jpg', title: 'Choco fresa', price: '45 Bs', wholesalePrice: '0.35$', type: 'normal' },
    { imageSrc: 'https://imgur.com/vPHSvgH.jpg', title: 'Choco mantecado', price: '45 Bs', wholesalePrice: '0.35$', type: 'normal' },
    { imageSrc: 'https://imgur.com/9vKICCa.jpg', title: 'Coco', price: '45 Bs', wholesalePrice: '0.35$', type: 'normal' },
    { imageSrc: 'https://imgur.com/nedvd6U.jpg', title: 'Colita con leche', price: '45 Bs', wholesalePrice: '0.35$', type: 'normal' },
    { imageSrc: 'https://imgur.com/7DDou6v.jpg', title: 'Fresa mantecado', price: '45 Bs', wholesalePrice: '0.35$', type: 'normal' },
    { imageSrc: 'https://imgur.com/5XVR0Ve.jpg', title: 'Limón mantecado', price: '45 Bs', wholesalePrice: '0.35$', type: 'normal' },
    { imageSrc: 'https://imgur.com/qZjS7CH.jpg', title: 'Naranja mantecado', price: '45 Bs', wholesalePrice: '0.35$', type: 'normal' },
    { imageSrc: 'https://imgur.com/RAeVP1P.jpg', title: 'Parchita mantecado', price: '45 Bs', wholesalePrice: '0.35$', type: 'normal' },
    { imageSrc: 'https://imgur.com/ErEowRR.jpg', title: 'Ron con pasas', price: '45 Bs', wholesalePrice: '0.35$', type: 'normal' },
  ];

  // Helados Especiales
  const specialFlavors = [
    { imageSrc: 'https://imgur.com/fugcKVO.jpg', title: 'Arequipe', price: '50 Bs', wholesalePrice: '0.42$', type: 'special' },
    { imageSrc: 'https://imgur.com/lE0oeez.jpg', title: 'Chocolate', price: '50 Bs', wholesalePrice: '0.42$', type: 'special' },
    { imageSrc: 'https://imgur.com/Zv0KiP1.jpg', title: 'Cocosette', price: '50 Bs', wholesalePrice: '0.42$', type: 'special' },
    { imageSrc: 'https://imgur.com/WQuZIt6.jpg', title: 'Fresa oreo', price: '50 Bs', wholesalePrice: '0.42$', type: 'special' },
    { imageSrc: 'https://imgur.com/CWYLipm.jpg', title: 'Maní', price: '50 Bs', wholesalePrice: '0.42$', type: 'special' },
    { imageSrc: 'https://imgur.com/Kdv2ag6.jpg', title: 'Mante brownie', price: '50 Bs', wholesalePrice: '0.42$', type: 'special' },
    { imageSrc: 'https://imgur.com/EdTxPoH.jpg', title: 'Mante oreo', price: '50 Bs', wholesalePrice: '0.42$', type: 'special' },
    { imageSrc: 'https://imgur.com/m7v5Zei.jpg', title: 'Pastelado', price: '50 Bs', wholesalePrice: '0.42$', type: 'special' },
    { imageSrc: 'https://imgur.com/nrv1cTg.jpg', title: 'Susy', price: '50 Bs', wholesalePrice: '0.42$', type: 'special' },
    { imageSrc: 'https://imgur.com/UqWPosS.jpg', title: 'Torta suiza', price: '50 Bs', wholesalePrice: '0.42$', type: 'special' },
  ];

  // Helados Super especiales
  const superSpecialFlavors = [
    { imageSrc: 'https://imgur.com/O5kFDBK.jpg', title: 'Choco arequipe', price: '60bs', wholesalePrice: '0.47$', type: 'superSpecial' },
    { imageSrc: 'https://imgur.com/Rt9BdQz.jpg', title: 'Choco brownie', price: '60bs', wholesalePrice: '0.47$', type: 'superSpecial' },
    { imageSrc: 'https://imgur.com/v4qhPt3.jpg', title: 'Choco maní', price: '60bs', wholesalePrice: '0.47$', type: 'superSpecial' },
    { imageSrc: 'https://imgur.com/Smh9FCA.jpg', title: 'Choco oreo', price: '60bs', wholesalePrice: '0.47$', type: 'superSpecial' },
    { imageSrc: 'https://imgur.com/bDqFGx2.jpg', title: 'Marquesa', price: '60bs', wholesalePrice: '0.47$', type: 'superSpecial' },
    { imageSrc: 'https://imgur.com/PMRdi0g.jpg', title: 'Toronto', price: '60bs', wholesalePrice: '0.47$', type: 'superSpecial' },
  ];

  // Combinar todos los arreglos
  const slides = [...normalFlavors, ...specialFlavors, ...superSpecialFlavors];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-white">
      <Intro slides={slides} />
    </div>
  );
};

export default App;
