"use client";

import { FormInput } from "../form-input";
import { FormSelect } from "../form-select";

interface Step7Props {
  data: any;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const foodHabits = [
  { value: "vegetarian", label: "Vegetarian" },
  { value: "non-vegetarian", label: "Non-Vegetarian" },
  { value: "vegan", label: "Vegan" },
  { value: "jain-vegetarian", label: "Jain Vegetarian" },
];

const drinkingHabits = [
  { value: "never", label: "Never" },
  { value: "occasionally", label: "Occasionally" },
  { value: "socially", label: "Socially" },
  { value: "regularly", label: "Regularly" },
];

const smokingHabits = [
  { value: "never", label: "Never" },
  { value: "occasionally", label: "Occasionally" },
  { value: "regularly", label: "Regularly" },
];

export function Step7Lifestyle({ data, onChange, errors }: Step7Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
          Lifestyle & Interests
        </h2>
        <p className="text-gray-600">
          Tell us about your lifestyle and hobbies
        </p>
      </div>

      <FormInput
        label="Hobbies & Interests"
        placeholder="Reading, traveling, music, sports, etc."
        value={data.hobbies || ""}
        onChange={(e) => onChange("hobbies", e.target.value)}
        error={errors.hobbies}
        required
      />

      <FormSelect
        label="Food Habits"
        options={foodHabits}
        value={data.foodHabits || ""}
        onChange={(e) => onChange("foodHabits", e.target.value)}
        error={errors.foodHabits}
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormSelect
          label="Drinking"
          options={drinkingHabits}
          value={data.drinking || ""}
          onChange={(e) => onChange("drinking", e.target.value)}
          error={errors.drinking}
          required
        />

        <FormSelect
          label="Smoking"
          options={smokingHabits}
          value={data.smoking || ""}
          onChange={(e) => onChange("smoking", e.target.value)}
          error={errors.smoking}
          required
        />
      </div>
    </div>
  );
}
