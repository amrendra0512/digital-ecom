import { useState } from "react";

type PaymentFormProps = {
  onSubmit: (data: any) => void;
  onCancel: () => void;
};

const PaymentForm: React.FC<PaymentFormProps> = ({ onSubmit, onCancel }) => {
  const [form, setForm] = useState({
    holderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Mask card number for saving
  const maskCardNumber = (num: string) => {
    if (!num) return "";
    return "**** **** **** " + num.slice(-4);
  };

  const handleSubmit = () => {
    if (!form.holderName || !form.cardNumber || !form.expiry || !form.cvv) {
      setError("All fields are required");
      return;
    }

    if (form.cardNumber.length < 16) {
      setError("Card number must be 16 digits");
      return;
    }

    if (form.cvv.length !== 3) {
      setError("CVV must be 3 digits");
      return;
    }

    onSubmit({
      id: Date.now(),
      type: "Credit/Debit Card",
      masked: maskCardNumber(form.cardNumber),
      holderName: form.holderName,
      expiry: form.expiry,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mt-3">
      <h3 className="text-2xl font-semibold mb-4">Add New Payment Method</h3>

      {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

      <div className="grid gap-4">
        {/* card Holder Name */}
        <input
          className="border p-2 rounded w-full text-sm"
          name="holderName"
          placeholder="Card Holder Name"
          value={form.holderName}
          onChange={handleChange}
        />

        {/* Card Number */}
        <input
          className="border p-2 rounded w-full text-sm"
          name="cardNumber"
          placeholder="Card Number (16 digits)"
          maxLength={16}
          value={form.cardNumber}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            setForm({ ...form, cardNumber: value });
          }}
        />

        <div className="grid grid-cols-2 gap-4">
          {/* Expiry */}
          <input
            className="border p-2 rounded w-full text-sm"
            name="expiry"
            placeholder="MM/YY"
            maxLength={5}
            value={form.expiry}
            onChange={(e) => {
              let value = e.target.value.replace(/[^0-9/]/g, "");
              if (value.length === 2 && !value.includes("/")) {
                value = value + "/";
              }
              setForm({ ...form, expiry: value });
            }}
          />

          {/* CVV */}
          <input
            className="border p-2 rounded w-full text-sm"
            name="cvv"
            placeholder="CVV"
            maxLength={3}
            value={form.cvv}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setForm({ ...form, cvv: value });
            }}
          />
        </div>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-md"
        >
          Save Payment
        </button>

        <button onClick={onCancel} className="text-gray-600 underline">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PaymentForm;
