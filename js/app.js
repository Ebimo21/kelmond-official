var nav_state = "close";
var link = document.getElementById('link');
var social = document.getElementById('social');

function open_menu(){

    if(nav_state == "close"){
    console.log("except");
    document.getElementById('menu').style.height = "100%";

    link.classList.add("slideup");
    social.classList.add("slidedown");

    nav_state = "open"
    }
    else{
        document.getElementById('menu').style.height = "0%";

        link.classList.remove("slideup");
        social.classList.remove("slidedown");
        nav_state = "close";
    }


}


//


var elements;
var windowHeight;

function init(){
        elements = document.getElementsByClassName("project__pack");
        windowHeight = window.innerHeight;

    }

    function checkPosition(){
        // alert(elements.length);
        for(i=0; i<elements.length; i++){
        var positionFromTop = elements[i].getBoundingClientRect().top;
        var element = elements[i];

        console.log("positionfromtop = " + positionFromTop + "windowHeight: " + windowHeight );
            if(positionFromTop - windowHeight <= 0){
                element.classList.add('animate-projects');

                // element.toggle(100);
                // element.classList.remove('opacity');
            
            }else{
                element.classList.remove("animate-projects");
                // element.classList.add('opacity');
                // element.toggle(100);
                // $('.correct').slideUp();
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    
    init();
    checkPosition();

