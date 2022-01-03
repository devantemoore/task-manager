<template>
  <div class="home">Task Manager
    <div>
      <AddTask/>
    </div>
    <div>
      <TaskList/>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import {useStore} from 'vuex'
import constants from '../constants'
const store = useStore();
store.dispatch('setTasks', constants.TASKS)
</script>
<script lang="ts">
import { defineComponent } from "vue";
import AddTask from './../components/AddTask/AddTask.vue'
import TaskList from './../components/TaskList/TaskList.vue'
export default defineComponent({
  name: 'Home',
  components:{
    AddTask,
    TaskList
  }
});
</script>
<style lang='scss'>
</style>
