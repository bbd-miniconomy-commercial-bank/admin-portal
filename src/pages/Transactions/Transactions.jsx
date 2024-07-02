import React from "react";
import "./Transactions.css"
import { useState } from "react";
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

const statusBadge = (status) => {
  const badgeStyle = {
    borderRadius: '6px', // Decrease border-radius
    padding: '0px 5px 5px 5px',  // Add padding for space between border and text
  };
  if (status === 'pending') {
    return <Badge value="pending" severity="danger" style={badgeStyle}></Badge>
  } else if (status === 'completed') {
    return <Badge value="completed" severity="success" style={badgeStyle}></Badge>
  }
  return status; // Fallback if status is neither 'Pending' nor 'Completed'
};

const Transactions = () => {

  const [filters, setFilters] = useState({
    global: { value:null, matchMode: FilterMatchMode.CONTAINS },
  })

  return (
    <div className="transactions-container">
      <InputText 
        onInput={(e) =>
          setFilters({
            global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS }
          })
        }
        placeholder="Search..."
        className="search-input"
      />

      <DataTable 
        value={transactions} 
        className="transactions" 
        sortMode="multiple" 
        filters={filters}
        paginator
        rows={5}
        rowsPerPageOptions={[5,10,15]}
        rowClassName="table-row"
        
      >
        <Column field="id" header="ID" sortable></Column>
        <Column field="debitAccountName" header="Debit Account" sortable></Column>
        <Column field="creditAccountName" header="Credit Account" sortable></Column>
        <Column field="transactionDate" header="Date" sortable></Column>
        <Column field="transactionAmount" header="Amount" sortable></Column>
        <Column field="creditRef" header="Dredit Ref." sortable></Column>
        <Column field="debitRef" header="Debit Ref." sortable></Column>
        <Column field="transactionStatus" header="Status" sortable body={(rowData) => statusBadge(rowData.transactionStatus)}></Column>
      </DataTable>
    </div>
  );
}

export default Transactions