<script setup lang="ts">

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
          <span class="instrukcja" v-html="textToDisplay2"></span>
          <span class="instrukcja" v-html="textToDisplay3"></span>
        </div>
        <button class="dalej anim1" @click="$emit('koniec-instrukcja')"
          @keydown.enter="$emit('koniec-instrukcja-focus')" role="button">Dalej</button>
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
  align-items:flex-end;

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

.instrukcja {
  color: rgb(0, 0, 0);
  /* font-size: 41px; */
  font-size: 2.4em;
  font-style: normal;
  font-weight: 300;
  font-family: "Proxima Nova", sans-serif;
  line-height: 1.7;
  position: relative;
}

.dalej {
  /* background-image: url("../assets/przycisk_dalej_imie.png"); */
  color: rgb(29, 56, 80);
  font-size: 4.3em;
  font-style: bold;
  font-weight: 700;
  font-family: "Proxima Nova", sans-serif;
  /* position: absolute; */
  /* top: 820px;
  left: 850px; */
  width: 4em;
  height: 1.5em;
  border: 4px solid rgb(0, 187, 255);
  /* display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;           /* Prevent overflow *
  transform-origin: center;  */
  transition: .2s ease-in-out;
  margin-top: -0.3em;

}
</style>