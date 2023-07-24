"use client";

import { useForm } from "react-hook-form";

export default function BillingForm({ user, updateUser, editing }) {
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
    updateUser(data, "billingForm");
    const paymentForm = document.getElementById("paymentForm");
    if (paymentForm) {
      paymentForm.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const formInput =
    "peer block w-full appearance-none border bg-transparent p-4 text-sm text-black focus:mb-4 focus:border-black focus:outline-dashed focus:outline-offset-4 focus:outline-primary";

  const formLabel =
    "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm font-light text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary";

  return (
    <>
      <div id="billingForm" className=" bg-white p-6 pt-3">
        <h3 className="mb-6 text-xl font-semibold">
          2. Billing & Shipping Address
        </h3>
        <form id="address-info" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-3">
            <input
              id="street"
              placeholder=" "
              {...register("street", {
                required: {
                  value: true,
                  message: "Please enter your street address",
                },
              })}
              className={formInput}
            />
            {errors.street && (
              <p className="pl-2 text-xs text-secondary">
                {errors.street.message}
              </p>
            )}
            <label htmlFor="street" className={formLabel}>
              Street Address
            </label>
          </div>
          <div className="relative mb-3">
            <input
              id="house"
              placeholder=" "
              {...register("house")}
              className={formInput}
            />
            <label htmlFor="house" className={formLabel}>
              Apt, Suite, etc. (optional)
            </label>
          </div>
          <div className="relative mb-3">
            <input
              type="number"
              id="zip"
              placeholder=" "
              {...register("zip", {
                required: {
                  value: true,
                  message: "Please enter your zip code",
                },
              })}
              className={formInput}
            />
            {errors.zip && (
              <p className="pl-2 text-xs text-secondary">
                {errors.zip.message}
              </p>
            )}
            <label htmlFor="zip" className={formLabel}>
              ZIP Code Only (EX: 12345)
            </label>
          </div>
          {editing ? (
            <input
              type="submit"
              value="SAVE"
              className="secondary-btn w-full py-4"
            />
          ) : (
            <input
              type="submit"
              value="CONTINUE"
              className={
                (isDirty ? "secondary-btn" : "disabled-btn") + " w-full py-4"
              }
              disabled={!isDirty}
            />
          )}
        </form>
      </div>
    </>
  );
}
