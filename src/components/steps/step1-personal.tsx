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
  { value: "single", label: "Never" },
  { value: "divorced", label: "Divorced" },
  { value: "widowed", label: "Widowed" },
];

const disabilityOptions = [
  { value: "no", label: "No" },
  { value: "yes", label: "Yes" },
];

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const heightOptions = [
  { value: "4ft 5in - 135cm", label: "4ft 5in - 135cm" },
  { value: "4ft 6in - 137cm", label: "4ft 6in - 137cm" },
  { value: "4ft 7in - 140cm", label: "4ft 7in - 140cm" },
  { value: "4ft 8in - 142cm", label: "4ft 8in - 142cm" },
  { value: "4ft 9in - 144cm", label: "4ft 9in - 144cm" },
  { value: "4ft 10in - 147cm", label: "4ft 10in - 147cm" },
  { value: "4ft 11in - 149cm", label: "4ft 11in - 149cm" },
  { value: "5ft 0in - 152cm", label: "5ft 0in - 152cm" },
  { value: "5ft 1in - 154cm", label: "5ft 1in - 154cm" },
  { value: "5ft 2in - 157cm", label: "5ft 2in - 157cm" },
  { value: "5ft 3in - 160cm", label: "5ft 3in - 160cm" },
  { value: "5ft 4in - 162cm", label: "5ft 4in - 162cm" },
  { value: "5ft 5in - 165cm", label: "5ft 5in - 165cm" },
  { value: "5ft 6in - 167cm", label: "5ft 6in - 167cm" },
  { value: "5ft 7in - 170cm", label: "5ft 7in - 170cm" },
  { value: "5ft 8in - 172cm", label: "5ft 8in - 172cm" },
  { value: "5ft 9in - 175cm", label: "5ft 9in - 175cm" },
  { value: "5ft 10in - 177cm", label: "5ft 10in - 177cm" },
  { value: "5ft 11in - 180cm", label: "5ft 11in - 180cm" },
  { value: "6ft 0in - 182cm", label: "6ft 0in - 182cm" },
  { value: "6ft 1in - 185cm", label: "6ft 1in - 185cm" },
  { value: "6ft 2in - 187cm", label: "6ft 2in - 187cm" },
  { value: "6ft 3in - 190cm", label: "6ft 3in - 190cm" },
  { value: "6ft 4in - 193cm", label: "6ft 4in - 193cm" },
  { value: "6ft 5in - 195cm", label: "6ft 5in - 195cm" },
  { value: "6ft 6in - 198cm", label: "6ft 6in - 198cm" },
  { value: "6ft 7in - 200cm", label: "6ft 7in - 200cm" },
  { value: "6ft 8in - 203cm", label: "6ft 8in - 203cm" },
  { value: "6ft 9in - 205cm", label: "6ft 9in - 205cm" },
  { value: "6ft 10in - 208cm", label: "6ft 10in - 208cm" },
  { value: "6ft 11in - 210cm", label: "6ft 11in - 210cm" },
  { value: "7ft 0in - 213cm", label: "7ft 0in - 213cm" },
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

      <FormSelect
        title="Select Gender"
        label="Gender"
        options={genderOptions}
        value={data.gender || ""}
        onChange={(e) => onChange("gender", e.target.value)}
        error={errors.gender}
        required
      />

      <FormSelect
        title="Select Height"
        label="Height"
        options={heightOptions}
        value={data.height || ""}
        onChange={(e) => onChange("height", e.target.value)}
        error={errors.height}
        required
      />

      <FormSelect
        title="Select Martial Status"
        label="Marital Status"
        options={maritalStatusOptions}
        value={data.maritalStatus || ""}
        onChange={(e) => onChange("maritalStatus", e.target.value)}
        error={errors.maritalStatus}
        required
      />

      <FormSelect
        title="Select any disability"
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
