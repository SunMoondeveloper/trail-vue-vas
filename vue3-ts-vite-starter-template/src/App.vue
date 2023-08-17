<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import '@/scss/app.scss'
//import { $themeColors, $themeBreakpoints, $themeConfig } from '@themeConfig'
//import { provideToast } from 'vue-toastification'
//import { watch } from '@vue/composition-api'
//import useAppConfig from '@core/app-config/useAppConfig'


const route = useRoute()
const layout = computed(() => `layout-${route.meta.layout || 'default'}`)


</script>

