import { useState } from "react";

type AddressFormProps = {
  onSubmit: (data: any) => void;
  onCancel: () => void;
};

const AddressForm: React.FC<AddressFormProps> = ({ onSubmit, onCancel }) => {
  const [form, setForm] = useState({
    name: "",
    street: "",
    city: "",
    zip: "",
    email: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.street || !form.city || !form.zip || !form.email) {
      setError("All fields are required");
      return;
    }

    onSubmit(form);
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow mt-3">
      <h3 className="text-lg font-semibold mb-4">Add New Address</h3>

      {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

      <div className="grid grid-cols-2 gap-3">
        <input className="border p-2 rounded w-full text-sm" name="name" placeholder="Full Name" onChange={handleChange} />
        <input className="border p-2 rounded w-full text-sm" name="email" placeholder="Email" onChange={handleChange} />
        <input className="border p-2 rounded w-full text-sm" name="street" placeholder="Street" onChange={handleChange} />
        <input className="border p-2 rounded w-full text-sm" name="city" placeholder="City" onChange={handleChange} />
        <input className="border p-2 rounded w-full text-sm" name="zip" placeholder="Pincode" onChange={handleChange} />
      </div>

      <div className="flex gap-3 mt-4">
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Address
        </button>

        <button onClick={onCancel} className="text-gray-600 underline">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
