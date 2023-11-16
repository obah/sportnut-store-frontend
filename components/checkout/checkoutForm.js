"use client";

import { useContext, useReducer } from "react";
import ContactForm from "../form/contactForm";
import BillingForm from "../form/billingForm";
import PaymentForm from "../form/paymentForm";
import { FaCheck } from "react-icons/fa";
import { UserDetailsContext } from "@/context/userDetailsContext";
import { INITIAL_STATE, formReducer } from "@/hooks/formReducer";

function CheckoutForm({ updatePayment }) {
  const { userDetails, updateUserDetails } = useContext(UserDetailsContext);

  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const updateForm = (data, formName) => {
    updateUserDetails(data);
    if (state.isFormEdit) {
      formName === "contactForm" && dispatch({ type: "UPDATED_CONTACTFORM" });
      formName === "billingForm" && dispatch({ type: "UPDATED_BILLINGFORM" });
      formName === "paymentForm" && dispatch({ type: "UPDATED_PAYMENTFORM" });
      dispatch({ type: "CANCEL_FORMEDIT" });
      return;
    }

    formName === "contactForm" && dispatch({ type: "EDITTED_CONTACTFORM" });
    formName === "billingForm" && dispatch({ type: "EDITTED_BILLINGFORM" });
    formName === "paymentForm" && updatePaymentDetails();
  };

  const updatePaymentDetails = () => {
    updatePayment();
    dispatch({ type: "EDITTED_PAYMENTFORM" });
  };

  const editContactForm = () => {
    dispatch({ type: "EDITING_CONTACTFORM" });
  };

  const editBillingForm = () => {
    dispatch({ type: "EDITING_BILLINGFORM" });
  };

  const editPaymentForm = () => {
    dispatch({ type: "EDITING_PAYMENTFORM" });
  };

  return (
    <div className="border border-neutral-200">
      <div>
        {state.showContactForm ? (
          <div>
            <ContactForm
              user={userDetails}
              updateUser={updateForm}
              editing={state.isFormEdit}
            />
          </div>
        ) : userDetails.firstName ? (
          <div className="bg-white p-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className=" text-xl font-semibold">
                  1. Your Contact Information
                </h3>
                <FaCheck className="text-primary " />
              </div>
              <button
                onClick={editContactForm}
                className="text-sm font-semibold underline"
              >
                Change
              </button>
            </div>

            <div className=" border-b pb-4">
              <p className="pb-2 font-semibold">
                Fullname:{" "}
                <span className="font-normal">{`${userDetails.firstName} ${userDetails.lastName}`}</span>
              </p>
              <p className="pb-2 font-semibold">
                Email: <span className="font-normal">{userDetails.email}</span>
              </p>
              <p className="pb-2 font-semibold">
                Phone No.:{" "}
                <span className="font-normal">{userDetails.phone}</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="border-b border-b-gray-300 p-3">
            <h3 className="mb-6 pt-0 text-xl font-semibold">
              1. Your Contact Information
            </h3>
          </div>
        )}
      </div>

      <div>
        {state.showBillingForm ? (
          <div>
            <BillingForm
              user={userDetails}
              updateUser={updateForm}
              editing={state.isFormEdit}
            />
          </div>
        ) : userDetails.street ? (
          <div className="bg-white p-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className=" text-xl font-semibold">
                  2. Billing and Shipping Address
                </h3>
                <FaCheck className="text-primary " />
              </div>
              <button
                onClick={editBillingForm}
                className="text-sm font-semibold underline"
              >
                Change
              </button>
            </div>

            <div className=" border-b pb-2">
              <p className="pb-2 font-semibold">
                Street Address:{" "}
                <span className="font-normal">{userDetails.street}</span>
              </p>
              <p className="pb-2 font-semibold">
                House Number:{" "}
                <span className="font-normal">
                  {userDetails.house ? userDetails.house : "--"}
                </span>
              </p>
              <p className="pb-2 font-semibold">
                Zip code: <span className="font-normal">{userDetails.zip}</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="border-b border-b-gray-300 p-3 ">
            <h3 className=" pt-0 text-xl font-semibold">
              2. Billing & Shipping Address
            </h3>
          </div>
        )}
      </div>

      <div>
        {state.showPaymentForm ? (
          <div>
            <PaymentForm
              user={userDetails}
              updateUser={updateForm}
              editing={state.isFormEdit}
            />
          </div>
        ) : userDetails.paymentOption ? (
          <div className="bg-white p-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className=" text-xl font-semibold">3. Payment</h3>
                <FaCheck className="text-primary " />
              </div>
              <button
                onClick={editPaymentForm}
                className="text-sm font-semibold underline"
              >
                Change
              </button>
            </div>

            <div className="">
              <p className="pb-2 font-semibold">
                Preferred Payment Option:{" "}
                <span className="font-normal">{userDetails.paymentOption}</span>
              </p>
            </div>
          </div>
        ) : (
          <div className="border-b border-b-gray-300 p-3">
            <h3 className="mb-4 pt-0 text-xl font-semibold lg:mb-0">
              3. Payment
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutForm;
