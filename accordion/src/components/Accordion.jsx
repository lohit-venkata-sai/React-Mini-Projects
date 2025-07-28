import React, { useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "What is an accordion?",
    content:
      "An accordion is a vertically stacked list of items that can be expanded to reveal more content.",
  },
  {
    id: 2,
    title: "Why use an accordion?",
    content:
      "Accordions are useful for organizing information in a compact space, improving usability and layout.",
  },
  {
    id: 3,
    title: "How does an accordion work?",
    content:
      "Each section has a header. When clicked, it toggles the visibility of its associated content.",
  },
  {
    id: 4,
    title: "Where are accordions used?",
    content:
      "Common places include FAQ sections, navigation menus, settings panels, and mobile layouts.",
  },
  {
    id: 5,
    title: "Can I style an accordion?",
    content:
      "Yes, you can fully customize accordions using CSS or libraries like Tailwind, Bootstrap, or custom styles.",
  },
];

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState([]);
  const [isMultiSelect, setIsMultiSelect] = useState(false);
  const handleClick = (id) => {
    setSelected((prevId) => (prevId == id ? null : id));
  };
  const handleMultiSelect = (id) => {
    let cpyMultiSelect = [...multiSelect];
    cpyMultiSelect.includes(id)
      ? (cpyMultiSelect = cpyMultiSelect.filter((item) => item != id))
      : cpyMultiSelect.push(id);
    setMultiSelect(cpyMultiSelect);
  };
  return (
    <div className="container flex items-center flex-col gap-2">
      <div
        className="border p-2 font-extrabold cursor-pointer"
        onClick={() => setIsMultiSelect((prev) => !prev)}
      >
        {isMultiSelect ? (
          <h1>Multi Select Enabled</h1>
        ) : (
          <h1>Single Select Enabled </h1>
        )}
      </div>
      {accordionData.length > 0 &&
        accordionData.map((item, ind) => (
          <div
            key={item.id}
            className="wrapper py-2 px-3  border flex w-[400px] flex-col gap-1 cursor-pointer "
          >
            <div
              className="flex justify-between w-full"
              onClick={() =>
                isMultiSelect
                  ? handleMultiSelect(item.id)
                  : handleClick(item.id)
              }
            >
              <div className="font-semibold">{item.title}</div>
              <span>+</span>
            </div>
            {}
            {isMultiSelect
              ? multiSelect.length > 0 &&
                multiSelect.includes(item.id) && (
                  <div className="text-sm pl-3">{item.content}</div>
                )
              : selected == item.id && (
                  <div className="text-sm pl-3">{item.content}</div>
                )}
          </div>
        ))}
    </div>
  );
};

export default Accordion;
