<script setup lang="ts">
import { useQuizz1Store } from '../stores/quizz1Store'
import { useScene1Store } from '../stores/scene1Store';

const storeScene1 = useScene1Store()
const quizz1Store = useQuizz1Store()


function planszaClass() {
    console.log("klasa do pokazania")
    console.log(quizz1Store.planszeTlo[quizz1Store.pokazPlansze(storeScene1.krok_gracz1_na_planszy)])
    return "planszaQuizz1" + " " + quizz1Store.planszeTlo[quizz1Store.pokazPlansze(storeScene1.krok_gracz1_na_planszy)]
}

function zaznaczenie1() {
    console.log("Zaznaczenie 1");
    if (quizz1Store.pokazZestaw(storeScene1.krok_gracz1_na_planszy).odpowiedz === 1) {
        console.log("Odpowiedź poprawna");
        quizz1Store.czyOodpowiedzPoprawna = true

    } else {
        console.log("Odpowiedź zła");
        quizz1Store.czyOodpowiedzPoprawna = false
    }
    quizz1Store.isKrzyzyk1 = true;
    quizz1Store.isKrzyzyk2 = false;
    quizz1Store.ifButton_dalej = true;

}

function zaznaczenie2() {
    if (quizz1Store.pokazZestaw(storeScene1.krok_gracz1_na_planszy).odpowiedz === 2) {
        console.log("Odpowiedź poprawna");
        quizz1Store.czyOodpowiedzPoprawna = true


    } else {
        console.log("Odpowiedź zła");
        quizz1Store.czyOodpowiedzPoprawna = false
    }
    quizz1Store.isKrzyzyk1 = false;
    quizz1Store.isKrzyzyk2 = true;
    quizz1Store.ifButton_dalej = true;


}
function koniecQuizzu() {
    storeScene1.ifWidokQuizz = false
    storeScene1.ifRzucKostka = true
    quizz1Store.resetQuizz()
}
</script>

<template>
    <div class="planszaQuizz1 " role="img" alt="tło" aria-label="pytanie">
        <div class='container'>
            <h1 class="sr-only">Quizz</h1>

            <div class="pytanie1" v-html="quizz1Store.pokazZestaw(storeScene1.krok_gracz1_na_planszy).tresc"></div>

            <!-- <ul class="lista-odpowiedzi" role="presentation"> -->
            <ul class="lista-odpowiedzi" role="list">
                <li>
                    <!-- <div class="pojedyncza-odpowiedz" role="checkbox" tabindex="0" :aria-checked={zaznaczenieOdpowiedzi1}> -->
                    <div class="pojedyncza-odpowiedz" role="checkbox" tabindex="0" @click="zaznaczenie1" @keydown.enter="zaznaczenie1
                    ">

                        <div class="pole-zazn anim1" aria-label="zaznacz odpowiedź 1">
                            <span class="krzyzyk" :class="{ 'krzyzyk1': quizz1Store.isKrzyzyk1 }"
                                alt="zaznaczenie odpowiedzi"></span>
                        </div>

                        <span class="odpowiedz anim1"> {{
                            quizz1Store.pokazZestaw(storeScene1.krok_gracz1_na_planszy).odpowiedz_text[0][0] }}</span>
                    </div>
                </li>

                <li>
                    <!-- <div class="pojedyncza-odpowiedz" role="checkbox" tabindex="0" :aria-checked={zaznaczenieOdpowiedzi1}> -->
                    <div class="pojedyncza-odpowiedz" role="checkbox" tabindex="0" @click="zaznaczenie2"
                        @keydown.enter="zaznaczenie2">
                        <div class="pole-zazn anim1" aria-label="zaznacz odpowiedź 2">
                            <span class="krzyzyk" :class="{ 'krzyzyk2': quizz1Store.isKrzyzyk2 }"
                                alt="zaznaczenie odpowiedzi"></span>
                        </div>
                        <span class="odpowiedz anim1"> {{
                            quizz1Store.pokazZestaw(storeScene1.krok_gracz1_na_planszy).odpowiedz_text[0][1] }}</span>

                    </div>
                </li>
            </ul>

            <button class="button-dalej my-button" v-if="quizz1Store.ifButton_dalej"
                @click="quizz1Store.sprawdzOdpowiedz" @keydown.enter="quizz1Store.sprawdzOdpowiedz" role="button"
                alt="przycisk sprawdź">Sprawdź
                odpowiedź</button>
        </div>

        <div class="plansza-dobrze" v-if="quizz1Store.ifOdpowiedz_dobrze">
            <p class="naglowek-after-quizz naglowek-dobrze">Brawo!</p>
            <p class="napis-odpowiedz">Prawidłowa odpowiedź.</p>

            <button class="button-dalej-dobrze my-button anim1" v-if="quizz1Store.ifButtonDalejDobrze" @click="koniecQuizzu" @keydown.enter="koniecQuizzu" role="button">Dalej</button>
        </div>

        <div class="plansza-zle" v-if="quizz1Store.ifOdpowiedzZle">
            <p class="naglowek-after-quizz">Źle!</p>
            <p class="napis-odpowiedz">Błędna odpowiedź.</p>
            <button class="button-dalej-dobrze my-button anim1" v-if="quizz1Store.ifButtonDalejZle" @click="koniecQuizzu" role="button">Dalej</button>
        </div>


    </div>
