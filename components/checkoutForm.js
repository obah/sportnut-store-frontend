"use client";

export default function CheckoutForm() {
  return (
    <div className="checkout-form">
      <div>
        <h3 className="mb-6 text-xl font-semibold">
          1. Your Contact Information
        </h3>
        <div id="contact-info">
          <div>
            <div className="relative mb-3">
              <label
                htmlFor="firstName"
                className="absolute left-4 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-1 font-light text-neutral-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75"
              >
                {/* <label
                htmlFor="firstName"
                className="absolute top-4 left-4 text-neutral-500 font-light px-1 bg-white z-10 group-focus:-top-2 group-focus:text-xs group-focus:transition-all duration-300 ease-in-out"
              > */}
                First Name
              </label>
              <input type="text" name="firstName" placeholder=" " />
            </div>

            <div class="relative">
              <input
                type="text"
                id="floating_outlined"
                className="peer block w-full appearance-none border bg-transparent p-4 text-sm text-black focus:mb-4 focus:border-black focus:outline-dashed focus:outline-2 focus:outline-offset-4 focus:outline-primary"
                placeholder=" "
              />
              <label
                for="floating_outlined"
                className="absolute left-1 top-2  z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary"
              >
                Floating outlined
              </label>
            </div>

            <div className="relative mb-3">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder=" "
                className="peer"
              />
            </div>
          </div>
          <div className="relative mb-3">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder=" " className="peer" />
          </div>
          <div className="relative mb-3">
            <label htmlFor="phone">Phone (123) 456-789</label>
            <input
              type="number"
              name="phone"
              placeholder=" "
              className="peer"
            />
          </div>
          <button>CONTINUE</button>
        </div>
      </div>
    </div>
  );
}
