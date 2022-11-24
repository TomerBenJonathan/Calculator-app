

function promptAlert(){
    alert("Developer: Tomer Ben Jonathan" + "\n" + "Version: 0.1" + "\n" + "Description: Calculator App");
}

function myFunction() {
    const sel1 = document.getElementById('background').value;
    document.body.style.backgroundColor = sel1;
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const font = urlParams.get('font')
const color = urlParams.get('color')
const rating = urlParams.get('rating')

if (color==="green"){
    document.body.style.backgroundColor="green"

}
else if (color==="yellow"){
    document.body.style.backgroundColor="yellow"
}

else if (color==="blue"){
    document.body.style.backgroundColor="blue";
}
    

else if (color==="green"){
    document.body.style.backgroundColor="green";
}else{
    document.body.style.backgroundColor="white";
}

if (font==="serif"){
    document.body.style.fontFamily="serif";

}
else if (font==="monospace"){
    document.body.style.fontFamily="monospace";
}

else if (font==="fangsong"){
    document.body.style.fontFamily="fangsong";
}
    

else if (font==="ariel"){
    document.body.style.fontFamily="ariel";
}else{
    document.body.style.fontFamily="normal";
}

if (rating==='dark'){
    
    document.getElementById("cury").classList.remove("calculator-light");
    document.getElementById("cury").classList.add("calculator-dark");

}else{document.getElementById("cury").classList.add("calculator-light");
document.getElementById("cury").classList.remove("calculator-dark");
}
