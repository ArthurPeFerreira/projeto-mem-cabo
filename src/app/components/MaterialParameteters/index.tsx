"use client";

import { formatScientific } from "@/lib/functions/formatScientific";
import { conductiveMaterials } from "@/lib/materials/conductiveMaterials";

interface MaterialParametetersProps {
  selectedMaterialKey: string | null;
}

export function MaterialParameteters({
  selectedMaterialKey,
}: MaterialParametetersProps) {
  return (
    <div className="bg-gray-800 w-fit h-fit p-2 rounded-md">
      <h1 className="text-white text-3xl text-center mb-2 p-1">
        Parâmetros do Condutor
      </h1>
      <div className="flex flex-col gap-2 text-white text-md px-2">
        {selectedMaterialKey && (
          <>
            <div>
              <strong>Símbolo:</strong>{" "}
              {conductiveMaterials[selectedMaterialKey].symbol}
            </div>
            <div>
              <strong>Permeabilidade Relativa (μᵣ):</strong>{" "}
              {formatScientific(
                conductiveMaterials[selectedMaterialKey].relativePermeability
              )}
            </div>
            <div>
              <strong>Resistividade (ρ):</strong>{" "}
              {formatScientific(
                conductiveMaterials[selectedMaterialKey].resistivity
              )}{" "}
              Ω·m
            </div>
            <div>
              <strong>Coeficiente de Temperatura a 20 °C (α₂₀):</strong>{" "}
              {formatScientific(conductiveMaterials[selectedMaterialKey].alpha)}{" "}
              °C⁻¹
            </div>

            <div>
              <strong>Temperatura Absoluta (|T|):</strong>{" "}
              {conductiveMaterials[selectedMaterialKey].absoluteTemperature} °C
            </div>
          </>
        )}
        {!selectedMaterialKey && (
          <span className="text-gray-400">Selecione um material</span>
        )}
      </div>
    </div>
  );
}
