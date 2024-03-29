const generate=document.getElementById("generate");
const output=document.getElementById("output");
const uppercase=document.getElementById("uppercase");
const lowercase=document.getElementById("lowercase");
const numbers=document.getElementById("numbers");
const special=document.getElementById("special");
let password="";
let indexchar;



const lowercasechar="abcdefghijklmnopqrstuvwxyz";
const uppercasechar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberschar="0123456789";
const specialchar="!@#$%^&*()-_=";

const lengthtaker=document.getElementById("lengthtaker");
const lengthvalue=document.getElementById("lengthvalue");
lengthvalue.textContent=lengthtaker.value;
lengthtaker.oninput=function fun1(){
    lengthvalue.textContent=lengthtaker.value;
}

function gen(){
    let passlength=parseInt(lengthtaker.value);
    password="".trim();
    output.textContent="";
    let allowedchar =lowercase.checked ? lowercasechar:"".trim();
    allowedchar +=uppercase.checked ? uppercasechar:"".trim();
    allowedchar +=numbers.checked ? numberschar:"".trim();
    allowedchar +=special.checked ? specialchar:"".trim();
    if(allowedchar.length===0){
        alert("You must select at least one from the tick boxes");
        password="Your password";
    }else{
        for(let i=0;i<passlength;i++){
            indexchar=Math.floor(Math.random()*allowedchar.length);
            password+=allowedchar[indexchar];
        }
    }
       output.textContent=password;

}