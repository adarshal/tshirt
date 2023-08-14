import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'


const Tab = ({key,tab,isFilterTab,isActiveTab,handleClick}) => {
  const snap=useSnapshot(state);
  const activeStyles=isFilterTab && isActiveTab?
  { backgroundColor: snap.color, opacity: 0.5 } :
  { backgroundColor: "transparent", opacity: 1 };

  const tooltip = tab.name === 'logoShirt' ? 'Add it as Logo' : tab.name === 'stylishShirt' ? 'Add img as style' : tab.name;

  return (
    <div key={tab.name}
    className={`tab-btn ${isFilterTab}? 'rounded-full glassmorhism':'rounded-4'`}
      onClick={handleClick}
      style={activeStyles}
      title={tooltip}
      >
        <img 
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"
        }`}
        />
    </div>
  )
}

export default Tab
