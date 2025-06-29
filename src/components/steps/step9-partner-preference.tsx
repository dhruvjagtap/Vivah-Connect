"use client";

import { FormData } from "@/types";
import { FormInput } from "../form-input";
import { FormSelect } from "../form-select";

interface Step9Props {
  data: FormData;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const religions = [
  { value: "hindu", label: "Hindu" },
  { value: "muslim", label: "Muslim" },
  { value: "christian", label: "Christian" },
  { value: "sikh", label: "Sikh" },
  { value: "buddhist", label: "Buddhist" },
  { value: "jain", label: "Jain" },
  { value: "any", label: "Any Religion" },
  { value: "other", label: "Other" },
];

const educationLevels = [
  { value: "bachelors", label: "Bachelor's or above" },
  { value: "masters", label: "Master's or above" },
  { value: "phd", label: "PhD/Doctorate" },
  { value: "professional", label: "Professional Degree" },
  { value: "any", label: "Any Education" },
];

export function Step9PartnerPreference({ data, onChange, errors }: Step9Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
          Partner Preferences
        </h2>
        <p className="text-gray-600">
          What are you looking for in your life partner?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="Preferred Age Range (Min)"
          type="number"
          placeholder="25"
          value={data.preferredAgeMin || ""}
          onChange={(e) => onChange("preferredAgeMin", e.target.value)}
          error={errors.preferredAgeMin}
          required
          min="18"
          max="60"
        />

        <FormInput
          label="Preferred Age Range (Max)"
          type="number"
          placeholder="35"
          value={data.preferredAgeMax || ""}
          onChange={(e) => onChange("preferredAgeMax", e.target.value)}
          error={errors.preferredAgeMax}
          required
          min="18"
          max="60"
        />
      </div>

      <FormSelect
        label="Preferred Religion"
        options={religions}
        value={data.preferredReligion || ""}
        onChange={(e) => onChange("preferredReligion", e.target.value)}
        error={errors.preferredReligion}
        required
      />

      <FormInput
        label="Preferred Caste/Community"
        placeholder="Specific caste preference or 'Any'"
        value={data.preferredCaste || ""}
        onChange={(e) => onChange("preferredCaste", e.target.value)}
        error={errors.preferredCaste}
      />

      <FormSelect
        label="Preferred Education Level"
        options={educationLevels}
        value={data.preferredEducation || ""}
        onChange={(e) => onChange("preferredEducation", e.target.value)}
        error={errors.preferredEducation}
        required
      />
    </div>
  );
}
