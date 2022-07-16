import React from 'react';
import './index.css'
import Header from '@/views/Header'
import Tabs from '@/views/Tabs'
import CommentSend from '@/views/CommentSend'
import CommentList from "@/views/CommentList/CommentList";

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
