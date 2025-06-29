"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProgressIndicator } from "@/components/progress-indicator";
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

const TOTAL_STEPS = 10;

export default function BiodataForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFieldChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  type FormData = {
    fullName?: string;
    age?: string;
    height?: string;
    mobile?: string;
    email?: string;
    socialMedia?: string;
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

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.fullName) newErrors.fullName = "Full name is required";
        if (!formData.age) newErrors.age = "Age is required";
        if (!formData.height) newErrors.height = "Height is required";
        break;
      case 2:
        if (!formData.mobile) newErrors.mobile = "Mobile number is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Please enter a valid email";
        }
        break;
      case 3:
        if (!formData.religion) newErrors.religion = "Religion is required";
        if (!formData.caste) newErrors.caste = "Caste/Community is required";
        if (!formData.motherTongue)
          newErrors.motherTongue = "Mother tongue is required";
        break;
      case 4:
        if (!formData.degree) newErrors.degree = "Degree is required";
        if (!formData.fieldOfStudy)
          newErrors.fieldOfStudy = "Field of study is required";
        if (!formData.college)
          newErrors.college = "College/University is required";
        if (!formData.graduationYear)
          newErrors.graduationYear = "Graduation year is required";
        break;
      case 5:
        if (!formData.jobTitle) newErrors.jobTitle = "Job title is required";
        if (!formData.company) newErrors.company = "Company is required";
        if (!formData.annualIncome)
          newErrors.annualIncome = "Annual income is required";
        break;
      case 6:
        if (!formData.fatherName)
          newErrors.fatherName = "Father's name is required";
        if (!formData.motherName)
          newErrors.motherName = "Mother's name is required";
        break;
      case 7:
        if (!formData.hobbies) newErrors.hobbies = "Hobbies are required";
        if (!formData.foodHabits)
          newErrors.foodHabits = "Food habits are required";
        if (!formData.drinking)
          newErrors.drinking = "Drinking preference is required";
        if (!formData.smoking)
          newErrors.smoking = "Smoking preference is required";
        break;
      case 8:
        if (!formData.nativePlace)
          newErrors.nativePlace = "Native place is required";
        if (!formData.currentCity)
          newErrors.currentCity = "Current city is required";
        if (!formData.country) newErrors.country = "Country is required";
        break;
      case 9:
        if (!formData.preferredAgeMin)
          newErrors.preferredAgeMin = "Minimum age preference is required";
        if (!formData.preferredAgeMax)
          newErrors.preferredAgeMax = "Maximum age preference is required";
        if (!formData.preferredReligion)
          newErrors.preferredReligion = "Religion preference is required";
        if (!formData.preferredEducation)
          newErrors.preferredEducation = "Education preference is required";
        if (
          formData.preferredAgeMin &&
          formData.preferredAgeMax &&
          Number.parseInt(formData.preferredAgeMin) >=
            Number.parseInt(formData.preferredAgeMax)
        ) {
          newErrors.preferredAgeMax =
            "Maximum age should be greater than minimum age";
        }
        break;
      case 10:
        if (!formData.termsAccepted || formData.termsAccepted !== "true") {
          newErrors.termsAccepted = "Please accept the terms and conditions";
        }
        break;
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
      // Here you would typically send the data to your backend/Firebase
      console.log("Submitting form data:", formData);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Handle success (redirect to success page, show success message, etc.)
      alert("Profile created successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error creating your profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    const stepProps = {
      data: formData,
      onChange: handleFieldChange,
      errors,
    };

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

  const isNextDisabled = () => {
    // For step 10, we handle submission differently
    if (currentStep === 10) return false;

    // Check if current step has validation errors
    // const tempErrors: Record<string, string> = {};

    switch (currentStep) {
      case 1:
        return !formData.fullName || !formData.age || !formData.height;
      case 2:
        return (
          !formData.mobile ||
          !formData.email ||
          !/\S+@\S+\.\S+/.test(formData.email || "")
        );
      case 3:
        return !formData.religion || !formData.caste || !formData.motherTongue;
      case 4:
        return (
          !formData.degree ||
          !formData.fieldOfStudy ||
          !formData.college ||
          !formData.graduationYear
        );
      case 5:
        return (
          !formData.jobTitle || !formData.company || !formData.annualIncome
        );
      case 6:
        return !formData.fatherName || !formData.motherName;
      case 7:
        return (
          !formData.hobbies ||
          !formData.foodHabits ||
          !formData.drinking ||
          !formData.smoking
        );
      case 8:
        return (
          !formData.nativePlace || !formData.currentCity || !formData.country
        );
      case 9:
        return (
          !formData.preferredAgeMin ||
          !formData.preferredAgeMax ||
          !formData.preferredReligion ||
          !formData.preferredEducation
        );
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
              Create Your Profile
            </h1>
            <p className="text-gray-600">
              Join Vivah Connect and find your perfect match
            </p>
          </div>

          {/* Progress Indicator */}
          <ProgressIndicator
            currentStep={currentStep}
            totalSteps={TOTAL_STEPS}
          />

          {/* Form Content */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 mb-8">
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              variant="outline"
              className="px-6 py-2 border-rose-200 text-rose-600 hover:bg-rose-50 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
            >
              Previous
            </Button>

            {currentStep < TOTAL_STEPS ? (
              <Button
                onClick={handleNext}
                disabled={isNextDisabled()}
                className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-6 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
