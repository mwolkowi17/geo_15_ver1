<script setup lang="ts">
import { onMounted } from 'vue';
import { useMainCompStore } from '../stores/appStores'

const store = useMainCompStore();

onMounted(() => {
  console.log("instrukcja")
  const elementToFocus = document.querySelector(".dalej")
  //dodanie warunku propsu
  if (elementToFocus&&store.ifInstructionFocusOn===true) {
    (elementToFocus as HTMLElement).focus();
  }

})

const textToDisplay = "Gra składa się z dwóch poziomów – łatwego i trudnego." +
  " Rzucasz kostką i posuwasz się do przodu o tyle pól, ile oczek wyrzuciła kostka." +
  "Na początku gry otrzymujesz trzy szanse."

const textToDisplay2 = "– na polach oznaczonych znakiem zapytania czeka Cię pytanie."

const textToDisplay3 = "– na polach oznaczonych znakiem wykrzyknika  czekają Cię zasadzki." +
  "Każda błędna odpowiedź – to strata 1 szansy." +
  "Utrata wszystkich szans oznacza zakończenie gry. Dobra odpowiedź – to kolejny rzut kostką." +
  "Powodzenia!"
</script>

<template>
  <div class="tlo1" aria-label="Zasady gry">
    <div class="container">
      <div class="container-inner">
        <h1 class="instrukcja-title">Zasady gry</h1>
        <div class="kontener-instrukcja">
          <span class="instrukcja" v-html="textToDisplay"></span>
          <div class="icon-text">
            <img class="pytajnik" alt="" src="../assets/znak_zapytania_do_instrukcji.png" />
            <span class="instrukcja" v-html="textToDisplay2"></span>
          </div>
          <img class="wykrzyknik" alt="" src="../assets/wykrzyknik_do_instrukcji.png" />
          <span class="instrukcja" v-html="textToDisplay3"></span>
        </div>
        <button class="dalej my-button anim1" @click="store.changeLeveOneChoice"
          @keydown.enter="store.changeLeveOneChoiceFocus" role="button">Dalej</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tlo1 {
  background-image: url("../assets/Plansza_pod_instruckje_i_wybor_poziomow.png");
  background-size: 1920px 1080px;
  height: 1080px;
  width: 1920px;
  top: 0px;
  left: 0px;
  position: absolute;
  /* display: flex; */
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
  background-color: white;
  flex-wrap: wrap;
  margin-right: 3em;
  border: 4px solid black;
  border-radius: 25px;
}

.instrukcja-title {
  /* position: absolute; */
  color: rgb(0, 0, 0);
  font-size: 6.9em;
  font-style: normal;
  font-weight: 400;
  font-family: "Proxima Nova", sans-serif;
  margin: 0px;
  /* line-height: 1.5; */
  /* top: 5px;
  left: 705px; */
}

.kontener-instrukcja {
  /* display: flex;
  align-items: center; */
  display: inline-block;
  padding: .5rem 1rem;
  /* width: 1300px; */
  /* height: 565px;
  width: 1400px; */
  overflow: auto;
  /* top: 210px;
  left: 260px; */
  /* position: absolute; */
}

.icon-text {
  display: block
}

.instrukcja {
  color: rgb(0, 0, 0);
  /* font-size: 41px; */
  font-size: 2.4em;
  font-style: normal;
  font-weight: 300;
  font-family: "Proxima Nova", sans-serif;
  line-height: 1.7;
  position: relative;
  /* display: block; */
}

.pytajnik {
  position: relative;
  /* top: 283px;
  left: 355px; */
  margin-top: .8em;
  margin-bottom: -1.2em;
  margin-right: 1em;
  /* left: -90px;
  top: 35px */
}

.wykrzyknik {
  position: relative;
  /* top: 475px;
  left: 715px; */
  margin-top: .8em;
  margin-bottom: -1.2em;
  margin-right: 1em;

}

.dalej {
    font-size: 4.3em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    background-size: 432px 168px;
    background-position: -2px -3px;
    background-repeat: no-repeat;
    border-radius: 50px;
    margin-top: -.1em;
    margin-bottom: -.8em;
    width: 4em;
    height: 1.5em;
    border: 4px solid rgb(0, 0, 0);
    background-color: rgb(225, 178, 0);
    overflow: visible;
}

.dalej:focus {
  /* border: 4px solid #08e926; */
  /* outline: thick double #08e926; */
  outline: 5px solid #e90808;
}
</style>