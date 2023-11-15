export const INITIAL_STATE = {
  showContactForm: true,
  showBillingForm: false,
  showPaymentForm: false,
  paymentNotProvided: true,
  isFormEdit: false,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "EDITTED_CONTACTFORM":
      return {
        ...state,
        showContactForm: false,
        showBillingForm: true,
      };
    case "EDITTED_BILLINGFORM":
      return {
        ...state,
        showBillingForm: false,
        showPaymentForm: true,
      };
    case "EDITTED_PAYMENTFORM":
      return {
        ...state,
        showPaymentForm: false,
        paymentNotProvided: false,
      };
    case "EDITING_CONTACTFORM":
      return {
        ...state,
        isFormEdit: true,
        showContactForm: true,
      };
    case "EDITING_BILLINGFORM":
      return {
        ...state,
        isFormEdit: true,
        showBillingForm: true,
      };
    case "EDITING_PAYMENTFORM":
      return {
        ...state,
        isFormEdit: true,
        showPaymentForm: true,
      };
    case "CANCEL_FORMEDIT":
      return {
        ...state,
        isFormEdit: false,
      };
    case "UPDATED_CONTACTFORM":
      return {
        ...state,
        showContactForm: false,
      };
    case "UPDATED_BILLINGFORM":
      return {
        ...state,
        showBillingForm: false,
      };
    case "UPDATED_PAYMENTFORM":
      return {
        ...state,
        showPaymentForm: false,
      };
    default:
      return state;
  }
};
