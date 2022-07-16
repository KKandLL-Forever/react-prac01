import React, {useEffect} from 'react';
import avatar from "@/images/avatar.png";
import {useStore} from "@/store/root.Store";
import {observer} from "mobx-react-lite";
import {action} from "mobx";

const CommentList: React.FC = (props) => {
  const {listStore} = useStore()
  
  useEffect(() => {
    listStore.getItem()
  }, [])
  const Item = listStore.list.map((item) =>
    <div className="list-item" key={item.id}>
      <div className="user-face">
        <img className="user-head" src={avatar} alt=""/>
      </div>
      <div className="comment">
        <div className="user">{item.author}</div>
        <p className="text">{item.comment}</p>
        <div className="info">
          <span className="time">{item.time}</span>
          <span
            className={`like${item.attitude === 1 ? ' liked' : ''}` }
            onClick={action(() => item.attitude = 1)}
          >
            <i className="icon"/>
          </span>
          <span
            className={`hate${item.attitude === -1 ? ' hated' : ''}` }
            onClick={action(() => item.attitude = -1)}
          >
            <i className="icon"/>
          </span>
          <span
            className="reply btn-hover"
            onClick={() => listStore.deleteComment(item.id)}
          >删除</span>
        </div>
      </div>
    </div>
  )
  return (
    <div className="comment-list">
      {listStore.loading ? '加载中.........' : Item}
    </div>
  );
};

export default observer(CommentList);
