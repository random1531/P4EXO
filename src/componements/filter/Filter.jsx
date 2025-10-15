"use client"
import { useEffect, useState } from "react"

export default function filter({ items, selector,onChange,itemSelected,RemoveClick,selectedId }) {

    const [selectOption, setSelectoption] = useState(0);
    function handleChange(e) {
        const value = e.target.value
        setSelectoption(value)
       if(onChange){
        onChange(value);
       }
    }
  

    return (
        <div>
            <select className="selectOption" name={selector} id={selector} onChange={handleChange} value={selectOption}>
                <option value=""></option>
                {items.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
            {itemSelected && (
        <div className="selectedR" id={selectedId} onClick={RemoveClick}>
          <p>{itemSelected} ✕</p>
        </div>
      )}
            
        </div>
    )
}