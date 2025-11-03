export default function alternarItemNoArray<T>(
  listaDeItens: T[],
  itemSelecionado: T
): T[] {
  return listaDeItens.includes(itemSelecionado)
    ? listaDeItens.filter((i) => i !== itemSelecionado) // se já existe, remove
    : [...listaDeItens, itemSelecionado]; // se não existe, adiciona
}
