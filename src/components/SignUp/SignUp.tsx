"use server";
import SignUpForm from "../SignUpForm/SignUpForm";
import ServiceLogin from "../ServiceLogin/ServiceLogin";

const SignUp = () => {
  return (
    <div>
      <div>
        <h2>Log in to Teacher's Assistant</h2>
      </div>
      <ServiceLogin provider="google" />
      <ServiceLogin provider="facebook" />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
