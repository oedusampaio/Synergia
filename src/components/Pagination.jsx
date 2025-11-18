// src/components/Pagination.jsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Não é necessário useNavigate aqui, pois a lógica de paginação é interna no Locais.jsx

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  // Lógica para mostrar apenas as primeiras 4 páginas + elipse
  const pagesToShow = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesToShow.push(i);
    if (i >= 4 && totalPages > 4) break;
  }

  return (
    <div className="flex items-center justify-end space-x-2 mt-8">
      <span className="text-sm text-gray-500 mr-4">
        Showing {startItem}-{endItem} from {totalItems} data
      </span>
      
      {/* Botão Anterior */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      {/* Números das Páginas */}
      <div className="flex space-x-1">
        {pagesToShow.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 text-sm rounded-md font-medium transition-colors ${
              page === currentPage
                ? 'bg-green-700 text-white' // Fundo VERDE, Texto BRANCO (Ativo)
                : 'bg-gray-800 text-white hover:bg-gray-900' // Fundo preto/escuro para inativos (como na sua imagem)
            }`}
          >
            {page}
          </button>
        ))}
        {/* Elipse */}
        {totalPages > 4 && (
          <span className="px-3 py-1 text-sm text-gray-500">...</span>
        )}
      </div>

      {/* Botão Próximo */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 disabled:opacity-50 transition-colors"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export default Pagination;