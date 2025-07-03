"use client";

import { FormInput } from "../ui/form-input";
import { FormSelect } from "../ui/form-select";
import { FormData } from "@/types";

interface Step3Props {
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
  { value: "other", label: "Other" },
];

const languages = [
  { value: "hindi", label: "Hindi" },
  { value: "english", label: "English" },
  { value: "bengali", label: "Bengali" },
  { value: "telugu", label: "Telugu" },
  { value: "marathi", label: "Marathi" },
  { value: "tamil", label: "Tamil" },
  { value: "gujarati", label: "Gujarati" },
  { value: "kannada", label: "Kannada" },
  { value: "malayalam", label: "Malayalam" },
  { value: "punjabi", label: "Punjabi" },
  { value: "other", label: "Other" },
];

export function Step3CasteReligion({ data, onChange, errors }: Step3Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
          Cultural Background
        </h2>
        <p className="text-gray-600">
          Tell us about your cultural and religious background
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormSelect
          label="Religion"
          options={religions}
          value={data.religion || ""}
          onChange={(e) => onChange("religion", e.target.value)}
          error={errors.religion}
          required
        />

        <FormInput
          label="Caste/Community"
          placeholder="Enter your caste or community"
          value={data.caste || ""}
          onChange={(e) => onChange("caste", e.target.value)}
          error={errors.caste}
          required
        />
      </div>

      <FormSelect
        label="Mother Tongue"
        options={languages}
        value={data.motherTongue || ""}
        onChange={(e) => onChange("motherTongue", e.target.value)}
        error={errors.motherTongue}
        required
      />

      <FormInput
        label="Horoscope Details"
        placeholder="Birth time, place, or horoscope details (optional)"
        value={data.horoscope || ""}
        onChange={(e) => onChange("horoscope", e.target.value)}
        error={errors.horoscope}
      />
    </div>
  );
}
