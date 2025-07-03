import { FormInput } from "../ui/form-input";
import { FormData } from "@/types";
import React from "react";

interface Step2Props {
  data: FormData;
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

      {/* Mobile Number + Verify */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <FormInput
          label="Mobile Number"
          type="tel"
          placeholder="+91 98765 43210"
          value={data.mobile || ""}
          onChange={(e) => onChange("mobile", e.target.value)}
          error={errors.mobile}
          required
        />
        <button
          className="bg-rose-600 text-white rounded-md py-2 px-4 hover:bg-rose-700 transition"
          onClick={() => alert("Simulate mobile OTP send")}
        >
          Send OTP
        </button>
      </div>

      {/* WhatsApp Number */}
      <FormInput
        label="WhatsApp Number"
        type="tel"
        placeholder="Same as mobile or enter new"
        value={data.whatsapp || ""}
        onChange={(e) => onChange("whatsapp", e.target.value)}
        error={errors.whatsapp}
      />

      {/* Alternate Number */}
      <FormInput
        label="Alternate Number"
        type="tel"
        placeholder="Optional"
        value={data.alternateNumber || ""}
        onChange={(e) => onChange("alternateNumber", e.target.value)}
        error={errors.alternateNumber}
      />

      {/* Email + Verify */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <FormInput
          label="Email Address"
          type="email"
          placeholder="your.email@example.com"
          value={data.email || ""}
          onChange={(e) => onChange("email", e.target.value)}
          error={errors.email}
          required
        />
        <button
          className="bg-rose-600 text-white rounded-md py-2 px-4 hover:bg-rose-700 transition"
          onClick={() => alert("Simulate email OTP send")}
        >
          Send OTP
        </button>
      </div>

      {/* Social Media Profile Links */}
      <div className="space-y-2">
        <label className="block text-gray-700 font-medium">
          Social Media Profiles
        </label>
        <FormInput
          label="Instagram"
          placeholder="https://instagram.com/yourprofile"
          value={data.instagram || ""}
          onChange={(e) => onChange("instagram", e.target.value)}
          error={errors.instagram}
        />
        <FormInput
          label="Facebook"
          placeholder="https://facebook.com/yourprofile"
          value={data.facebook || ""}
          onChange={(e) => onChange("facebook", e.target.value)}
          error={errors.facebook}
        />
        <FormInput
          label="LinkedIn"
          placeholder="https://linkedin.com/in/yourprofile"
          value={data.linkedIn || ""}
          onChange={(e) => onChange("linkedin", e.target.value)}
          error={errors.linkedin}
        />
      </div>
    </div>
  );
}
