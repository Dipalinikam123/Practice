import RegistrationForm from "@/Form/RegistrationForm";

const RegisterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent bg-opacity-50">
      <div className="bg-black  text-white rounded-lg p-6" style={{ width: '40%' }}>
      <h2 className="text-lg font-semibold mb-4">Register</h2>
        <hr/>
       <RegistrationForm/>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-gray-300 text-gray-700 rounded-md px-4 py-2 mr-2"
            onClick={onClose}
          >
            Close
          </button>
          <button className="bg-blue-500 text-white rounded-md px-4 py-2">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
