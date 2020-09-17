var nav_state = "close";

function open_menu(){

    if(nav_state == "close"){
    console.log("except");
    document.getElementById('menu').style.height = "100%";

    nav_state = "open"
    }
    else{
        document.getElementById('menu').style.height = "0%";
        nav_state = "close";
    }


}