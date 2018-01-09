<template>
  <div id="app">
    <jv-board v-model="posicoes" @jogar="jogarPartida"></jv-board>
    <div class="options">
      <button class="reset" @click="reiniciar">reiniciar</button>
      <div>
        <h1>
          JOGADOR
          {{ vezDe }}
          <h1 v-show="alguemGanhou">GANHOU</h1>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import jvBoard from './components/jvBoard'

const allEqual = arr => arr.every(v => v === arr[0])

export default {
  name: 'app',
  components: { jvBoard },
  data() {
    return {
      vezDe: 'X',
      posicoes: {
        pos11: {
          exibir: null,
          ganhou: false
        },
        pos12: {
          exibir: null,
          ganhou: false
        },
        pos13: {
          exibir: null,
          ganhou: false
        },
        pos21: {
          exibir: null,
          ganhou: false
        },
        pos22: {
          exibir: null,
          ganhou: false
        },
        pos23: {
          exibir: null,
          ganhou: false
        },
        pos31: {
          exibir: null,
          ganhou: false
        },
        pos32: {
          exibir: null,
          ganhou: false
        },
        pos33: {
          exibir: null,
          ganhou: false
        }
      }
    }
  },
  computed: {
    // gostaria que nao existisse esse mapeamento
    linha1() {
      return [this.posicoes.pos11, this.posicoes.pos12, this.posicoes.pos13]
    },
    linha2() {
      return [this.posicoes.pos21, this.posicoes.pos22, this.posicoes.pos23]
    },
    linha3() {
      return [this.posicoes.pos31, this.posicoes.pos32, this.posicoes.pos33]
    },
    coluna1() {
      return [this.posicoes.pos11, this.posicoes.pos21, this.posicoes.pos31]
    },
    coluna2() {
      return [this.posicoes.pos12, this.posicoes.pos22, this.posicoes.pos32]
    },
    coluna3() {
      return [this.posicoes.pos13, this.posicoes.pos23, this.posicoes.pos33]
    },
    vertical1() {
      return [this.posicoes.pos11, this.posicoes.pos22, this.posicoes.pos33]
    },
    vertical2() {
      return [this.posicoes.pos13, this.posicoes.pos22, this.posicoes.pos31]
    },
    ganhouLinha1() {
      return this.ganhou(this.linha1)
    },
    ganhouLinha2() {
      return this.ganhou(this.linha2)
    },
    ganhouLinha3() {
      return this.ganhou(this.linha3)
    },
    ganhouColuna1() {
      return this.ganhou(this.coluna1)
    },
    ganhouColuna2() {
      return this.ganhou(this.coluna2)
    },
    ganhouColuna3() {
      return this.ganhou(this.coluna3)
    },
    ganhouVertical1() {
      return this.ganhou(this.vertical1)
    },
    ganhouVertical2() {
      return this.ganhou(this.vertical2)
    },
    alguemGanhou() {
      let haGanhadores =
        [
          this.ganhouLinha1,
          this.ganhouLinha2,
          this.ganhouLinha3,
          this.ganhouColuna1,
          this.ganhouColuna2,
          this.ganhouColuna3,
          this.ganhouVertical1,
          this.ganhouVertical2
        ].reduce((p, seGanhou) => p + (seGanhou ? 1 : 0), 0) >= 1
      return haGanhadores
    }
  },
  methods: {
    ganhou(posicoes) {
      const marcados = posicoes.map(i => i.exibir)
      let haUmganhador = marcados[0] && allEqual(marcados)
      posicoes.forEach(i => {
        i.ganhou = i.ganhou || haUmganhador
      })
      return haUmganhador
    },
    jogarPartida(pos) {
      let vezDeJogar = this.vezDe
      let ninguemGanhou = !this.alguemGanhou
      if (ninguemGanhou) {
        pos.exibir = vezDeJogar
        if (!this.alguemGanhou) {
          this.vezDe = vezDeJogar === 'X' ? 'O' : 'X' /// ajuste
        }
      }
    },
    reiniciar() {
      ;[
        'pos11',
        'pos12',
        'pos13',
        'pos21',
        'pos22',
        'pos23',
        'pos31',
        'pos32',
        'pos33'
      ].forEach(pos => {
        this.posicoes[pos].exibir = null
        this.posicoes[pos].ganhou = false
      })
    }
  }
}
</script>

<style>
h1 {
  margin-bottom: 0px;
  margin-top: 0px;
}
#app {
  font-family: Courier New, Courier, monospace;
  float: left;
  margin: 20px;
  padding: 50px;
  height: 480px;
  width: 370px;
  max-width: 370px;
  max-height: 480px;
  min-width: 370px;
  min-height: 480px;
  background-color: #eef;
}
.reset {
  margin-bottom: 20px;
  padding: 20px;
  font-size: 15px;
  font-family: monospace;
}
.row {
  clear: left;
}
.options {
  clear: left;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
