function validate(){
var emailOrNumber = document.getElementById("fname");
let a = emailOrNumber.value.toString().substr(0,2);
let b = emailOrNumber.value.toString().substr(2);
console.log(a);
console.log(b);
var regexEmail=/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;

if(!emailOrNumber.value){
 document.getElementById("submit").disable=true;
}
else {
  if (isNaN(b)) {
    if (regexEmail.test(emailOrNumber.value)==false) {
      document.getElementById("submit").disable=true;
    }else {
      window.location.href='index.html'
    }
  }else {
    if (a=="+7"&&emailOrNumber.value.length==12) {
          window.location.href='index.html'
    }else {
     emailOrNumber.style.border='2px solid red';
     document.getElementById("warning").style.display='block'
    }
  }
}
} 



