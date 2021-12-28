import store from "@/store"

export default function useUtils(){
    const getTaskCount = () => {
        return store.getters.tasks.length;
    }

    return {
        getTaskCount
    }
}
