<template>
  <div id="app">

    <div class="row">
      <jv-cell :class="{ganhou: ganhou01 || ganhou04 || ganhou07}" v-model="pos11" @jogar="jogar" :disabled="ganhouGeral?'disabled':null"></jv-cell>
      <jv-cell :class="{ganhou: ganhou01 || ganhou05}" v-model="pos12" @jogar="jogar" :disabled="ganhouGeral?'disabled':null"></jv-cell>
      <jv-cell :class="{ganhou: ganhou01 || ganhou06 || ganhou08}" v-model="pos13" @jogar="jogar" :disabled="ganhouGeral?'disabled':null"></jv-cell>
    </div>

    <div class="row">
      <jv-cell :class="{ganhou: ganhou02 || ganhou04}"  v-model="pos21" @jogar="jogar" :disabled="ganhouGeral?'disabled':null"></jv-cell>
      <jv-cell :class="{ganhou: ganhou02 || ganhou05 || ganhou07 || ganhou08}"  v-model="pos22" @jogar="jogar" :disabled="ganhouGeral?'disabled':null"></jv-cell>
      <jv-cell :class="{ganhou: ganhou02 || ganhou06}"  v-model="pos23" @jogar="jogar" :disabled="ganhouGeral?'disabled':null"></jv-cell>
    </div>

    <div class="row">
      <jv-cell :class="{ganhou: ganhou03 || ganhou04 || ganhou08}" v-model="pos31" @jogar="jogar" :disabled="ganhouGeral?'disabled':null"></jv-cell>
      <jv-cell :class="{ganhou: ganhou03 || ganhou05}" v-model="pos32" @jogar="jogar" :disabled="ganhouGeral?'disabled':null"></jv-cell>
      <jv-cell :class="{ganhou: ganhou03 || ganhou06 || ganhou07}" v-model="pos33" @jogar="jogar" :disabled="ganhouGeral?'disabled':null"></jv-cell>
    </div>

    <div class="actionBar">
      <button @click="reiniciar">reiniciar</button>
    </div>

    <h1 v-show="ganhouGeral"> GANHOU !!! </h1>

  </div>
</template>

<script>
import jvCell from './components/jvCell'

export default {
  name: 'app',
  components: {
    jvCell
  },
  data () {
    return {
      vezDe: 'X',
      pos11: { pos: '11', exibir: null, ref: 2 },
      pos12: { pos: '12', exibir: null, ref: 3 },
      pos13: { pos: '13', exibir: null, ref: 5 },
      pos21: { pos: '21', exibir: null, ref: 7 },
      pos22: { pos: '22', exibir: null, ref: 11 },
      pos23: { pos: '23', exibir: null, ref: 13 },
      pos31: { pos: '31', exibir: null, ref: 17 },
      pos32: { pos: '32', exibir: null, ref: 19 },
      pos33: { pos: '33', exibir: null, ref: 23 }
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
      return [
        this.ganhou01, this.ganhou02, this.ganhou03,
        this.ganhou04, this.ganhou05, this.ganhou06,
        this.ganhou07, this.ganhou08
      ].reduce((p, e) => {
        return p + e ? 1 : 0
      }, 0) === 1
    }
  },
  methods: {
    getItem (pos) { return this['pos1' + pos] },
    jogar (pos) {
      let vezDeJogar = this.vezDe
      this.vezDe = vezDeJogar === 'X' ? 'O' : 'X'
      this['pos' + pos].exibir = vezDeJogar
      // console.log('jogar', vezDeJogar, pos)
    },
    ganhou (posicoes) {
      const result = posicoes.map((i) => i.exibir)
      return result[0] != null && result[0] === result[1] && result[0] === result[2]
    },
    reiniciar () {
      [ 'pos11', 'pos12', 'pos13',
        'pos21', 'pos22', 'pos23',
        'pos31', 'pos32', 'pos33'
      ].forEach((pos) => { this[pos].exibir = null })
    }
  }
}
</script>

<style>
.row{
  clear: left;
}
.actionBar{
  clear: left;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
