/**Takes initial mortgage inputs and returns an list of objects for each calculation step. */

import { findByDisplayValue } from "@testing-library/react";

export default function mortgageCalculations(inputValues) {
  // Set initial values
  const principle = Number(inputValues.principle);
  const interestRate = Number(inputValues.interestRate);
  const r = interestRate / 12 / 100;
  const n = inputValues.termLength * 12;
  let overpaymentValue = Number(inputValues.overpayment);

  // Payment Calculation
  const topRow = r * (1 + r) ** n;
  const bottomRow = (1 + r) ** n - 1;
  const monthlyPaymentValue = principle * (topRow / bottomRow);
  const totalPaymentValue = isNaN(monthlyPaymentValue)
    ? 0
    : monthlyPaymentValue;

  /**Create calculation results list and set initial to input values */
  const calculationResults = [
    {
      month: 0,
      interestRate: interestRate.toFixed(2),
      totalPaymentValue: totalPaymentValue.toFixed(2),
      interestPayment: 0,
      principlePayment: 0,
      overpayment: overpaymentValue.toFixed(2),
      valueAfterPayment: principle.toFixed(2),
    },
  ];

  /**Array holding data for graph to display */
  const graphArray = [
    {
      month: 0,
      remainingBalance: Number(principle.toFixed(2)),
    },
  ];

  // Loop through monthly payments and push to calculation results list
  let interestPaymentValue;
  let principlePaymentValue;
  let remainingBalance = principle;
  for (let i = 0; i < n; i++) {
    if (remainingBalance > totalPaymentValue + overpaymentValue) {
      interestPaymentValue = remainingBalance * r;
      principlePaymentValue = monthlyPaymentValue - interestPaymentValue;
      remainingBalance =
        remainingBalance - principlePaymentValue - overpaymentValue;
      calculationResults.push({
        month: i + 1,
        interestRate: interestRate.toFixed(2),
        totalPaymentValue: (totalPaymentValue + overpaymentValue).toFixed(2),
        interestPayment: interestPaymentValue.toFixed(2),
        principlePayment: (principlePaymentValue + overpaymentValue).toFixed(2),
        overpayment: overpaymentValue.toFixed(2),
        valueAfterPayment: remainingBalance.toFixed(2),
      });
      graphArray.push({
        month: i + 1,
        remainingBalance: Number(remainingBalance.toFixed()),
      });
    } else {
      let finalPyamentValue = remainingBalance;
      interestPaymentValue = finalPyamentValue * r;
      principlePaymentValue = finalPyamentValue - interestPaymentValue;
      remainingBalance =
        remainingBalance - interestPaymentValue - principlePaymentValue;
      overpaymentValue = 0;
      calculationResults.push({
        month: i + 1,
        interestRate: interestRate.toFixed(2),
        totalPaymentValue: finalPyamentValue.toFixed(2),
        interestPayment: interestPaymentValue.toFixed(2),
        principlePayment: principlePaymentValue.toFixed(2),
        overpayment: overpaymentValue.toFixed(2),
        valueAfterPayment: remainingBalance.toFixed(2),
      });
      graphArray.push({
        month: i + 1,
        remainingBalance: Number(remainingBalance.toFixed()),
      });
      break;
    }
  }
  return [calculationResults, graphArray];
}
