"use client";

import { FormInput } from "../ui/form-input";
import { FormSelect } from "../ui/form-select";
import { FormData } from "@/types";
import { useState } from "react";

interface Step5Props {
  data: FormData;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const incomeRanges = [
  { value: "0-3", label: "₹0 - ₹3 Lakhs" },
  { value: "3-5", label: "₹3 - ₹5 Lakhs" },
  { value: "5-10", label: "₹5 - ₹10 Lakhs" },
  { value: "10-15", label: "₹10 - ₹15 Lakhs" },
  { value: "15-25", label: "₹15 - ₹25 Lakhs" },
  { value: "25-50", label: "₹25 - ₹50 Lakhs" },
  { value: "50+", label: "₹50+ Lakhs" },
];

const occupationTypes = [
  { value: "job", label: "Job" },
  { value: "business", label: "Business" },
  { value: "other", label: "Other (Odar)" },
];

export function Step5Occupation({ data, onChange, errors }: Step5Props) {
  const [occupationType, setOccupationType] = useState(
    data.occupationType || "job"
  );

  const handleOccupationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setOccupationType(value);
    onChange("occupationType", value);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
          Professional Information
        </h2>
        <p className="text-gray-600">
          Tell us about your job, business or work
        </p>
      </div>

      <FormSelect
        label="Occupation Type"
        options={occupationTypes}
        value={occupationType}
        onChange={handleOccupationChange}
        error={errors.occupationType}
        required
      />

      {/* Job Section */}
      {occupationType === "job" && (
        <>
          <FormInput
            label="Company / Organization Name"
            placeholder="e.g. TCS, Infosys"
            value={data.company || ""}
            onChange={(e) => onChange("company", e.target.value)}
            error={errors.company}
            required
          />
          <FormInput
            label="Job Title / Post"
            placeholder="Software Engineer, Teacher, etc."
            value={data.jobTitle || ""}
            onChange={(e) => onChange("jobTitle", e.target.value)}
            error={errors.jobTitle}
            required
          />
          <FormInput
            label="Office Address"
            placeholder="City, State or full address"
            value={data.officeAddress || ""}
            onChange={(e) => onChange("officeAddress", e.target.value)}
            error={errors.officeAddress}
            required
          />
        </>
      )}

      {/* Business Section */}
      {occupationType === "business" && (
        <>
          <FormInput
            label="Business Name"
            placeholder="ABC Enterprises"
            value={data.businessName || ""}
            onChange={(e) => onChange("businessName", e.target.value)}
            error={errors.businessName}
            required
          />
          <FormInput
            label="Business Organisation Type"
            placeholder="Private Ltd, Proprietorship, etc."
            value={data.businessType || ""}
            onChange={(e) => onChange("businessType", e.target.value)}
            error={errors.businessType}
            required
          />
          <FormInput
            label="Business Address"
            placeholder="Full business address"
            value={data.businessAddress || ""}
            onChange={(e) => onChange("businessAddress", e.target.value)}
            error={errors.businessAddress}
            required
          />
        </>
      )}

      {/* Other Section */}
      {occupationType === "other" && (
        <>
          <FormInput
            label="Occupation Name"
            placeholder="Farmer, Freelancer, Artist, etc."
            value={data.otherOccupation || ""}
            onChange={(e) => onChange("otherOccupation", e.target.value)}
            error={errors.otherOccupation}
            required
          />
          <FormInput
            label="Occupation Address"
            placeholder="Location or area"
            value={data.otherAddress || ""}
            onChange={(e) => onChange("otherAddress", e.target.value)}
            error={errors.otherAddress}
            required
          />
        </>
      )}

      {/* Common to All */}
      <FormSelect
        label="Annual Income / CTC"
        options={incomeRanges}
        value={data.annualIncome || ""}
        onChange={(e) => onChange("annualIncome", e.target.value)}
        error={errors.annualIncome}
        required
      />
    </div>
  );
}
