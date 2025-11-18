// src/pages/SuperAdminDashboard.jsx (AJUSTADO: COM LOCAIS PENDENTES E EXISTENTES)

import React from 'react';
import { MapPin } from 'lucide-react';
import LocationCard from '../components/LocationCard'; 
import LocalPendenteCard from '../components/LocalPendenteCard'; // NOVO COMPONENTE

// Importar os dados dos locais existentes (mantendo a reutilização)
import { allLocationsData } from './Locais'; 
// OBS: Ajuste o caminho de importação se necessário.

// --- DADOS MOCKADOS DOS LOCAIS PENDENTES ---
const mockLocaisPendentes = [
    { id: 101, name: "Sitio Novo - São Vicente", imgSrc: 'https://via.placeholder.com/150x130?text=SV', dataRegistro: '15/Nov/2025' },
    { id: 102, name: "Morro do Xaxim - Peruíbe", imgSrc: 'https://via.placeholder.com/150x130?text=PB', dataRegistro: '14/Nov/2025' },
];

export default function SuperAdminDashboard() {
    
    // Funções de Ação para Locais Pendentes
    const handleAprovar = (localId) => {
        alert(`Local ID: ${localId} APROVADO!`);
        // Lógica real de API para aprovação aqui
    };

    const handleRecusar = (localId) => {
        alert(`Local ID: ${localId} RECUSADO!`);
        // Lógica real de API para recusa aqui
    };

    const handleVerDetalhes = (localId) => {
        alert(`Navegar para a tela de Detalhes do Local ID: ${localId}`);
        // Exemplo real: navigate(`/locais/${localId}`);
    };

    return (
        <div className="p-8 w-full bg-gray-50 min-h-screen">
            
            {/* --- Cabeçalho do Painel --- */}
            <div className="flex items-center mb-10">
                <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden mr-6">
                    <img src="https://via.placeholder.com/80" alt="Admin Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">Olá, Isaac ADMIN </h1>
                    <p className="text-sm text-gray-500 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        Local São Paulo, SP
                    </p>
                </div>
            </div>

            <h2 className="text-3xl font-bold mb-10" style={{ color: '#00715D' }}>
                Painel de Administração
            </h2>
            
            {/* ======================================================= */}
            {/* --- 1. LOCAIS PENDENTES DE APROVAÇÃO --- */}
            {/* ======================================================= */}
            <div className="max-w-4xl mb-12">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-yellow-600" />
                    Locais Pendentes de Aprovação ({mockLocaisPendentes.length})
                </h3>
                
                <div className="space-y-4">
                    {mockLocaisPendentes.length > 0 ? (
                        mockLocaisPendentes.map(local => (
                            <LocalPendenteCard 
                                key={local.id} 
                                local={local} 
                                onDetalhes={handleVerDetalhes}
                                onAprovar={handleAprovar}
                                onRecusar={handleRecusar}
                            />
                        ))
                    ) : (
                        <p className="text-gray-500 p-4 bg-white rounded-lg shadow-sm">
                            Nenhum local novo pendente de aprovação.
                        </p>
                    )}
                </div>
            </div>

            <hr className="border-t border-gray-300 my-10" />

            {/* ======================================================= */}
            {/* --- 2. LOCAIS EXISTENTES (CATÁLOGO) --- */}
            {/* ======================================================= */}
            <div className="max-w-7xl">
                <h3 className="text-xl font-bold mb-6 text-gray-800">
                    Locais Existentes (Catálogo - {allLocationsData.length})
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {allLocationsData.map(local => (
                        <div key={local.id} onClick={() => handleVerDetalhes(local.id)}>
                            <LocationCard 
                                location={local}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
            {/* --- Rodapé --- */}
            <p className="text-center text-xs text-gray-400 mt-12">
                Synergia ONG © 2024 - Todos os direitos reservados
            </p>
        </div>
    );
}