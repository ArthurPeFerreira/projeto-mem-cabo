export type MaterialProps = {
  name: string;
  symbol: string;
  relativePermeability: number;
  resistivity: number;          // ρ (Ω·m)
  alpha: number;                // α (°C⁻¹)
  absoluteTemperature: number;  // °C
};

export const conductiveMaterials: Record<string, MaterialProps> = {
  silver: {
    name: "Prata",
    symbol: "Ag",
    relativePermeability: 0.99998,
    resistivity: 1.6e-8,
    alpha: 3.8e-3,
    absoluteTemperature: 243,
  },
  copper: {
    name: "Cobre",
    symbol: "Cu",
    relativePermeability: 0.999994,
    resistivity: 1.7e-8,
    alpha: 3.9e-3,
    absoluteTemperature: 234.5,
  },
  gold: {
    name: "Ouro",
    symbol: "Au",
    relativePermeability: 1.0,
    resistivity: 2.4e-8,
    alpha: 3.4e-3,
    absoluteTemperature: 274,
  },
  aluminum: {
    name: "Alumínio",
    symbol: "Al",
    relativePermeability: 1.000022,
    resistivity: 2.8e-8,
    alpha: 4.0e-3,
    absoluteTemperature: 236,
  },
  tungsten: {
    name: "Tungstênio",
    symbol: "W",
    relativePermeability: 1.0,
    resistivity: 5.0e-8,
    alpha: 5.2e-3,
    absoluteTemperature: 204,
  },
  nickel: {
    name: "Níquel",
    symbol: "Ni",
    relativePermeability: 600,
    resistivity: 7.8e-8,
    alpha: 6.0e-3,
    absoluteTemperature: 247,
  },
  iron: {
    name: "Ferro",
    symbol: "Fe",
    relativePermeability: 200,
    resistivity: 1.0e-7,
    alpha: 5.5e-3,
    absoluteTemperature: 162,
  },
  constantan: {
    name: "Constantan",
    symbol: "CuNi",
    relativePermeability: 1.0,
    resistivity: 5.0e-7,
    alpha: 8.0e-6,
    absoluteTemperature: 125000,
  },
};
