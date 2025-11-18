// src/pages/InscricaoDetalhe.jsx (CÓDIGO FINAL UTILIZANDO O SEU LocationCard.jsx)

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Mail, Phone, Calendar } from 'lucide-react'; 
// 1. IMPORTAÇÃO DO SEU COMPONENTE ORIGINAL DE CARD
import LocationCard from '../components/LocationCard'; 


// --- DADOS MOCKADOS SIMULANDO A CONEXÃO DE FOTO E LOCAL ---
const mockInscricao = { 
    id: 2, 
    nome: "Angela Moss", 
    dataNascimento: "01/01/1998",
    email: "angelamoss@mail.com",
    telefone: "+11 91345-6789",
    status: "Pendente",
    imgPerfil: 'https://i.ibb.co/L5w91mJ/angela-moss.jpg', 
    
    // 2. DADOS MOCKADOS PARA CORRESPONDER À ESTRUTURA DO LocationCard
    localData: {
        id: 101, 
        name: "Cipó-Guaçu - Limpeza de área verde", 
        // A prop é 'imgSrc' no LocationCard.jsx
        imgSrc: 'https://i.ibb.co/8Yj0g8t/acao-mock.jpg' 
    }
};

// Componente de Detalhes
export default function InscricaoDetalhe() {
    const { id } = useParams();
    const navigate = useNavigate();
    const inscricao = mockInscricao;
    
    // --- Funções de Ação ---
    
    const handleAprovar = () => {
        alert(`Inscrição ${id} de ${inscricao.nome} APROVADA!`);
        navigate('/inscricoes?tab=pendentes'); 
    };

    const handleRecusar = () => {
        alert(`Inscrição ${id} de ${inscricao.nome} RECUSADA!`);
        navigate('/inscricoes?tab=pendentes');
    };

    const handleAdicionarLocal = () => {
        // Ação do rodapé (Adicionar Local)
        alert("Navegar para Adicionar Novo Local!"); 
    }

    // Como o LocationCard já é clicável (cursor-pointer), 
    // esta função simula o que aconteceria ao clicar no card ou no botão
    const handleLocationCardClick = () => {
        // Redireciona para os detalhes do local
        alert(`Navegar para Detalhes do Local ID: ${inscricao.localData.id}`); 
        // Exemplo real: navigate(`/locais/detalhe/${inscricao.localData.id}`);
    }

    // --- Layout ---
    
    return (
        <div className="p-8 w-full bg-gray-50 h-screen relative">
            <h2 className="text-2xl font-bold mb-1 text-gray-800">Inscrições</h2>
            <p className="text-sm text-gray-500 mb-8">Lista de Inscrições</p>

            <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
                
                {/* --- SEÇÃO DE DETALHES PESSOAIS --- */}
                <div className="flex items-start mb-10">
                    
                    {/* Imagem de Perfil (Voltinha) */}
                    <div className="w-48 h-48 bg-gray-200 rounded-full overflow-hidden mr-10 flex-shrink-0 border-4 border-gray-100 shadow-md">
                        <img 
                            src={inscricao.imgPerfil || "https://via.placeholder.com/192"} 
                            alt={`Perfil de ${inscricao.nome}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    {/* Dados de Contato */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 pt-1" style={{ color: '#00715D' }}>
                            {inscricao.nome}
                        </h3>
                        
                        <div className="space-y-3 text-gray-700">
                            <div className="flex items-center text-md">
                                <Calendar className="w-5 h-5 mr-3 text-gray-500" />
                                <span>{inscricao.dataNascimento}</span>
                            </div>
                            <div className="flex items-center text-md">
                                <Phone className="w-5 h-5 mr-3 text-gray-500" />
                                <span>{inscricao.telefone}</span>
                            </div>
                            <div className="flex items-center text-md">
                                <Mail className="w-5 h-5 mr-3 text-gray-500" />
                                <span>{inscricao.email}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SEÇÃO DE INSCRIÇÃO: REUTILIZANDO O LOCATION CARD --- */}
                <h3 className="text-xl font-bold mb-4 border-t pt-6" style={{ color: '#00715D' }}>
                    Inscrição para o Local:
                </h3>
                
                {/* 3. INSERÇÃO DO SEU COMPONENTE LocationCard com os dados do mock */}
                {/* Adicionamos o onClick na div pai para simular a navegação ao clicar em qualquer parte do card. */}
                <div className="flex justify-center md:justify-start mb-8 cursor-pointer" onClick={handleLocationCardClick}>
                    <LocationCard 
                        location={inscricao.localData} 
                        // Nota: O LocationCard não aceita um prop onVerDetalhes,
                        // mas o clique na div acima já lida com a navegação.
                        // O botão interno do LocationCard ainda funciona apenas como um elemento visual.
                    />
                </div>


                {/* --- BOTÕES DE AÇÃO (Aceitar/Recusar) --- */}
                <div className="mt-10 flex space-x-4">
                    <button
                        onClick={handleAprovar}
                        className="px-6 py-2 rounded-lg font-medium text-white transition-colors shadow-md hover:bg-green-700"
                        style={{ backgroundColor: '#00715D' }} 
                    >
                        Aceitar
                    </button>
                    <button
                        onClick={handleRecusar}
                        className="px-6 py-2 rounded-lg font-medium text-white bg-red-600 hover:bg-red-700 transition-colors shadow-md"
                    >
                        Recusar
                    </button>
                </div>
            </div>
            
       
        </div>
    );
}