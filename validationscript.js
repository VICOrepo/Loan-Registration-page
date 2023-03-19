// function validateForm(){

//     let loanPurpose = document.getElementById("loanPurpose").value

//      let purpose = /^[a-zA-Z\s]+$/;

//      if(!purpose.test(loanPurpose)){
//         document.getElementById("loanPurpose").style.border = "3px solid red"
//         document.getElementById("loanPurposError").innerHTML = "<span style='color: red;'>" + "Write a valid Reason";
//         return false;
//      }

//      function dollar() {
//       let dollarUS = Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       });

//       let loanAmount1 = document.getElementById("loanAmount").value;
//       let loanAmount2 = loanAmount1.replace("$", "");
//       let loanAmount3 = loanAmount2.replace(",", "");
//       document.getElementById("loanAmount").value = dollarUS.format(loanAmount3);

//       let rate = loanAmount3 < 2000 || loanAmount3 == "" || loanAmount3 > 20000;
//       document.getElementById("loanAmountError").style.display = rate
//         ? "inline"
//         : "none";
//     }
//      function Ispurpose() {
//       var regPass = /^[a-zA-Z\s]+$/;
//       loanPurpose = document.getElementById("loanPurpose").value;
//       var rate = regPass.test(loanPurpose);
//       document.getElementById("loanPurposeError").style.display = rate
//         ? "none"
//         : "inline";
//       return rate;
//     }
// }

