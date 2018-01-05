<template>
  <div id="app">

    <div class="board">
      <div class="row">
        <jv-cell :class="{ganhou: ganhouClass11}" v-model="pos11" @jogar="jogar" ></jv-cell>
        <jv-cell :class="{ganhou: ganhouClass12}" v-model="pos12" @jogar="jogar" ></jv-cell>
        <jv-cell :class="{ganhou: ganhouClass13}" v-model="pos13" @jogar="jogar" ></jv-cell>
      </div>

      <div class="row">
        <jv-cell :class="{ganhou: ganhouClass21}"  v-model="pos21" @jogar="jogar" ></jv-cell>
        <jv-cell :class="{ganhou: ganhouClass22}"  v-model="pos22" @jogar="jogar" ></jv-cell>
        <jv-cell :class="{ganhou: ganhouClass23}"  v-model="pos23" @jogar="jogar" ></jv-cell>
      </div>

      <div class="row">
        <jv-cell :class="{ganhou: ganhouClass31}" v-model="pos31" @jogar="jogar" ></jv-cell>
        <jv-cell :class="{ganhou: ganhouClass32}" v-model="pos32" @jogar="jogar" ></jv-cell>
        <jv-cell :class="{ganhou: ganhouClass33}" v-model="pos33" @jogar="jogar" ></jv-cell>
      </div>
    </div>

    <div class="actionBar">
      <button class="reset" @click="reiniciar">reiniciar</button>
      <div>
        <h1>
          JOGADOR
          {{ vezDe }}
          <h1 v-show="ganhouGeral" style="margin-top:0px">GANHOU</h1>
        </h1>
      </div>
    </div>

  </div>
</template>

<script>
import jvCell from './components/jvCell'

export default {
  name: 'app',
  components: { jvCell },
  data () {
    return {
      vezDe: 'X',
      pos11: { pos: '11', exibir: null },
      pos12: { pos: '12', exibir: null },
      pos13: { pos: '13', exibir: null },
      pos21: { pos: '21', exibir: null },
      pos22: { pos: '22', exibir: null },
      pos23: { pos: '23', exibir: null },
      pos31: { pos: '31', exibir: null },
      pos32: { pos: '32', exibir: null },
      pos33: { pos: '33', exibir: null }
    }
  },
  computed: {
    ganhou01 () { return this.ganhou([this.pos11, this.pos12, this.pos13]) },
    ganhou02 () { return this.ganhou([this.pos21, this.pos22, this.pos23]) },
    ganhou03 () { return this.ganhou([this.pos31, this.pos32, this.pos33]) },
    ganhou04 () { return this.ganhou([this.pos11, this.pos21, this.pos31]) },
    ganhou05 () { return this.ganhou([this.pos12, this.pos22, this.pos32]) },
    ganhou06 () { return this.ganhou([this.pos13, this.pos23, this.pos33]) },
    ganhou07 () { return this.ganhou([this.pos11, this.pos22, this.pos33]) },
    ganhou08 () { return this.ganhou([this.pos13, this.pos22, this.pos31]) },
    ganhouGeral () {
      let simGanhou = [
        this.ganhou01, this.ganhou02, this.ganhou03,
        this.ganhou04, this.ganhou05, this.ganhou06,
        this.ganhou07, this.ganhou08
      ].reduce((p, e) => p + e ? 1 : 0, 0) === 1
      if (simGanhou) this.vezDe = this.vezDe === 'X' ? 'O' : 'X'
      return simGanhou
    },
    ganhouClass11 () { return this.ganhou01 || this.ganhou04 || this.ganhou07 },
    ganhouClass12 () { return this.ganhou01 || this.ganhou05 },
    ganhouClass13 () { return this.ganhou01 || this.ganhou06 || this.ganhou08 },
    ganhouClass21 () { return this.ganhou02 || this.ganhou04 },
    ganhouClass22 () { return this.ganhou02 || this.ganhou05 || this.ganhou07 || this.ganhou08 },
    ganhouClass23 () { return this.ganhou02 || this.ganhou06 },
    ganhouClass31 () { return this.ganhou03 || this.ganhou04 || this.ganhou08 },
    ganhouClass32 () { return this.ganhou03 || this.ganhou05 },
    ganhouClass33 () { return this.ganhou03 || this.ganhou06 || this.ganhou07 }
  },
  methods: {
    jogar (pos) {
      let vezDeJogar = this.vezDe
      let ninguemGanhou = !this.ganhouGeral
      if (ninguemGanhou) {
        this.vezDe = vezDeJogar === 'X' ? 'O' : 'X'
        this['pos' + pos].exibir = vezDeJogar
      }
    },
    ganhou (posicoes) {
      const result = posicoes.map((i) => i.exibir)
      return result[0] != null && result[0] === result[1] && result[0] === result[2]
    },
    reiniciar () {
      [ 'pos11', 'pos12', 'pos13',
        'pos21', 'pos22', 'pos23',
        'pos31', 'pos32', 'pos33' ]
      .forEach((pos) => { this[pos].exibir = null })
    }
  }
}
</script>

<style>
h1{ margin-bottom: 0px; }
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
  padding: 20px;
  font-size: 15px;
  font-family: monospace;
  background-color: cornsilk
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
