import React from "react";
import "./DebitOrders.css"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { debitOrders } from "./DebitOrdersData";
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
    borderRadius: '6px', // Decrease border-radius
    padding: '0px 5px 5px 5px',  // Add padding for space between border and text
  };
  if (status === false) {
    return <Badge value="On going" severity="success" style={badgeStyle}></Badge>
  } else if (status === true) {
    return <Badge value="Finished" severity="danger" style={badgeStyle}></Badge>
  }
  return status; // Fallback if status is neither 'Pending' nor 'Completed'
};

const DebitOrders = () => {

  const { accountName } = useParams(); // Grab accountName from URL parameter

  const [filters, setFilters] = useState({
    global: { value:null, matchMode: FilterMatchMode.CONTAINS },
  })

  return (
    <div className="main-container">
      <Card className="debit-orders-header debit-orders-card">
        <Card.Header>Debit Orders</Card.Header>
      </Card>
      <div className="debit-orders-container">
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
            debitOrders.filter((d) => !accountName || d.debitAccountName === accountName || d.creditAccountName === accountName)
          } 
          className="debit-orders" 
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
          <Column field="creationDate" header="Date" sortable></Column>
          <Column field="debitOrderAmount" header="Amount" sortable></Column>
          <Column field="senderRef" header="Sender Ref." sortable></Column>
          <Column field="receiverRef" header="Receiver Ref." sortable></Column>
          <Column field="disabled" header="Status" sortable body={(rowData) => statusBadge(rowData.disabled)}/>
        </DataTable>
      </div>
    </div>
  );
}

export default DebitOrders