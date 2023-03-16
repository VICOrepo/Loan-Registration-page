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

function validateForm(){

   let loanA = document.getElementById("loanAmount").value
   let loanP = document.getElementById("loanPurpose").value
   let regAmt = / ^[0-9]+$/;
   let regPur = /^[A-Za-z]+$/;
}