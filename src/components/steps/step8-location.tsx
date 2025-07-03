"use client";

import { FormData } from "@/types";
import { FormInput } from "../ui/form-input";

interface Step8Props {
  data: FormData;
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
        label="Landmark"
        placeholder="E.g., Near temple, main market"
        value={data.landmark || ""}
        onChange={(e) => onChange("landmark", e.target.value)}
        error={errors.landmark}
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
        label="District"
        placeholder="E.g., Pune, Ahmedabad"
        value={data.district || ""}
        onChange={(e) => onChange("district", e.target.value)}
        error={errors.district}
      />

      <FormInput
        label="Pin Code"
        type="text"
        placeholder="Enter your area's pincode"
        value={data.pinCode || ""}
        onChange={(e) => onChange("pinCode", e.target.value)}
        error={errors.pinCode}
      />

      <FormInput
        label="State"
        placeholder="Maharashtra, Gujarat, etc."
        value={data.state || ""}
        onChange={(e) => onChange("state", e.target.value)}
        error={errors.state}
      />

      <FormInput
        label="Country"
        placeholder="India, USA, Canada, etc."
        value={data.country || ""}
        onChange={(e) => onChange("country", e.target.value)}
        error={errors.country}
        required
      />

      <FormInput
        label="Home Location Map Link"
        placeholder="Paste Google Maps link to your home (optional)"
        value={data.mapLink || ""}
        onChange={(e) => onChange("mapLink", e.target.value)}
        error={errors.mapLink}
      />
    </div>
  );
}
