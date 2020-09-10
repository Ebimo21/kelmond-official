$(function(){
    window.onscroll= function(){
    myfunction();
}
});

function myfunction(){
    if($(window).scrollTop() >=40 ){
        $("header").css("background-color", "white");
        $(".color").css("color", "rgb(45, 6, 54)");

        $("header").css("box-shadow", "0px 2px 4px whitesmoke");
        // $(".main").css("margin-top", "60px");            
        // $("header").css("background-color", "blue"); 
        
    }
     else {
      $("header").css("box-shadow", "none");
        $("header").css("background", "transparent");
      $(".color").css("color", "white");
    //   $(".main").css("margin-top", "0px");
    
    }
}
    
function toggle(){
    var menu = $(".links");
    
    menu.toggle(800);

    }

    var state = 0;
function toggleSearch(){

    var x = $(".searchBox");
        x.toggle(800);

    if(state == 0){
        x.focus();
        state = 1;
    }else{
        x.blur();
        state = 0;
    }

 
    // x.focus();
    }

$(document).ready(function(){
    $(".menuBar").click(function(){
        toggle();
    
    })

    $(".clear-icon").click(function(){
        toggle();
    })

    $("#drpdwn-1").click(function(){
        $(".drpdwn-content").slideToggle(800);
    })
  //  $("*").click(function(){
  //      alert($(this).text() + " tag");
 //   });

});


    