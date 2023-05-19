import React from "react";

const MultipleSelect = ({ options, selectedOptions, onChange }) => {
  const handleOptionChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    // Update the selected options based on the checkbox change
    if (isChecked) {
      onChange([...selectedOptions, value]); // Add the selected option
    } else {
      onChange(selectedOptions.filter((option) => option !== value)); // Remove the selected option
    }
  };

  const isSelected = (optionValue) => selectedOptions.includes(optionValue);

  return (
    <div className="flex flex-col gap-4">
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex h-20 w-full items-center justify-center rounded-[1.25rem] ${
            isSelected(option.value)
              ? "bg-primary-blue text-white"
              : "border border-primary-blue text-primary-blue"
          }`}
        >
          <input
            type="checkbox"
            value={option.value}
            checked={isSelected(option.value)}
            onChange={handleOptionChange}
            className="sr-only"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default MultipleSelect;
