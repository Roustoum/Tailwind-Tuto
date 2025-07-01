const menu_btn = document.querySelector("#menu_btn")
const menu = document.querySelector("#menu")

menu_btn.addEventListener("click",()=>{
    if(menu.classList.contains("hidden")){
        menu.classList.remove("hidden");
    }else{
        menu.classList.add("hidden")
    }
})