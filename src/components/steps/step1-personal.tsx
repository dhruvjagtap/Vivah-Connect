"use client";

import { FormInput } from "../form-input";
import React from "react";

interface Step1Props {
  data: any;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
}

export function Step1PersonalInfo({ data, onChange, errors }: Step1Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
          Personal Information
        </h2>
        <p className="text-gray-600">
          Let's start with some basic details about you
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          label="Age"
          type="number"
          placeholder="25"
          value={data.age || ""}
          onChange={(e) => onChange("age", e.target.value)}
          error={errors.age}
          required
          min="18"
          max="60"
        />

        <FormInput
          label="Height"
          placeholder={"5'6\" or 168 cm"}
          value={data.height || ""}
          onChange={(e) => onChange("height", e.target.value)}
          error={errors.height}
          required
        />
      </div>
    </div>
  );
}
