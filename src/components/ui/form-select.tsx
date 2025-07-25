import type React from "react";
import { forwardRef } from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface GroupedOption {
  label: string;
  options: SelectOption[];
}

interface FormSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  label: string;
  error?: string;
  required?: boolean;
  options: (SelectOption | GroupedOption)[];
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  (
    { label, title, error, required, options, className = "", ...props },
    ref
  ) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-rose-500 ml-1">*</span>}
        </label>
        <select
          ref={ref}
          className={`w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm ${
            error ? "border-red-300 focus:ring-red-500" : ""
          } ${className}`}
          {...props}
        >
          <option value="">{title}</option>

          {options.map((option) => {
            if ("options" in option) {
              return (
                <optgroup key={option.label} label={option.label}>
                  {option.options.map((child) => (
                    <option key={child.value} value={child.value}>
                      {child.label}
                    </option>
                  ))}
                </optgroup>
              );
            }

            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

FormSelect.displayName = "FormSelect";
