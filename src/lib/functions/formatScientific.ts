export function formatScientific(value: number, digits: number = 4): string {
  const [base, exp] = value.toExponential(digits).split("e");
  const baseTrimmed = parseFloat(base).toString(); // remove zeros desnecessários
  const expoente = Number(exp);
  return `${baseTrimmed}×10^${expoente}`;
}
