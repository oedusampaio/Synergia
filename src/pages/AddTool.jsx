import React, { useState } from 'react';
import { Image } from 'lucide-react';

export default function AddTool() {
  const [form, setForm] = useState({
    nome: '',
    descricao: '',
    quantidade: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((s) => ({ ...s, [name]: files[0] }));
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviar Ferramenta', form);
    alert('Ferramenta adicionada (simulação)');
  };

  const handleRemove = () => {
    setForm({
      nome: '',
      descricao: '',
      quantidade: '',
      image: null,
    });
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Header simples (igual ao AddLocation, mas com título alterado) */}
      <header className="flex justify-between items-center p-6 bg-gray-100">
        <h3 className="text-lg font-bold" style={{ color: '#00715D' }}>Cadastrar Ferramenta</h3>
        
        <div className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="text-right">
            <p className="text-sm font-bold text-gray-800">Isaac Araújo</p>
            <p className="text-xs text-gray-400">Super Admin</p>
          </div>
          <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
            IA
          </div>
        </div>
      </header>

      <main className="p-8 bg-gray-100 flex-1 overflow-y-auto">
        {/* Styles locais para scrollbar mais sutil (copiado do AddLocation) */}
        <style>{`
          /* scroll fino, sem fundo escuro */
          .custom-scroll { scrollbar-width: thin; scrollbar-color: #cbd5db transparent; }
          .custom-scroll::-webkit-scrollbar { width: 6px; height: 6px; background: transparent; }
          .custom-scroll::-webkit-scrollbar-track { background: transparent; border-radius: 9999px; }
          .custom-scroll::-webkit-scrollbar-thumb { background: #cbd5db; border-radius: 9999px; }
          .custom-scroll::-webkit-scrollbar-thumb:hover { background: #aab7bf; }
        `}</style>

        {/* Container Centralizado para o Formulário */}
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-sm p-8">
          
          <form onSubmit={handleSubmit} className="space-y-8 text-center">
            
            <h2 className="text-xl font-bold text-gray-800 mb-6">Cadastrar Ferramenta</h2>

            {/* Nome do Equipamento */}
            <label className="block text-left flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 w-1/3">Nome do equipamento</span>
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Saco de Lixo"
                className="w-2/3 p-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400"
              />
            </label>

            {/* Descrição (Textarea) */}
            <label className="block text-left flex items-start justify-between">
              <span className="text-sm font-medium text-gray-700 w-1/3 pt-2">Descrição</span>
              <textarea
                name="descricao"
                value={form.descricao}
                onChange={handleChange}
                placeholder="Breve descrição do equipamento"
                className="w-2/3 h-28 p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400"
              />
            </label>

            {/* Quantidade */}
            <label className="block text-left flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700 w-1/3">Quantidade</span>
              <input
                type="number"
                name="quantidade"
                value={form.quantidade}
                onChange={handleChange}
                placeholder="10 Unidades"
                className="w-2/3 p-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400"
              />
            </label>
            
            {/* Imagem (Alinhado à esquerda para seguir o layout do AddLocation) */}
            <label className="block text-left flex items-center justify-between pt-4">
              <span className="text-sm font-medium text-gray-700 w-1/3">Imagem</span>
              <div className="flex items-center gap-3 w-2/3">
                <label className="flex items-center px-3 py-2 border border-gray-300 rounded-lg cursor-pointer text-sm text-gray-600 bg-white hover:bg-gray-50">
                  <Image className="w-4 h-4 mr-2" style={{ color: '#00715D' }} />
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                  />
                  Upload da imagem
                </label>
                {form.image && <span className="text-sm text-gray-600 truncate">{form.image.name}</span>}
              </div>
            </label>

            {/* Ações: Adicionar (Verde) e Remover (Vermelho) */}
            <div className="flex items-center justify-center gap-6 pt-8">
              <button
                type="submit"
                className="px-8 py-2 rounded-md text-white font-medium"
                style={{ backgroundColor: '#00715D' }}
              >
                Adicionar
              </button>

              <button
                type="button"
                onClick={handleRemove}
                className="px-6 py-2 rounded-md text-white font-medium bg-red-600 hover:bg-red-700"
              >
                Remover
              </button>
            </div>
          </form>

        </div>
      </main>
    </div>
  );
}