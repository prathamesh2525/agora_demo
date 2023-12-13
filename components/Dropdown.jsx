"use client"

import React, { useState } from "react"

const NestedHoverMenu = () => {
  const [isHovered, setHovered] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const options = ["Option 1", "Option 2", "Option 3"]

  return (
    <div className="relative">
      <div
        className="cursor-pointer text-blue-500 hover:text-blue-700"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Original Link
      </div>

      {isHovered && (
        <div
          className="absolute top-full left-0 bg-white border text-black border-gray-300 p-2 rounded-md shadow-md"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {options.map((option, index) => (
            <a
              key={index}
              href={`/${option.toLowerCase().replace(" ", "-")}`}
              className={`block cursor-pointer py-2 hover:bg-blue-100 ${
                selectedOption === option ? "bg-blue-200" : ""
              }`}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </a>
          ))}
        </div>
      )}

      {selectedOption && (
        <div className="mt-2 text-blue-500">Selected: {selectedOption}</div>
      )}
    </div>
  )
}

export default NestedHoverMenu
