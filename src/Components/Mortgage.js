import React from "react";
import { useState } from "react";
import Input from "./Input";
import Table from "./Table";
import mortgageCalculations from "./MortgageCalculations";

export default function Mortgage({ updateGraph }) {
  const [paymentValues, setPaymentValues] = useState([
    {
      month: 0,
      interestRate: "0",
      totalPaymentValue: "0",
      interestPayment: 0.0,
      principlePayment: 0.0,
      overpayment: "0",
      valueAfterPayment: "0",
    },
  ]);

  function handleSubmit(newInputValue) {
    let [calculatedValues, graphResults] = mortgageCalculations(newInputValue);
    setPaymentValues(calculatedValues);
    updateGraph(graphResults);
  }

  return (
    <>
      <Input onSubmit={handleSubmit} />
      <Table inputValues={paymentValues} />
    </>
  );
}
