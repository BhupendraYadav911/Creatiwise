import React from "react";
import { toast } from "react-toastify";

const BasicInfo = ({ formData, onChange }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
      const maxSize = 2 * 1024 * 1024; // 2MB

      if (!validTypes.includes(file.type)) {
        toast.error("Only JPG, PNG, or WEBP images are allowed.");
        return;
      }

      if (file.size > maxSize) {
        toast.error("Image must be smaller than 2MB.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        onChange("profileImage", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">Provider Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => onChange("name", e.target.value)}
          className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
      </div>

      {/* Bio */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">Profile Bio</label>
        <textarea
          value={formData.bio}
          onChange={(e) => onChange("bio", e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-700 bg-gray-900 text-white rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write a short bio..."
        ></textarea>
      </div>

      {/* Upload Profile Image */}
      <div>
        <label className="block text-sm font-medium text-white mb-1">Upload Profile Image</label>
        <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition w-fit">
          {/* Inline SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-4 4m4-4l4 4M4 12a8 8 0 0116 0"
            />
          </svg>
          Choose File
          <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
        </label>
        <p className="text-xs text-gray-400 mt-1">Accepted: JPG, PNG, WEBP • Max: 2MB</p>
      </div>

      {/* Preview */}
 {formData.profileImage && (
  <div className="flex flex-col items-center mt-4">
    {/* Wrapper with relative position */}
    <div className="relative w-48 h-32 overflow-hidden border-2 border-blue-500 shadow-lg rounded-xl">
      {/* X Button Positioned Absolutely */}
      <button
        onClick={() => onChange("profileImage", null)}
        className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold hover:bg-red-700 z-10"
        aria-label="Remove Image"
        title="Remove Image"
      >
        ×
      </button>

      {/* Image Preview */}
      <img
        src={formData.profileImage}
        alt="Profile Preview"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Caption */}
    <p className="text-sm mt-2 text-gray-400">Previewing Uploaded Image</p>
  </div>
)}




    </div>
  );
};

export default BasicInfo;
