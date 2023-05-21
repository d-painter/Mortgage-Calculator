import React from "react";
import { useState } from "react";

export default function Input({ onSubmit }) {
  const [principle, setPrinciple] = useState(0);
  const [termLength, setTermLength] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [overpayment, setOverpayment] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      principle: principle,
      interestRate: interestRate,
      termLength: termLength,
      overpayment: overpayment,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* //principle */}
        <label for="principle">Principle: </label>
        <input
          type="number"
          id="principle"
          name="principle"
          step="any"
          min="0.01"
          onChange={(e) => setPrinciple(e.target.value)}
        />
        <br />

        {/* Term length */}
        <label for="term-length">Term length, years: </label>
        <input
          type="number"
          id="term-length"
          name="term-length"
          min="1"
          onChange={(e) => setTermLength(e.target.value)}
        />
        <br />

        {/* interest rate */}
        <label for="interest-rate">Interest Rate: </label>
        <input
          type="number"
          id="interest-rate"
          name="interest-rate"
          step="any"
          min="0.01"
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <br />

        {/* overpayment */}
        <label for="overpayment">Monthly Overpayment Value: </label>
        <input
          type="number"
          id="overpayment"
          name="overpayment"
          step="any"
          onChange={(e) => setOverpayment(e.target.value)}
        />
        <br />

        {/* Submit button */}
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}
