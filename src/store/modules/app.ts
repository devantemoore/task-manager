import Task from '../../models/task'
const state = {
    tasks: []
}

const mutations = {
    'SET_TASKS'(state:any, tasks: Task[]){
        state.tasks = tasks;
    },
    'CLEAR_TASKS'(state:any){
        state.tasks = [];
    },
    'ADD_TASK'(state:any, task: Task){
        state.tasks.push(task);
    },
    'TOGGLE_COMPLETE'(state:any, id: number){
        const index = state.tasks.findIndex((element: Task) => {
            return element.id == id;
        });
        state.tasks[index].completed = !state.tasks[index].completed;
    }
}
const actions = {
    setTasks({
        commit
    }: any, tasks: Task[]){
        commit('SET_TASKS', tasks)
    },
    clearTasks({
        commit
    }: any){
        commit('CLEAR_TASKS')
    },
    addTask({
        commit
    }: any, task: Task){
        commit('ADD_TASK', task)
    },
    toggleComplete({
        commit
    }: any, id: number){
        commit('TOGGLE_COMPLETE', id)
    }
}
const getters = {
    tasks(state:any){
        return state.tasks;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}