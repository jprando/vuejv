<template>
  <div id="app">

    <div class="board">
      <div class="row">
        <jv-cell v-model="pos11" @jogar="jogarPartida" ></jv-cell>
        <jv-cell v-model="pos12" @jogar="jogarPartida" ></jv-cell>
        <jv-cell v-model="pos13" @jogar="jogarPartida" ></jv-cell>
      </div>

      <div class="row">
        <jv-cell v-model="pos21" @jogar="jogarPartida" ></jv-cell>
        <jv-cell v-model="pos22" @jogar="jogarPartida" ></jv-cell>
        <jv-cell v-model="pos23" @jogar="jogarPartida" ></jv-cell>
      </div>

      <div class="row">
        <jv-cell v-model="pos31" @jogar="jogarPartida" ></jv-cell>
        <jv-cell v-model="pos32" @jogar="jogarPartida" ></jv-cell>
        <jv-cell v-model="pos33" @jogar="jogarPartida" ></jv-cell>
      </div>
    </div>

    <div class="actionBar">
      <button class="reset" @click="reiniciar">reiniciar</button>
      <div>
        <h1>
          JOGADOR
          {{ vezDe }}
          <h1 v-show="ganhouGeral">GANHOU</h1>
        </h1>
      </div>
    </div>

  </div>
</template>

<script>
import jvCell from './components/jvCell'

const allEqual = arr => arr.every(v => v === arr[0])

export default {
  name: 'app',
  components: { jvCell },
  data () {
    return {
      vezDe: 'X',
      pos11: { pos: '11', exibir: null, ganhou: false },
      pos12: { pos: '12', exibir: null, ganhou: false },
      pos13: { pos: '13', exibir: null, ganhou: false },
      pos21: { pos: '21', exibir: null, ganhou: false },
      pos22: { pos: '22', exibir: null, ganhou: false },
      pos23: { pos: '23', exibir: null, ganhou: false },
      pos31: { pos: '31', exibir: null, ganhou: false },
      pos32: { pos: '32', exibir: null, ganhou: false },
      pos33: { pos: '33', exibir: null, ganhou: false }
    }
  },
  computed: {
    // TODO gostaria de ter uma funcao que atenda a regra do jogo no lugar desse mapeamento
    ganhou01 () { return this.ganhou([this.pos11, this.pos12, this.pos13]) },
    ganhou02 () { return this.ganhou([this.pos21, this.pos22, this.pos23]) },
    ganhou03 () { return this.ganhou([this.pos31, this.pos32, this.pos33]) },
    ganhou04 () { return this.ganhou([this.pos11, this.pos21, this.pos31]) },
    ganhou05 () { return this.ganhou([this.pos12, this.pos22, this.pos32]) },
    ganhou06 () { return this.ganhou([this.pos13, this.pos23, this.pos33]) },
    ganhou07 () { return this.ganhou([this.pos11, this.pos22, this.pos33]) },
    ganhou08 () { return this.ganhou([this.pos13, this.pos22, this.pos31]) },
    alguemGanhou () {
      let simGanhou = [
        this.ganhou01, this.ganhou02, this.ganhou03,
        this.ganhou04, this.ganhou05, this.ganhou06,
        this.ganhou07, this.ganhou08
      ].reduce((p, e) => p + (e ? 1 : 0), 0) >= 1
      return simGanhou
    }
  },
  methods: {
    jogarPartida (pos) {
      let vezDeJogar = this.vezDe
      let ninguemGanhou = !this.alguemGanhou
      if (ninguemGanhou) {
        this['pos' + pos].exibir = vezDeJogar
        if (!this.alguemGanhou) {
          this.vezDe = vezDeJogar === 'X' ? 'O' : 'X' /// ajuste
        }
      }
    },
    ganhou (posicoes) {
      const marcados = posicoes.map((i) => i.exibir)
      let haUmganhador = marcados[0] && allEqual(marcados)
      posicoes.forEach(i => {
        i.ganhou = i.ganhou || haUmganhador
      })
      return haUmganhador
    },
    reiniciar () {
      [ 'pos11', 'pos12', 'pos13',
        'pos21', 'pos22', 'pos23',
        'pos31', 'pos32', 'pos33' ]
      .forEach((pos) => {
        this[pos].exibir = null
        this[pos].ganhou = false
      })
    }
  }
}
</script>

<style>
h1{ margin-bottom: 0px; margin-top:0px}
#app{
  font-family: Courier New, Courier, monospace;
  float: left;
  margin: 20px;
  padding:50px;
  height:480px;
  width:370px;
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
.row{
  clear: left;
}
.actionBar{
  clear: left;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
