<template>
  <div id="app">
    <a href="https://github.com/jprando/vuejv">
      projeto no github
    </a>
    <jv></jv>
    <span> v1.052.52356 </span>
  </div>
</template>

<script>
import jv from '@/views/jv'
//
export default {
  name: 'app',
  components: { jv }
}
</script>

<style>
a {
  text-decoration: none;
  color: gray;
  position: relative;
  top: -25px;
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
  min-height: 540px;
  background-color: #eef;
}
</style>