const url = "https://api.commercialbank.projects.bbdgrad.com/";

export const getAllAccounts = async () => {
    //const response = await fetch(`${url}/admin/accounts`, {
    const response = await fetch(`${url}/admin/accounts`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
}

export const getAccountByName = async (accName) => {
    const response = await fetch(`${url}/admin/account/${accName}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    return data;
}

export const getAllLoans = async () => {
    const response = await fetch(`${url}/admin/loans`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    return data;
}

export const getLoansByAccountName = async (accountName) => {
    const response = await fetch(`${url}/admin/loan/${accountName}`, {
        headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    return data;
}

export const getInterBankTransactions = async () => {
    const response = await fetch(`${url}/admin/interbank/transactions`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    return data;
}

export const getAllTransactions = async () => {
    const response = await fetch(`${url}/admin/transactions`, {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` },
    });
    const data = await response.json();
    return data;
}

export const getTransactionByAccountName = async (accountName) => {
    const response = await fetch(`${url}/admin/transactions/${accountName}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    return data;
}

export const getAllDebitOrders = async () => {
    const response = await fetch(`${url}/admin/debitOrders`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    return data;
}

export const getDebitOrderByAccountName = async (accountName) => {
    const response = await fetch(`${url}/admin/debitOrders/${accountName}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    });
    const data = await response.json();
    return data;
}

export const postDataWithoutBearer = async (endpoint, payload) => {
    return fetch(`${url}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
}