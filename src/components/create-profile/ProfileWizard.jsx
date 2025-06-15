import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactAvailability from "./ContactAvailability";
import BasicInfo from "./BasicInfo";
import ServicesExpertise from "./ServicesExpertise";
import ProfilePreview from "./ProfilePreview";
import { useNavigate } from "react-router-dom";

const steps = [
  "Basic Information",
  "Services & Expertise",
  "Contact & Availability",
  "Preview",
];

const ProfileWizard = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    profileImage: null,
    specializations: [],
    services: [],
    experience: "",
    email: "",
    phone: "",
    availability: "",
  });

  const handleNext = () => {
    const error = validateStep();
    if (error) {
      toast.error(error);
      return;
    }
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const error = validateStep();
    if (error) {
      toast.error(error);
      return;
    }
    console.log("Submitted Profile Data:", formData);
    toast.success("Profile submitted successfully!");
    setTimeout(() => navigate("/"), 4000); // redirect after short delay
  };

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <BasicInfo formData={formData} onChange={handleChange} />;
      case 1:
        return <ServicesExpertise formData={formData} onChange={handleChange} />;
      case 2:
        return <ContactAvailability formData={formData} onChange={handleChange} />;
      case 3:
        return <ProfilePreview data={formData} />;
      default:
        return null;
    }
  };

  const validateStep = () => {
    switch (activeStep) {
      case 0:
        if (!formData.name.trim()) return "Please enter your name.";
        if (!formData.bio.trim()) return "Please enter a profile bio.";
        if (!formData.profileImage) return "Please upload a profile image.";
        return null;
      case 1:
        if (!formData.specializations?.length)
          return "Please select at least one specialization.";
        if (!formData.services?.length)
          return "Please select at least one service.";
        if (!formData.experience.trim())
          return "Please enter years of experience.";
        if (isNaN(formData.experience) || Number(formData.experience) < 0)
          return "Experience must be a valid positive number.";
        return null;
      case 2:
        if (!formData.email.trim()) return "Please enter your email.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email))
          return "Please enter a valid email address.";
        if (!formData.phone.trim()) return "Please enter your phone number.";
        const phoneRegex = /^(?:\+91[\s]?)?[6-9]\d{9}$/;
        if (!phoneRegex.test(formData.phone))
          return "Enter a valid 10-digit mobile number, with or without +91.";
        if (!formData.availability.trim())
          return "Please enter your availability.";
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#010208] text-white lg:mt-12 px-4 pt-16 pb-10 flex justify-center items-start font-poppins">
      <div className="bg-[#111827] w-full max-w-3xl rounded-2xl shadow-2xl p-4 sm:p-6">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 font-poppins">
          Provider Profile Builder
        </h2>

        {/* Stepper */}
        <div className="flex flex-wrap justify-between mb-6 sm:mb-8 border-b border-gray-700">
          {steps.map((label, index) => (
            <div
              key={label}
              className={`flex-1 text-center text-[10px] xs:text-xs sm:text-sm font-semibold py-2 transition-all ${
                index === activeStep
                  ? "text-blue-400 border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="mb-6">{renderStep()}</div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 max-w-md mx-auto">
          <button
            onClick={handleBack}
            disabled={activeStep === 0}
            className="w-full sm:w-auto px-4 py-2 rounded-md border border-gray-600 bg-transparent text-gray-300 hover:bg-gray-800 disabled:opacity-30 font-syne"
          >
            Previous Step
          </button>

          {activeStep < steps.length - 1 ? (
            <button
              onClick={handleNext}
              className="w-full sm:w-auto px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-syne"
            >
              Next Step
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-syne"
            >
              Submit Profile
            </button>
          )}
        </div>
      </div>

      <ToastContainer theme="dark" position="top-right" />
    </div>
  );
};

export default ProfileWizard;
