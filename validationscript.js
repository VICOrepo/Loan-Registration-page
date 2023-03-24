
function LoanValidateForm() {
  let loanAmount = document.getElementById("loanAmount");
  let loanPurpose = document.getElementById("loanPurpose");
  let firstName = document.getElementById("firstName");

  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let zip = document.getElementById("zip")
   regPhone = regMPhone = /^\d{10}$/
   regname = /^[a-zA-Z]+$/;
   regZip = /^\d{6}$/
  regAmt =
    /^\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/
    let regPur = "^\\s+[A-Za-z,;'\"\\s]+[.?!]$";

  if (loanAmount.value.trim() == "" || !regAmt.test(loanAmount.value)) {
    loanAmount.style.border = "solid 3px red";
    document.getElementById("loanAmountError").style.visibility = "visible";
    return false;
  }
   else if (loanPurpose.value.trim() == "") {
    loanPurpose.style.border = "solid 3px red";
    document.getElementById("loanPurposeError").style.visibility = "visible";
    return false;
  } 
//   else if (!regname.test(firstName.value) || firstName.value.trim() == "") {
//     firstName.style.border = "solid 3px red";
//     document.getElementById("firstnameError").style.visibility = "visible";
//     return false;
//   } 
  else if (!regname.test(lastName.value) || lastName.value.trim() == "") {
    lastName.style.border = "solid 3px red";
    document.getElementById("lastnameError").style.visibility = "visible";
    return false;
  } else {
    return true;
  }
}

function emailValidation(){
   let email = document.getElementById("email")
   let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

   //console.log(mailFormat.test(email.value));
   if(email.value.trim()==""){
      document.getElementById("EmailError").innerHTML="*Field should'nt be empty"
   }
  else if(!mailFormat.test(email.value)){
     // email.style.border = "solid 3px red";
      document.getElementById("EmailError").innerHTML="*Email should contain @"
      return false;
   }

  else{
      // email.style.border = "solid 3px red";
       document.getElementById("EmailError").style.visibility="hidden";
       return false;
    }
}

function mask(o, f) {
   setTimeout(function () {
       let v = f(o.value);
       if (v != o.value) {
           o.value = v;
       }
   }, 1);
}
function mssn(v) {
   let r = v.replace(/\D/g,"");

  
   if (r.length > 9) {
       r = r.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/,"$1-$2-$3");
     return r;
   }
   else if (r.length > 4) {
       r = r.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/,"$1-$2-$3");
   }
   else if (r.length > 2) {
       r = r.replace(/^(\d\d\d)(\d{0,3})/,"$1-$2");
   }
   else {
       r = r.replace(/^(\d*)/, "$1");
   }
   
   return r;
}
function ssnValidation(){
   let ssn = document.getElementById("SSN")
   // let regSnn =  "/^(?!(?:\D*0)+\D*$)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/";
   //let regSnn = /^(?!(?:\D*0)+\D*$)\(?([0-9]{3})\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/
   // let regSsn = /^(?!(?:\D*0)+\D*$)\(?([0-9]{3})\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/
   let regSsn = /^(?!(?:\D*0)+\D*$)\(?\d{3}\)?[- ]?\d{2}[- ]?\d{4}$/

   if (ssn.value.length <9) {
      // ssn.style.border = "solid 3px red";
       document.getElementById("SSNError").innerHTML="Length of SSN must 9 Digit";
       return false;
     }
    if (ssn.value.trim() == "") {
     // ssn.style.border = "solid 3px red";
      document.getElementById("SSNError").innerHTML="Field should'nt be empty";
      return false;
    }
    else if(!ssn.value.match(regSsn)){
      document.getElementById("SSNError").innerHTML="Character are not allowed";
      return false;
    }
     else  {
     // ssn.style.border = "solid 3px red";
      document.getElementById("SSNError").style.visibility = "hidden";
      return false;
    } 
}



function currencyMasking(){
   let dollarUS = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
  
    //var currency = document.getElementById("lamount").value;
    let amount1 =/^[+-]?((\d+(\.\d*)?)|(\.\d+))$/;
    let loan = document.getElementById("loanAmount")
if(loan.value.match(amount1)){
    let loanAmount1 = document.getElementById("loanAmount").value;
    let loanAmount2 = loanAmount1.replace("$", "");
    let loanAmount = loanAmount2.replace(",", "");
    document.getElementById("loanAmount").value = dollarUS.format(loanAmount);
  
      if(loanAmount < 2000.0 || loanAmount > 20000.0){
      document.getElementById("loanAmountError").innerHTML= "*Amount should be >=2000 and <=20000";
      return false
      }
      else{
      document.getElementById("loanAmountError").style.visibility = "hidden";
      return false;
      }
    }
else if (loan.value.trim() ==""){
   document.getElementById("loanAmountError").innerHTML="Field should'nt be empty"
}
else{
      document.getElementById("loanAmountError").innerHTML= "*Characters and special characters is not allowed";
      return false;
   }
}

