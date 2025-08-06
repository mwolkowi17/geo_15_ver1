<script setup lang="ts">

import { useMainCompStore } from '../stores/appStores'
import SceneStart from './SceneStart.vue'
import SceneInstruction from './SceneInstruction.vue';

const store = useMainCompStore();
</script>

<template>
  <SceneStart v-if="store.IfStart" />
  <SceneInstruction v-if="store.IfIsntruction"/>
</template>

<style scoped>

</style>