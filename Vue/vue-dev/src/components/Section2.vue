<template>
    <div id="component">
        <div id="test">
            <button v-on:click="counter++">Increase</button>
            <button v-on:click="counter--">Decrease</button>
            <button v-on:click="secondCounter++">Increase Second</button>
            <p>
                Counter: {{ counter }} | {{ output }}
                <br>
                Counter2: {{ secondCounter }} | {{ output }}
            </p>
            <p>
                Result: {{ result() }}
            </p>
            <!--<p v-on:mousemove="updateCoord">
                Coordinates: {{ x }} / {{ y }}
                - <span v-on:mousemove.stop.prevent="">DEADSPOT</span>
            </p>-->
            <!-- <input type="text" v-on:keyup.enter="alertMe">-->
            <!--input type="text" v-on:keydown.enter="alertName" v-model="name"-->
            <!-- Alternative to v-on: = @ -->
            <!-- Alternative to v-bind: = : -->
            <!-- <input type="text" @keydown.enter="alertName" v-model="name">-->
        </div>
    </div>

</template>

<script>
    var counter = 0;
    var secondCounter = 0;
    /*   var x = 0;
       var y = 0;

       var name = "AcidNuke";*/

    export default {
        name: "Section2",
        data() {
            return {
                counter,
                /*x,
                y,
                name,*/
                secondCounter
            }
        },
        computed: {
            output: function () {
                window.console.log("Computed");
                return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
            }
        },
        watch: {
            counter: function () {
                window.console.log("Watcher");

                var vm = this;

                setTimeout(function () {
                    vm.counter = 0;
                }, 2000)
            }
        },
        methods: {
            // eslint-disable-next-line no-unused-vars
            /*increase: function (amount, event) {
                this.counter += amount;
            },*/
            result: function () {
                window.console.log("Method");
                return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5';
            },
            /*updateCoord: function (event) {
                this.x = event.clientX;
                this.y = event.clientY;
            },
            alertMe: function () {
                alert('Alert');
            },
            alertName: function () {
                alert(name);
            }*/
        }
    }
</script>

<style scoped>

</style>
