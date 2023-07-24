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
  };

  const formInput =
    "peer block w-full appearance-none border bg-transparent p-4 text-sm text-black focus:mb-4 focus:border-black focus:outline-dashed focus:outline-offset-4 focus:outline-primary";

  const formLabel =
    "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm font-light text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary";

  return (
    <>
      <div id="paymentForm" className=" bg-white p-6 pt-3">
        <h3 className="mb-3 text-xl font-semibold">3. Payment</h3>
        {/* this is based on the info paystack will need not dsg */}
        <form id="payment-info" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-3">
            <p>Choose a payment option</p>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input
                  id="paystack"
                  type="radio"
                  name="paymentOption"
                  value="paystack"
                  {...register("paymentOption")}
                  checked
                  readOnly
                  className="h-5 w-5"
                />
                <label htmlFor="paystack" className="font-semibold">
                  Credit/Debit Card
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="cash"
                  type="radio"
                  name="paymentOption"
                  value="cash"
                  {...register("paymentOption")}
                  disabled
                  className="h-5 w-5"
                />
                <label htmlFor="cash" className="text-neutral-600">
                  Cash on Delivery (not available now)
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="paypal"
                  type="radio"
                  name="paymentOption"
                  value="Paypal"
                  {...register("paymentOption")}
                  disabled
                  className="h-5 w-5"
                />
                <label htmlFor="paypal" className="text-neutral-600">
                  Paypal (not available now)
                </label>
              </div>
            </div>
          </div>
          {/* <button className="secondary-btn mt-4 w-full py-4">SAVE</button> */}
          <input
            type="submit"
            value={editing ? "SAVE" : "FINISH"}
            className="secondary-btn w-full py-4"
          />
        </form>
      </div>
    </>
  );
}
