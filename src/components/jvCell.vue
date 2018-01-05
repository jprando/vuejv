<template>
  <button class="cell" :disabled="enableBtn" @click="jogar">{{ value }}</button>
</template>

<script>
export default {
  name: 'jvCell',
  props: [ 'vezde' ],
  data () {
    return {
      value: null
    }
  },
  computed: {
    enableBtn () { return this.value != null }
  },
  methods: {
    jogar () {
      let vezDeJogar = this.vezde
      this.value = vezDeJogar
      this.$emit('jogar')
    }
  }
}
</script>

<style>
.cell{
  cursor: pointer;
  float: left;
  border: solid 1px black;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 60px
}
.cell:hover{
  background-color: #fee;
}
</style>
