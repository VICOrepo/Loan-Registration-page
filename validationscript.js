
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

//   if (loanAmount.value.trim() == "" || !regAmt.test(loanAmount.value)) {
//     loanAmount.style.border = "solid 3px red";
//     document.getElementById("loanAmountError").style.visibility = "visible";
//     return false;
//   }
//    else if (loanPurpose.value.trim() == "") {
//     loanPurpose.style.border = "solid 3px red";
//     document.getElementById("loanPurposeError").style.visibility = "visible";
//     return false;
//   } 
// //   else if (!regname.test(firstName.value) || firstName.value.trim() == "") {
// //     firstName.style.border = "solid 3px red";
// //     document.getElementById("firstnameError").style.visibility = "visible";
// //     return false;
// //   } 
//   else if (!regname.test(lastName.value) || lastName.value.trim() == "") {
//     lastName.style.border = "solid 3px red";
//     document.getElementById("lastnameError").style.visibility = "visible";
//     return false;
//   } else {
//     return true;
//   }
}

function emailValidation(){
   let email = document.getElementById("email")
   let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

   //console.log(mailFormat.test(email.value));
   if(email.value.trim()==""){
      document.getElementById("EmailError").innerHTML="*Field should'nt be empty"
      document.getElementById("EmailError").style.visibility = "visible";
      return false;
   }
  else if(!mailFormat.test(email.value)){
     // email.style.border = "solid 3px red";
      document.getElementById("EmailError").innerHTML="*Email should contain @"
      document.getElementById("EmailError").style.visibility = "visible";
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
       document.getElementById("SSNError").style.visibility = "visible";
       return false;
     }
    if (ssn.value.trim() == "") {
     // ssn.style.border = "solid 3px red";
      document.getElementById("SSNError").innerHTML="Field should'nt be empty";
      document.getElementById("SSNError").style.visibility = "visible";
      return false;
    }
    else if(!ssn.value.match(regSsn)){
      document.getElementById("SSNError").innerHTML="Character are not allowed";
      document.getElementById("SSNError").style.visibility = "visible";
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
      document.getElementById("loanAmountError").innerHTML= "*Amount should be between $2,000 and $20,000";
      document.getElementById("loanAmountError").style.visibility = "visible";
      return false
      }
      else{
      document.getElementById("loanAmountError").style.visibility = "hidden";
      return false;
      }
    }
else if (loan.value.trim() ==""){
   document.getElementById("loanAmountError").innerHTML="Field should'nt be empty"
   document.getElementById("loanAmountError").style.visibility = "visible";
   return false
}
else{
      document.getElementById("loanAmountError").innerHTML= "*Characters and special characters is not allowed";
      document.getElementById("loanAmountError").style.visibility = "visible";
      return false;
   }
}

