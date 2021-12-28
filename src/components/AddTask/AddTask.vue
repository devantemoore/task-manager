<template>
  <div class="add-task">
      <input class='task-input' type='text' v-model="taskInput" />
      <button type='button' class='add-btn' @click="addTask(taskInput)">Add</button>
  </div>
</template>

<script lang='ts' setup>
  import {useStore} from 'vuex'
  import Task from '../../models/task'
  import useUtils from '../../composables/useUtils'
  
  const helper = useUtils();
  const store = useStore();
  const addTask = (taskInput) => {
    if( taskInput ){
      let task = {
        id: helper.getTaskCount() + 1,
        description: taskInput,
        completed: false
      } as Task;
      store.dispatch('addTask', task);
    } 
  }
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