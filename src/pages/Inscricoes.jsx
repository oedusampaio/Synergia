// src/pages/Inscricoes.jsx

import React, { useState } from 'react';
import { Search, Phone, Mail, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



// CARD DE INSCRIÇÃO
const InscricaoCard = ({ item, onClick }) => {
    const imgUrl = item.imgPerfil || 'https://via.placeholder.com/150?text=User'; 

    return (
        <div 
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
            style={{ cursor: item.status === 'Pendente' ? 'pointer' : 'default' }}
            onClick={() => item.status === 'Pendente' && onClick(item.id)}
        >
            <div className="relative mb-3">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-2 bg-gray-200">
                    <img src={imgUrl} alt={item.nome} className="w-full h-full object-cover" />
                </div>

                <span className="absolute bottom-0 right-0 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-md transform translate-y-1/2">
                    {item.data}
                </span>
            </div>

            <h4 className="text-sm font-bold text-gray-800 mt-2">{item.nome}</h4>
            <p className="text-xs text-gray-500 mb-4">{item.dataNascimento}</p>

            <div className="w-full space-y-2">
                <div className="flex items-center text-xs text-gray-600">
                    <Phone className="w-3 h-3 mr-2" style={{ color: '#00715D' }} />
                    {item.telefone}
                </div>
                <div className="flex items-center text-xs text-gray-600">
                    <Mail className="w-3 h-3 mr-2" style={{ color: '#00715D' }} />
                    {item.email}
                </div>
            </div>

            {item.status === 'Pendente' && (
                <button className="mt-4 flex items-center text-xs font-medium 
                                   bg-[#00715D] text-white px-4 py-2 rounded-lg
                                   hover:bg-[#005a49] transition-colors">
                    Verificar <ChevronRight className="w-3 h-3 ml-1" />
                </button>
            )}
        </div>
    );
};

// MOCK
const mockInscricoes = [
    { id: 1, nome: "Angela Moss", dataNascimento: "01/01/1998", data: "10/06/2025", telefone: "+11 91345-6789", email: "angelamoss@mail.com", status: "Pendente", imgPerfil: "https://i.ibb.co/L5w91mJ/angela-moss.jpg" },
    { id: 2, nome: "Ahmad Zayn", dataNascimento: "10/10/2019", data: "10/06/2025", telefone: "+12 345 6789 0", email: "ahmadzayn@mail.com", status: "Aprovada", imgPerfil: "https://i.ibb.co/6y4M5gB/ahmad-zayn.jpg" },
    { id: 3, nome: "Brian Connor", dataNascimento: "01/09/1970", data: "10/06/2025", telefone: "+12 345 6789 0", email: "brianconnor@mail.com", status: "Pendente", imgPerfil: "https://i.ibb.co/6y4M5gB/brian-connor.jpg" },
    { id: 4, nome: "Courtney Hawkins", dataNascimento: "07/09/2006", data: "10/06/2025", telefone: "+12 345 6789 0", email: "courtneyhawk@mail.com", status: "Recusada", imgPerfil: "https://i.ibb.co/6y4M5gB/courtney-hawk.jpg" },
    { id: 5, nome: "Chyntia Smiley", dataNascimento: "10/09/2006", data: "10/06/2025", telefone: "+12 345 6789 0", email: "angelamoss@mail.com", status: "Aprovada", imgPerfil: "https://i.ibb.co/6y4M5gB/chyntia-smiley.jpg" },
    { id: 6, nome: "Pedro Souza", dataNascimento: "17/05/1995", data: "17/05/2025", telefone: "+12 345 6789 0", email: "pedrosouza@mail.com", status: "Pendente", imgPerfil: "https://i.ibb.co/6y4M5gB/user6.jpg" },
];

const itemsPerPage = 10;

export default function Inscricoes() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('todas');
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const handleProfileClick = () => {
        navigate('/admin'); // <-- USA O HOOK DE NAVEGAÇÃO CORRETO
    };

    const handleInscricaoClick = id => navigate(`/inscricoes/detalhe/${id}`);

    const handlePageChange = page => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    let baseData = activeTab === 'pendentes'
        ? mockInscricoes.filter(i => i.status === 'Pendente')
        : mockInscricoes;

    const filteredData = baseData.filter(item =>
        item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPending = mockInscricoes.filter(i => i.status === 'Pendente').length;

    return (
        <div className="p-8 w-full bg-white">

            {/* HEADER */}
<header className="flex justify-between items-center pb-6">
    
    {/* Título e Subtítulo */}
    <div className="flex flex-col">
        <h3 className="text-lg font-bold" style={{ color: '#00715D' }}>
            Inscrições
        </h3>
        <p className="text-sm text-gray-500">Lista de Inscrições</p>
    </div>

    {/* Lado Direito — exatamente como Ferramentas */}
    <div className="flex items-center space-x-6">

        {/* TABS (mantidos, mas movidos para o lugar correto) */}
        <div className="flex space-x-3">
            <button
                onClick={() => { setActiveTab('todas'); setSearchTerm(''); setCurrentPage(1); }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition 
                    ${activeTab === 'todas'
                        ? 'bg-[#00715D] text-white hover:bg-[#005a49]'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
                Todas as Inscrições
            </button>

            <button
                onClick={() => { setActiveTab('pendentes'); setSearchTerm(''); setCurrentPage(1); }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition 
                    ${activeTab === 'pendentes'
                        ? 'bg-[#00715D] text-white hover:bg-[#005a49]'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
                Pendentes ({totalPending})
            </button>
        </div>

        {/* BUSCA — igual Ferramentas */}
        <div className="relative w-64">
            <input
                type="text"
                placeholder="Buscar inscrições"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-400 
                           focus:ring-green-700 focus:border-green-700 w-full"
                style={{ caretColor: '#00715D' }}
            />
            <Search className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>

        {/* PERFIL — igual Ferramentas */}
        <div 
        
            onClick={handleProfileClick}
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
            <div className="text-right">
                <p className="text-sm font-bold text-gray-800">Isaac Araújo</p>
                <p className="text-xs text-gray-400">Super Admin</p>
            </div>
            <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                IA
            </div>
        </div>
    </div>
</header>
            {/* GRID */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {paginatedData.map(item => (
                    <InscricaoCard key={item.id} item={item} onClick={handleInscricaoClick} />
                ))}
            </div>

            {paginatedData.length === 0 && (
                <p className="text-center py-10 text-gray-500">Nenhuma inscrição encontrada.</p>
            )}

            {/* PAGINAÇÃO */}
            {filteredData.length > itemsPerPage && (
                <div className="flex justify-end items-center mt-8 space-x-2">

                    <span className="text-sm text-gray-500 mr-4">
                        Showing {(currentPage - 1) * itemsPerPage + 1}-
                        {Math.min(currentPage * itemsPerPage, filteredData.length)} from {filteredData.length} data
                    </span>

                    {/* ANTERIOR */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-lg 
                            ${currentPage === 1
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-[#00715D] text-white hover:bg-[#005a49]'}
                        `}
                    >
                        &lt;
                    </button>

                    {/* NUMERAÇÃO */}
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={`px-3 py-2 rounded-lg text-sm font-semibold
                                ${currentPage === i + 1
                                    ? 'bg-[#00715D] text-white'
                                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
                            `}
                        >
                            {i + 1}
                        </button>
                    ))}

                    {/* PRÓXIMO */}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-lg 
                            ${currentPage === totalPages
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-[#00715D] text-white hover:bg-[#005a49]'}
                        `}
                    >
                        &gt;
                    </button>
                </div>
            )}

        </div>
    );
}
