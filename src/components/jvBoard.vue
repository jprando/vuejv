<template>
  <div class="board">
    <div class="row">
      <jv-cell v-model="value.A1" @jogar="jogarPartida"></jv-cell>
      <jv-cell v-model="value.B1" @jogar="jogarPartida"></jv-cell>
      <jv-cell v-model="value.C1" @jogar="jogarPartida"></jv-cell>
    </div>
    <div class="row">
      <jv-cell v-model="value.A2" @jogar="jogarPartida"></jv-cell>
      <jv-cell v-model="value.B2" @jogar="jogarPartida"></jv-cell>
      <jv-cell v-model="value.C2" @jogar="jogarPartida"></jv-cell>
    </div>
    <div class="row">
      <jv-cell v-model="value.A3" @jogar="jogarPartida"></jv-cell>
      <jv-cell v-model="value.B3" @jogar="jogarPartida"></jv-cell>
      <jv-cell v-model="value.C3" @jogar="jogarPartida"></jv-cell>
    </div>
  </div>
</template>

<script>
import jvCell from './jvCell'
export default {
  name: 'jvBoard',
  components: { jvCell },
  props: ['value'],
  methods: {
    jogarPartida(pos) {
      this.$emit('jogar', pos)
    }
  }
}
</script>

<style>
.row {
  clear: left;
}
</style>