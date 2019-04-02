const vitorias = [448, 56, 7, 292, 146, 73, 273, 84]
const convertLetra = letra => value => (value == letra ? 1 : 0)
const toBinario = (arr, verificaLetra) => arr.map(verificaLetra).join``
const haGanhador = valor => element => (element & valor) == element

const verificaSe = letra => {
  const nessa = partida => parseInt(toBinario(partida, convertLetra(letra)), 2)
  return {
    ganhou: partida => vitorias.some(haGanhador(nessa(partida))) && letra
  }
}

const ganhador = partida =>
  verificaSe`X`.ganhou(partida) || verificaSe`O`.ganhou(partida)

export default ganhador