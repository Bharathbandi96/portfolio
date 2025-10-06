import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface PortfolioState {
  contactForm: ContactForm;
  isFormSubmitting: boolean;
  formSubmitted: boolean;
  statusMessage: string;
  statusCode: number;
}

interface StatusState {
  statusMessage: string;
  statusCode: number;
}

const initialState: PortfolioState = {
  contactForm: {
    name: '',
    email: '',
    subject: '',
    message: '',
  },
  isFormSubmitting: false,
  formSubmitted: false,
  statusCode: -1,
  statusMessage:'',
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    updateContactForm: (state, action: PayloadAction<Partial<ContactForm>>) => {
      state.contactForm = { ...state.contactForm, ...action.payload };
    },
    resetContactForm: (state) => {
      state.contactForm = initialState.contactForm;
      state.formSubmitted = false;
    },
    setStatusState: (state, action: PayloadAction<StatusState>) => {
      const {statusMessage, statusCode} = action.payload;
      state.statusMessage = statusMessage;
      state.statusCode = statusCode
    },
    setFormSubmitting: (state, action: PayloadAction<boolean>) => {
      state.isFormSubmitting = action.payload;
    },
    setFormSubmitted: (state, action: PayloadAction<boolean>) => {
      state.formSubmitted = action.payload;
    },
  },
});

export const { updateContactForm, resetContactForm, setFormSubmitting, setFormSubmitted, setStatusState } = portfolioSlice.actions;
export default portfolioSlice.reducer;