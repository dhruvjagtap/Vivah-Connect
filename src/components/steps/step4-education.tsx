"use client";

import { FormInput } from "../form-input";
import { FormSelect } from "../form-select";

interface Step4Props {
  data: any;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const degrees = [
  { value: "bachelors", label: "Bachelor's Degree" },
  { value: "masters", label: "Master's Degree" },
  { value: "phd", label: "PhD/Doctorate" },
  { value: "diploma", label: "Diploma" },
  { value: "professional", label: "Professional Degree" },
  { value: "other", label: "Other" },
];

export function Step4Education({ data, onChange, errors }: Step4Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
          Educational Background
        </h2>
        <p className="text-gray-600">Share your educational qualifications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormSelect
          label="Highest Degree"
          options={degrees}
          value={data.degree || ""}
          onChange={(e) => onChange("degree", e.target.value)}
          error={errors.degree}
          required
        />

        <FormInput
          label="Field of Study"
          placeholder="Computer Science, Medicine, etc."
          value={data.fieldOfStudy || ""}
          onChange={(e) => onChange("fieldOfStudy", e.target.value)}
          error={errors.fieldOfStudy}
          required
        />
      </div>

      <FormInput
        label="College/University"
        placeholder="Name of your institution"
        value={data.college || ""}
        onChange={(e) => onChange("college", e.target.value)}
        error={errors.college}
        required
      />

      <FormInput
        label="Year of Graduation"
        type="number"
        placeholder="2020"
        value={data.graduationYear || ""}
        onChange={(e) => onChange("graduationYear", e.target.value)}
        error={errors.graduationYear}
        required
        min="1980"
        max={new Date().getFullYear()}
      />
    </div>
  );
}
