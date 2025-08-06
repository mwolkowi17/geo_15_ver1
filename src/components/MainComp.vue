<script setup lang="ts">

import { useMainCompStore } from '../stores/appStores'
import SceneStart from './SceneStart.vue'

const store = useMainCompStore();
</script>

<template>
  <SceneStart v-if="store.IfStart" />
</template>

<style scoped>

</style>