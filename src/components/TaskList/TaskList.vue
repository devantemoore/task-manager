<template>
  <table>
      <thead>
          <tr>
              <th>
                  ID
              </th>
              <th>
                  Description
              </th>
              <th>
                  Completed
              </th>
          </tr>
      </thead>
      <tbody>
          <Task
            v-for="(task, index) in tasks"
            :key="task.id"
            :task="task"
            :index="index"
            />
      </tbody>
  </table>
</template>
<script lang='ts' setup>
import { useStore } from 'vuex';
const store = useStore();
const tasks = computed(() => store.getters.tasks)
</script>
<script lang='ts'>
import {defineComponent, computed} from 'vue'
import Task from '../Task/Task.vue'
export default defineComponent({
    name: 'TaskList',
    components: {
        Task
    }
})
</script>

<style>

</style>