function validateForm() {
  let loanAmount = document.getElementById("loanAmount");
  let loanPurpose = document.getElementById("loanPurpose");
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");

  let regname = "/^[a-zA-Z]+$/";
  let regAmt =
    "/^\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/";
//  let regPur = "^\\s+[A-Za-z,;'\"\\s]+[.?!]$";

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
  else if (!regname.test(firstName.value) || firstName.value.trim() == "") {
    firstName.style.border = "solid 3px red";
    document.getElementById("firstnameError").style.visibility = "visible";
    return false;
  } 
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
   if(!mailFormat.test(email.value)){
     // email.style.border = "solid 3px red";
      document.getElementById("EmailError").style.visibility="visible";
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
   // else{
   //    return document.getElementById("SNNError").style.visibility="visible";
      
   // }
   return r;
}
function ssnValidation(){
   let ssn = document.getElementById("SNN")
   let regSnn =  "/^\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/";
   if (ssn.value.trim() == "" || !regSnn.test(ssn.value)) {
     // ssn.style.border = "solid 3px red";
      document.getElementById("SNNError").style.visibility = "visible";
      return false;
    }
     else  {
     // ssn.style.border = "solid 3px red";
      document.getElementById("SNNError").style.visibility = "disable";
      return false;
    } 
}



function loanAmountValidation(){
      // let dollarUS = Intl.NumberFormat("en-US", {
      //   style: "currency",
      //   currency: "USD",
      // });
    
      // // var currency = document.getElementById("loanAmount").value;
    
      // let loanAmount1 = document.getElementById("loanAmount").value;
      // let loanAmount2 = loanAmount1.replace("$ ", "");
      // let loanAmount = loanAmount2.replace(",", "");
      // document.getElementById("loanAmount").value = dollarUS.format(loanAmount);  

      let regAmt ="/^[0-9]*$/";

   if(loanAmount.value.trim() == ""||loanAmount.value<2000 || loanAmount.value>20000){
      document.getElementById("loanAmountError").style.visibility = "visible";
      return false;
   }
   // else if(!regAmt.test(loanAmount.value)){
   //    document.getElementById("loanAmountError").style.visibility = "visible";
   //    return false;
   // }
   else{
      document.getElementById("loanAmountError").style.visibility = "hidden";
      return false;
   }
}

function isPurpose(){
   let loanPurpose = document.getElementById("loanPurpose");

   let regPur = "/^[A-Za-z]+$/";
   //console.log(!regPur.match(loanPurpose.value))
   if (loanPurpose.value.trim() == "") {
      //loanPurpose.style.border = "solid 3px red";
      document.getElementById("loanPurposeError").style.visibility = "visible";
      return false;
      }
   else if(!regPur.match(loanPurpose.value)){
      document.getElementById("loanPurposeError").style.visibility = "visible";
      return false;
   }
   
   else{
      document.getElementById("loanPurposeError").style.visibility = "hidden";
      return false;
   }
}

function mobileValidation2(e){
  
let phone3 = document.getElementById("hPhone");
if (phone3.value.trim() == "" || phone3.value.length<10) {
   
   document.getElementById("hPhoneError").style.visibility = "visible";
   return false;
   }
else {
   document.getElementById("hPhoneError").style.visibility = "hidden";
   return false;
}
} 

function mobileValidation(e){
   // let pattern = "/^\d{10}$/"
 let phone1 = document.getElementById("mPhone");
 if (phone1.value.trim() == ""|| phone1.value.length<10) {
    //loanPurpose.style.border = "solid 3px red";
    document.getElementById("phoneError").style.visibility = "visible";
    return false;
    }
 else {
    document.getElementById("phoneError").style.visibility = "hidden";
    return false;
 }
 } 

function mobileMasking2(){

   let ele = document.getElementById("hPhone");
   ele = ele.value.split("-").join("-");
   let finalVal = ele.replace(
     /(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
     "($1$2$3)$4$5$6-$7$8$9$10"
   );
   document.getElementById("hPhone").value = finalVal;
 }

 function mobileMasking(){

   let ele = document.getElementById("mPhone");
   ele = ele.value.split("-").join("-");
   let finalVal = ele.replace(
     /(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/,
     "($1$2$3)$4$5$6-$7$8$9$10"
   );
   document.getElementById("mPhone").value = finalVal;
 }


 function dOB() {
   let today = new Date();
 
   today.setDate(today.getDate() - 18 * 365);
 
   let dd = String(today.getDate()).padStart(2, "0");
   let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
   let yyyy = today.getFullYear();
   today = yyyy + "-" + mm + "-" + dd;
   document.getElementById("DOB").max = today;
 }

 function zipvalidation(){
let zip = document.getElementById("zip")

if (zip.value.trim() == ""|| zip.value.length<5) {
   //loanPurpose.style.border = "solid 3px red";
   document.getElementById("zipError").style.visibility = "visible";
   return false;
   }
else {
   document.getElementById("zipError").style.visibility = "hidden";
   return false;
}
 }
// var specialKeys = new Array();
// specialKeys.push(8); //Backspace
// function isNumericZip(e) {
//   document.getElementById("zip").innerHTML = "";
//   var keyCode = e.which ? e.which : e.keyCode;
//   var ret =
//     (keyCode >= 48 && keyCode <= 57) || specialKeys.indexOf(keyCode) != -1;
//   document.getElementById("zipError").style.display = ret ? "none" : "inline";
//   return ret;
// }
function firstNameValidation(){
   let firstName = document.getElementById("firstName")
   if(firstName.value.trim() == ""){
      document.getElementById("firstnameError").style.visibility="visible";
      return false;
   }
   else{
      document.getElementById("firstnameError").style.visibility="hidden";
      return false;
   }
}

function lastNameValidation(){
   let firstName = document.getElementById("lastName")
   if(firstName.value.trim() == ""){
      document.getElementById("lastnameError").style.visibility="visible";
      return false;
   }
   else{
      document.getElementById("lastnameError").style.visibility="hidden";
      return false;
   }
}


var specialKeys = new Array();
specialKeys.push(8); 
function isAlphaFirstName(e){
     document.getElementById("firstName").innerHTML = "";
     var keyCode = e.which ? e.which : e.keyCode;
     var ret =
       (keyCode >= 65 && keyCode <= 90) ||
       (keyCode >= 95 && keyCode <= 122) ||
       specialKeys.indexOf(keyCode) != -1;
     document.getElementById("firstnameError").style.display = ret ? "none" : "inline";
     return ret;
   }

var specialKeys = new Array();
specialKeys.push(8); 
function isAlphaLastName(e){
     document.getElementById("lastName").innerHTML = "";
     var keyCode = e.which ? e.which : e.keyCode;
     var ret =
       (keyCode >= 65 && keyCode <= 90) ||
       (keyCode >= 95 && keyCode <= 122) ||
       specialKeys.indexOf(keyCode) != -1;
     document.getElementById("lastnameError").style.display = ret ? "none" : "inline";
     return ret;
   }

