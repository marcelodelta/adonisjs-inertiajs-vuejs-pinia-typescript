import {defineStore} from 'pinia'
import {reactive} from "vue";

export const useCounterStore = defineStore('useCounterStore', () => {
  const state = reactive({ count: 0, name: 'Eduardo' })

  return {
    state
  } as const
})

