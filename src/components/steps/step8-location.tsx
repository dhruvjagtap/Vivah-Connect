"use client";

import { FormInput } from "../form-input";

interface Step8Props {
  data: any;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

export function Step8Location({ data, onChange, errors }: Step8Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
          Location Details
        </h2>
        <p className="text-gray-600">
          Where are you from and where do you live?
        </p>
      </div>

      <FormInput
        label="Native Place"
        placeholder="Your hometown or native place"
        value={data.nativePlace || ""}
        onChange={(e) => onChange("nativePlace", e.target.value)}
        error={errors.nativePlace}
        required
      />

      <FormInput
        label="Current City"
        placeholder="City where you currently live"
        value={data.currentCity || ""}
        onChange={(e) => onChange("currentCity", e.target.value)}
        error={errors.currentCity}
        required
      />

      <FormInput
        label="Country"
        placeholder="India, USA, Canada, etc."
        value={data.country || ""}
        onChange={(e) => onChange("country", e.target.value)}
        error={errors.country}
        required
      />
    </div>
  );
}
