import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./AccountCard.css"
import { useNavigate } from "react-router-dom";

const AccountCard = ({ id, title, accountName, balance, isHeader }) => {

  const navigate = useNavigate();

  return (
    <Card className={`account-card ${isHeader ? 'account-header' : ''}`}>
      {isHeader && <Card.Header>{title}</Card.Header>}
      {!isHeader && (
        <>
          <Card.Body>
            <Card.Title className="card-title">{title}</Card.Title>
            <Card.Text className="card-text">
              <ul>
                <li onClick={() => {
                  navigate(`/admin/transactions/${encodeURIComponent(accountName)}`)
                }}>
                  View Transactions
                </li>
                <li onClick={() => {
                  navigate(`/admin/loans/${encodeURIComponent(accountName)}`)
                }}>
                  View Loans
                </li>
                <li onClick={() => {
                  navigate(`/admin/debitOrders/${encodeURIComponent(accountName)}`)
                }}>View Debit Orders</li>
              </ul>
            </Card.Text>
            <Card.Footer className="card-footer">
              <p>Available Balance</p>
              <h3>mÐ {balance}</h3>
            </Card.Footer>
          </Card.Body>
        </>
      )}
    </Card>
  );
};

export default AccountCard
