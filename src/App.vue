<script setup lang="ts">

import { computed } from 'vue';
import { usePreference } from './store/Preference';
const preference = usePreference()

const themeSelected = computed(()=>{
  return preference.theme
})

</script>
<template>
  <div :data-theme="themeSelected">
    <router-view></router-view>
  </div>
</template>
