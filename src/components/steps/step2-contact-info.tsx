"use client";

import { FormInput } from "../form-input";

interface Step2Props {
  data: any;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

export function Step2ContactInfo({ data, onChange, errors }: Step2Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
          Contact Information
        </h2>
        <p className="text-gray-600">How can we reach you?</p>
      </div>

      <FormInput
        label="Mobile Number"
        type="tel"
        placeholder="+91 98765 43210"
        value={data.mobile || ""}
        onChange={(e) => onChange("mobile", e.target.value)}
        error={errors.mobile}
        required
      />

      <FormInput
        label="Email Address"
        type="email"
        placeholder="your.email@example.com"
        value={data.email || ""}
        onChange={(e) => onChange("email", e.target.value)}
        error={errors.email}
        required
      />

      <FormInput
        label="Social Media Profile"
        placeholder="Instagram, LinkedIn, or Facebook profile (optional)"
        value={data.socialMedia || ""}
        onChange={(e) => onChange("socialMedia", e.target.value)}
        error={errors.socialMedia}
      />
    </div>
  );
}
