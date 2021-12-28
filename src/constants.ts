import Task from './models/task'
const TASKS = [
    {
        id: 1,
        description: "wash juice",
        completed: true
    },
    {
        id: 2,
        description: "take out trash",
        completed: false
    },
    {
        id: 3,
        description: "finsih homework",
        completed: true
    },
    {
        id: 4,
        description: "fill out passport paperwork",
        completed: false
    },
    {
        id: 5,
        description: "pickup groceries",
        completed: false
    }
] as Task[]

export default{ 
    TASKS
}