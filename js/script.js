let buttons=[...document.querySelectorAll(".saurabh-btn")];

buttons.forEach((btn)=>{

    btn.addEventListener("click",()=>{
        window.location.href="index.html";
    })
})