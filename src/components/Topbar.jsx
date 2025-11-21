// src/components/Topbar.jsx
import React from 'react';
import { Search, MapPin } from 'lucide-react';
// Importe o useNavigate
import { Link, useNavigate } from 'react-router-dom';


// Recebe props de busca
function Topbar({ searchTerm, setSearchTerm }) { 
    // Inicialize o hook useNavigate
    const navigate = useNavigate(); 
    
    // Altere a função para usar navigate
    const handleProfileClick = () => {
        navigate('/admin'); // Redireciona para a rota do dashboard de Admin
    };

    return (
        <header className="flex justify-between items-center pb-6">
            
            {/* Busca */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="Buscar Locais"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:ring-green-700 focus:border-green-700 w-64"
                    style={{ caretColor: '#00715D' }}
                />
                <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 cursor-text" />
            </div>

            <div className="flex items-center space-x-6">
                
                {/* Botão Novo Local: usar Link para /locais/novo */}
                <Link
                to="/locais/novo"
                className="flex items-center text-white visited:text-white focus:text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-md"
                style={{ backgroundColor: '#00715D', color: '#FFFFFF' }}
                >
                <MapPin className="h-5 w-5 mr-2 text-white" />
                Novo Local
                </Link>
                        {/* Perfil Clicável: Agora chama a função de navegação */}
                <div 
                onClick={handleProfileClick} 
                className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
                >
                    <div className="text-right">
                        {/* Isaac Araújo: Texto em negrito */}
                        <p className="text-sm font-bold text-gray-800">Isaac Araújo</p>
                        {/* Super Admin: Cinza claro */}
                        <p className="text-xs text-gray-400">Super Admin</p>
                    </div>
                    {/* Avatar: Fundo cinza */}
                    <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                        IA
                    </div>
                </div>
                
            </div>
        </header>

    );
}

export default Topbar;