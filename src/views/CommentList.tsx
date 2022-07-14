import React, {useState} from 'react';
import avatar from '@/images/avatar.png'

export interface ICommentListProps {

}

const CommentList: React.FC<ICommentListProps> = (props) => {
  const [state, setState] = useState()
  return (
    <div className="comment-list">
      <div className="list-item">
        <div className="user-face">
          <img className="user-head" src={ avatar } alt=""/>
        </div>
        <div className="comment">
          <div className="user">尤雨溪</div>
          <p className="text">前排吃瓜</p>
          <div className="info">
            <span className="time">2021-10-08 09:05:00</span>
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
    </div>
  );
};

export default CommentList;
