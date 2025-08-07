<script setup lang="ts">
import { onMounted } from 'vue';
import { useMainCompStore } from '../stores/appStores'

const store = useMainCompStore();

onMounted(() => {
     const elementToFocus = document.querySelector(".latwy")
       if (elementToFocus&&store.IfLevelOneChoicesFocusOn) {
    (elementToFocus as HTMLElement).focus();
  }
})
</script>

<template>
    <div class="tlo-level1" role="img" aria-label="Wybór poziomu">
        <div class="container">
            <div class="container-inner">
                <h1 class="title">Poziom trudności</h1>
                <button class="level-button latwy my-button" @click="$emit('wybor-levelu1')"
                    @keydown.enter="$emit('wybor-levelu1-focus')" role="button">łatwy</button>
                <button class="level-button trudny my-button" role="button">trudny</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tlo-level1 {
    background-image: url("../assets/Plansza_pod_instruckje_i_wybor_poziomow.png");
    background-size: 1920px 1080px;
    height: 1080px;
    width: 1920px;
    top: 0px;
    left: 0px;
    position: absolute;
}

.container {
    display: flex;
    flex-direction: column;
    height: 1080px;
    justify-content: center;
    align-items: flex-end;
}

.container-inner {
    display: flex;
    flex-direction: column;
    width: 900px;
    justify-content: center;
    align-items: center;

    margin-right: 3em;
    /* border: 4px solid black;
  border-radius: 25px; */
}

.title {
    font-size: 5.3em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    text-align: center;
}

.level-button {
    font-size: 4.3em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    border-radius: 50px;
    width: 6em;
    height: 2em;
    border: 4px solid rgb(0, 0, 0);
    overflow: visible;
}

.level-button:focus {
  /* border: 4px solid #08e926; */
  /* outline: thick double #08e926; */
  outline: 5px solid #e90808;
}

.latwy {
    margin-top: 2em;
    background-color: rgb(255, 178, 0);
}

.trudny {
    margin-top: .8em;
    margin-bottom: 3em;
    background-color: rgb(238, 114, 62);
}
</style>