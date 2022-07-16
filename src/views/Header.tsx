import React from 'react'
import {observer} from 'mobx-react-lite'
import {useStore} from "@/store/root.Store";

const Header: React.FC = () => {
  const { listStore } = useStore()
  return (
    <div className="comment-head">
      <span>{listStore.list.length} 评论</span>
    </div>
  )
}
export default observer(Header)
