import React from "react";
import { useNavigate } from "react-router-dom";
import SCT from "../components/issb/sct";

const SCTTest = () => {
  const navigate = useNavigate();

  return (
    <SCT
      closeSCT={() => {
        navigate("/sct");
      }}
    />
  );
};

export default SCTTest;