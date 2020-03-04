<template>
    <div id="exercise">
        <!-- 1) Start the Effect with the Button. The Effect should alternate the "highlight" or "shrink" class on each new setInterval tick (attach respective class to the div with id "effect" below) -->
        <div>
            <button @click="startEffect">Start Effect</button>
            <div id="effect"></div>
        </div>
        <!-- 2) Create a couple of CSS classes and attach them via the array syntax -->
        <div :class="['height', 'width', 'green']">I got no class :(</div>
        <!-- 3) Let the user enter a class (create some example classes) and attach it -->
        <div>
            <input type="text" v-model="color">
            <div :class="color" style="width: 100px; height: 100px"></div>
        </div>
        <!-- 4) Let the user enter a class and enter true/ false for another class (create some example classes) and attach the classes -->
        <div>
            <input type="text" v-model="color2">
            <input type="text" v-model="height">
            <div :style="[myStyle1, myStyle2, myStyle3]"></div>
        </div>
        <!-- 5) Repeat 3) but now with values for styles (instead of class names). Attach the respective styles.  -->
        <div>
            <input type="text">
            <div></div>
        </div>
        <!-- 6) Create a simple progress bar with setInterval and style bindings. Start it by hitting the below button. -->
        <div>
            <button>Start Progress</button>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Exercise4",
        data () {
            return {
                highlight: true,
                shrink: true,
                color: 'gray',
                color2: 'gray',
                height: 100

            }
        },
        computed: {
            startEffect: function() {


                return 1;
            },
            myStyle1: function () {
                return {
                    backgroundColor: 'red',
                    textEmphasis: 'italic'
                }
            },
            myStyle2: function () {
                return {
                    backgroundColor: 'black',
                    textEmphasis: 'bold'
                }
            },
            myStyle3: function () {
                return {
                    backgroundColor: 'green',
                    textEmphasis: 'none'
                }
            }
        }
    }
</script>

<style scoped>
    #effect {
        width: 100px;
        height: 100px;
        border: 1px solid black;
    }

    .highlight {
        background-color: red;
        width: 200px !important;
    }

    .shrink {
        background-color: gray;
        width: 50px !important;
    }

    .red {
        background-color: red;
    }

    .blue {
        background-color: blue;
    }

    .green {
        background-color: green;
    }

    .gray {
        background-color: gray;
    }

    .height {
        height: 150px;
    }

    .width {
        width: 150px;
    }

</style>
