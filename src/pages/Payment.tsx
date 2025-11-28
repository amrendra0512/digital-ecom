import { useSelector, useDispatch } from "react-redux";
import { updateAddress } from "../redux/userDeatils/userSlices";
import { addPaymentMethod } from "../redux/payment/paymentSlices";
import AddressForm from "../common/AddressForm";
import PaymentForm from "../common/PaymentForm";
import { useEffect, useState } from "react";

const CheckoutPage = () => {
  const dispatch = useDispatch();

  const address = useSelector((state) => state.user.address);
  const paymentMethods = useSelector((state) => state.payment.paymentMethods);
  const cart = useSelector((state) => state.cart.items);

  const subtotal = cart.reduce((acc, p) => acc + p.price * p.qty, 0);

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  // Auto-show forms if no data
  useEffect(() => {
    if (!address.name) setShowAddressForm(true);
    if (paymentMethods.length === 0) setShowPaymentForm(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="col-span-2 space-y-6">
          {/* ADDRESS CARD */}
          <div className="bg-white p-5 rounded-lg shadow">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Shipping Address</h2>

              {!showAddressForm && (
                <button
                  onClick={() => setShowAddressForm(true)}
                  className="text-blue-600"
                >
                  Change
                </button>
              )}
            </div>

            {/* If form active */}
            {showAddressForm ? (
              <AddressForm
                onSubmit={(data) => {
                  dispatch(updateAddress(data));
                  setShowAddressForm(false);
                }}
                onCancel={() => setShowAddressForm(false)}
              />
            ) : (
              <>
                <p className="font-semibold">{address.name}</p>
                <p className="text-gray-700">{address.street}</p>
                <p className="text-gray-700">{address.city}</p>
                <p className="text-gray-700">{address.zip}</p>
                <p className="text-gray-500 text-sm mt-1">{address.email}</p>

                <button
                  onClick={() => setShowAddressForm(true)}
                  className="text-blue-600 text-sm mt-3"
                >
                  Add new address
                </button>
              </>
            )}
          </div>

          {/* PAYMENT CARD */}
          <div className="bg-white p-5 rounded-lg shadow">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Payment Method</h2>

              {!showPaymentForm && (
                <button
                  onClick={() => setShowPaymentForm(true)}
                  className="text-blue-600"
                >
                  Add new payment
                </button>
              )}
            </div>

            {showPaymentForm ? (
              <PaymentForm
                onSubmit={(data) => {
                  dispatch(addPaymentMethod({ id: Date.now(), ...data }));
                  setShowPaymentForm(false);
                }}
                onCancel={() => setShowPaymentForm(false)}
              />
            ) : (
              paymentMethods.map((pm) => (
                <div
                  key={pm.id}
                  className="border rounded-md p-4 mb-3 flex justify-between"
                >
                  <div>
                    <p className="font-semibold">{pm.holderName}</p>
                    <p className="text-gray-700">{pm.masked}</p>
                    <p className="text-gray-500 text-sm">Expiry: {pm.expiry}</p>
                  </div>

                  <input type="radio" name="payment" className="h-5 w-5" />
                </div>
              ))
            )}
          </div>
        </div>

        {/* RIGHT SUMMARY */}
        <div className="col-span-1">
          <div className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Your Order Summary</h2>

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-3 mb-3"
              >
                <img
                  src={item.image}
                  className="w-14 h-14 rounded object-cover"
                />
                <p className="flex-1 ml-3">{item.title}</p>
                <p className="font-semibold">₹{item.price}</p>
              </div>
            ))}

            <div className="flex justify-between mt-4">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between text-xl font-semibold mt-4 border-t pt-3">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>

            <button className="w-full mt-5 bg-orange-500 text-white py-2 rounded">
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
