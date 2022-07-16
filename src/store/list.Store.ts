import {computed, makeAutoObservable, runInAction} from 'mobx'
import avatar from '@/images/avatar.png'
import {v4} from 'uuid'

export interface IList {
  id: string,
  author: string,
  comment: string,
  time: number,
  attitude: number
}

export class ListStore {
  loading: boolean = false
  avatar = avatar
  inputValue: string = ''
  list: IList[] = []
  
  constructor() {
    makeAutoObservable(this,{},{autoBind: true});
  }
  
  async getItem() {
    this.loading = true
    await setTimeout(() => {
      runInAction(() => {
        this.list = [
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
        this.loading = false
      })
    }, 2000)
  }
  
  addComment() {
    runInAction(() => {
      this.list.push({
        id: v4(),
        author: 'Frank',
        comment: this.inputValue,
        time: new Date('2021-10-10 09:09:00').getTime(),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0
      })
    })
  }
  changeComment(value: string){
    this.inputValue = value
  }
  deleteComment(id: string){
    console.log(typeof id,'id')
    this.list.filter(item => item.id === id)
  }
}

export const listStore = new ListStore()
