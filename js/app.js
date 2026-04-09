function openTab(tab){

let tabs=document.querySelectorAll(".tab")

tabs.forEach(t=>t.style.display="none")

document.getElementById(tab).style.display="block"

}
