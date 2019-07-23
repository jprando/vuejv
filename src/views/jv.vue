<template>
  <div>
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
import jvBoard from '@/components/jvBoard'
import ganhador from '@/services/ganhador'
export default {
  name: 'jv',
  components: { jvBoard },
  data () {
    return {
      vezDe: 'X',
      alguemGanhou: false,
      posicoes: {
        A1: {
          exibir: null,
          ganhou: false
        },
        A2: {
          exibir: null,
          ganhou: false
        },
        A3: {
          exibir: null,
          ganhou: false
        },
        B1: {
          exibir: null,
          ganhou: false
        },
        B2: {
          exibir: null,
          ganhou: false
        },
        B3: {
          exibir: null,
          ganhou: false
        },
        C1: {
          exibir: null,
          ganhou: false
        },
        C2: {
          exibir: null,
          ganhou: false
        },
        C3: {
          exibir: null,
          ganhou: false
        }
      }
    }
  },
  computed: {
    jogada () {
      const getExibir = i => i.exibir
      const getValues = value => Object.values(value).map(getExibir)
      return getValues(this.posicoes)
    },
  },
  methods: {
    jogarPartida (pos) {
      let vezDeJogar = this.vezDe
      let ninguemGanhou = !this.alguemGanhou
      if (ninguemGanhou) {
        let self = this
        pos.exibir = vezDeJogar
        const result = ganhador(self.jogada)
        self.alguemGanhou = result == vezDeJogar
        ninguemGanhou = !self.alguemGanhou
        if (ninguemGanhou) {
          self.vezDe = vezDeJogar === 'X' ? 'O' : 'X'
        }
      }
    },
    reiniciar () {
      const self = this
      for (const item in self.posicoes) {
        let posicao = self.posicoes[item]
        posicao.exibir = null
        posicao.ganhou = false
      }
      self.alguemGanhou = false
    }
  }
}
</script>

<style>
h1 {
  margin-bottom: 0px;
  margin-top: 0px;
}
.reset {
  margin-bottom: 20px;
  padding: 20px;
  font-size: 15px;
  font-family: monospace;
}
.options {
  clear: left;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>