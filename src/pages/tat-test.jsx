
import React from "react";
import { useNavigate } from "react-router-dom";
import TAT from "../components/issb/tat";

const TATTest = () => {
  const navigate = useNavigate();

  return (
    <TAT
      closeTAT={() => {
        navigate("/tat");
      }}
    />
  );
};

export default TATTest;
