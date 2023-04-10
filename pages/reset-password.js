import React from 'react';
import ResetPasswordForm from '../components/ResetPasswordForm';
import FormSide from '../components/FormSide';

export default function ResetPassword() {
  return (
    <div className="flex">
      <FormSide
        title="Forgot Password?!"
        paragraph1="Forgot your password? No problem. Just enter your email and we'll send you instructions on how to reset it. If you're having trouble accessing your account, please don't hesitate to contact our support team for assistance. We're here to help you get back to coding as quickly and smoothly as possible."
      />
      <ResetPasswordForm />
    </div>
  );
}
