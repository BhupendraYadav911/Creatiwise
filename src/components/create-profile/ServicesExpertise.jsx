import React from "react";

const specializationOptions = [
  "Dyslexia",
  "ADHD",
  "Autism",
  "Speech Delay",
  "Down Syndrome",
];

const serviceOptions = [
  "Tutoring",
  "Therapy",
  "Coaching",
  "Counseling",
  "Assessment",
];

const ServicesExpertise = ({ formData, onChange }) => {
  const handleMultiSelectChange = (field, option) => {
    const current = formData[field] || [];
    const updated = current.includes(option)
      ? current.filter((item) => item !== option)
      : [...current, option];
    onChange(field, updated);
  };

  return (
    <div className="space-y-6 text-white">
      <h2 className="text-lg font-semibold">Services & Expertise</h2>

      {/* Specializations */}
      <div>
        <p className="text-sm font-semibold mb-2">Specializations:</p>
        <div className="flex flex-wrap gap-4">
          {specializationOptions.map((option) => (
            <label key={option} className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={formData.specializations.includes(option)}
                onChange={() => handleMultiSelectChange("specializations", option)}
                className="h-5 w-5 text-blue-500 accent-blue-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Services */}
      <div>
        <p className="text-sm font-semibold mb-2">Services Offered:</p>
        <div className="flex flex-wrap gap-4">
          {serviceOptions.map((option) => (
            <label key={option} className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={formData.services.includes(option)}
                onChange={() => handleMultiSelectChange("services", option)}
                className="h-5 w-5 text-blue-500 accent-blue-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <label className="block text-sm font-semibold mb-1">
          Years of Experience
        </label>
        <input
          type="number"
          min="0"
          value={formData.experience}
          onChange={(e) => onChange("experience", e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 rounded-md bg-[#1f2937] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g. 5"
        />
      </div>
    </div>
  );
};

export default ServicesExpertise;
