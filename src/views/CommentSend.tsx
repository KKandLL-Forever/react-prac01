import React, {useState} from 'react';
import avatar from '@/images/avatar.png'

export interface ICommentSendProps {

}

const CommentSend: React.FC<ICommentSendProps> = (props) => {
  const [state, setState] = useState()
  return (
    <div className="comment-send">
      <div className="user-face">
        <img className="user-head" src={avatar} alt=""/>
      </div>
      <div className="textarea-container">
            <textarea
              cols={80}
              rows={5}
              placeholder="发条友善的评论"
              className="ipt-txt"
            />
        <button className="comment-submit">发表评论</button>
      </div>
      <div className="comment-emoji">
        <i className="face"></i>
        <span className="text">表情</span>
      </div>
    </div>
  );
};

export default CommentSend;
