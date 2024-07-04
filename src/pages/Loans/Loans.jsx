import React from "react";
import "./Loans.css"
import "../pages.css"
import { useState } from "react";
import { useParams } from "react-router-dom";
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
import Card from 'react-bootstrap/Card';

const statusBadge = (status) => {
  const badgeStyle = {
    borderRadius: '6px', 
    padding: '0px 5px 5px 5px',  
  };
  if (status === "Long Term") {
    return <Badge value="Long Term" severity="info" style={badgeStyle}></Badge>
  } else if (status === "Short Term") {
    return <Badge value="Short Term" severity="warning" style={badgeStyle}></Badge>
  }
  return status; 
};

const Loans = () => {

  const { accountName } = useParams(); 

  const [filters, setFilters] = useState({
    global: { value:null, matchMode: FilterMatchMode.CONTAINS },
  })

  return (
    <div className="main-container">
      <Card className="loans-header loans-card">
        <Card.Header>Loans</Card.Header>
      </Card>
      <div className="loans-container">
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
          value={
            loans.filter((loan) => !accountName || loan.accountName === accountName)
          } 
          className="loans" 
          sortMode="multiple" 
          filters={filters}
          paginator
          rows={5}
          rowsPerPageOptions={[5,10,15]}
          rowClassName="table-row"
          
        >
          <Column field="id" header="ID" sortable></Column>
          <Column field="accountName" header="Account" sortable></Column>
          <Column field="loanAmount" header="Amount (Ð)" sortable></Column>
          <Column field="loanType" header="Loan Type" sortable body={(rowData) => statusBadge(rowData.loanType)}/>
        </DataTable>
      </div>
    </div>
  );
}

export default Loans