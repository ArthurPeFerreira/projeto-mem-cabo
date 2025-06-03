"use client";

import { useState } from "react";
import Input from "./components/Input";
import MaterialSelector from "./components/MaterialSelection";
import { conductiveMaterials } from "@/lib/materials/conductiveMaterials";
import { MaterialParameteters } from "./components/MaterialParameteters";
import { MU_0 } from "@/lib/constants";
import Select from "react-select";
import CurrentTypeSelector from "./components/CurrentTypeSelection";

const currentOptions = [
  { value: "AC", label: "Corrente Alternada (AC)" },
  { value: "DC", label: "Corrente Contínua (DC)" },
];

export default function Home() {
  const [selectedMaterialKey, setSelectedMaterialKey] = useState<string | null>(
    null
  );
  const [frequency, setFrequency] = useState<number>(60);
  const [temperature, setTemperature] = useState<number>(30);
  const [conductorRadius, setConductorRadius] = useState<number>(1);
  const [conductorLength, setConductorLength] = useState<number>(1);
  const [numberOfWires, setNumberOfWires] = useState<number>(7);
  const [currentType, setCurrentType] = useState<"AC" | "DC">("AC");

  function handleSubmit() {
    if (!selectedMaterialKey) {
      return;
    }

    const conductorArea = Math.PI * conductorRadius * conductorRadius;

    const absoluteTemperature =
      conductiveMaterials[selectedMaterialKey].absoluteTemperature;

    const alpha = conductiveMaterials[selectedMaterialKey].alpha;

    const relativePermeability =
      conductiveMaterials[selectedMaterialKey].relativePermeability;

    const resistivity20 = conductiveMaterials[selectedMaterialKey].resistivity;

    const resistance20 = (resistivity20 * 1) / conductorArea;
    const resistanceNewTemperature =
      resistance20 * (1 + alpha * (temperature - 20));

    const resistivityNewTemperature =
      (resistanceNewTemperature * conductorArea) / conductorLength;

    const skinDepth = Math.sqrt(
      resistivityNewTemperature /
        (Math.PI * frequency * MU_0 * relativePermeability)
    );

    let strandingFactor: number;

    if (numberOfWires < 3) {
      strandingFactor = 1.01;
    } else {
      strandingFactor = 1.02;
    }

    const Rca =
      (resistanceNewTemperature * conductorLength * strandingFactor) /
      (2 * Math.PI * conductorRadius * skinDepth * numberOfWires);
  }

  return (
    <main className="flex flex-row gap-3 p-4 justify-center">
      <form
        className="bg-gray-800 w-fit h-fit p-2 rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h1 className="text-white text-3xl text-center mb-2 p-1">
          Parâmetros de Entrada
        </h1>

        <div className="flex flex-col gap-2">
          <CurrentTypeSelector
            currentType={currentType}
            setCurrentType={setCurrentType}
          />
          <MaterialSelector
            selectedKey={selectedMaterialKey}
            setSelectedKey={setSelectedMaterialKey}
          />
          {currentType === "AC" && (
            <Input
              title="Frequência (Hz):"
              placeholder="Digite a Frequência..."
              setValue={setFrequency}
              value={frequency}
              minimum={0}
              maximum={1000}
              step="1"
            />
          )}

          <Input
            title="Temperatura (°C):"
            placeholder="Digite a Temperatura..."
            setValue={setTemperature}
            value={temperature}
            minimum={-1000}
            maximum={1000}
            step="0.1"
          />
          <Input
            title="Comprimento (m):"
            placeholder="Digite o Comprimento..."
            setValue={setConductorLength}
            value={conductorLength}
            minimum={0}
            maximum={1000}
            step="0.01"
          />

          <Input
            title="Raio (m):"
            placeholder="Digite o Raio..."
            setValue={setConductorRadius}
            value={conductorRadius}
            minimum={0}
            maximum={1000}
            step="0.001"
          />
          <Input
            title="Número de Fios:"
            placeholder="Digite o Número de Fios..."
            setValue={setNumberOfWires}
            value={numberOfWires}
            minimum={0}
            maximum={1000}
            step="1"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-200 ease-in-out cursor-pointer active:scale-95"
          >
            Calcular
          </button>
        </div>
      </form>
      <MaterialParameteters selectedMaterialKey={selectedMaterialKey} />
    </main>
  );
}
