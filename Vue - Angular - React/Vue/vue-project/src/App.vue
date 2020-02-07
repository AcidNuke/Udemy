<template>
  <div id="app">
    <div class="navbar has-shadow">
      <div class="navbar-brand">
        <div class="navbar-start">
          <a class="navbar-item">My Company</a>
        </div>

        <div class="navbar-burger" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </div>

        <div class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
          <router-link to="/" class="navbar-item r-item">Home</router-link>
          <router-link to="faq" class="navbar-item r-item">Features</router-link>
          <router-link to="faq" class="navbar-item r-item">About</router-link>
          <router-link to="faq" class="navbar-item r-item">FAQ</router-link>

          <div class="navbar-item">
            <p class="control">
              <a class="button is-primary is-outlined">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Join Now</span>
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
    <router-view></router-view>

    <footer class="footer is-primary">
      <div class="container">
        <div class="column">
          <p>And this right here is a siffy footer, where you can put stuff</p>
        </div>
        <div class="column has-text-right">
          <a class="icon" href="#"><i class="fab fa-facebook-square"></i></a>
          <a class="icon" href="#"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function() {
      return {
        isActive: false
      }
    },
    methods: {
      toggleNav: function () {
        this.isActive = !this.isActive;
      }
    }
  }


</script>

<style lang="sass">

  @import '../node_modules/bulma/bulma.sass'
  @import 'mq'

  .navbar
    background-color: #383838
    a:hover
      color: gray

  .navbar-start a
    color: white
    font-weight: bold

  a.r-item
    color: #c1c1c1
    padding: 0.5rem 1.75rem
    +mobile
      color: gray
      &:hover
        background-color: rebeccapurple

  .navbar-burger
    background-color: #C1C1C1

  footer
    background-color: $primary !important
    color: white

    .icon
      color: #fff
      margin-left: 20px


</style>
