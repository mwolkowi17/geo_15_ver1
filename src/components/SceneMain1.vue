<script setup lang="ts">
import { useScene1Store } from '../stores/scene1Store';

const storeScene1 = useScene1Store()
</script>

<template>
    <div class="tlo2" role="img" aria-label="gra planszowa - poziom1">
        <h1 class="sr-only">Gra planszowa - poziom 1</h1>
        <div class="ikona-start" role="img" alt="ikona" aria-label="miejsce startu gry">
           <h2 class="start">Start</h2>
        </div>
        <div class="trasa" role="img" alt="grafika" aria-label="trasa gry zawierająca 16 pól"></div>
        <div class="ikona-meta" role="img" alt="ikona" aria-label="miejsce mety gry">
            <h2 class="meta">Meta</h2>
        </div>
        <div class="pionek1" :style="{ left: storeScene1.pionek_left + 'px', top: storeScene1.pionek_top + 'px' }"></div>
        <div class="container">
            <div class="container-inner">
                <h2 class="title">Poziom 1</h2>
                <h2 class="szanse-napis">szanse:</h2>
                <div class="szanse-container">
                    <img class="szansa" src="../assets/szansa.png">
                    <img class="szansa" src="../assets/szansa.png">
                    <img class="szansa" src="../assets/szansa.png">
                </div>
                <button class="rzut1 my-button anim1" role="button" @click="storeScene1.kostka_click">Rzuć kostką</button>
               
            </div>
        </div>
      <div class="kostka" :class="{
        'kostka1image1': storeScene1.isSet1,
        'kostka1image2': storeScene1.isSet2,
        'kostka1image3': storeScene1.isSet3,
        'kostka1image4': storeScene1.isSet4,
        'kostka1image5': storeScene1.isSet5,
        'kostka1image6': storeScene1.isSet6
    }" v-if="storeScene1.ifWidokKostki" role="img" alt="ikona widoku kostki"></div>
    </div>
</template>

<style scoped>
.tlo2 {
    background-image: url("../assets/Plansza_poziom1.png");
    background-size: 1920px 1080px;
    height: 1080px;
    width: 1920px;
    top: 0px;
    left: 0px;
    position: absolute;
}

.pionek1 {
    background-image: url("../assets/pionek.png");
    background-size: 116px 116px;
    background-repeat: no-repeat;
    height: 116px;
    width: 116px;
    position: absolute;

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

.ikona-start {
    background-image: url("../assets/strzalka_START.png");
    background-size: 240px 104px;
    background-repeat: no-repeat;
    position: absolute;
    height: 104px;
    width: 240px;
    top: 40px;
    left: 23px;
    z-index: 0;
}

.start{
    position: relative;
    font-size: 2.2em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    text-align: center;
}

.meta{
     position: relative;
    font-size: 2.2em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    text-align: center;
}

.trasa {
    background-image: url("../assets/PLANSZA.png");
    background-size: 1215px 760px;
    background-repeat: no-repeat;
    position: absolute;
    height: 799px;
    width: 1280px;
    top: 185px;
    left: 90px;
    z-index: 0;
}

.ikona-meta {
    background-image: url("../assets/flaga_META.png");
    background-size: 162px 188px;
    background-repeat: no-repeat;
    position: absolute;
    height: 188px;
    width:162px;
    top: 600px;
    left: 1233px;
    z-index: 0;
}

.container {
    display: flex;
    flex-direction: column;
    height: 1080px;
    justify-content:flex-start;
    align-items: flex-end;
}

.container-inner {
    display: flex;
    flex-direction: column;
    width: 485px;
    justify-content:center;
    align-items: center;
    
    /* background-color: white; */
    /* border: 4px solid black; */
} 

.title {
    font-size: 4.3em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 20px;
    color: rgb(29,56,80)
}

.szanse-container{
    margin-bottom: 0em;
}

.szanse-napis{
    font-size: 3.3em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    margin-left: -220px;
    color: rgb(29,56,80);
}

.szansa{
    margin-left: 1em;
    margin-right: 1em;
}

.kostka1image1 {
    background-image: url("../assets/kostka_1oczko.png");
   
}

.kostka1image2 {
    background-image: url("../assets/kostka_2oczka.png");
    
}

.kostka1image3 {
    background-image: url("../assets/kostka_3oczka.png");
}

.kostka1image4 {
    background-image: url("../assets/kostka_4oczka.png");
}

.kostka1image5 {
    background-image: url("../assets/kostka_5oczek.png");
}

.kostka1image6 {
    background-image: url("../assets/kostka_6oczek.png");
}


.rzut1{
     font-size: 3.3em;
    font-style: bold;
    font-weight: 700;
    font-family: "Proxima Nova", sans-serif;
    color: white;
    margin-top: 50px;
    width: 7em;
    height: 2em;
    border: 4px solid rgb(0, 0, 0);
    overflow: visible;
    background-color: rgb(29,56,80) ;
    border-radius: 30px;
    margin-bottom: 0.3em;
}

.kostka{
    position: absolute;
    top: 710px;
    left: 1576px;
    background-size: 200px 200px;
    background-repeat: no-repeat;
     height: 200px;
    width: 200px;
    z-index: 2;
    
}
</style>