"use client";

import React from "react";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  label: string;
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  error?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  options,
  selected,
  onChange,
  error,
}) => {
  const toggleSelection = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex flex-wrap gap-2 border rounded-lg p-3 min-h-[48px]">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`px-3 py-1 rounded-full border text-sm ${
              selected.includes(option.value)
                ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white border-rose-600"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            onClick={() => toggleSelection(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
};
