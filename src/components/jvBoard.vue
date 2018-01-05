<template>
  <div class="board">
    <div class="row">
      <jv-cell v-model="value.pos11" @jogar="jogar(value.pos11)" ></jv-cell>
      <jv-cell v-model="value.pos12" @jogar="jogar(value.pos12)" ></jv-cell>
      <jv-cell v-model="value.pos13" @jogar="jogar(value.pos13)" ></jv-cell>
    </div>
    <div class="row">
      <jv-cell v-model="value.pos21" @jogar="jogar(value.pos21)" ></jv-cell>
      <jv-cell v-model="value.pos22" @jogar="jogar(value.pos22)" ></jv-cell>
      <jv-cell v-model="value.pos23" @jogar="jogar(value.pos23)" ></jv-cell>
    </div>
    <div class="row">
      <jv-cell v-model="value.pos31" @jogar="jogar(value.pos31)" ></jv-cell>
      <jv-cell v-model="value.pos32" @jogar="jogar(value.pos32)" ></jv-cell>
      <jv-cell v-model="value.pos33" @jogar="jogar(value.pos33)" ></jv-cell>
    </div>
  </div>
</template>

<script>
import jvCell from './jvCell'

export default {
  name: 'jvBoard',
  components: { jvCell },
  props: [ 'value' ],
  methods: {
    jogar (pos) {
      this.$emit('jogar', pos)
    }
  }
}
</script>
