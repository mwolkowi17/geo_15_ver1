<script setup lang="ts">

import { useMainCompStore } from '../stores/appStores'
import SceneStart from './SceneStart.vue'
import SceneInstruction from './SceneInstruction.vue';
import SceneLevelOneChoice from './SceneLevelOneChoice.vue';

const store = useMainCompStore();
</script>

<template>
  <SceneStart v-if="store.IfStart" />
  <SceneInstruction v-if="store.IfIsntruction"/>
  <SceneLevelOneChoice v-if="store.IfLevelOneChoices"/>
</template>

<style scoped>

</style>