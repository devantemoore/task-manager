<template>
  <div><MenuBar :model="items"></MenuBar></div>
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
import MenuBar from 'primevue/menubar'
import {defineComponent, ref} from 'vue'
export default defineComponent({
  name: 'Menu',
  components: {
    //MenuBar
  }
})
</script>

<style>

</style>