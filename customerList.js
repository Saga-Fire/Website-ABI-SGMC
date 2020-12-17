

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const customerList = JSON.parse(sessionStorage.getItem('clients')) ? JSON.parse(sessionStorage.getItem('clients')) : [];
    const dataUser = [];
    const tbody = document.getElementById("newCustomer");
    const tr = document.createElement('tr');

    console.log(customerList);

    // const customerTab = [companyName, clientNumber, clientType, clientActivity, clientTurnover, clientStaff, clientAdress, clientPhone, contact, comercialComments];

    tbody.appendChild(tr);
    for (let i = 0; i < 10; i++) {
        const td = document.createElement('td');
        td.innerHTML = customerList[i];
        tr.appendChild(td);
    }; 
    
})

