import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
const Menus = ({ menus }) => {
  const [currChildrens, setCurrChildrens] = useState({});
  const togglePlusMinus = (label) => {
    setCurrChildrens((prev) => {
      return { ...prev, [label]: !prev[label] };
    });
  };
  return (
    <div>
      <ul className="ml-4 list-disc flex flex-col gap-2">
        {menus &&
          menus.length > 0 &&
          menus.map((item, ind) => (
            <li key={ind} className="items-baseline">
              {item.label}
              {item.children &&
                item.children.length > 0 &&
                (currChildrens[item.label] ? (
                  <span
                    className="ml-4 cursor-pointer"
                    onClick={() => togglePlusMinus(item.label)}
                  >
                    -
                  </span>
                ) : (
                  <span
                    className="ml-4 cursor-pointer"
                    onClick={() => togglePlusMinus(item.label)}
                  >
                    +
                  </span>
                ))}
              {currChildrens[item.label] &&
                item.children &&
                item.children.length > 0 && <Menus menus={item.children} />}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Menus;
