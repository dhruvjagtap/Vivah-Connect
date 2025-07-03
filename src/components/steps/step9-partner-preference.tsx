"use client";

import { FormData } from "@/types";
import { FormInput } from "../ui/form-input";
import { FormSelect } from "../ui/form-select";
import { MultiSelect } from "@/components/ui/multi-select"; // Custom multiselect component

type AllowedValue =
  | string
  | number
  | string[]
  | { value: string; label: string }[]
  | null;

interface Step9Props {
  data: FormData;
  onChange: (field: string, value: AllowedValue) => void;
  errors: Record<string, string>;
}

const religions = [
  { value: "hindu", label: "Hindu" },
  { value: "muslim", label: "Muslim" },
  { value: "christian", label: "Christian" },
  { value: "sikh", label: "Sikh" },
  { value: "buddhist", label: "Buddhist" },
  { value: "jain", label: "Jain" },
  { value: "other", label: "Other" },
  { value: "any", label: "Any Religion" },
];

const educationLevels = [
  { value: "bachelors", label: "Bachelor's or above" },
  { value: "masters", label: "Master's or above" },
  { value: "phd", label: "PhD/Doctorate" },
  { value: "professional", label: "Professional Degree" },
  { value: "any", label: "Any Education" },
];

const occupations = [
  { value: "job", label: "Job" },
  { value: "business", label: "Business" },
  { value: "odar", label: "Odar" },
  { value: "any", label: "Any" },
];

const incomeRanges = [
  { value: "0-3", label: "₹0 - ₹3 Lakhs" },
  { value: "3-5", label: "₹3 - ₹5 Lakhs" },
  { value: "5-10", label: "₹5 - ₹10 Lakhs" },
  { value: "10-15", label: "₹10 - ₹15 Lakhs" },
  { value: "15-25", label: "₹15 - ₹25 Lakhs" },
  { value: "25-50", label: "₹25 - ₹50 Lakhs" },
  { value: "50+", label: "₹50+ Lakhs" },
  { value: "any", label: "Any Income" },
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

      <MultiSelect
        label="Preferred Religion(s)"
        options={religions}
        selected={data.preferredReligions || []}
        onChange={(selected) => onChange("preferredReligions", selected)}
        error={errors.preferredReligions}
      />

      <FormInput
        label="Preferred Caste(s)"
        placeholder="E.g., Maratha, Brahmin, Any"
        value={data.preferredCastes || ""}
        onChange={(e) => onChange("preferredCastes", e.target.value)}
        error={errors.preferredCastes}
      />

      <FormSelect
        label="Preferred Education Level"
        options={educationLevels}
        value={data.preferredEducation || ""}
        onChange={(e) => onChange("preferredEducation", e.target.value)}
        error={errors.preferredEducation}
        required
      />

      <FormSelect
        label="Preferred Occupation Type"
        options={occupations}
        value={data.preferredOccupation || ""}
        onChange={(e) => onChange("preferredOccupation", e.target.value)}
        error={errors.preferredOccupation}
      />

      <FormSelect
        label="Preferred Annual Income"
        options={incomeRanges}
        value={data.preferredIncome || ""}
        onChange={(e) => onChange("preferredIncome", e.target.value)}
        error={errors.preferredIncome}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="Preferred City"
          placeholder="E.g., Mumbai, Bangalore"
          value={data.preferredCity || ""}
          onChange={(e) => onChange("preferredCity", e.target.value)}
          error={errors.preferredCity}
        />

        <FormInput
          label="Preferred State"
          placeholder="E.g., Maharashtra, Karnataka"
          value={data.preferredState || ""}
          onChange={(e) => onChange("preferredState", e.target.value)}
          error={errors.preferredState}
        />
      </div>
    </div>
  );
}
