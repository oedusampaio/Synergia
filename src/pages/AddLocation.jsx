// ...existing code...
import React, { useState } from 'react';
import { Image, Calendar, X } from 'lucide-react';

export default function AddLocation() {
  const [form, setForm] = useState({
    image: null,
    descricao: '',
    rua: '',
    numero: '',
    cep: '',
    dataInicio: '',
    dataFim: '',
    equipamentos: [],
  });

  const equipamentosDisponiveis = [
    { id: 'som', label: 'Som' },
    { id: 'iluminacao', label: 'Iluminação' },
    { id: 'cadeiras', label: 'Cadeiras' },
    { id: 'palco', label: 'Palco' },
    { id: 'microphone', label: 'Microfone' },
    { id: 'projetor', label: 'Projetor' },
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((s) => ({ ...s, [name]: files[0] }));
    } else {
      setForm((s) => ({ ...s, [name]: value }));
    }
  };

  const handleEquipamentoToggle = (id) => {
    setForm((s) => ({
      ...s,
      equipamentos: s.equipamentos.includes(id)
        ? s.equipamentos.filter((e) => e !== id)
        : s.equipamentos.length < 5
        ? [...s.equipamentos, id]
        : s.equipamentos,
    }));
  };

  const handleRemoveEquipamento = (id) => {
    setForm((s) => ({
      ...s,
      equipamentos: s.equipamentos.filter((e) => e !== id),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviar', form);
    alert('Local adicionado (simulação)');
  };

  const handleRemove = () => {
    setForm({
      image: null,
      descricao: '',
      rua: '',
      numero: '',
      cep: '',
      dataInicio: '',
      dataFim: '',
      equipamentos: [],
    });
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Header simples sem Topbar */}
      <header className="flex justify-between items-center p-6 bg-gray-100">
        <h3 className="text-lg font-bold" style={{ color: '#00715D' }}>Adicionar novo Local</h3>
        
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
        {/* Styles locais para scrollbar mais sutil (remove fundo preto) */}
        <style>{`
          /* scroll fino, sem fundo escuro */
          .custom-scroll { scrollbar-width: thin; scrollbar-color: #cbd5db transparent; }
          .custom-scroll::-webkit-scrollbar { width: 6px; height: 6px; background: transparent; }
          .custom-scroll::-webkit-scrollbar-track { background: transparent; border-radius: 9999px; }
          .custom-scroll::-webkit-scrollbar-thumb { background: #cbd5db; border-radius: 9999px; }
          .custom-scroll::-webkit-scrollbar-thumb:hover { background: #aab7bf; }
        `}</style>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Imagem */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Imagem</span>
              <div className="mt-2 flex items-center gap-3">
                <label className="flex items-center px-3 py-2 border border-gray-300 rounded-full cursor-pointer text-sm text-gray-600 bg-white hover:bg-gray-50">
                  <Image className="w-4 h-4 mr-2" style={{ color: '#00715D' }} />
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                  />
                  Upload da imagem aqui
                </label>
                {form.image && <span className="text-sm text-gray-600 truncate">{form.image.name}</span>}
              </div>
            </label>

            {/* Descrição */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Descrição</span>
              <textarea
                name="descricao"
                value={form.descricao}
                onChange={handleChange}
                placeholder="Breve descrição sobre o local e o que será feito"
                className="mt-2 w-full h-28 p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400"
              />
            </label>

            {/* Endereço - Rua / Número / CEP */}
            <div className="grid grid-cols-12 gap-4">
              <label className="col-span-8">
                <span className="text-sm font-medium text-gray-700">Rua</span>
                <input
                  name="rua"
                  value={form.rua}
                  onChange={handleChange}
                  placeholder="Rua Roberto Azevedo"
                  className="mt-2 w-full p-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400"
                />
              </label>

              <label className="col-span-2">
                <span className="text-sm font-medium text-gray-700">Número</span>
                <input
                  name="numero"
                  value={form.numero}
                  onChange={handleChange}
                  placeholder="108"
                  className="mt-2 w-full p-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400"
                />
              </label>

              <label className="col-span-2">
                <span className="text-sm font-medium text-gray-700">CEP</span>
                <input
                  name="cep"
                  value={form.cep}
                  onChange={handleChange}
                  placeholder="00000-000"
                  className="mt-2 w-full p-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400"
                />
              </label>
            </div>

            {/* Datas */}
            <div className="grid grid-cols-2 gap-4">
              <label>
                <span className="text-sm font-medium text-gray-700">Data Começo evento</span>
                <div className="mt-2 relative">
                  <input
                    type="date"
                    name="dataInicio"
                    value={form.dataInicio}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg text-gray-800"
                  />
                  <Calendar className="absolute right-3 top-2 w-4 h-4" style={{ color: '#00715D' }} />
                </div>
              </label>

              <label>
                <span className="text-sm font-medium text-gray-700">Data final evento</span>
                <div className="mt-2 relative">
                  <input
                    type="date"
                    name="dataFim"
                    value={form.dataFim}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg text-gray-800"
                  />
                  <Calendar className="absolute right-3 top-2 w-4 h-4" style={{ color: '#00715D' }} />
                </div>
              </label>
            </div>

            {/* Equipamentos */}
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Equipamentos (max 5)</span>
              <div className="mt-2 grid grid-cols-2 gap-4">
                {/* Coluna esquerda - Lista de opções */}
                <div className="border border-gray-300 rounded-lg p-3 h-48 overflow-y-auto bg-white custom-scroll">
                  {equipamentosDisponiveis.map((eq) => (
                    <label key={eq.id} className="flex items-center gap-2 py-1 cursor-pointer hover:bg-gray-50 p-1 rounded">
                      <input
                        type="checkbox"
                        checked={form.equipamentos.includes(eq.id)}
                        onChange={() => handleEquipamentoToggle(eq.id)}
                        disabled={form.equipamentos.length >= 5 && !form.equipamentos.includes(eq.id)}
                        className="w-3 h-3"
                        style={{ accentColor: '#00715D' }}
                      />
                      <span className="text-sm text-gray-700">{eq.label}</span>
                    </label>
                  ))}
                </div>

                {/* Coluna direita - Selecionados */}
                <div className="border border-gray-300 rounded-lg p-3 h-48 overflow-y-auto bg-white custom-scroll">
                  <p className="text-xs font-semibold text-gray-600 mb-2">Selecionados ({form.equipamentos.length}/5)</p>
                  {form.equipamentos.length === 0 ? (
                    <p className="text-xs text-gray-400">Nenhum equipamento selecionado</p>
                  ) : (
                    form.equipamentos.map((id) => {
                      const eq = equipamentosDisponiveis.find((e) => e.id === id);
                      return (
                       <div key={id} className="flex items-center justify-between gap-2 py-1 px-2 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded mb-1">
                               <span>{eq.label}</span>
                          {/* botão só com ícone X verde, sem qualquer fundo */}
                          <button
                            type="button"
                            onClick={() => handleRemoveEquipamento(id)}
                            className="p-0 m-0 bg-transparent border-0 flex items-center justify-center"
                            style={{ backgroundColor: 'transparent', boxShadow: 'none', border: 'none', padding: 0 }}
                            aria-label={`Remover ${eq.label}`}
                            title={`Remover ${eq.label}`}
                          >
                            <X size={16} strokeWidth={2} color="#00715D" />
                          </button>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </label>

            {/* Ações */}
            <div className="flex items-center justify-center gap-6 pt-4">
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
                Remover Local
              </button>
            </div>
          </form>

          <p className="text-xs text-gray-500 text-left mt-6">Showing 1-10 from 48 data</p>
        </div>
      </main>
    </div>
  );
}
// ...existing code...