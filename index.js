let num=document.getElementById("number");
let c=0;
setInterval(()=>{
    if(c==65){
        clearInterval();
    }
    else{
        c++;
    num.innerHTML=c+"%";
    }
    
},30);