function isPurpose(){
   let loanPurpose = document.getElementById("loanPurpose");
   let purpose = /^[a-zA-Z ]*$/;
   
   //console.log(!regPur.match(loanPurpose.value))
   if (loanPurpose.value.trim() == "") {
      //loanPurpose.style.border = "solid 3px red";
      document.getElementById("loanPurposeError").innerHTML="*Field should'nt be Empty"
      document.getElementById("loanPurposeError").style.visibility = "visible";
      return false;
      }
   else if(!loanPurpose.value.match(purpose)){
      document.getElementById("loanPurposeError").innerHTML="*Numbers and Special Character not allowed";
      document.getElementById("loanPurposeError").style.visibility = "visible";
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
   document.getElementById("hPhoneError").style.visibility = "visible";
   return false;
   } 
   
else if(hPhonev.value.length < 10){
      document.getElementById("hPhoneError").innerHTML="Phone no. should be of Length 10 digit"
      document.getElementById("hPhoneError").style.visibility = "visible";
      return false;
      }
else if(!hPhonev.value.match(homePhone)){
      document.getElementById("hPhoneError").innerHTML="Character and all zeros digits not allowed";
      document.getElementById("hPhoneError").style.visibility = "visible";
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
    document.getElementById("mphoneError").style.visibility = "visible";
    return false;
    }
else if(mPhone.value.length<10){
      document.getElementById("mphoneError").innerHTML="Phone no. should be of Length 10 digit"
      document.getElementById("mphoneError").style.visibility = "visible";
      return false;
      }
else if(!mPhone.value.match(mobilePhone)){
      document.getElementById("mphoneError").innerHTML="Character and all zeros digits not allowed";
      document.getElementById("mphoneError").style.visibility = "visible";
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

 function dobValidate() {
  
      var userinput = document.getElementById("DOB").value;  
      var dob = new Date(userinput);  
      if(userinput==null || userinput=='') {  
        document.getElementById("DOBError").innerHTML = "**Choose a date please!"; 
        document.getElementById("DOBError").style.visibility = "visible";   
        return false;   
      } 
      
     else if (!userinput==""){  
        
      //calculate month difference from current date in time  
      let month_diff = Date.now() - dob.getTime();  
        
      //convert the calculated difference in date format  
      let age_dt = new Date(month_diff);   
        
      //extract year from date      
      let year = age_dt.getUTCFullYear();  
        
      //now calculate the age of the user  
      let age = Math.abs(year - 1970);  

         if(age < 18){
         document.getElementById("DOBError").innerHTML = "**Age cannot be less than 18"; 
         document.getElementById("DOBError").style.visibility = "visible"; 
           
        return false; 
         }
         else if(age > 60){
            document.getElementById("DOBError").innerHTML = "**Age cannot be more than 60";    
            document.getElementById("DOBError").style.visibility = "visible";
           return false; 
            }
         else{
            document.getElementById("DOBError").style.visibility = "hidden";
           return false;
         }
      }
 }
        
 function resDateValidation() {
  
   var userinput = document.getElementById("rNO").value;  
   var dob = new Date(userinput);  
   if(userinput==null || userinput=='') {  
     document.getElementById("rDateError").innerHTML = "**Choose a date please!";  
     document.getElementById("rDateError").style.visibility = "visible";  
     return false;   
   } 
   
  else if (!userinput==""){  
     
   //calculate month difference from current date in time  
   let month_diff = Date.now() - dob.getTime();  
     
   //convert the calculated difference in date format  
   let age_dt = new Date(month_diff);   
     
   //extract year from date      
   let year = age_dt.getUTCFullYear();  
     
   //now calculate the age of the user  
   let age = Math.abs(year - 1970);  

      if(age < 18){
      document.getElementById("rDateError").innerHTML = "*Date should be greater than 18 years";
      document.getElementById("rDateError").style.visibility = "visible";  
     return false; 
      }
      else if(age > 60){
         document.getElementById("rDateError").innerHTML = "**date should be less than 60 years";  
         document.getElementById("rDateError").style.visibility = "visible";    
        return false; 
         }
      else{
         document.getElementById("rDateError").style.visibility = "hidden";    
        return false;
      }
   }
}
function zipvalidation(){

let zip = document.getElementById("zip")
let zipVal = /^[0-9]*$/;

if (zip.value.trim() == "") {
   //loanPurpose.style.border = "solid 3px red";
   document.getElementById("zipError").innerHTML = "*Field should'nt be empty"
   document.getElementById("zipError").style.visibility = "visible";  
   return false;
   }
else if(zip.value.length<5)
{
   document.getElementById("zipError").innerHTML = "*Length must be of 5 digit"
   document.getElementById("zipError").style.visibility = "visible";  
   
   return false;  
}
else if(!zip.value.match(zipVal)){
      document.getElementById("zipError").innerHTML = "*Character and special character not allowed"
      document.getElementById("zipError").style.visibility = "visible";  
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
      document.getElementById("firstnameError").style.visibility = "visible";  
      return false;
   }
   else if(firstName.value.length<2){
      document.getElementById("firstnameError").innerHTML = "*Minimum length is 2 character";
      document.getElementById("firstnameError").style.visibility = "visible";  
      return false;
   }
   else if(!firstName.value.match(name)){
      document.getElementById("firstnameError").innerHTML = "*Numbers and Special Character are not allowed";
      document.getElementById("firstnameError").style.visibility = "visible";  
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
      document.getElementById("lastnameError").style.visibility = "visible"; 
      return false;
   }
   else if(firstName.value.length<2){
      document.getElementById("lastnameError").innerHTML = "*Minimum length is 2 character";
      document.getElementById("lastnameError").style.visibility = "visible";  
      return false;
   }
   else if(!lastName.value.match(lastn)){
      document.getElementById("lastnameError").innerHTML = "*Numbers and Special Character are not allowed";
      document.getElementById("lastnameError").style.visibility = "visible"; 
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
      document.getElementById("middlenameError").style.visibility = "visible"; 
      return false;
   }
   else if(firstName.value.length<2){
      document.getElementById("middlenameError").innerHTML = "*Minimum length is 2 character";
      document.getElementById("middlenameError").style.visibility = "visible";  
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
      document.getElementById("empNameError").style.visibility = "visible"; 
      return false;
   }
   else if(!empNameVal.value.match(regEmp)){
      document.getElementById("empNameError").innerHTML="Special Character not allowed";
      document.getElementById("empNameError").style.visibility = "visible"; 
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
      document.getElementById("cityError").style.visibility = "visible"; 
      return false;
   }
   else if(!cityVal.value.match(regCity)){
      document.getElementById("cityError").innerHTML="Character and Special Character not allowed";
      document.getElementById("cityError").style.visibility = "visible"; 
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
 let empmobilePhone = /^(?!(?:\D*0)+\D*$)\(?([0-9]{3})\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}$/
//  let empmobilePhone = /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;

if (empphone.value.trim() == "" ) {
   document.getElementById("empPhoneError").innerHTML="Field should'nt be Empty"
   document.getElementById("empPhoneError").style.visibility = "visible";
   return false;
   } 
   
else if(empphone.value.length < 10){
      document.getElementById("empPhoneError").innerHTML="Phone no. should be of Length 10 digit"
      document.getElementById("empPhoneError").style.visibility = "visible";
      return false;
      }
else if(!empphone.value.match(empmobilePhone)){
      document.getElementById("empPhoneError").innerHTML="Character and all zeros digits not allowed";
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
      document.getElementById("annualIncome").style.visibility = "visible";
      return false
    }
    else{
      document.getElementById("annualIncome").style.visibility = "hidden";
      
      return false;
    }  
   }
else if (incomevalidation.value.trim() ==""){
      document.getElementById("annualIncome").innerHTML="Field should'nt be empty"
      document.getElementById("annualIncome").style.visibility = "visible";
      return false
   }  

else{
   document.getElementById("annualIncome").innerHTML= "*Characters and special characters is not allowed";
   document.getElementById("annualIncome").style.visibility = "visible";
      return false;
}
}

// function income(){
//    let empIncome = document.getElementById("aIncome")
//    let amountIncome =/^[0-9]*$/;

// if(!empIncome.value.match(amountIncome)){
//    document.getElementById("annualIncome").style.visibility = "visible";
//    return false;
// }
// else{
//    document.getElementById("annualIncome").style.visibility = "hidden";
//    return false;
// }
// }

function addressValidation(){
   let addressVal = document.getElementById("address")
   let regadd = /^([a-zA-Z0-9 _-]+)$/;
   if(addressVal.value.trim() == ""){
      document.getElementById("addressError").innerHTML="Field should'nt be empty";
      document.getElementById("addressError").style.visibility = "visible"
      return false;
   }
   else if(!addressVal.value.match(regadd)){
      document.getElementById("addressError").innerHTML="Special Character not allowed";
      document.getElementById("addressError").style.visibility = "visible"
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
      document.getElementById("typeError").style.visibility = "visible"
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
      document.getElementById("emptypeError").style.visibility = "visible"
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
      document.getElementById("address2Error").style.visibility = "visible"
      return false;
   }
   else{
      document.getElementById("address2Error").style.visibility="hidden";
      return false;
   }
}