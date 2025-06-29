"use client";

import { FormInput } from "../form-input";
import { FormSelect } from "../form-select";

interface Step5Props {
  data: any;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const incomeRanges = [
  { value: "0-3", label: "₹0 - ₹3 Lakhs" },
  { value: "3-5", label: "₹3 - ₹5 Lakhs" },
  { value: "5-10", label: "₹5 - ₹10 Lakhs" },
  { value: "10-15", label: "₹10 - ₹15 Lakhs" },
  { value: "15-25", label: "₹15 - ₹25 Lakhs" },
  { value: "25-50", label: "₹25 - ₹50 Lakhs" },
  { value: "50+", label: "₹50+ Lakhs" },
];

export function Step5Occupation({ data, onChange, errors }: Step5Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
          Professional Information
        </h2>
        <p className="text-gray-600">Tell us about your career and work</p>
      </div>

      <FormInput
        label="Job Title"
        placeholder="Software Engineer, Doctor, Teacher, etc."
        value={data.jobTitle || ""}
        onChange={(e) => onChange("jobTitle", e.target.value)}
        error={errors.jobTitle}
        required
      />

      <FormInput
        label="Company/Organization"
        placeholder="Name of your workplace"
        value={data.company || ""}
        onChange={(e) => onChange("company", e.target.value)}
        error={errors.company}
        required
      />

      <FormSelect
        label="Annual Income"
        options={incomeRanges}
        value={data.annualIncome || ""}
        onChange={(e) => onChange("annualIncome", e.target.value)}
        error={errors.annualIncome}
        required
      />
    </div>
  );
}
