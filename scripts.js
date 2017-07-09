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
window.onresize = function ( ) {
    //seems to be desktop
    if (window.innerWidth > 1199) {
        updateMenu(true);
    }
};

//detect OS for DL button, verify that JS is working
window.onload = function ( ) {
    //JS check
    var msgBlocked = document.getElementById("blockJSMsg");
    msgBlocked.className += " HideMe";
    //detect
    var userAgent = navigator.userAgent.toLocaleLowerCase();
    var opSys = "idk";
    if (navigator.appVersion.indexOf("Win")!=-1) {opSys="Windows";}
    if (navigator.appVersion.indexOf("Linux")!=-1) {opSys="Linux";}
    if (userAgent.indexOf("android")!=-1) {opSys = "Android";}
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) opSys = "iOS";
    //hide not applicables
    if (opSys != "Linux") document.getElementById("linuxDL").className += " HideMe";
    if (opSys != "Windows") document.getElementById("windowsDL").className += " HideMe";
    if (opSys != "Android") document.getElementById("androidDL").className += " HideMe";
    if (opSys != "iOS") document.getElementById("iOSDL").className += " HideMe";
    //other
    if (opSys == "Windows" || opSys == "Linux" || opSys=="Android" || opSys=="iOS") {
        document.getElementById("otherDL").className += " HideMe";
    }
}
