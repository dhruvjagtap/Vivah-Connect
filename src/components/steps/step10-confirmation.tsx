"use client";

import { Button } from "@/components/ui/button";
import React from "react";

import { FormData } from "@/types";

interface Step10Props {
  data: FormData;
  onChange: (field: string, value: string) => void;
  errors: Record<string, string>;
  onSubmit: () => void;
  isSubmitting: boolean;
}

export function Step10Confirmation({
  data,
  onChange,
  errors,
  onSubmit,
  isSubmitting,
}: Step10Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
          Almost Done!
        </h2>
        <p className="text-gray-600">
          Please review and confirm your information
        </p>
      </div>

      <div className="bg-rose-50 rounded-xl p-6 space-y-4">
        <h3 className="font-semibold text-gray-800 mb-4">Profile Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-600">Name:</span>{" "}
            {data.fullName}
          </div>
          <div>
            <span className="font-medium text-gray-600">Age:</span> {data.age}
          </div>
          <div>
            <span className="font-medium text-gray-600">Religion:</span>{" "}
            {data.religion}
          </div>
          <div>
            <span className="font-medium text-gray-600">Education:</span>{" "}
            {data.degree}
          </div>
          <div>
            <span className="font-medium text-gray-600">Occupation:</span>{" "}
            {data.jobTitle}
          </div>
          <div>
            <span className="font-medium text-gray-600">Location:</span>{" "}
            {data.currentCity}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            checked={Boolean(data.termsAccepted)}
            onChange={(e) =>
              onChange("termsAccepted", e.target.checked.toString())
            }
            className="mt-1 h-4 w-4 text-rose-600 focus:ring-rose-500 border-rose-300 rounded"
          />
          <span className="text-sm text-gray-700">
            I declare that all the information provided is true and accurate to
            the best of my knowledge. I agree to the{" "}
            <a href="#" className="text-rose-600 hover:text-rose-700 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-rose-600 hover:text-rose-700 underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.termsAccepted && (
          <p className="text-sm text-red-600">{errors.termsAccepted}</p>
        )}
      </div>

      <div className="text-center pt-6">
        <Button
          onClick={onSubmit}
          disabled={!data.termsAccepted || isSubmitting}
          className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? "Creating Profile..." : "Create My Profile"}
        </Button>
      </div>
    </div>
  );
}
