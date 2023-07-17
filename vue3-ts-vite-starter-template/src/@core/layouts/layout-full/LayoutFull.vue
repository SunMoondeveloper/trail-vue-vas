<template>
  <div :class="contentWidth === 'boxed' ? 'container p-0' : null"
       :style="this.$route.name == 'liveMobile'? {height:'100%'}:null">
    <router-view />
  </div>
</template>

<script>
import useAppConfig from '@core/app-config/useAppConfig'

export default {
  setup() {
    const { contentWidth } = useAppConfig()
    return { contentWidth }
  },
}
</script>
