import React, { useState } from 'react';

const PageHomeOut = () => {
  const [metroPorTendida, setMetroPorTendida] = useState('');
  const [cantidadPorTendida, setCantidadPorTendida] = useState('');
  const [cantidadARealizar, setCantidadARealizar] = useState('');

  const calcularMetros = () => {
    const metro = parseFloat(metroPorTendida);
    const cantidadTendida = parseFloat(cantidadPorTendida);
    const cantidadRealizar = parseFloat(cantidadARealizar);

    if (!metro || !cantidadTendida || !cantidadRealizar) return 0;

    return (cantidadRealizar / cantidadTendida) * metro;
  };

  const handleWheel = (e) => {
    e.target.blur();
  };

  const onlyAllowNumbers = (e) => {
    const value = e.target.value;
    // Solo permitir dígitos y punto decimal
    if (/^\d*\.?\d*$/.test(value)) {
      if (e.target.name === 'metroPorTendida') setMetroPorTendida(value);
      if (e.target.name === 'cantidadPorTendida') setCantidadPorTendida(value);
      if (e.target.name === 'cantidadARealizar') setCantidadARealizar(value);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4 text-white">
      <style>
        {`
          input[type=number]::-webkit-inner-spin-button,
          input[type=number]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type=number] {
            -moz-appearance: textfield;
          }
        `}
      </style>

      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Calculadora de Metros</h1>

        <div className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Metro por tendida:</label>
            <input
              type="text"
              inputMode="decimal"
              name="metroPorTendida"
              value={metroPorTendida}
              onChange={onlyAllowNumbers}
              onWheel={handleWheel}
              className="w-full border border-gray-600 rounded-xl p-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Cantidad por tendida:</label>
            <input
              type="text"
              inputMode="numeric"
              name="cantidadPorTendida"
              value={cantidadPorTendida}
              onChange={onlyAllowNumbers}
              onWheel={handleWheel}
              className="w-full border border-gray-600 rounded-xl p-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Cantidad a realizar:</label>
            <input
              type="text"
              inputMode="numeric"
              name="cantidadARealizar"
              value={cantidadARealizar}
              onChange={onlyAllowNumbers}
              onWheel={handleWheel}
              className="w-full border border-gray-600 rounded-xl p-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mt-6 p-4 bg-gray-700 rounded-xl text-center">
            <h2 className="text-lg font-semibold text-gray-300">Metros a comprar:</h2>
            <p className="text-3xl text-blue-400 font-bold mt-2">{calcularMetros().toFixed(2)} metros</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHomeOut;
