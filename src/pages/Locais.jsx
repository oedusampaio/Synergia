// src/pages/Locais.jsx
import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import LocationCard from '../components/LocationCard';
import Pagination from '../components/Pagination';

// IMPORTANTE: Certifique-se de que esses arquivos PNG existem em src/assets/
import CipoGuacuImg from '../assets/cipoguacu.png'; 
import GuarujaImg from '../assets/guaruja.png';
import RioTieteImg from '../assets/riotiete.png';

// Dados de Exemplo
export const allLocationsData = [
  { id: 1, name: 'Cipó-Guaçu', imgSrc: CipoGuacuImg, isHighlighted: false },
  { id: 2, name: 'Guarujá', imgSrc: GuarujaImg, isHighlighted: false },
  { id: 3, name: 'Rio Tietê', imgSrc: RioTieteImg, isHighlighted: false },
  { id: 4, name: 'Praia Grande', imgSrc: GuarujaImg, isHighlighted: false },
  { id: 5, name: 'Serra do Mar', imgSrc: CipoGuacuImg, isHighlighted: false },
  { id: 6, name: 'Foz do Iguaçu', imgSrc: RioTieteImg, isHighlighted: false },
  // ... adicione mais para testar a paginação (total de 46)
];

function Locais() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = allLocationsData.length;
  const itemsPerPage = 6; 

  // 1. Lógica de Busca
  const filteredData = allLocationsData.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. Lógica de Paginação (no lado do cliente)
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);
  
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
        // Opcional: navegar para a rota de página se quiser que a URL mude
        // navigate(`/locais/${page}`);
    }
  };


  return (
    <div className="p-8 w-full bg-white">
      {/* O Topbar agora recebe o estado de busca */}
      <Topbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 

      <div className="mt-8 mb-6">
        <h3 className="text-lg font-medium text-gray-600">Locais disponíveis</h3>
      </div>

      {/* Cards de Localização */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentItems.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>

      {/* Paginação */}
      <Pagination
        totalItems={filteredData.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Locais;