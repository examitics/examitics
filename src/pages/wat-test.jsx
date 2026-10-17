
import React from "react";
import { useNavigate } from "react-router-dom";
import WATS from "../components/issb/wats";

const WATTest = () => {
  const navigate = useNavigate();

  return (
    <WATS
      closeWAT={() => {
        navigate("/wat");
      }}
    />
  );
};

export default WATTest;