</template>

<style scoped>
.planszaQuizz1 {
    background-image: url("../assets/pytanie_blankc.png");
    background-size: 1411px 896px;
    background-repeat: no-repeat;
    height: 896px;
    width: 1411px;
    position: absolute;
    left: 0px;
    top: 100px;
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

.planszaQuizz1nr1 {
    /* background-image: url("../assets/pytanie1.png"); */
    background-image: url("../assets/pytanie_blankc.png");
}

.planszaQuizz1nr2 {
    background-image: url("../assets/pytanie_blankc.png");
}

.planszaQuizz1nr3 {
    background-image: url("../assets/pytanie_blankc.png");
}

.planszaQuizz1nr4 {
    background-image: url("../assets/pytanie_blankc.png");
}

.planszaQuizz1nr5 {
    background-image: url("../assets/pytanie_blankc.png");
}

.planszaQuizz1nr6 {
    background-image: url("../assets/pytanie_blankc.png");
}

.planszaQuizz1nr7 {
    background-image: url("../assets/pytanie_blankc.png");
}

.planszaQuizz1nr8 {
    background-image: url("../assets/pytanie_blankc.png");
}

.planszaQuizz1nr9 {
    background-image: url("../assets/pytanie_blankc.png");
}

.planszaQuizz1nr10 {
    background-image: url("../assets/pytanie_blankc.png");
}

.container {
    display: flex;
    height: 800px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}



.pytanie1 {
    color: rgb(29, 56, 80);
    opacity: 1;
    /* tutaj na potrzeby czytnika można dać 0 */
    font-size: 42px;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    white-space: nowrap;
    margin-top: 5.9em;
    margin-left: 4.5em;
    margin-bottom: 1em;
    /* top: 305px;
  left: 205px; */
}

.pytanie1:deep(.klodka2) {
    position: absolute;
    left: 11em;
    top: 5.5em;

}

.pytanie1:deep(.buzka2) {
    position: absolute;
    left: 17.3em;
    top: 5.5em;
}

.pytanie1:deep(.malpa2) {
    position: absolute;
    left: 11.6em;
}

.pytanie1:deep(.malpa3) {
    position: absolute;
    left: 12.2em;
}

ul {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-left: 7.7em;
}

li {
    margin-bottom: 20px;
}

.lista-odpowiedzi {

    /* left: 180px;
  top: 455px; */
    list-style: none;
}

.pojedyncza-odpowiedz {
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
}

.pojedyncza-odpowiedz:focus {
    outline: 5px solid #9a009e !important;
}

.pole-zazn {
    /* background-image: url("../assets/kratka.png");
  background-size: 50px 50px;
  background-repeat: no-repeat; */
    border: rgb(29, 56, 80) solid 2px;
    height: 81px;
    /* height: 1rem; */
    width: 81px;
    /* width: 1rem; */
    margin-right: 1rem;
    /* position: absolute; */


}

.pole-zazn:hover {
    cursor: pointer;
}

.pole-zazn:focus {
    /* outline: thick double #08e926 !important; */
    outline: 5px solid #9a009e !important;
}




.krzyzyk {
    background-image: url("../assets/krzyzyk1.png");
    background-size: 73px 73px;
    background-repeat: no-repeat;
    height: 73px;
    width: 73px;
    visibility: hidden;
    margin-left: .2em;
    margin-top: .2em;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
}

.krzyzyk1 {
    /* top: 15px;
  left: 62px; */

    visibility: visible;
}

.krzyzyk2 {
    /* top: 135px;
  left: 62px; */

    visibility: visible;
}

.odpowiedz {
    color: rgb(29, 56, 80);
    font-size: 42px;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    white-space: nowrap;
    /* position: absolute; */

}

.button-dalej {
    background-image: url("../assets/sprawdz_odpwowiedz_button1.png");
    color: rgb(255, 255, 255);
    font-size: 37px;
    font-style: bold;
    font-weight: 500;
    font-family: "Proxima Nova", sans-serif;
    background-size: 394px 87px;
    background-repeat: no-repeat;
    /* top: 760px;
  left: 300px; */
    height: 87px;
    width: 394px;
    margin-left: 5.7em;

    z-index: 2;
}

.button-dalej:hover {
    cursor: pointer;
}

.button-dalej:focus {
    /* border: 4px solid #08e926; */
    /* outline: thick double #08e926 !important; */
    outline: 5px solid #9a009e !important;
}

.plansza-dobrze {
    background-image: url("../assets/KOMUNIKAT_dobra_odp.png");
    background-size: 1212px 533px;
    background-repeat: no-repeat;
    height: 533px;
    width: 1212px;
    position: absolute;
    left: 83px;
    top: 200px;

    display: flex;
    height: 800px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

}

.plansza-zle {
    background-image: url("../assets/KOMUNIKAT_zla_odp.png");
    background-size: 1212px 533px;
    background-repeat: no-repeat;
    height: 533px;
    width: 1212px;
    position: absolute;
    left: 83px;
    top: 200px;
    display: flex;
    height: 800px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

.naglowek-after-quizz {
    color: rgb(255, 255, 255);
    font-size: 100px;
    font-style: bold;
    font-weight: 600;
    font-family: "Proxima Nova", sans-serif;
    margin-top: .8em;
    margin-bottom: 0em;
    height: 88px;
    width: 333px;
    display: flex;
    justify-content: center;
    z-index: 2;
}

.naglowek-dobrze {
    left: 410px;
}

.naglowek-zle {
    left: 520px;
}

.napis-odpowiedz {
    color: rgb(255, 255, 255);
    font-size: 70px;
    font-style: bold;
    font-weight: 400;
    font-family: "Proxima Nova", sans-serif;
    white-space: nowrap;
    margin-top: 0.5em;
    height: 88px;
    width: 333px;
    z-index: 2;
    display: flex;
    justify-content: center;


}

.napis-dobrze {
    left: 250px;
}

.napis-zle {
    left: 310px;
}

.button-dalej-dobrze {
    /* background-image: url("../assets/przycisk_dalej_imie.png"); */
    color: rgb(29, 56, 80);
    font-size: 80px;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    background-size: 301px 117px;
    background-position: -2px -1px;
    background-repeat: no-repeat;

    height: 117px;
    width: 301px;

    z-index: 2;
}

.button-dalej-dobrze:hover {
    cursor: pointer;
}

.button-dalej-dobrze:focus {
    /* border: 4px solid #08e926; */
    /* outline: thick double #08e926 !important; */
    outline: 5px solid #08e926 !important;
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