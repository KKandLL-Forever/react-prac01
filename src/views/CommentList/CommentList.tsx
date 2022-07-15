import React, {useEffect, useState} from 'react';
import Item from './Item'
import avatar from "@/images/avatar.png";
import {IList} from "@/store/list.Store";
import {v4} from "uuid";

export interface ICommentListProps {

}

const CommentList: React.FC<ICommentListProps> = (props) => {
  const [state, setState] = useState('')
  const [list, setList] = useState<IList[]>([])
  const getItem = () => {
    console.log('get')
    setTimeout(() => {
      setList([
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
      ])
    }, 1000)
  }
  useEffect(getItem, [])
  const Item = list.map((item) =>
    <div className="list-item" key={item.id}>
      <div className="user-face">
        <img className="user-head" src={ avatar } alt=""/>
      </div>
      <div className="comment">
        <div className="user">{item.author}</div>
        <p className="text">{item.comment}</p>
        <div className="info">
          <span className="time">{item.time}</span>
          <span className="like liked">
                  <i className="icon"/>
                </span>
          <span className="hate hated">
                  <i className="icon"/>
                </span>
          <span className="reply btn-hover">删除</span>
        </div>
      </div>
    </div>
  )
  return (
    <div className="comment-list">
      {Item}
    </div>
  );
};

export default CommentList;
