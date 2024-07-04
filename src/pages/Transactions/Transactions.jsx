import React from "react";
import "./Transactions.css"
import "../pages.css"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { transactions } from "./TransactionsData";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { Badge } from 'primereact/badge';
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import Card from 'react-bootstrap/Card';

const statusBadge = (status) => {
  const badgeStyle = {
    borderRadius: '6px',
    padding: '0px 5px 5px 5px',  
  };
  if (status === 'pending') {
    return <Badge value="pending" severity="danger" style={badgeStyle}></Badge>
  } else if (status === 'completed') {
    return <Badge value="completed" severity="success" style={badgeStyle}></Badge>
  }
  return status; 
};

const Transactions = () => {

  const { accountName } = useParams();

  const [filters, setFilters] = useState({
    global: { value:null, matchMode: FilterMatchMode.CONTAINS },
  })

  return (
    <div className="main-container">
      <Card className="transaction-header transaction-card">
        <Card.Header>Transactions</Card.Header>
      </Card>
      <div className="transactions-container">
        <InputText 
          onInput={(e) =>
            setFilters({
              global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS }
            })
          }
          placeholder="Filter..."
          className="search-input"
        />

        <DataTable 
          value={
            transactions.filter((t) => !accountName || t.debitAccountName === accountName || t.creditAccountName === accountName)
          } // Filter transactions based on accountName if present
          className="transactions" 
          sortMode="multiple" 
          filters={filters}
          paginator
          rows={5}
          rowsPerPageOptions={[5,10,15]}
          rowClassName="table-row"
          style={{alignItems: 'center'}}
          
        >
          <Column field="id" header="ID" sortable style={{ width: '3% '}}></Column>
          <Column field="debitAccountName" header="Debit Account" sortable style={{ width: '20% '}}></Column>
          <Column field="creditAccountName" header="Credit Account" sortable style={{ width: '20% '}}></Column>
          <Column field="transactionDate" header="Date" sortable style={{ width: '15% '}}></Column>
          <Column field="transactionAmount" header="Amount (Ð)" sortable style={{ width: '5% '}}></Column>
          <Column field="creditRef" header="Dredit Ref." sortable style={{ width: '20% '}}></Column>
          <Column field="debitRef" header="Debit Ref." sortable style={{ width: '30% '}}></Column>
          <Column field="transactionStatus" header="Status" sortable body={(rowData) => statusBadge(rowData.transactionStatus)}></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default Transactions