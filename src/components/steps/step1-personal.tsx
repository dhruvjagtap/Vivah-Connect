"use client";

import { FormInput } from "../ui/form-input";
import React from "react";
import { FormData } from "@/types";
import { FormSelect } from "../ui/form-select";

interface Step1Props {
  data: FormData;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

const maritalStatusOptions = [
  { value: "single", label: "Single" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
];

const disabilityOptions = [
  { value: "no", label: "No" },
  { value: "yes", label: "Yes" },
];

export function Step1PersonalInfo({ data, onChange, errors }: Step1Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
          Personal Information
        </h2>
        <p className="text-gray-600">
          Let&apos;s start with some basic details about you
        </p>
      </div>

      <FormInput
        label="Full Name"
        placeholder="Enter your full name"
        value={data.fullName || ""}
        onChange={(e) => onChange("fullName", e.target.value)}
        error={errors.fullName}
        required
      />

      <FormInput
        label="Date of Birth"
        type="date"
        value={data.dob || ""}
        onChange={(e) => onChange("dob", e.target.value)}
        error={errors.dob}
        required
      />

      <FormInput
        label="Age"
        type="number"
        placeholder="Calculated automatically"
        value={data.age || ""}
        onChange={(e) => onChange("age", e.target.value)}
        error={errors.age}
        required
        readOnly
      />

      <FormInput
        label="Height"
        placeholder={"e.g. 5'6\" or 168 cm"}
        value={data.height || ""}
        onChange={(e) => onChange("height", e.target.value)}
        error={errors.height}
        required
      />

      <FormSelect
        label="Marital Status"
        options={maritalStatusOptions}
        value={data.maritalStatus || ""}
        onChange={(e) => onChange("maritalStatus", e.target.value)}
        error={errors.maritalStatus}
        required
      />

      <FormSelect
        label="Any Disability?"
        options={disabilityOptions}
        value={data.disability || ""}
        onChange={(e) => onChange("disability", e.target.value)}
        error={errors.disability}
        required
      />
    </div>
  );
}
