import React from 'react'
import {observer} from 'mobx-react-lite'
import {useStore} from "@/store/root.Store";

const Header: React.FC = () => {
  const { listStore } = useStore()
  return (
    <div className="comment-head">
      <span>7 评论</span>
      <button onClick={() => listStore.add()}>add</button>
      <button onClick={() => listStore.changeArr(8)}>change arr</button>
      <div>{listStore.count}</div>
      <div>
        {
          listStore.filteredList.map(item => <div key={item}>{item}</div>)
        }
      </div>
    </div>
  )
}
export default observer(Header)
