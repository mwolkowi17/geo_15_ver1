<script setup lang="ts">
 import { useScene1Store } from '../stores/scene1Store';

const storeScene1 = useScene1Store()
</script>

<template>
<div class="pulapka1">
      <h2 class="naglowek">Zasadzka!</h2>
      <h3 class="napis">Cofasz się o dwa pola.</h3>
      <button class="przycisk_pulapka1 my-button anim1" @click="storeScene1.koniecPułapki"
 role="button">Dalej</button>
    </div>
</template>

<style scoped>
.pulapka1 {
  background-image: url("../assets/zasadzka.png");
  background-size: 1212px 533px;
  background-repeat: no-repeat;
  height: 533px;
  width: 1212px;
  position: absolute;
  left: 100px;
  top: 250px;
    display: flex;
  height: 800px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.container {
  display: flex;
  height: 800px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.naglowek {
  color: rgb(255, 255, 255);
  font-size: 100px;
  font-style: bold;
  font-weight: 600;
  font-family: "Proxima Nova", sans-serif;
 margin-bottom: 0em;
  height: 88px;
  width: 333px;
  display: flex;
  justify-content: center;
  z-index: 2;

}

.napis {
  color: rgb(255, 255, 255);
  font-size: 70px;
  font-style: bold;
  font-weight: 400;
  font-family: "Proxima Nova", sans-serif;
  white-space: nowrap;
  margin-top: 0.5em;
  margin-bottom: 0.6em;
  height: 88px;
  width: 333px;

  z-index: 2;
    display: flex;
  justify-content: center;
}

.przycisk_pulapka1 {
  /* background-image: url("../assets/przycisk_dalej_imie.png"); */
  color: rgb(29, 56, 80);
  font-size: 80px;
  font-style: bold;
  font-weight: 700;
  font-family: "Proxima Nova", sans-serif;
  background-size: 301px 117px;
  background-position: -1px -2px;
  background-repeat: no-repeat;
  height: 117px;
  width: 301px;
  margin-top: 0em;
  /* left: 545px;
  top: 590px; */
  border: 4px solid rgb(0, 187, 255);

}

.przycisk_pulapka1:hover {
  cursor: pointer;
}

.przycisk_pulapka1:focus {
  /* outline: thick double #08e926; */
  outline: 5px solid #08e926;
}

/* The animation code */
@keyframes example {

  /* from {background-color: red;}
  to {background-color: yellow;} */
  from {
    opacity: 0;
  }

  to {
    opacity: 100;
  }
}

/* The element to apply the animation to */
.anim1 {

  animation-name: example;
  animation-duration: 1s;
}
</style>