<script setup lang="ts">

import { useMainCompStore } from '../stores/appStores'
import SceneStart from './SceneStart.vue'
import SceneInstruction from './SceneInstruction.vue';
import SceneLevelOneChoice from './SceneLevelOneChoice.vue';
import SceneMain1 from './SceneMain1.vue';

const store = useMainCompStore();
</script>

<template>
  <SceneStart v-if="store.IfStart" />
  <SceneInstruction v-if="store.IfIsntruction"/>
  <SceneLevelOneChoice v-if="store.IfLevelOneChoices"/>
  <SceneMain1 v-if="store.IfMainComp1"/>
</template>

<style scoped>

</style>