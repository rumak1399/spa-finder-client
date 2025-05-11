"use client";
import React, { useState } from "react";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";

function AuthDialog() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const switchToLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  const switchToSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 md:p-0">
      <LoginButton 
        isOpen={isLoginOpen} 
        setIsOpen={setIsLoginOpen} 
        switchToSignup={switchToSignup} 
      />
      <SignupButton 
        isOpen={isSignupOpen} 
        setIsOpen={setIsSignupOpen} 
        switchToLogin={switchToLogin} 
      />
    </div>
  );
}

export default AuthDialog;
