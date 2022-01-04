<template>
  <div class="add-task">
      <input id="inputField" class='task-input' type='text' v-model="taskInput" @keydown.enter="addTask(taskInput)" />
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
      document.getElementById('inputField').value='';
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

</style>