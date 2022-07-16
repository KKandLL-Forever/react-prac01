import {makeAutoObservable, runInAction} from "mobx";

interface ITab {
  id: number,
  name: string,
  type: 'hot' | 'time'
}

class TabStore {
  tabs: ITab[] = [
    {
      id: 1,
      name: '热度',
      type: 'hot'
    },
    {
      id: 2,
      name: '时间',
      type: 'time'
    }
  ]
  active: string = 'hot'
  constructor() {
    makeAutoObservable(this)
  }
  changeTab(name: string){
    runInAction(() => {
      this.active = name
    })
  }
}

export const tabStore = new TabStore();
