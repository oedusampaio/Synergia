// src/components/Sidebar.jsx
import React from 'react';
import { MapPin, Settings, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; // Importado Link e useLocation
import SynergiaLogo from '../assets/logo.png'; // Caminho relativo de components/ para assets/
// Dados da navegação
const navItems = [
  { name: 'Locais', icon: MapPin, path: '/locais' },
  { name: 'Ferramentas', icon: Settings, path: '/ferramentas' },
  { name: 'Inscrições', icon: FileText, path: '/inscricoes' },
];

function Sidebar() {
  const location = useLocation(); // Hook para saber a rota atual

  return (
    <div className="w-64 bg-white shadow-xl flex flex-col p-4 border-r border-gray-200">
      
      {/* Área da Logo - Agora é um Link Home */}
      <Link to="/locais" className="flex items-center py-2 mb-8 cursor-pointer">
        <img src={SynergiaLogo} alt="Synergia Logo" className="h-8 w-auto" />
      </Link>

      <p className="text-xs font-semibold uppercase text-gray-400 mb-4 tracking-wider">
        MAIN MENU
      </p>

      {/* Itens de Navegação */}
      <nav className="space-y-1">
        {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
                <Link
                    key={item.name}
                    to={item.path}
                    // Classes condicionais para o item ativo
                    className={`flex items-center p-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-green-50 text-green-700 rounded-lg border-l-4 border-green-700 -ml-4 pl-4'
                        : 'text-gray-600 hover:bg-gray-100 rounded-lg'
                    }`}
                >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                </Link>
            );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;