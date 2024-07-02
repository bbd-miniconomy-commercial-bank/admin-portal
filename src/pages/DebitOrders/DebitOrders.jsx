import React from "react";
import "./DebitOrders.css"
import { useState } from "react";
import { debitOrders } from "./DebitOrdersData";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
import 'primeflex/primeflex.css';  
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

const DebitOrders = () => {

  const [filters, setFilters] = useState({
    global: { value:null, matchMode: FilterMatchMode.CONTAINS },
  })

  return (
    <div className="debit-orders-container">
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
        value={debitOrders} 
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
        <Column field="disabled" header="Status" sortable/>
      </DataTable>
    </div>
  );
}

export default DebitOrders