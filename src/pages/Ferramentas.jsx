import React, { useState, useEffect } from 'react';
import { Search, Plus } from 'lucide-react'; // Usamos 'Plus' para "Nova Ferramenta"
import ToolCard from '../components/ToolCard'; // Componente Card da Ferramenta
import Pagination from '../components/Pagination'; // Componente de Paginação
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

// Dados mockados para as Ferramentas (baseados na imagem)
const mockTools = [
  { id: 1, name: 'Luvas de Borracha', imgSrc: 'tool_glove.jpg' },
  { id: 2, name: 'Saco de Lixo Plástico', imgSrc: 'tool_bag.jpg' },
  { id: 3, name: 'Máscara de Proteção', imgSrc: 'tool_mask.jpg' },
  { id: 4, name: 'Óculos de Proteção', imgSrc: 'tool_glasses.jpg' },
  { id: 5, name: 'Botas de Borracha', imgSrc: 'tool_boots.jpg' },
  { id: 6, name: 'Capacete de Segurança', imgSrc: 'tool_helmet.jpg' },
  { id: 7, name: 'Colete Refletivo', imgSrc: 'tool_vest.jpg' },
  { id: 8, name: 'Protetor Auditivo', imgSrc: 'tool_ear.jpg' },
  { id: 9, name: 'Kit Primeiros Socorros', imgSrc: 'tool_firstaid.jpg' },
  { id: 10, name: 'Extintor de Incêndio', imgSrc: 'tool_fire.jpg' },
];

const totalToolsFallback = 46;
const itemsPerPage = 10;

export default function Ferramentas() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [tools, setTools] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  

  // Fetch ferramentas from backend on mount (fallback to mock data on error)
  useEffect(() => {
    let mounted = true;
    setLoading(true);
    api.get('/api/ferramentas')
      .then((data) => {
        if (!mounted) return;
        // backend may return an object with content or an array
        if (Array.isArray(data)) setTools(data);
        else if (data && Array.isArray(data.content)) setTools(data.content);
        else setTools(mockTools);
      })
      .catch((err) => {
        console.warn('Failed to load ferramentas from API, using mock data', err);
        if (mounted) setTools(mockTools);
      })
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, []);

  // Filtro e Paginação (usa dados carregados)
  const filteredTools = (tools.length ? tools : mockTools).filter((tool) =>
    (tool.name || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedTools = filteredTools.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= Math.ceil(totalTools / itemsPerPage)) {
      setCurrentPage(page);
    }
  };

  const handleNewToolClick = () => {
    navigate('/ferramentas/novo');
  };

    const handleProfileClick = () => {
    navigate('/admin'); 
  };


  return (
    <div className="p-8 w-full bg-white">
      {/* Header/Topbar customizado para Ferramentas */}
      <header className="flex justify-between items-center pb-6">
        <div className="flex flex-col">
          <h3 className="text-lg font-bold" style={{ color: '#00715D' }}>Lista de Ferramentas</h3>
          <p className="text-sm text-gray-500">Lista de ferramentas</p>
        </div>

        <div className="flex items-center space-x-6">
          {/* Busca */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar Ferramentas"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:ring-green-700 focus:border-green-700 w-64"
              style={{ caretColor: '#00715D' }}
            />
            <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 cursor-text" />
          </div>

          {/* Botão Nova Ferramenta: Verde Synergia */}
          <button
            onClick={handleNewToolClick}
            className="flex items-center text-white visited:text-white focus:text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md"
            style={{ backgroundColor: '#00715D', color: '#FFFFFF' }}
          >
            <Plus className="h-5 w-5 mr-2 text-white" />
            Nova Ferramenta
          </button>
          
          {/* Perfil (Mantido igual ao Topbar para consistência) */}
          <div 
            onClick={handleProfileClick} 
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="text-right">
              <p className="text-sm font-bold text-gray-800">Isaac Araújo</p>
              <p className="text-xs text-gray-400">Super Admin</p>
            </div>
            {/* Avatar: Fundo cinza */}
            <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
              IA
            </div>
          </div>
        </div>
      </header>

      {/* Grid de Cards de Ferramentas */}
      <div className="mt-8 grid grid-cols-5 gap-6">
        {paginatedTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

      {/* Paginação */}
      <Pagination
        totalItems={totalTools}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}