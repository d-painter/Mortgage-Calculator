import React from "react";

export default function Table({ inputValues }) {
  const payments = inputValues.map((payment, index) => {
    const {
      month,
      interestRate,
      totalPaymentValue,
      interestPayment,
      principlePayment,
      overpayment,
      valueAfterPayment,
    } = payment;
    return (
      <tr key={index}>
        <td>{month}</td>
        <td>{interestRate}%</td>
        <td>£{totalPaymentValue}</td>
        <td>£{interestPayment}</td>
        <td>£{principlePayment}</td>
        <td>£{overpayment}</td>
        <td>£{valueAfterPayment}</td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <thead className="table-header">
          <th>Month</th>
          <th>Interst Rate</th>
          <th>Total Payment Value</th>
          <th>Interest Payment</th>
          <th>Principle Payment</th>
          <th>Overpayment</th>
          <th>Balance</th>
        </thead>
        <tbody>{payments}</tbody>
      </table>
    </>
  );
}
