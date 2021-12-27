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