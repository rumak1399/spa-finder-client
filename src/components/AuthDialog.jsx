"use client";
import React, { useState } from "react";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";

function AuthDialog() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // Function to handle switching between dialogs
  const switchToLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  const switchToSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  return (
    <div className="flex items-center gap-4">
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