// function amountValidation(){

//    let loanAmount = document.getElementById("loanAmount")
//    let amount =/^[0-9]*$/;
//   if( !loanAmount.value.match(amount)){
//       document.getElementById("loanAmountError").style.visibility = "visible";
//       return false;
//    }
//    else{
//       document.getElementById("loanAmountError").style.visibility = "hidden";
//       return false;
//    }
// }


function isPurpose(){
   let loanPurpose = document.getElementById("loanPurpose");
   let purpose = /^[a-zA-Z ]*$/;
   
   //console.log(!regPur.match(loanPurpose.value))
   if (loanPurpose.value.trim() == "") {
      //loanPurpose.style.border = "solid 3px red";
      document.getElementById("loanPurposeError").innerHTML="*Field should'nt be Empty"
      return false;
      }
   else if(!loanPurpose.value.match(purpose)){
      document.getElementById("loanPurposeError").innerHTML="*Numbers and Special Character not allowed";
      return false;
   }
   
   else{
      document.getElementById("loanPurposeError").style.visibility = "hidden";
      return false;
   }
}

function homeMobileValidation(e){
  
let hPhonev = document.getElementById("hPhone");
// let homePhone = /^(?!0+$)(\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4}))$/;
// let homePhone = /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;
let homePhone = /^(?!(?:\D*0)+\D*$)\(?([0-9]{3})\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/;

if (hPhonev.value.trim() == "" ) {
   document.getElementById("hPhoneError").innerHTML="Field should'nt be Empty"
   return false;
   } 
   
else if(hPhonev.value.length < 10){
      document.getElementById("hPhoneError").innerHTML="Phone no. should be of Length 10 digit"
      return false;
      }
else if(!hPhonev.value.match(homePhone)){
      document.getElementById("hPhoneError").innerHTML="Character and all zeros digits not allowed";
      return false;
    }
else {
   document.getElementById("hPhoneError").style.visibility = "hidden";
   return false;
}
} 
// function homemobilecharValidation(){
//    let homec = document.getElementById("hPhone")
//    let homemobilePhone = /^(?!(?:\D*0)+\D*$)\(?([0-9]{3})\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/
//    if(!homec.value.match(homemobilePhone)){
//       document.getElementById("hPhoneError").innerHTML="Character and all zeros digits not allowed";
//       return false;
//     }
//     else {
//       document.getElementById("hPhoneError").style.visibility = "hidden";
//       return false;
//    }
// }
function homeMobileMasking(){

   let ele = document.getElementById("hPhone");
   ele = ele.value.split("-").join("-");
   let finalVal = ele.replace(
     /(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
     "($1$2$3)$4$5$6-$7$8$9$10"
   );
   document.getElementById("hPhone").value = finalVal;
 }


function mobileValidation(){
  
 let mPhone = document.getElementById("mPhone");
//  let mobilePhone = /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;
 let mobilePhone = /^(?!(?:\D*0)+\D*$)\(?([0-9]{3})\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/

if (mPhone.value.trim() == "") {
    document.getElementById("mphoneError").innerHTML="Field should'nt be Empty";
    return false;
    }
else if(mPhone.value.length<10){
      document.getElementById("mphoneError").innerHTML="Phone no. should be of Length 10 digit"
      return false;
      }
else if(!mPhone.value.match(mobilePhone)){
      document.getElementById("mphoneError").innerHTML="Character and all zeros digits not allowed";
      return false;
    }
else {
    document.getElementById("mphoneError").style.visibility = "hidden";
    return false;
 }
 } 

//  function mobilecharValidation(){
//    let mobilec = document.getElementById("mPhone")
//    let mobilePhone = /^(?!(?:\D*0)+\D*$)\(?([0-9]{3})\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/
//    if(!mobilec.value.match(mobilePhone)){
//       document.getElementById("mphoneError").innerHTML="Character and all zeros digits not allowed";
//       return false;
//     }
//     else {
//       document.getElementById("mphoneError").style.visibility = "hidden";
//       return false;
//    }
//  }

 function mobileMasking(){

   let ele = document.getElementById("mPhone");
   ele = ele.value.split("-").join("-");
   let finalVal = ele.replace(
     /(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
     "($1$2$3)$4$5$6-$7$8$9$10"
   );
   document.getElementById("mPhone").value = finalVal;
 }


 function DOB() {

   let lblError = document.getElementById("DOBError");
 
   //Get the date from the TextBox.
   let dateString = document.getElementById("DOB").value;
   let regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

   //Check whether valid dd/MM/yyyy Date Format.
   if(dateString.value.trim()==""){
      document.getElementById("DOBError").innerHTML="Field should'nt be empty"
      return false
   }
   else if (dateString.value.match(regex)) {
       let parts = dateString.split("/");
       let dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
       let dtCurrent = new Date();
       document.getElementById("DOBError").innerHTML="Eligibility 18 years ONLY."
      // lblError.innerHTML = "Eligibility 18 years ONLY."
       if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
           return false;
       }

       if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

           //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
           if (dtCurrent.getMonth() < dtDOB.getMonth()) {
               return false;
           }
           if (dtCurrent.getMonth() == dtDOB.getMonth()) {
               //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
               if (dtCurrent.getDate() < dtDOB.getDate()) {
                   return false;
               }
           }
       }
       document.getElementById("DOBError").innerHTML="";
       return true;
   } else {
      // lblError.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
       document.getElementById("DOBError").innerHTML="Enter date in dd/MM/yyyy format ONLY."
       return false;
   }   
 }


   // let dob = document.getElementById("DOB")
   // let today = new Date();
   
   // today.setDate(today.getDate() - 18 * 365);
 
   // let dd = String(today.getDate()).padStart(2, "0");
   // let mm = String(today.getMonth() + 1).padStart(2, "0"); 
   // let yyyy = today.getFullYear();
   // today = yyyy + "-" + mm + "-" + dd;
   // document.getElementById("DOB").max = today;
   // if(dob.value.trim() == ""){
   //    document.getElementById("DOBError").style.visibility = "visible";
   // return false;
   // }
   // else{
   //    document.getElementById("DOBError").style.visibility = "hidden";
   // return false;
   // }

//  function onChangeDOB(executionContext){
//    let formContext = executionContext.getFormContext();
//    let birthDate = formContext.getAttribute("DOB").getValue();
//    let today = new Date();
//    let validMinDate = new Date(
//       today.getFullYear()-18,
//       today.getMonth(),
//       today.getDate(),
//       today.getHours(),
//       today.getMinutes());
//       //let birthDateFieldControl = formContext.getControl("DOB");

//       if(birthDate>validMinDate){
//          document.getElementById("DOBError").style.visibility = "visible";
//          return false;
//       }
//       else{
//          document.getElementById("DOBError").style.visibility = "hidden";
//       return false;
//       }

//  }

 function zipvalidation(){

let zip = document.getElementById("zip")
let zipVal = /^[0-9]*$/;

if (zip.value.trim() == "") {
   //loanPurpose.style.border = "solid 3px red";
   document.getElementById("zipError").innerHTML = "Field should'nt be empty"
   return false;
   }
else if(zip.value.length<5)
{
   document.getElementById("zipError").innerHTML = "Length must be of 5 digit"
   return false;  
}
else if(!zip.value.match(zipVal)){
      document.getElementById("zipError").innerHTML = "Character and special character not allowed"
      return false;
   }
else {
   document.getElementById("zipError").style.visibility = "hidden";
   return false;
}
 }

function firstNameValidation(){
   let firstName = document.getElementById("firstName")
   let name = /^[a-zA-Z ]*$/;
   if(firstName.value.trim() == ""){
      document.getElementById("firstnameError").innerHTML = "*Field should'nt empty";
      return false;
   }
   else if(!firstName.value.match(name)){
      document.getElementById("firstnameError").innerHTML = "*Numbers and Special Character are not allowed";
      return false;
   }
   else{
      document.getElementById("firstnameError").style.visibility="hidden";
      return false;
   }
}

function lastNameValidation(){
   let lastName = document.getElementById("lastName")
   let lastn = /^[a-zA-Z ]*$/;
   if(lastName.value.trim() == ""){
      document.getElementById("lastnameError").innerHTML = "*Field should'nt empty";
      return false;
   }
   else if(!lastName.value.match(lastn)){
      document.getElementById("lastnameError").innerHTML = "*Numbers and Special Character are not allowed";
      return false;
   }
   else{
      document.getElementById("lastnameError").style.visibility="hidden";
      return false;
   }
}
function middleNameValidation(){
   let middleName = document.getElementById("middleName")
   let middlen = /^[a-zA-Z ]*$/;
  
   if(!middleName.value.match(middlen)){
      document.getElementById("middlenameError").innerHTML = "*Numbers and Special not allowed";
      return false;
   }
   else{
      document.getElementById("middlenameError").style.visibility="hidden";
      return false;
   }
}

function empNameValidation(){
   let empNameVal = document.getElementById("empName")
   // let regEmp = /^[A-Za-z0-9]*$/;
   let regEmp = /^([a-zA-Z0-9 _-]+)$/;
   if(empNameVal.value.trim() == ""){
      document.getElementById("empNameError").innerHTML="Field should'nt be empty";
      return false;
   }
   else if(!empNameVal.value.match(regEmp)){
      document.getElementById("empNameError").innerHTML="Special Character not allowed";
      return false;
   }
   else{
      document.getElementById("empNameError").style.visibility="hidden";
      return false;
   }
}

function cityValidation(){
   let cityVal = document.getElementById("city")
   let regCity = /^[a-zA-Z ]*$/;
   if(cityVal.value.trim() == ""){
      document.getElementById("cityError").innerHTML="Field should'nt be empty";
      return false;
   }
   else if(!cityVal.value.match(regCity)){
      document.getElementById("cityError").innerHTML="Character and Special Character not allowed";
      return false;
   }
   else{
      document.getElementById("cityError").style.visibility="hidden";
      return false;
   }
}

function empMobileMasking(){

   let ele = document.getElementById("ePhone");
   ele = ele.value.split("-").join("-");
   let finalVal = ele.replace(
     /(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
     "($1$2$3)$4$5$6-$7$8$9$10"
   );
   document.getElementById("ePhone").value = finalVal;
 }

 function empMobileValidation(){
   // let pattern = "/^\d{10}$/"
  
 let empphone = document.getElementById("ePhone");
//  let empmobilePhone = /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;
 let empmobilePhone = /^(?!(?:\D*0)+\D*$)\(?([0-9]{3})\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/
 if (empphone.value.trim() == "") {
    //loanPurpose.style.border = "solid 3px red";
    document.getElementById("empPhoneError").style.visibility = "visible";
    return false;
    }
 else if(!empphone.value.match(empmobilePhone)){
      document.getElementById("empPhoneError").style.visibility = "visible";
      return false;
   }
 else {
    document.getElementById("empPhoneError").style.visibility = "hidden";
    return false;
 }
 } 



function incomeValidation(){

   let dollarUS = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    let incomeval =/^[+-]?((\d+(\.\d*)?)|(\.\d+))$/;
    let incomevalidation = document.getElementById("aIncome")
if(incomevalidation.value.match(incomeval)){
    //var currency = document.getElementById("lamount").value;
    let incomeAmount1 = document.getElementById("aIncome").value;
    let incomeAmount2 = incomeAmount1.replace("$", "");
    let incomeAmount = incomeAmount2.replace(",", "");
    document.getElementById("aIncome").value = dollarUS.format(incomeAmount);
    if(incomeAmount <= 0.0  || incomeAmount > 10000000.0){
      document.getElementById("annualIncome").innerHTML="*Amount should be >=0 and <=10000000";
    }
    else{
      document.getElementById("annualIncome").style.visibility = "hidden";
      return false;
    }  
   }
else if (incomevalidation.value.trim() ==""){
      document.getElementById("annualIncome").innerHTML="Field should'nt be empty"
   }  

else{
   document.getElementById("annualIncome").innerHTML= "*Characters and special characters is not allowed";
      return false;
}
}

function income(){
   let empIncome = document.getElementById("aIncome")
   let amountIncome =/^[0-9]*$/;

if(!empIncome.value.match(amountIncome)){
   document.getElementById("annualIncome").style.visibility = "visible";
   return false;
}
else{
   document.getElementById("annualIncome").style.visibility = "hidden";
   return false;
}
}

function addressValidation(){
   let addressVal = document.getElementById("address")
   let regadd = /^([a-zA-Z0-9 _-]+)$/;
   if(addressVal.value.trim() == ""){
      document.getElementById("addressError").innerHTML="Field should'nt be empty";
      return false;
   }
   else if(!addressVal.value.match(regadd)){
      document.getElementById("addressError").innerHTML="Special Character not allowed";
      return false;
   }
   else{
      document.getElementById("addressError").style.visibility="hidden";
      return false;
   }

}

function rtypeValidation(){
   let type = document.getElementById("rtype")
   let typevali = /^[a-zA-Z ]*$/;

  
    if(!type.value.match(typevali)){
      document.getElementById("typeError").innerHTML="Numbers and special character not allowed"
      return false;
   }
   else{
      document.getElementById("typeError").style.visibility="hidden";
      return false;
   }
}
function emptypeValidation(){
   let etype = document.getElementById("EmployType")
   let etypevali = /^[a-zA-Z ]*$/;

  
    if(!etype.value.match(etypevali)){
      document.getElementById("emptypeError").innerHTML="Numbers and special character not allowed"
      return false;
   }
   else{
      document.getElementById("emptypeError").style.visibility="hidden";
      return false;
   }
}
function address2Validation(){
   let address2Val = document.getElementById("address2")
   let regadd2 = /^([a-zA-Z0-9 _-]+)$/;
   
   if(!address2Val.value.match(regadd2)){
      document.getElementById("address2Error").innerHTML="Special Character not allowed";
      return false;
   }
   else{
      document.getElementById("address2Error").style.visibility="hidden";
      return false;
   }
}