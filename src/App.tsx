import React from 'react';
import './index.css'
import Header from '@/views/Header'
import Tabs from '@/views/Tabs'
import CommentSend from '@/views/CommentSend'
import CommentList from "@/views/CommentList/CommentList";

// 依赖的数据
const state = {
  // hot: 热度排序  time: 时间排序
  tabs: [
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
  ],
  active: 'hot',
  list: [
    {
      id: 1,
      author: '刘德华',
      comment: '给我一杯忘情水',
      time: new Date('2021-10-10 09:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 1
    },
    {
      id: 2,
      author: '周杰伦',
      comment: '哎哟，不错哦',
      time: new Date('2021-10-11 09:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 0
    },
    {
      id: 3,
      author: '五月天',
      comment: '不打扰，是我的温柔',
      time: new Date('2021-10-11 10:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: -1
    }
  ]
}
const App: React.FC = () => {
  return (
    <div className="App">
      <div className="comment-container">
        {/* 评论数 */}
        <Header/>
        {/* 排序 */}
        <Tabs/>
        {/* 添加评论 */}
        <CommentSend/>
        {/* 评论列表 */}
        <CommentList/>
      </div>
    </div>
  )
}

export default App
