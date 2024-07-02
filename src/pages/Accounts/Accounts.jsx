import React from "react";
import AccountCard from "../../components/AccountCard/AccountCard.jsx";
import "./Accounts.css";

const Accounts = () => {
  const accounts = [
    { id: 1, title: "Retail Bank", accountName: "retail-bank", balance: 4000000 },
    { id: 2, title: "Electronics Retailer", accountName: "electronics-retailer", balance: 203400 },
    { id: 3, title: "Health Insurance", accountName: "health-insurance", balance: 297000 },
    // Add more accounts as needed
  ];

  return (
    <div className="accounts">
      <AccountCard title="Accounts" isHeader={true} />
      {accounts.map(account => (
        <AccountCard id={account.id} title={account.title} accountName={account.accountName} balance={account.balance} />
      ))}
    </div>
  );
};

export default Accounts;
