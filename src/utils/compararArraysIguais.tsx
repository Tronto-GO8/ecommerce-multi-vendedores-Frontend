export default function compararArraysIguais<T>(a: T[], b: T[]) {
  if (a.length !== b.length) return false;
  const setA = new Set(a);
  for (const item of b) if (!setA.has(item)) return false;
  return true;
}
