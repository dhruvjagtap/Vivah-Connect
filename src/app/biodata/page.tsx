"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { Step1PersonalInfo } from "@/components/steps/step1-personal";
import { Step2ContactInfo } from "@/components/steps/step2-contact-info";
import { Step3CasteReligion } from "@/components/steps/step3-caste-religion";
import { Step4Education } from "@/components/steps/step4-education";
import { Step5Occupation } from "@/components/steps/step5-occupation";
import { Step6Family } from "@/components/steps/step6-family";
import { Step7Lifestyle } from "@/components/steps/step7-lifestyle";
import { Step8Location } from "@/components/steps/step8-location";
import { Step9PartnerPreference } from "@/components/steps/step9-partner-preference";
import { Step10Confirmation } from "@/components/steps/step10-confirmation";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const TOTAL_STEPS = 10;

type AllowedValue =
  | string
  | number
  | string[]
  | { value: string; label: string }[]
  | null;

export default function BiodataForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: AllowedValue) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };

      if (field === "dob" && typeof value === "string") {
        const birthDate = new Date(value);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        updated.age = age.toString();
      }

      return updated;
    });

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.fullName) newErrors.fullName = "Full name is required";
        if (!formData.dob) newErrors.dob = "Date of birth is required";
        if (!formData.age) newErrors.age = "Age is required";
        if (!formData.height) newErrors.height = "Height is required";
        break;
      // Add other step validations as required...
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(10)) return;

    setIsSubmitting(true);

    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        alert("User not authenticated. Please login again.");
        return;
      }

      const db = getFirestore();
      const userRef = doc(db, "users", user.uid);

      await setDoc(userRef, {
        ...formData,
        biodataCompleted: true,
        createdAt: serverTimestamp(),
      });

      alert("Profile created successfully!");
    } catch (error) {
      console.error("Error saving to Firestore:", error);
      alert("There was an error saving your profile. Please try again.");
    } finally {
      setIsSubmitting(false); // <--- stop loading
    }
  };

  const stepProps = {
    data: formData,
    onChange: handleChange,
    errors,
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1PersonalInfo {...stepProps} />;
      case 2:
        return <Step2ContactInfo {...stepProps} />;
      case 3:
        return <Step3CasteReligion {...stepProps} />;
      case 4:
        return <Step4Education {...stepProps} />;
      case 5:
        return <Step5Occupation {...stepProps} />;
      case 6:
        return <Step6Family {...stepProps} />;
      case 7:
        return <Step7Lifestyle {...stepProps} />;
      case 8:
        return <Step8Location {...stepProps} />;
      case 9:
        return <Step9PartnerPreference {...stepProps} />;
      case 10:
        return (
          <Step10Confirmation
            {...stepProps}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return <Step1PersonalInfo {...stepProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
              Create Your Profile
            </h1>
            <p className="text-gray-600">
              Join Vivah Connect and find your perfect match
            </p>
          </div>

          <ProgressIndicator
            currentStep={currentStep}
            totalSteps={TOTAL_STEPS}
          />

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 mb-8">
            {renderStep()}
          </div>

          <div className="flex justify-between items-center">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              variant="outline"
              className="px-6 py-2 border-rose-200 text-rose-600 hover:bg-rose-50 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
            >
              Previous
            </Button>

            {currentStep < TOTAL_STEPS && (
              <Button
                onClick={handleNext}
                className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

type FormData = {
  fullName?: string;
  dob?: string;
  age?: string;
  height?: string;
  mobile?: string;
  email?: string;
  religion?: string;
  caste?: string;
  motherTongue?: string;
  degree?: string;
  fieldOfStudy?: string;
  college?: string;
  graduationYear?: string;
  jobTitle?: string;
  company?: string;
  annualIncome?: string;
  fatherName?: string;
  motherName?: string;
  hobbies?: string;
  foodHabits?: string;
  drinking?: string;
  smoking?: string;
  nativePlace?: string;
  currentCity?: string;
  country?: string;
  preferredAgeMin?: string;
  preferredAgeMax?: string;
  preferredReligion?: string;
  preferredCaste?: string;
  preferredEducation?: string;
  preferredJob?: string;
  preferredLocation?: string;
  termsAccepted?: string;
};
