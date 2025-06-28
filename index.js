let ym=0;
let cm=0;
let m1=document.getElementById("you");
let m2=document.getElementById("comp");
const arr=["rock","paper","scissor"];
const choices=document.querySelectorAll(".choice");
const para=document.getElementById("resultP");
const paraDiv=document.querySelector(".result");
choices.forEach(choice => {
    choice.addEventListener("click",()=>{
        compare(choice.children[0].id)
    })
})
const compare=(user)=>{
    let u;
    let s=false;
    let computer=arr[Math.floor(Math.random()*3)];
    if(user==computer){
        u=true;
        s=true;
    }
    else{
        if(user==="rock"){
            u=(computer=="paper")?false:true;
        }
        else if(user==="paper"){
            u=(computer=="scissor")?false:true;
        }
        else if(user==="scissor"){
            u=(computer=="rock")?false:true;
        }
    }
    display(user,computer,u,s);
}
const display=(user,computer,u,s)=>{
    if(u==true && s==true){
        para.innerText="Drawn !! Try again";
        paraDiv.style.backgroundColor="green"; 

    }
    else if(u==true){
        para.innerText="You Won"+` Your ${user} beats ${computer}`;
        paraDiv.style.backgroundColor="green";
        m1.innerText=++ym;
        
    }
    else{
        para.innerText="You Lost"+` ${computer} beats Your ${user} `;
        paraDiv.style.backgroundColor="red";
        m2.innerText=++cm;
    }
}