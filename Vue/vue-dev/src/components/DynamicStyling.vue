<template>
    <div id="component">
        <div class="demo"
             @click="attachRed = !attachRed"
             :class="divClasses"></div>
        <div class="demo"
             :class="{red: attachRed}"></div>
        <div class="demo"
             :class="[color, {red: attachRed}]"></div>
        <hr>
        <input type="text" v-model="color">
        <hr>
        <div class="demo2" :style="{'background-color': color2}"></div>
        <div class="demo2" :style="myStyle"></div>
        <div class="demo2" :style="[myStyle, {height: width + 'px'}]"></div>
        <hr>
        <input type="text" v-model="color2">
        <input type="text" v-model="width">
    </div>
</template>

<script>
    export default {
        name: "DynamicStyling",
        data() {
            return {
                attachRed: false,
                color: 'green',
                color2: 'gray',
                width: 100
            }
        },
        computed: {
            divClasses: function () {
                return {
                    red: this.attachRed,
                    blue: !this.attachRed
                }
            },
            myStyle: function () {
                return {
                    backgroundColor: this.color2,
                    width: this.width + 'px'
                }
            }

        }
    }

</script>

<style scoped>
    .demo {
        width: 100px;
        height: 100px;
        background-color: gray;
        display: inline-block;
        margin: 10px;
    }

    .demo2 {
        width: 100px;
        height: 100px;
        background-color: gray;
        display: inline-block;
        margin: 10px;
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
</style>
