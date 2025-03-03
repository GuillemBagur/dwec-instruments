import React, { useEffect, useState } from "react";
import "./Multiselect.css";
import { CircleX } from "lucide-react";

export default function Multiselect({ options, onChange, update, defaultValue }) {
  const [elements, setElements] = useState(defaultValue);
  const [showOptions, setShowOptions] = useState(false);
  
  function handleSelect(option) {
    setElements((prevSelections) => [...prevSelections, option]);
    hideOptions();
  }

  useEffect(function() {
    onChange(elements);
  }, [elements]);

  useEffect(function() {
    setElements(defaultValue);

  }, [update, defaultValue]);

  function hideOptions() {
    setShowOptions(false);
  }

  function toggleFocus(e) {
    if(e.target.classList.contains("input")) {
      if(showOptions) {
        hideOptions();
        
      } else {
        setShowOptions(true);
      }
    }
  }

  function handleDeleteElement(indexToDelete) {
    setElements(prevSelections => prevSelections.filter((element, index) => index !== indexToDelete));
  }

  const availableOptions = options.filter(option => !elements.includes(option));

  return (
    <div className="multiselect">
      <div className="input" onClick={toggleFocus}>
        {elements.map((selection, index) =>
          <button onClick={() => handleDeleteElement(index)} className="pill">{selection}<CircleX /></button>)}
      </div>

      {showOptions && <ul className="options">
        {availableOptions.map((option) => (
          <li className="option" onClick={() => handleSelect(option)}>{option}</li>
        ))}
      </ul>}

      {showOptions && <button onClick={hideOptions} className="hide-options"></button>}
    </div>
  );
}
