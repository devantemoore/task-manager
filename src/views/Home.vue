<template>
  <div class="home">Task Manager
    <AddTask/>
  </div>
  
</template>

<script lang="ts" setup></script>
<script lang="ts">
import { defineComponent } from "vue";
import AddTask from './../components/AddTask/AddTask.vue'
export default defineComponent({
  name: 'Home',
  components:{
    AddTask
  }
});
</script>
<style></style>
