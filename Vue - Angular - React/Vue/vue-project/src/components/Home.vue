<template>
  <div class="hello">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ heading }}</h1>
          <div class="is-two-thirds column is-paddingless">
            <h2 class="subtitle is-4">{{ subheading }}</h2>
          </div>
          <a class="button is-large is-primary" id="learn">Learn More</a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns pd is-desktop">
          <div class="column is-1 has-text-centered">
            <i class="fas fa-cog is-primary"></i>
          </div>
          <div class="column is-one-third-desktop">
            <p class="title">
              <strong>We provide superiod logistics so that your business can succeed in a crazy world</strong>
            </p>
          </div>
          <div class="column">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate nunc eget tristique
              porttitor. Sed eu faucibus justo, lobortis posuere lacus. Nulla venenatis magna quis felis lacinia, eu
              sagittis sem laoreet.
            </p>
          </div>

        </div>
      </div>
      <div class="columns pd">
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">
                "Praesent viverra quam nec velit commodo ultrices. Morbi tempor a velit sit amet porta. Donec non velit vulputate, pellentesque dui sed, cursus elit."
              </p>
              <p class="subtitle">
                - Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">
                "Praesent viverra quam nec velit commodo ultrices. Morbi tempor a velit sit amet porta. Donec non velit vulputate, pellentesque dui sed, cursus elit."
              </p>
              <p class="subtitle">
                - Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-content">
              <p class="title">
                "Praesent viverra quam nec velit commodo ultrices. Morbi tempor a velit sit amet porta. Donec non velit vulputate, pellentesque dui sed, cursus elit."
              </p>
              <p class="subtitle">
                - Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        heading: 'Soaring to new heights',
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import '../mq'

  .hero
    background: url("../assets/clouds.jpg")

    .title
      +mobile
        font-weight: bold
      +tablet
        font-size: 2.5rem
      +desktop
        font-size: 4rem
        margin-top: 2rem

  h2
    margin: 1.5rem 0 2rem 0 !important

  .fa-cog
    font-size: 40px

  #learn
    +desktop
      margin-bottom: 2rem

  .pd
    +tablet
      padding: 2em 0

</style>
