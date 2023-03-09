
//join

const lista = [{ nome: 'Larissa'}, { nome: 'Lorraine'}, { nome: 'Manuela'}]

console.log(
lista.map(e => e.nome)
    .filter((e) => e.startsWith('L'))
    .join(', ')
)


