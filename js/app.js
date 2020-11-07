var nav_state = "close";
var link1 = document.getElementById('link1');
var link2 = document.getElementById('link2');
var link3 = document.getElementById('link3');
var link4 = document.getElementById('link4');
var social = document.getElementsByClassName('social-a');
const menuBtn = document.querySelector(".header__navIcon");

function open_menu(){
    
    if(nav_state == "close"){
        document.getElementById('menu').style.height = "100%";
    
        for(i=0; i<social.length; i++){
            var socialist = social[i];

            socialist.classList.add('show');

        }

        link1.classList.add("nav_slideup1");
        link2.classList.add("nav_slideup2");
        link3.classList.add("nav_slideup3");
        link4.classList.add("nav_slideup4");

        // social.classList.add("nav_slidedown");
        menuBtn.classList.add('open');
        
        nav_state = "open"
    }
    else{
        document.getElementById('menu').style.height = "0%";
        
        
        for(i=0; i<social.length; i++){
            var socialist = social[i];
            
            socialist.classList.remove('show');
            
        }
        
        link1.classList.remove("nav_slideup1");
        link2.classList.remove("nav_slideup2");
        link3.classList.remove("nav_slideup3");
        link4.classList.remove("nav_slideup4");
        
        
        // social.classList.remove("slidedown");
        menuBtn.classList.remove('open');
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




