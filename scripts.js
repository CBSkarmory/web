function updateMenu(forceClose){
    var dropDownList = document.getElementById("dropDownClick");
    if(forceClose) {
        dropDownList.className = "NavBar";
    }else if(dropDownList.className === "NavBar"){
        dropDownList.className += " Open";
        //classes are now ["NavBar", "Responsive"]
    }else{
        dropDownList.className = "NavBar";
    }
}

//automatically closes menu (while hiding) upon resize to desktop res
window.onresize = function(){
    //seems to be desktop
    if(window.innerWidth>1199) {
        updateMenu(true);
    }
};