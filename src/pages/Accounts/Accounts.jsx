import React from "react";
import AccountCard from "../../components/AccountCard/AccountCard.jsx";
import "./Accounts.css";

const Accounts = () => {
  const accounts = [
    { id: 1, title: "Retail Bank", text: "Available Balance", balance: 200000 },
    { id: 2, title: "Electronics Retail",  text: "Available Balance", balance: 200000 },
    { id: 3, title: "Health Insurance",  text: "Available Balance", balance: 200000 },
    // Add more accounts as needed
  ];

  return (
    <div className="accounts">
      <AccountCard title="Accounts" isHeader={true} />
      {accounts.map(account => (
        <AccountCard key={account.id} title={account.title} text={account.text} balance={account.balance} />
      ))}
    </div>
  );
};

export default Accounts;
