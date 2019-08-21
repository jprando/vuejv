const vitorias = [448, 56, 7, 292, 146, 73, 273, 84]
const convertLetra = letra => value => (value == letra ? 1 : 0)
const toBinario = (arr, verificaLetra) => arr.map(verificaLetra).join``
const haGanhador = valor => element => (element & valor) == element

import posicaoGanhador from './posicaoGanhador'

const verificaSe = letra => {
  const nessa = partida => parseInt(toBinario(partida, convertLetra(letra)), 2)
  return {
    ganhou: partida => ({
      ganhou: vitorias.some(haGanhador(nessa(partida))) && letra,
      posicaoVitoria: vitorias.filter(haGanhador(nessa(partida))).map(i => posicaoGanhador[i])
    })
    
  }
}

const ganhador = partida => {
  const xResult = verificaSe`X`.ganhou(partida)
  if(xResult.ganhou) {
    return xResult
  } else {
    const oResult = verificaSe`O`.ganhou(partida)
    if(oResult) {
      return oResult
    }
  }
}

export default ganhador