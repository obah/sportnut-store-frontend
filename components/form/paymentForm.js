"use client";

import { useForm } from "react-hook-form";

export default function PaymentForm({ user, updateUser, editing }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      street: user.street,
      house: user.house,
      zip: user.zip,
    },
  });

  const onSubmit = (data) => {
    updateUser(data, "paymentForm");
    //this one is the final submit function
  };

  const formInput =
    "peer block w-full appearance-none border bg-transparent p-4 text-sm text-black focus:mb-4 focus:border-black focus:outline-dashed focus:outline-offset-4 focus:outline-primary";

  const formLabel =
    "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm font-light text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary";

  return (
    <>
      <div id="paymentForm" className=" bg-white p-6">
        <h3 className="mb-6 text-xl font-semibold">3. Payment</h3>
        {/* this is based on the info paystack will need not dsg */}
        <form id="payment-info">
          <div className="relative mb-3">
            <input id="street" placeholder=" " className={formInput} />
            <label htmlFor="street" className={formLabel}>
              Street Address
            </label>
          </div>
          <div className="relative mb-3">
            <input id="house" placeholder=" " className={formInput} />
            <label htmlFor="house" className={formLabel}>
              Apt, Suite, etc. (optional)
            </label>
          </div>
          <div className="relative mb-3">
            <input id="zip" placeholder=" " className={formInput} />
            <label htmlFor="zip" className={formLabel}>
              ZIP Code Only (EX: 12345)
            </label>
          </div>
          <button className="secondary-btn w-full py-4 ">SAVE</button>
        </form>
      </div>
    </>
  );
}
