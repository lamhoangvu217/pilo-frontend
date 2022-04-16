import React, { useEffect } from "react";
import LandingHeader from "./LandingHeader";
import LandingHero from "./LandingHero";
import LandingProduct from "./LandingProduct";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const checkUserHistory = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      checkUserHistory("/dashboard");
    }
  }, []);

  return (
    <div>
      <LandingHeader />
      <LandingHero />
      <LandingProduct />
    </div>
  );
}

export default LandingPage;
