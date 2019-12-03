let myImage=document.querySelector('img');
myImage.onclick= function(){
    let mySync=document.querySelector('src');
    if (mySync===t3){
        myImage.setAttribute('src','images/u4.png');
    } else{
        myImage.setAttribute('src','images/t3.png');
    }
}
let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');

function setUserName(){
    let myName=prompt("Please enter your name.");
    if(!myName){
        alert("Don't let black!");
        setUserName();
    } else{
        localStorage.setItem('name',myName);
        myHeading.textContent= "Speed Up, "+myName;
    }
}
if(!localStorage.getItem('name')){
    setUserName();
} else{
    let storedName=localStorage.getItem('name');
    myHeading.textContent="Speed Up, "+storedName;
}
myButton.onclick=function(){setUserName();}