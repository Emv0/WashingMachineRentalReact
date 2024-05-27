const menuResponsive = document.getElementById("menu-responsive");
const navResponsive = document.getElementById("navResponsiveContainer");

menuResponsive.addEventListener("click",()=>{
    if(navResponsive.style.display != "flex"){
        navResponsive.style.display = "flex"
    }else{
        navResponsive.style.display = "none"
    }
})