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

  let regname = /^[a-zA-Z]+$/;
  let regAmt =
    /^\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/;
  let regPur = "^\\s+[A-Za-z,;'\"\\s]+[.?!]$";

  if (loanAmount.value.trim() == "" || !regAmt.test(loanAmount.value)) {
    loanAmount.style.border = "solid 3px red";
    document.getElementById("loanAmountError").style.visibility = "visible";
    return false;
  } else if (
    loanPurpose.value.trim() == "" ||
    !regPur.test(loanPurpose.value)
  ) {
    loanPurpose.style.border = "solid 3px red";
    document.getElementById("loanPurposeError").style.visibility = "visible";
    return false;
  } else if (!regname.test(firstName.value) || firstName.value.trim() == "") {
    firstName.style.border = "solid 3px red";
    document.getElementById("firstnameError").style.visibility = "visible";
    return false;
  } else if (!regname.test(lastName.value) || lastName.value.trim() == "") {
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
