$(function(){

    if($(window).width()<=414){
    
      $(".button1").click(function(){
        $(".button1").toggleClass("toggled");
      });
      
      $('.nav_right ul').hide();
      $('.container1').click(function(){
        $('.nav_right ul').slideToggle();
      });
        
    };

});


$(function(){

    if($(window).width()<=414){

      $(".button2").click(function(){
        $(".button2").toggleClass("toggled");
      });
      
      $('.nav').hide();
      $('.container2').click(function(){
        $('.nav').slideToggle();
      });

    };

});


$(function(){

    if($(window).width()<=414){

      let i = $(".main")[0].getBoundingClientRect().top + window.scrollY;
      
      $(window).scroll(function(){

        // getBoundingClientRect 判定nav到畫面4邊的距離
        //   $(".nav")[0].getBoundingClientRect().top
        console.log( $(".main")[0].getBoundingClientRect().top + window.scrollY);
        // console.log( $(".nav")[0].offsetTop);
        
        if(window.scrollY > i){
          $(".nav")[0].style.top =  window.scrollY - i + "px"
          }
        else{
          $(".nav")[0].style.top = 0
        };

      });

    };

});

$(function(){

    var clicked = false; 
    $('.fa-heart').click(function(){
      if(clicked){
        $(this).css("color", "#54433265"); 
      } else {
        $(this).css("color", "#544332"); 
      }
      clicked =!clicked;
    });

});


let lightbox1 = document.getElementById("lightbox1");

// 頁面上的按鈕
var in1 = document.getElementsByClassName("in1")[0];
in1.addEventListener("click", function(){
  lightbox1.classList.remove("none1");
});

var close1 = document.getElementsByClassName("close1")[0];
close1.addEventListener("click", function(){
  lightbox1.classList.add("none1");
});

lightbox1.addEventListener("click", function(){
  this.classList.add("none1");
});

// 點擊 lightbox 中的白色區域，不會關掉 modal
lightbox1.querySelector("article").addEventListener("click", function(e){
  e.stopPropagation();
});


$(function(){

  var clicked1 = false; 
  $('.fa-circle-xmark').click(function(){
    if(clicked1){
      $(this).css("color", "#54433260"); 
    } else {
      $(this).css("color", "#544332"); 
    }
    clicked1 =!clicked1;
  });

  var clicked2 = false; 
  $('.send').click(function(){
    if(clicked2){
      $(this).css("background-color", "#54433260");
      $(this).css("color", "#544332");
    } else {
      $(this).css("background-color", "#544332");
      $(this).css("color", "#FAF5ED"); 
    }
    clicked2 =!clicked2;
  });

});