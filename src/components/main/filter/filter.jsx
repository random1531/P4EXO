import "./filter.css";
import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiSearch, FiX } from "react-icons/fi";
export default function filter({ ValueFilter, OnselectFilter, OnResetFilter, namefilter, selectedvalue }) {
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
    settesest("")
  };

  return (
    <div className="filterblock">
      <div className={isOpen ? "selectFilterMain2" : "selectFilterMain"}>
        <div onClick={() => setIsOpen(!isOpen)} className="headerFilter">
          <span>{namefilter}</span>
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {isOpen && (
          <div className="filtermenu">
            <label className="searcheinputfilter">
              <input type="search" className="searchinput" onChange={(e) => settesest(e.target.value)} />
              <FiSearch className="search-icon" />
            </label>
            {!selectedValue ||
              <div className="yellow">
                <p>{selectedvalue}</p>
                <FiX onClick={() => handleunselect()} />
              </div>
            }
            <ul className="filterul">
              {ValuFiltered.map((item) => (
                <li
                  onClick={() => handleItemClick(item)}

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
        <div className="selected" >
          <p >
            {selectedValue}{" "}
          </p>
          <FiX onClick={() => handleunselect()} />

        </div>
      )}
    </div>
  );
}
