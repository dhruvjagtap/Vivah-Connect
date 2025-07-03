"use client";

import { FormInput } from "../ui/form-input";
import { FormData } from "@/types";

interface Step6Props {
  data: FormData;
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
        <p className="text-gray-600">A brief about your family background</p>
      </div>

      <FormInput
        label="Father's Name"
        placeholder="Enter father's name"
        value={data.fatherName || ""}
        onChange={(e) => onChange("fatherName", e.target.value)}
        error={errors.fatherName}
        required
      />

      <FormInput
        label="Father's Occupation"
        placeholder="E.g., Teacher, Farmer"
        value={data.fatherOccupation || ""}
        onChange={(e) => onChange("fatherOccupation", e.target.value)}
        error={errors.fatherOccupation}
      />

      <FormInput
        label="Mother's Name"
        placeholder="Enter mother's name"
        value={data.motherName || ""}
        onChange={(e) => onChange("motherName", e.target.value)}
        error={errors.motherName}
        required
      />

      <FormInput
        label="Mother's Occupation"
        placeholder="E.g., Homemaker, Doctor"
        value={data.motherOccupation || ""}
        onChange={(e) => onChange("motherOccupation", e.target.value)}
        error={errors.motherOccupation}
      />

      <FormInput
        label="Siblings (Summary)"
        placeholder="E.g., 1 brother (married), 1 sister"
        value={data.siblings || ""}
        onChange={(e) => onChange("siblings", e.target.value)}
        error={errors.siblings}
      />
    </div>
  );
}
