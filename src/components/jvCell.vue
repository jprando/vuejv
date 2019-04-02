<template>
  <button class="cell"
    :class="{ganhou:value.ganhou}"
    :disabled="value.exibir"
    @click="jogar" > {{ value.exibir }}
  </button>
</template>

<script>
export default {
  name: 'jvCell',
  props: ['value'],
  methods: {
    jogar() {
      this.$emit('jogar', this.value)
    }
  }
}
</script>

<style>
.cell {
  cursor: pointer;
  float: left;
  border: solid 1px black;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 60px;
}
.cell:hover {
  background-color: #fee;
}
.ganhou {
  background-color: #aaffaa;
}
.ganhou:hover {
  background-color: #aaffaa;
}
</style>