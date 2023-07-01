let card = document.querySelectorAll(".card")
card.forEach(e =>{
    e.addEventListener("click",()=>{
        e.classList.toggle("cards")
     })
})
