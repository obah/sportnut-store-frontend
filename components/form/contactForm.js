"use client";

import { useForm } from "react-hook-form";

export default function ContactForm({ user, updateUser, editing }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
    },
  });

  const onSubmit = (data) => {
    updateUser(data, "contactForm");
    const billingForm = document.getElementById("billingForm");
    if (billingForm) {
      billingForm.scrollIntoView({
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
      <div id="contactForm" className=" bg-white p-6">
        <h3 className="mb-6 text-xl font-semibold">
          1. Your Contact Information
        </h3>
        <form id="contact-info" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative mb-3">
              <input
                id="firstName"
                placeholder=" "
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "Please enter your first name",
                  },
                })}
                className={formInput}
              />
              {errors.firstName && (
                <p className="pl-2 text-xs text-secondary">
                  {errors.firstName.message}
                </p>
              )}
              <label htmlFor="firstName" className={formLabel}>
                First Name
              </label>
            </div>
            <div className="relative mb-3">
              <input
                id="lastName"
                placeholder=" "
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Please enter your last name",
                  },
                })}
                className={formInput}
              />
              {errors.lastName && (
                <p className="pl-2 text-xs text-secondary">
                  {errors.lastName.message}
                </p>
              )}
              <label htmlFor="lastName" className={formLabel}>
                Last Name
              </label>
            </div>
          </div>
          <div className="relative mb-3">
            <input
              type="email"
              id="email"
              placeholder=" "
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter your email",
                },
              })}
              className={formInput}
            />
            {errors.email && (
              <p className="pl-2 text-xs text-secondary">
                {errors.email.message}
              </p>
            )}
            <label htmlFor="email" className={formLabel}>
              Email
            </label>
          </div>
          <div className="relative mb-3">
            <input
              type="number"
              id="phone"
              placeholder=" "
              {...register("phone", {
                required: {
                  value: true,
                  message: "Please enter your phone number",
                },
              })}
              className={formInput}
            />
            {errors.phone && (
              <p className="pl-2 text-xs text-secondary">
                {errors.phone.message}
              </p>
            )}
            <label htmlFor="phone" className={formLabel}>
              Phone (123) 456-789
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
