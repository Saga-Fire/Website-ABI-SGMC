

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const customerList = JSON.parse(sessionStorage.getItem('clients')) ? JSON.parse(sessionStorage.getItem('clients')) : [];
    let contact = "";
    const tbody = document.getElementById("newCustomer");
    const tr = document.createElement('tr');
    const clientNumber = document.getElementById("clientNumber").value;
    const companyName = document.getElementById("companyName").value;
    const clientType = document.getElementById("clientType").value;
    const clientActivity = document.getElementById("clientActivity").value;
    const clientTurnover = document.getElementById("clientTurnover").value;
    const clientStaff = document.getElementById("clientStaff").value;
    const clientAdress = document.getElementById("clientAdress").value;
    const clientPhone = document.getElementById("clientPhone").value;
    const primaryNature = document.getElementById("primaryNature").value;
    const secondaryNature = document.getElementById("secondaryNature").value;
    const oldNature = document.getElementById("oldNature").value;
    const contact1 = document.getElementById("contact1").value;
    const contactPhone1 = document.getElementById("contactPhone1").value;
    const contactMail1 = document.getElementById("contactMail1").value;
    const contactDepartment1 = document.getElementById("contactDepartment1").value;
    const contact2 = document.getElementById("contact2").value;
    const contactPhone2 = document.getElementById("contactPhone2").value;
    const contactMail2 = document.getElementById("contactMail2").value;
    const contactDepartment2 = document.getElementById("contactDepartment2").value;
    const contact3 = document.getElementById("contact3").value;
    const contactPhone3 = document.getElementById("contactPhone3").value;
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

    console.log(customerList);

    const customerListJson = JSON.stringify(customerList);
    console.log(customerListJson);
    sessionStorage.setItem('clients', customerListJson);

    const customerListSaveJson = sessionStorage.getItem('clients');
    console.log(customerListSaveJson);
    const customerListSave = JSON.parse(customerListSaveJson);
    console.log(customerListSave);

    const customerTab = [companyName, clientNumber, clientType, clientActivity, clientTurnover, clientStaff, clientAdress, clientPhone, contact, comercialComments];

    tbody.appendChild(tr);
    for (let i = 0; i < customerTab.length; i++) {
        const td = document.createElement('td');
        td.innerHTML = customerTab[i];
        tr.appendChild(td);
    };

    sessionStorage.setItem('company', JSON.stringify(customerList[0].companyName));
    console.log(JSON.stringify(customerList[0].companyName));
    const test2 = JSON.parse(sessionStorage.getItem('company'));
    console.log(test2);

    
    
})

