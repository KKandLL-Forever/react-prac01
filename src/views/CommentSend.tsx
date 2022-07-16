import React, { KeyboardEvent } from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "@/store/root.Store";

const CommentSend: React.FC = (props) => {
  const { listStore } = useStore()
  function addComment(e:KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter') {
      listStore.addComment()
    }
  }
  return (
    <div className="comment-send">
      <div className="user-face">
        <img className="user-head" src={listStore.avatar} alt=""/>
      </div>
      <div className="textarea-container">
            <textarea
              value={listStore.inputValue}
              onChange={e => {listStore.changeComment(e.target.value)}}
              onKeyUp={e => addComment(e)}
              cols={80}
              rows={5}
              placeholder="发条友善的评论"
              className="ipt-txt"
            />
        <button
          className="comment-submit"
          onClick={() => listStore.addComment()}
        >
          发表评论
        </button>
      </div>
      <div className="comment-emoji">
        <i className="face"></i>
        <span className="text">表情</span>
      </div>
    </div>
  );
};

export default observer(CommentSend);
