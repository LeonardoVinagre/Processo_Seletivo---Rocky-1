//js to open the side menu
var menu = document.querySelector(".menu");
var menuIcon = document.querySelector(".menuOpen");
//add a event click in the site's menu icon to active the toggleMenu Function
menuIcon.addEventListener("click", toggleMenu);
//this function  check if .menu already have a class named showMenu!
function toggleMenu(){
    //if yes, than we remove from it
    if(menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
    }
    //if not, we add to it
    else{
        menu.classList.add('showMenu');
    }
    
}
//-----------------------------------------------
//js of dropdown menu inside the side menu

var services = document.querySelector(".services");
var differentials = document.querySelector(".differentials");
var servicesItens = document.querySelector(".servicesItens");
var differentialsItens = document.querySelector(".differentialsItens");

//added a event click on services and differentials <li> to activate the dropdown function
services.addEventListener("click", dropdownServices);
differentials.addEventListener("click", dropdownDifferentials);


function dropdownServices(){
    //check if services have 'showDropdown' class
    //if yes, than we remove it
    if(servicesItens.classList.contains("showDropdown")){
        servicesItens.classList.remove("showDropdown");
    }
    else{
        //if not, we first check if differentials dropmenu is opened
        //if its opened we remove 'showDropdown' from it
        if(differentialsItens.classList.contains("showDropdown")){
            differentialsItens.classList.remove("showDropdown");
        }
        //than we add  'showDropdown' class to services
        servicesItens.classList.add("showDropdown");
    }  
}
//same as dropdownServices!
function dropdownDifferentials(){
    if(differentialsItens.classList.contains("showDropdown")){
        differentialsItens.classList.remove("showDropdown");
    }
    else{
        if(servicesItens.classList.contains("showDropdown")){
            servicesItens.classList.remove("showDropdown");
        }
        differentialsItens.classList.add("showDropdown");
    }  
}
   

