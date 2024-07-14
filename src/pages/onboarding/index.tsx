/* eslint-disable react-hooks/exhaustive-deps */
import { useAuthSlice } from "@/hooks/useAuthSlice";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import InforFillUp from "./InforFillUp";
import { InputOTPForm } from "./InputOTPForm";
import PhoneNumberInputForm from "./PhoneNumberInputForm";
import Preference from "./Preference";

export default function Onboard() {
  const navigate = useNavigate();
  const { onboardingStage, user, reset } = useAuthSlice();

  useEffect(() => {
    if (onboardingStage === 4) {
      navigate({ to: "/dashboard" });
    }
  }, [onboardingStage]);

  useEffect(() => {
    if (!user.isAuthenticated) {
      reset();
    }
  }, [user.isAuthenticated]);

  return (
    <div>
      {onboardingStage === 0 && <PhoneNumberInputForm />}
      {onboardingStage === 1 && <InputOTPForm />}
      {onboardingStage === 2 && <InforFillUp />}
      {onboardingStage === 3 && <Preference />}
    </div>
  );
}
