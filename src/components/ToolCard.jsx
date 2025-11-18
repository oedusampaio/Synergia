import React from 'react';
import { MoreVertical } from 'lucide-react';

function ToolCard({ tool }) {
  const { name, imgSrc } = tool;

  // Usei um div simples para simular a imagem, já que não temos as imagens reais.
  // Em produção, imgSrc seria o caminho real.
  const toolImages = {
    'tool_glove.jpg': 'luvas de borracha',
    'tool_bag.jpg': 'saco de lixo',
    'tool_mask.jpg': 'máscara',
    'tool_glasses.jpg': 'óculos de proteção',
    'tool_boots.jpg': 'botas de borracha',
    'tool_helmet.jpg': 'capacete de segurança',
    'tool_vest.jpg': 'colete refletivo',
    'tool_ear.jpg': 'protetor auditivo',
    'tool_firstaid.jpg': 'kit primeiros socorros',
    'tool_fire.jpg': 'extintor de incêndio',
  };

  const getImageContent = (key) => {
    // Retorna a imagem da ferramenta com fundo cinza
    return (
      <div className="w-full h-32 bg-gray-50 flex items-center justify-center p-4">
        {/* Placeholder: Aqui você colocaria a tag <img /> real */}
        <p className="text-xs text-gray-400 text-center capitalize">{toolImages[key] || name}</p>
        <p></p> 
      </div>
    );
  };

  return (
    <div
      className={`
        bg-white rounded-lg shadow-sm overflow-hidden 
        transition-all duration-300 ease-in-out 
        hover:shadow-md hover:ring-2 hover:ring-green-500 hover:ring-offset-2 
        hover:border-transparent cursor-pointer
        border border-gray-200
      `}
    >
      {/* Container de Imagem e Menu de Opções */}
      <div className="relative">
        <div className="absolute top-2 right-2 cursor-pointer p-1 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition-opacity">
          <MoreVertical className="h-4 w-4 text-gray-700" />
        </div>
        
        {/* Imagem da Ferramenta */}
        <div className="w-full h-40 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
            {getImageContent(imgSrc)}
        </div>
      </div>

      {/* Nome da Ferramenta */}
      <div className="px-4 pt-4 pb-2 text-center">
        <h4 className="text-md font-semibold text-gray-800">{name}</h4>
      </div>

      {/* Botão Ver Detalhes: Verde conforme o LocationCard */}
      <div className="p-4 pt-0">
        <button 
          className="w-full text-white py-2 rounded-lg font-medium transition-colors"
          style={{ backgroundColor: '#588461' }} // Tom de verde usado no LocationCard
          onMouseEnter={(e) => e.target.style.backgroundColor = '#4a6d50'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#588461'}
        >
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}

export default ToolCard;