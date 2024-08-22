import React, { useState } from "react";
import google from "../images/google.png";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [isGoogleSignUpClicked, setIsGoogleSignUpClicked] = useState(false);

  const handleGoogleLogin = () => {
    setIsGoogleSignUpClicked(true); // Update the state to change the button text

    // Redirect the user to the Google OAuth login page
    window.location.href = "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reachinbox-ai-five.vercel.app/";
  };

  return (
    <div className="h-[90vh] bg-black flex justify-center items-center">
      <div className="h-[40%] w-[30%] bg-[#0d0d0d] rounded-md text-gray-300 flex flex-col items-center justify-center gap-7">
        <p className="text-center">Create a new account</p>

        <button
          onClick={handleGoogleLogin}
          className="flex gap-4 items-center border px-6 py-2 justify-center w-[70%] rounded-md text-white hover:bg-gray-200 hover:text-black duration-200"
        >
          <img src={google} alt="Google logo" className="h-5 w-5" />
          <span>Sign Up with Google</span>
        </button>

        <a
          href="/onebox"
          className="px-4 py-3 rounded-md bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-blue-700 hover:to-purple-700 transition-all duration-500"
        >
          {isGoogleSignUpClicked ? "Continue" : "Create an Account"}
        </a>

        <p className="text-[14px]">
          Already have an account?{" "}
          <span>
            <a
              href="/onebox"
              className="font-semibold hover:underline duration-200"
            >
              Sign in
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
