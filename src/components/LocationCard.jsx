// src/components/LocationCard.jsx
import React from 'react';
import TiltedCard from './TiltedCard'; 

function LocationCard({ location }) {
  const { name, imgSrc } = location; 

  return (
    <div
      className={`
        bg-white rounded-lg shadow-md overflow-hidden 
        transition-all duration-300 ease-in-out 
        hover:shadow-xl hover:ring-2 hover:ring-blue-500 hover:ring-offset-2 
        hover:border-transparent cursor-pointer
        border border-gray-200
      `}
    >
      
      <div className="flex justify-center items-center p-2">
        <TiltedCard
          imageSrc={imgSrc}
          altText={`Imagem de ${name}`}
          captionText={name} 
          
          containerHeight="160px" 
          containerWidth="100%"
          imageHeight="160px"
          imageWidth="100%"
          
          scaleOnHover={1.05} 
          rotateAmplitude={10} 
          showMobileWarning={false} 
          
          // === MUDANÇA AQUI: Define como false para remover o nome flutuante ===
          showTooltip={false} 
          // ======================================================================
        />
      </div>

      <div className="p-4 pt-0">
        <button 
          className="w-full text-white py-2 rounded-lg font-medium transition-colors"
          style={{ backgroundColor: '#588461' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#4a6d50'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#588461'}
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}

export default LocationCard;