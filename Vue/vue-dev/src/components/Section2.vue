<template>
    <div id="component">
        <div id="test">
            <button v-on:click="increase(2, $event)">Click me</button>
            <button v-on:click="counter++">Click me</button>
            <p>
                Counter: {{ counter > 10 ? "Greater than 10" : "Smaller"}}
            </p>
            <p v-on:mousemove="updateCoord">
                Coordinates: {{ x }} / {{ y }}
                - <span v-on:mousemove.stop.prevent="">DEADSPOT</span>
            </p>
<!--            <input type="text" v-on:keyup.enter="alertMe">-->
            <input type="text" v-on:keydown.enter="alertName" v-model="name">
        </div>
    </div>

</template>

<script>
    var counter = 0;
    var x = 0;
    var y = 0;

    var name = "AcidNuke";

    export default {
        name: "Section2",
        data() {
            return {
                counter,
                x,
                y,
                name
            }
        },
        methods: {
            // eslint-disable-next-line no-unused-vars
            increase: function (amount, event) {
                this.counter += amount;

            },
            updateCoord: function (event) {
                this.x = event.clientX;
                this.y = event.clientY;
            },
            alertMe: function () {
                alert('Alert');
            },
            alertName: function () {
                alert(name);
            }
        }
    }
</script>

<style scoped>

</style>