<script setup lang="ts">
import { useMainCompStore } from '../stores/appStores'

const store = useMainCompStore();
</script>

<template>
    <div ref="stageParent" class="tlo" role="img">
        <div class="container">
            <div class="col1"></div>
            <div class="col1">
                <h1 class="title">
                    <span>Polska</span>
                    <span class="block">w świecie</span>
                </h1>
            </div>

        </div>
        <div class="container">
            <button class="start my-button" @click="store.changeStart" @keydown.enter="store.changeStartFocus">
                Start
            </button>
        </div>

    </div>
</template>

<style scoped>
.tlo {
    background-image: url("../assets/Plansza_glowna.png");
    background-size: 1920px 1080px;
    height: 1080px;
    width: 1920px;
    top: 0px;
    left: 0px;
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 1080px;
    align-items: center;
    justify-content: space-evenly;
}



.container {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 540px;
    max-width: 1600px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-evenly;
}

.col1 {
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 4.3em;
    /* background-color: #08e926; */

}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

.title {
    font-size: 4.3em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    text-align: center;
}

.block {
  display: block;
}

.start {
    font-size: 6.3em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    background-size: 432px 168px;
    background-position: -2px -3px;
    background-repeat: no-repeat;
    border-radius: 50px;
    margin-top: 1em;
    width: 4em;
    height: 1.5em;
    border: 4px solid rgb(0, 0, 0);
    overflow: visible;
}

.start:focus {
     outline: 5px solid #e90808;
}
</style>