// src/components/LocalPendenteCard.jsx (NOVO COMPONENTE)

import React from 'react';
import { MapPin } from 'lucide-react';

const LocalPendenteCard = ({ local, onDetalhes, onAprovar, onRecusar }) => {
    const { name, imgSrc, dataRegistro } = local;

    // Funções para evitar o clique de 'Ver Detalhes' quando clica nos botões de ação
    const handleActionClick = (action, e) => {
        e.stopPropagation();
        action(local.id);
    };

    return (
        <div className="flex bg-white rounded-lg shadow-md overflow-hidden mb-4 border border-yellow-300">
            
            {/* Imagem e Botão de Detalhes */}
            <div className="w-48 flex-shrink-0 flex flex-col items-center p-4 bg-gray-50">
                <div className="h-24 w-full overflow-hidden rounded-lg mb-2">
                    <img 
                        src={imgSrc || "https://via.placeholder.com/150x130?text=Local"} 
                        alt={name} 
                        className="w-full h-full object-cover" 
                    />
                </div>
                <p className="text-xs font-semibold text-gray-700 mb-2">Data Reg.: {dataRegistro}</p>
                <button
                    onClick={() => onDetalhes(local.id)}
                    className="w-full text-white py-1 text-sm rounded-lg font-medium transition-colors hover:bg-gray-700"
                    style={{ backgroundColor: '#00715D' }}
                >
                    Ver Detalhes
                </button>
            </div>

            {/* Detalhes do Local e Ações */}
            <div className="flex-grow p-4 flex flex-col justify-between">
                <div className="mb-3">
                    <h4 className="text-lg font-bold text-gray-800 flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-yellow-600" />
                        {name}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                        **Status:** <span className="font-bold text-yellow-600">Pendente de Aprovação</span>
                    </p>
                </div>

                {/* Botões de Aprovação */}
                <div className="flex space-x-3 mt-auto">
                    <button 
                        onClick={(e) => handleActionClick(onAprovar, e)}
                        className="px-4 py-2 text-sm rounded-lg text-white font-medium bg-green-600 hover:bg-green-700 transition-colors"
                    >
                        Aprovar
                    </button>
                    <button
                        onClick={(e) => handleActionClick(onRecusar, e)}
                        className="px-4 py-2 text-sm rounded-lg text-white font-medium bg-red-600 hover:bg-red-700 transition-colors"
                    >
                        Recusar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LocalPendenteCard;