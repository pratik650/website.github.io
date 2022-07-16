let headingElement = document.getElementById('Heading');
document.getElementById('Heading').style.textAlign='center';
document.getElementById('Heading').style.backgroundColor='lightblue';
//Hover effect...
let btn = document.getElementById('Mybtn');
let audioElement= new Audio('I Love You.mp3');
audioElement.loop=true;

let name="pratik";
let p=document.getElementById('Paragraph');

document.getElementById("Mybtn").addEventListener("click", Mymsg);

function Mymsg(){
 let v = prompt("Enter password to enter 🔑");
 if(v!="mera pagal"){
    alert("you are not allowed to enter to the website!! sorry");
    Close;
 }
 else{
    alert("Welcome Dear 😁");
    headingElement.addEventListener('click',function Myheading(){
            headingElement.textContent = 'zzz';
    });
    audioElement.play();
    document.getElementById('Paragraph').style.visibility="visible";
    document.getElementById('Finaldiv').style.visibility="visible";
 }
}


