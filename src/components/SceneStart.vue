<script setup lang="ts">
import { useMainCompStore } from '../stores/appStores'

const store = useMainCompStore();
</script>

<template>
 <div ref="stageParent" class="tlo" role="img" >

 </div>
</template>

<style scoped>
.tlo {
    background-image: url("../assets/Plansza_glowna.png");
    background-size: 1920px 1080px;
    height: 1080px;
    width:1920px;
    top: 0px;
    left: 0px;
    position: absolute;
}
</style>