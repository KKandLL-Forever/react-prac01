import {createContext, useContext} from "react";
import { listStore } from './list.Store'
import { tabStore } from './tab.Store'

class RootStore {
  listStore = listStore
  tabStore = tabStore
  // constructor() {
  //   this.listStore = listStore
  // }
}

const rootStore = new RootStore()
const context = createContext(rootStore)

export  const useStore = () => {
  return useContext(context)
}
