
const ProfilePreview = ({ data }) => {
  const renderRow = (label, value) => (
    <div className="flex justify-between items-start  border-gray-700 py-2 text-sm">
      <span className="font-semibold text-gray-300">{label}</span>
      <span className="text-gray-200 text-right max-w-[60%] break-words">
        {value || "—"}
      </span>
    </div>
  );

  return (
    <div className="bg-[#1f2937] text-white shadow-lg rounded-xl p-6 w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-center mb-6">Profile Preview</h2>

      <div className="flex flex-col items-center mb-6">
    <div className="relative w-48 h-32 overflow-hidden border-2 border-blue-500 shadow-lg rounded-xl">
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-semibold mt-4">
          {data.name || "Provider Name"}
        </h3>
      </div>

      <div className="space-y-3">
        {renderRow("Bio", data.bio)}
        {renderRow("Specializations", data.specializations?.join(", "))}
        {renderRow("Services", data.services?.join(", "))}
        {renderRow(
          "Experience",
          data.experience ? `${data.experience} years` : ""
        )}
        {renderRow("Email", data.email)}
        {renderRow("Phone", data.phone)}
        {renderRow("Availability", data.availability)}
      </div>
    </div>
  );
};

export default ProfilePreview;
