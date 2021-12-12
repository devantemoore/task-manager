<template>
  <div class="add-task">
      <input class='task-input' type='text'/>
      <button type='button' class='add-btn'>Add</button>
  </div>
</template>

<script lang='ts' setup>
</script>
<script lang='ts'>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "AddTask",  
})
</script>


<style>
.add-task {
    width: 450px;
}
.task-input {
   width: 100%;
   height: 2rem;
   margin: 1rem 0.5rem 0 0.5rem
}
.add-btn{
    width: 100%;
    margin: 0 0 0 0.5rem
}
</style>