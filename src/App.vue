<template>
<div class="app-container">
  <Menu></Menu>
  <router-view></router-view>
</div>
</template>
<script lang='ts' setup>
  const items = ref([
    {
      label: 'Home'
    },
    {
      label: 'Components'
    }
  ])
</script>
<script lang='ts'>
import Menu from './components/Menu/Menu.vue'
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'app',
  components: {
    Menu
  }
})

</script>
<style lang='scss'>

</style>
