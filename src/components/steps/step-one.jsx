import PropTypes from "prop-types";

export default function StepOne({ formData, updateFormData }) {
  return (
    <div className="space-y-4">
      <p className="text-gray-500">Select your primary role to help us personalize your experience.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div>
          <input
            type="radio"
            id="student"
            name="role"
            value="student"
            checked={formData.role === "student"}
            onChange={() => updateFormData("role", "student")}
            className="sr-only peer"
          />
          <label
            htmlFor="student"
            className="flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-checked:border-green-500 cursor-pointer transition-all"
          >
            <div className="mb-2 rounded-full bg-green-100 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
              </svg>
            </div>
            <div className="font-medium">Student</div>
            <span className="text-sm text-gray-500 text-center mt-1">Im here to learn and improve my skills</span>
          </label>
        </div>

        <div>
          <input
            type="radio"
            id="lecturer"
            name="role"
            value="lecturer"
            checked={formData.role === "lecturer"}
            onChange={() => updateFormData("role", "lecturer")}
            className="sr-only peer"
          />
          <label
            htmlFor="lecturer"
            className="flex flex-col items-center justify-between rounded-md border-2 border-gray-200 bg-white p-4 hover:bg-gray-50 peer-checked:border-green-500 cursor-pointer transition-all"
          >
            <div className="mb-2 rounded-full bg-green-100 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-500"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
            </div>
            <div className="font-medium">Lecturer</div>
            <span className="text-sm text-gray-500 text-center mt-1">Im here to teach and share knowledge</span>
          </label>
        </div>
      </div>
    </div>
  )
}


StepOne.propTypes = {
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

