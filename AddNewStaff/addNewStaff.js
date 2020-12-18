const form1 = document.querySelector('#myForm').addEventListener("submit",(e)=>{
    e.preventDefault();
    const staff = localStorage.getItem('staff') ? localStorage.getItem('staff') : []
    const registrationNumber = document.querySelector("#registrationNumber").value;
    const contrat = document.querySelector("#contrat").value;
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const qualification = document.querySelector("#qualification").value;
    const salary = document.querySelector("#salary").value;
    const hiringDate = document.querySelector("#hiringDate").value;
    const endContratDate = document.querySelector("#endContratDate").value;
    

    staff.push ({
        registrationNumber,
        contrat,
        firstName,
        lastName,
        qualification,
        salary,
        hiringDate,
        endContratDate,
    })

    //console.log(registrationNumber)
    //console.log(contrat)
    //console.log(firstName)
    //console.log(lastName)
    //console.log(qualification)
    //console.log(salary)
    //console.log(hiringDate)
    //console.log(endContratDate)

    console.log(staff)
})

