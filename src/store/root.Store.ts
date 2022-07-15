import {createContext, useContext} from "react";
import { listStore, ListStore } from './list.Store'

class RootStore {
  listStore = listStore
  // constructor() {
  //   this.listStore = listStore
  // }
}

const rootStore = new RootStore()
const context = createContext(rootStore)

export  const useStore = () => {
  return useContext(context)
}
