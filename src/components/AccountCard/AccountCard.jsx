import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./AccountCard.css"

const AccountCard = ({ title, text, balance, isHeader }) => {
  return (
    <Card className={`account-card ${isHeader ? 'account-header' : ''}`}>
      {isHeader && <Card.Header>{title}</Card.Header>}
      {!isHeader && (
        <>
          <Card.Body>
            <Card.Title className="card-title">{title}</Card.Title>
            <Card.Text className="card-text">
              <ul>
                <li>View Transactions</li>
                <li>View Loans</li>
                <li>View Debit Orders</li>
              </ul>
            </Card.Text>
            <Card.Footer className="card-footer">
              <p>Available Balance</p>
              <h3>D {balance}</h3>
            </Card.Footer>
          </Card.Body>
        </>
      )}
    </Card>
  );
};

export default AccountCard
