function expandMenu(){
    var dropDownList = document.getElementById("dropDownClick");
    if(dropDownList.className === "NavBar"){
       // window.alert("ok className is detected as NavBar");
        dropDownList.className += "Responsive";
        //class is now named NavBarResponsive
    }else{
        dropDownList.className = "NavBar";
    }
}