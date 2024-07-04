import React from "react";
import AccountCard from "../../components/AccountCard/AccountCard.jsx";
import "./Accounts.css";

const Accounts = () => {
  const accounts = [
    { id: 1, title: "Retail Bank", accountName: "retail-bank", balance: 4000000 },
    { id: 2, title: "Commercial Bank", accountName: "commercial-bank", balance: 500000000000 },
    { id: 3, title: "Health Insurance", accountName: "health-insurance", balance: 297000 },
    { id: 4, title: "Life Insurance", accountName: "life-insurance", balance: 350000 },
    { id: 5, title: "Short Term Insurance", accountName: "short-term-insurance", balance: 250000 },
    { id: 6, title: "Health Care", accountName: "health-care", balance: 1000000 },
    { id: 7, title: "Central Revenue Service", accountName: "central-revenue-service", balance: 7000000 },
    { id: 8, title: "Labour Broker", accountName: "labour-broker", balance: 150000 },
    { id: 9, title: "Stock Exchange", accountName: "stock-exchange", balance: 8000000 },
    { id: 10, title: "Real Estate Property Sales", accountName: "real-estate-property-sales", balance: 600000 },
    { id: 11, title: "Real Estate Rentals", accountName: "real-estate-rentals", balance: 450000 },
    { id: 12, title: "Short Term Lender", accountName: "short-term-lender", balance: 300000 },
    { id: 13, title: "Home Loans", accountName: "home-loans", balance: 2000000 },
    { id: 14, title: "Electronics Retailer", accountName: "electronics-retailer", balance: 203400 },
    { id: 15, title: "Food Retailer", accountName: "food-retailer", balance: 500000 }
  ];

  return (
    <div className="accounts" >
      <AccountCard title="Accounts" isHeader={true} />
      {accounts.map(account => (
        <AccountCard id={account.id} title={account.title} accountName={account.accountName} balance={account.balance} />
      ))}
    </div>
  );
};

export default Accounts;
