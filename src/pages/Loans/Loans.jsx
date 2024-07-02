import React from "react";
import "./Loans.css"
import { useState } from "react";
import { loans } from "./LoansData";
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
  if (status === "Long Term") {
    return <Badge value="Long Term" severity="info" style={badgeStyle}></Badge>
  } else if (status === "Short Term") {
    return <Badge value="Short Term" severity="warning" style={badgeStyle}></Badge>
  }
  return status; // Fallback if status is neither 'Pending' nor 'Completed'
};

const Loans = () => {

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
        value={loans} 
        className="debit-orders" 
        sortMode="multiple" 
        filters={filters}
        paginator
        rows={5}
        rowsPerPageOptions={[5,10,15]}
        rowClassName="table-row"
        
      >
        <Column field="id" header="ID" sortable></Column>
        <Column field="accountName" header="Account" sortable></Column>
        <Column field="loanAmount" header="Amount" sortable></Column>
        <Column field="loanType" header="Loan Type" sortable body={(rowData) => statusBadge(rowData.loanType)}/>
      </DataTable>
    </div>
  );
}

export default Loans