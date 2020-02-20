<template>
  <div id="app">
<!--    <MyComponent></MyComponent>-->
    <Section2></Section2>
  </div>
</template>

<script>
  //import HelloWorld from './components/HelloWorld.vue'
  import Section2 from "./components/Section2";
  //import Exercise2 from "./components/Exercise2";

export default {
  name: 'app',
  components: {
    //MyComponent,
    Section2
  }
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
