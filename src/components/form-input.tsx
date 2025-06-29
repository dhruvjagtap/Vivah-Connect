import type React from "react";
import { forwardRef } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, required, className = "", ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-rose-500 ml-1">*</span>}
        </label>
        <input
          ref={ref}
          className={`w-full px-4 py-3 border border-rose-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm ${
            error ? "border-red-300 focus:ring-red-500" : ""
          } ${className}`}
          {...props}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
