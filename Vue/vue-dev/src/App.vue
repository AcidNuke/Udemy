<template>
  <div id="app">
<!--    <MyComponent></MyComponent>-->
<!--    <Section2></Section2>-->
      <exercise3></exercise3>
  </div>
</template>

<script>
  //import HelloWorld from './components/HelloWorld.vue'
  //import Section2 from "./components/Section2";
  //import Exercise2 from "./components/Exercise2";
  import Exercise3 from "./components/Exercise3";

export default {
  name: 'app',
  components: {
    //MyComponent,
    //Section2,
    Exercise3
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
