"use server";
import Link from "next/link";
import GoogleLogin from "./GoogleLogin";
import FacebookLogin from "./FacebookLogin";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <div>
      <div>
        <h2>Log in to Teacher's Assistant</h2>
      </div>
      <GoogleLogin />
      <FacebookLogin />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
