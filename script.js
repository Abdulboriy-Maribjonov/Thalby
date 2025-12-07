const menu = document.getElementById("menu")
const closeMenu = document.getElementById("closeMenu")
const list = document.getElementById("list")
const appMenu = document.getElementById("app-menu")
const appList = document.getElementById("app-list")

menu.addEventListener("click",()=>{
    list.classList.add("menu-active")
})
closeMenu.addEventListener("click",()=>{
    list.classList.remove("menu-active")
})
appMenu.addEventListener("click",()=>{
    appList.classList.toggle("app-active")
    appMenu.classList.toggle("appM-active")
})