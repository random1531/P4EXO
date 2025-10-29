import "./filter.css";
import { useState } from "react";
export default function filter({ ValueFilter, OnselectFilter, OnResetFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tsest, settesest] = useState("");
  const [selected, setselected] = useState("");
  const [selectedValue, setselectedValue] = useState("");
  const ValuFiltered = ValueFilter.filter((item) =>
    item.toLowerCase().includes(tsest.toLowerCase())
  );
  const handleItemClick = (item) => {
    setselected(item);
    OnselectFilter(item);
    setselectedValue(item);
  };

  const handleunselect = () => {
    setselected("");
    setselectedValue("");
    OnResetFilter(); 
  };

  return (
    <div>
      <div className={isOpen ? "selectFilterMain2" : "selectFilterMain"}>
        <div onClick={() => setIsOpen(!isOpen)} className="headerFilter">
          <span>Ingrédients</span>
          <span>v</span>
        </div>
        {isOpen && (
          <div>
            <input type="search" onChange={(e) => settesest(e.target.value)} />
            <ul>
              {ValuFiltered.map((item) => (
                <li
                  onClick={() => handleItemClick(item) | setIsOpen(!isOpen)}
                  className={selected === item ? "yellow" : " "}
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {selected && (
        <p className="selected" onClick={() => handleunselect()}>
          {selectedValue}{" "}
        </p>
      )}
    </div>
  );
}
