<template>
  <div id="app">
    <div class="row">
      <button class="cell" :disabled="pos11 != null" @click="pos11 = jogar()">{{ pos11 }}</button>
      <button class="cell" :disabled="pos12 != null" @click="pos12 = jogar()">{{ pos12 }}</button>
      <button class="cell" :disabled="pos13 != null" @click="pos13 = jogar()">{{ pos13 }}</button>
    </div>
    <div class="row">
      <button class="cell" :disabled="pos21 != null" @click="pos21 = jogar()">{{ pos21 }}</button>
      <button class="cell" :disabled="pos22 != null" @click="pos22 = jogar()">{{ pos22 }}</button>
      <button class="cell" :disabled="pos23 != null" @click="pos23 = jogar()">{{ pos23 }}</button>
    </div>
    <div class="row">
      <jv-cell :value="pos31" :vezde="vezDe" @jogar="jogar"></jv-cell>
      <jv-cell :value="pos32" :vezde="vezDe" @jogar="jogar"></jv-cell>
      <jv-cell :value="pos33" :vezde="vezDe" @jogar="jogar"></jv-cell>
    </div>
    <div class="actionBar">
      <button @click="reiniciar">reiniciar</button>
    </div>
    <pre>{{ $data }}</pre>
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
      pos11: null,
      pos12: null,
      pos13: null,
      pos21: null,
      pos22: null,
      pos23: null,
      pos31: null,
      pos32: null,
      pos33: null
    }
  },
  methods: {
    jogar () {
      console.log('jogar')
      let vezDeJogar = this.vezDe
      this.vezDe = vezDeJogar === 'X' ? 'O' : 'X'
      return vezDeJogar
    },
    reiniciar () {
      [ 'pos11', 'pos12', 'pos13',
        'pos21', 'pos22', 'pos23',
        'pos31', 'pos32', 'pos33'
      ].forEach((pos) => { this[pos] = null })
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
