import React from 'react'
import {observer} from "mobx-react-lite";
import {useStore} from "@/store/root.Store";

const Tabs: React.FC = () => {
  const { tabStore, listStore } = useStore()
  function changeTab (type: string) {
    tabStore.changeTab(type)
    listStore.getItem()
  }
  return (
    <div className="tabs-order">
      <ul className="sort-container">
        {
          tabStore.tabs.map(item =>
            <li
              key={item.id}
              className={item.type === tabStore.active ? 'on' : ''}
              onClick={() => changeTab(item.type)}
            >
              按{item.name}排序
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default observer(Tabs)
