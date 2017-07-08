function updateMenu(forceClose) {
    var dropDownList = document.getElementById("dropDownClick");
    if (forceClose) {
        dropDownList.className = "NavBar";
    } else if (dropDownList.className === "NavBar") {
        dropDownList.className += " Open";
        //classes are now ["NavBar", "Responsive"]
    } else {
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

//detect OS for DL button
window.onload = function(){
    var opSys = "idk";
    if (navigator.appVersion.indexOf("Win")!=-1) opSys="Windows";
    if (navigator.appVersion.indexOf("Linux")!=-1) opSys="Linux";
    if (opSys != "Linux") {
        document.getElementById("linuxDL").className += " HideMe";
    }
    if (opSys != "Windows") {
        document.getElementById("windowsDL").className += " HideMe";
    }
    if (opSys == "Windows" || opSys == "Linux") {
        document.getElementById("otherDL").className += " HideMe";
    }
    alert("OS: "+opSys);
}
