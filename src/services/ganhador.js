const vitorias = [448, 56, 7, 292, 146, 73, 273, 84]
const convertLetra = letra => value => (value == letra ? 1 : 0)
const toBinario = (arr, convertLetra) => arr.map(convertLetra).join('')
const haGanhador = valor => element => (element & valor) == element

const verificaSeGanhou = (letra, partida) =>
  vitorias.some(
    haGanhador(parseInt(toBinario(partida, convertLetra(letra)), 2))
  ) && letra

const ganhador = jogada =>
  verificaSeGanhou('X', jogada) || verificaSeGanhou('O', jogada)

export default ganhador