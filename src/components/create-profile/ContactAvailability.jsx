import React from "react";

const ContactAvailability = ({ formData, onChange }) => {
  return (
    <div className="space-y-6 text-white">
      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 bg-[#1f2937] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 bg-[#1f2937] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., +91 9876543210"
        />
      </div>

      {/* Preferred Working Hours */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1">Preferred Working Hours</label>
        <textarea
          rows={3}
          value={formData.availability}
          onChange={(e) => onChange("availability", e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 bg-[#1f2937] text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., Mon-Fri, 10am to 4pm"
        ></textarea>
      </div>
    </div>
  );
};

export default ContactAvailability;
