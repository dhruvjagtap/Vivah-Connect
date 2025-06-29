"use client";

import { FormInput } from "../form-input";

interface Step6Props {
  data: any;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

export function Step6Family({ data, onChange, errors }: Step6Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
          Family Information
        </h2>
        <p className="text-gray-600">Share details about your family</p>
      </div>

      <FormInput
        label="Father's Name"
        placeholder="Enter your father's name"
        value={data.fatherName || ""}
        onChange={(e) => onChange("fatherName", e.target.value)}
        error={errors.fatherName}
        required
      />

      <FormInput
        label="Mother's Name"
        placeholder="Enter your mother's name"
        value={data.motherName || ""}
        onChange={(e) => onChange("motherName", e.target.value)}
        error={errors.motherName}
        required
      />

      <FormInput
        label="Siblings"
        placeholder="Number and details of brothers/sisters"
        value={data.siblings || ""}
        onChange={(e) => onChange("siblings", e.target.value)}
        error={errors.siblings}
      />
    </div>
  );
}
