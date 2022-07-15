import {computed, makeAutoObservable} from 'mobx'
import { v4 } from 'uuid'

export interface IList {
  id: string,
  author: string,
  comment: string,
  time: number,
  attitude: number
}

export class ListStore {
  count: number = 2
  arr: number[] = [1, 2, 3, 4, 5]
  list: IList[] = [
    {
      id: v4(),
      author: '刘德华',
      comment: '给我一杯忘情水',
      time: new Date('2021-10-10 09:09:00').getTime(),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 1
    },
    {
      id: v4(),
      author: '周杰伦',
      comment: '哎哟，不错哦',
      time: new Date('2021-10-11 09:09:00').getTime(),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 0
    },
    {
      id: v4(),
      author: '五月天',
      comment: '不打扰，是我的温柔',
      time: new Date('2021-10-11 10:09:00').getTime(),
      // 1: 点赞 0：无态度 -1:踩
      attitude: -1
    }
  ]
  
  constructor() {
    makeAutoObservable(this);
  }
  
  get filteredList() {
    console.log('computing')
    return this.arr.filter(item => item % 2 === 0)
  }
  
  add() {
    this.count++
  }
  getItem(){
    setTimeout(() =>{
    
    })
  }
  
  changeArr(item: number) {
    this.arr.push(item)
  }
}

export const listStore = new ListStore()
