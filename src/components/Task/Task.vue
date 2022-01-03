<template>
  <tr class="task-item">
      <td :style="completed">{{ task.id }}</td>
      <td :style="completed">{{ task.description }}</td>
      <td><input type='checkbox' v-model="checked" @change="toggleComplete(task.id)" /></td>
  </tr>
</template>

<script lang='ts' setup>
import {useStore} from 'vuex'

const store = useStore();
const props = defineProps<{
    task: Task
}>();
const checked = computed(() => props.task.completed)
const completed = computed(() => props.task.completed ? 'text-decoration: line-through' : '')
const toggleComplete = (id) => {
  if ( id ){
    store.dispatch('toggleComplete', id);
  }
}
</script>

<script lang='ts'>
import Task from '../../models/task'
import {defineComponent, defineProps, computed} from 'vue'

export default defineComponent({
  name: 'Task',
})
</script>

<style>

</style>