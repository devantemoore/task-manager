<template>
  <tr>
      <td>{{ task.id }}</td>
      <td :style="completed">{{ task.description }}</td>
      <td><input type='checkbox' v-model="checked" /></td>
  </tr>
</template>

<script lang='ts' setup>
const props = defineProps<{
    task: Task
}>();
const checked = computed(() => props.task.completed)
const completed = checked ? 'text-decoration: line-through' : '';
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