

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    const customerList = JSON.parse(sessionStorage.getItem('clients')) ? JSON.parse(sessionStorage.getItem('clients')) : [];

    let contact = "";
    const tbody = document.getElementById("newCustomer");
    const tr = document.createElement('tr');

    const clientNumberString = sessionStorage.getItem('clientNumber') ? sessionStorage.getItem('clientNumber') : 1;
    let clientNumber = parseInt(clientNumberString);
    const companyName = document.getElementById("companyName").value;
    const clientType = document.getElementById("clientType").value;
    const clientActivity = document.getElementById("clientActivity").value;
    const clientTurnover = document.getElementById("clientTurnover").value;
    let clientTurnoverInt = parseInt(clientTurnover);
    if ((!clientTurnoverInt) && (clientTurnover.length)) {
        alert(`Please enter a number for client turnover`);
        throw `Please enter a number for client turnover`;
    }
    const clientStaff = document.getElementById("clientStaff").value;
    let clientStaffInt = parseInt(clientStaff);
    if ((!clientStaffInt) && (clientStaff.length)) {
        alert(`Please enter a number for client staff`);
        throw `Please enter a number for client staff`;
    }
    const clientAdress = document.getElementById("clientAdress").value;
    const clientPhone = document.getElementById("clientPhone").value;
    let clientPhoneInt = parseInt(clientPhone);
    if (!clientPhoneInt) {
        alert(`Please enter a number for client phone`);
        throw `Please enter a number for client phone`;
    }
    const primaryNature = document.getElementById("primaryNature").value;
    const secondaryNature = document.getElementById("secondaryNature").value;
    const oldNature = document.getElementById("oldNature").value;
    const contact1 = document.getElementById("contact1").value;
    const contactPhone1 = document.getElementById("contactPhone1").value;
    let contactPhone1Int = parseInt(contactPhone1);
    if (!contactPhone1Int) {
        alert(`Please enter a number for contact phone 1`);
        throw `Please enter a number for contact phone 1`;
    }
    const contactMail1 = document.getElementById("contactMail1").value;
    const contactDepartment1 = document.getElementById("contactDepartment1").value;
    const contact2 = document.getElementById("contact2").value;
    const contactPhone2 = document.getElementById("contactPhone2").value;
    let contactPhone2Int = parseInt(contactPhone2);
    if ((!contactPhone2Int) && (contactPhone2.length)) {
        alert(`Please enter a number for contact phone 2`);
        throw `Please enter a number for contact phone 2`;
    }
    const contactMail2 = document.getElementById("contactMail2").value;
    const contactDepartment2 = document.getElementById("contactDepartment2").value;
    const contact3 = document.getElementById("contact3").value;
    const contactPhone3 = document.getElementById("contactPhone3").value;
    let contactPhone3Int = parseInt(contactPhone3);
    if ((!contactPhone3Int) && (contactPhone3.length)) {
        alert(`Please enter a number for contact phone 3`);
        throw `Please enter a number for contact phone 3`;
    }
    const contactMail3 = document.getElementById("contactMail3").value;
    const contactDepartment3 = document.getElementById("contactDepartment3").value;
    const comercialComments = document.getElementById("comercialComments").value;

    if (contactDepartment1) {
        contact += `Contact 1 : ${contact1}, Phone : ${contactPhone1}, Mail : ${contactMail1}, Departement : ${contactDepartment1}`;
    } else {
        contact += `Contact 1 : ${contact1}, Phone : ${contactPhone1}, Mail : ${contactMail1}`;
    };
    if (contact2) {
        if (contactDepartment2) {
            contact += `<br>Contact 2 : ${contact2}, Phone : ${contactPhone2}, Mail : ${contactMail2}, Departement : ${contactDepartment2}`;
        } else {
            contact += `<br>Contact 2 : ${contact2}, Phone : ${contactPhone2}, Mail : ${contactMail2}`;
        };
        if (contact3) {
            if (contactDepartment3) {
                contact += `<br>Contact 3 : ${contact3}, Phone : ${contactPhone3}, Mail : ${contactMail3}, Departement : ${contactDepartment3}`;
            } else {
                contact += `<br>Contact 3 : ${contact3}, Phone : ${contactPhone3}, Mail : ${contactMail3}`;
            };
        };
    };
    
    customerList.push({
        companyName,
        clientNumber,
        clientType,
        clientActivity,
        clientTurnover,
        clientStaff,
        clientAdress,
        clientPhone,
        contact,
        comercialComments
    });

    const customerListJson = JSON.stringify(customerList);
    sessionStorage.setItem('clients', customerListJson);

    const customerListSaveJson = sessionStorage.getItem('clients');
    const customerListSave = JSON.parse(customerListSaveJson);

    const customerTab = [
        companyName,
        clientNumber,
        clientType,
        clientActivity,
        clientTurnover,
        clientStaff,
        clientAdress,
        clientPhone,
        contact,
        comercialComments
    ];

    tbody.appendChild(tr);
    for (let i = 0; i < customerTab.length; i++) {
        const td = document.createElement('td');
        td.innerHTML = customerTab[i];
        tr.appendChild(td);
    };
    
    alert(`You have just created the customer number ${clientNumber}`)
    clientNumber += 1;
    sessionStorage.setItem('clientNumber', clientNumber);
})

