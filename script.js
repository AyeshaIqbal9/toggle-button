
toggleModeBtn.onclick=()=>{
    if(document.body.style.backgroundColor=="white"){
        document.body.style.backgroundColor="black";
        document.body.style.color="white"
        toggleModeBtn.textContent = 'Switch to Light Mode';

    }
        else{
            document.body.style.color="black"
            document.body.style.backgroundColor="white";
            toggleModeBtn.textContent="Switch to Dark Mode";
        }
}
toggleModeBtn.ondblclick=()=>{
    if(document.body.style.backgroundColor=="white"||document.body.style.backgroundColor=="black"){
        document.body.style.backgroundColor="red";
        document.body.style.color="white"
        toggleModeBtn.textContent = ' single click to Switch to white';

    }
}
toggleModeBtn.onmouseover=()=>{
    if(document.body.style.backgroundColor=="white"||document.body.style.backgroundColor=="black"){
        document.body.style.backgroundColor="blue";
        document.body.style.color="white"
        toggleModeBtn.textContent = 'hower to Switch to white';
    }
    else{
        document.body.style.color="black"
        document.body.style.backgroundColor="white";
        toggleModeBtn.textContent="Switch to Dark Mode";
    }
    }