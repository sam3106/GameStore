function example() {
	alert("This is a example site.  The following feature works on this site:   The three release date images, New Game  ,Best Seller , Pre Order , Console , and Accessories"
		);
}

$("#img-wrapper img:last-child").on("click",function(){
  
	if( $("#img-wrapper:nth-child(3)")) {
	   $("#newest-game").css({"background":"url('https://4.bp.blogspot.com/-s_MDAlDWd1A/WjZ-WPLS7GI/AAAAAAAALEk/5Fa1M-WX60AsBY878PsXFfcITvTXxwQ4QCLcBGAs/s1600/Adventure%2BTime%2BPirates%2Bof%2Bthe%2BEnchiridion.jpg')",
	   	"width":"50%","margin":"0 auto","height":"60vh","background-size":"100% 100%","position":"relative"});
       $(".header-date").text("Release Date April 24th 2018");	 
		 
	}
}); 
$("#img-wrapper img:nth-child(2)").on("click",function(){
 if($("#img-wrapper img:nth-child(2)")){
		$("#newest-game").css({"background":"url('http://theweeklyspoon.com/wp-content/uploads/2017/07/kingdom-hearts-3.jpg')",
	   	"width":"50%","margin":"0 auto","height":"60vh","background-size":"100% 100%","position":"relative"});
       $(".header-date").text("Release Date December 31st 2018");
   }
});

$("#img-wrapper img:first-child").on("click",function(){
 if($("#img-wrapper img:first-child")){
		$("#newest-game").css({"background":"url('newGame.jpg')",
	   	"width":"50%","margin":"0 auto","height":"60vh","background-size":"100% 100%","position":"relative"});
       $(".header-date").text("Release Date May 1st 2018");
   }
});


       $(".game-shift li:nth-child(1)").on("click",function(){
        if($(".game-shift li:nth-child(1)")){
          $(".game-items:first-child").find("img").attr("src","new-game.jpg");
          $(".game-items:nth-child(2)").find("img").attr("src","new-game-two.jpg");
          $(".game-items:nth-child(3)").find("img").attr("src","new-game-three.jpg");
          $(".game-items:last-child").find("img").attr("src","new-game-four.jpg");
          $(".game-items:first-child").find("h2").html("Elder Scrolls<br>Morrowind");
          $(".game-items:nth-child(2)").find("h2").html("Persona<br>5");
          $(".game-items:nth-child(3)").find("h2").html("Destiny<br>2");
          $(".game-items:last-child").find("h2").html("Street Fighter 30th<br>Anniversary")
          ;}
      });


	$(".game-shift li:nth-child(2)").on("click", function(){
	 if($(".game-shift li:nth-child(2)")){
          $(".game-items:first-child").find("img").attr("src","bestseller.jpg");
          $(".game-items:nth-child(2)").find("img").attr("src","bestseller-two.jpg");
          $(".game-items:nth-child(3)").find("img").attr("src","bestseller-three.jpg");
          $(".game-items:last-child").find("img").attr("src","bestseller-four.jpg");

          $(".game-items:first-child").find("h2").html("The Legend Of<br>Zelda ");
          $(".game-items:nth-child(2)").find("h2").html("Call of Duty<br>WWII");
          $(".game-items:nth-child(3)").find("h2").html("Overwatch<br>Gold");
          $(".game-items:last-child").find("h2").html("Assassin's Creed Origins")
           $(".game-items:first-child").find("h4").html("Wii U");
          }
});
	$(".game-shift li:nth-child(3)").on("click", function(){
	 if($(".game-shift li:nth-child(3)")){
          $(".game-items:first-child").find("img").attr("src","preorder.jpg");
          $(".game-items:nth-child(2)").find("img").attr("src","preorder-two.jpg");
          $(".game-items:nth-child(3)").find("img").attr("src","preorder-three.jpg");
          $(".game-items:last-child").find("img").attr("src","preorder-four.jpg");
          $(".game-items:first-child").find("h2").html("Naruto Shinobi<br>Striker");
          $(".game-items:nth-child(2)").find("h2").html("Kingdom Heart<br>3");
          $(".game-items:nth-child(3)").find("h2").html("Adventure<br>Time");
          $(".game-items:last-child").find("h2").html("The Crew<br>2");
          $(".game-items:last-child").find("h6").html("$59.99");;}
});
$(".console-header li:nth-child(1)").on("click",function(){
if($(".console-header li:nth-child(1)")){
	$(".system-items:first-child").find("img").attr("src","console.png");
    $(".system-items:nth-child(2)").find("img").attr("src","console-two.png");
    $(".system-items:nth-child(3)").find("img").attr("src","console-three.png");
    $(".system-items:last-child").find("img").attr("src","console-four.png");
    $(".system-items:first-child").find("h2").html("Xbox One<br>1 TB");
    $(".system-items:nth-child(2)").find("h2").html("Playstation<br>4");
    $(".system-items:nth-child(3)").find("h2").html("Nintendo 3DS<br>XL");
    $(".system-items:last-child").find("h2").html("Playstation<br>3");
    $(".system-items:first-child").find("h6").html("$199.99");
    $(".system-items:nth-child(2)").find("h6").html("$199.99");
    $(".system-items:nth-child(3)").find("h6").html("$179.99");
    $(".system-items:last-child").find("h6").html("$119.99");
}
});
$(".console-header li:nth-child(2)").on("click",function(){
if($(".console-header li:nth-child(2)")){
	$(".system-items:first-child").find("img").attr("src","accessories.png");
    $(".system-items:nth-child(2)").find("img").attr("src","accessories-two.png");
    $(".system-items:nth-child(3)").find("img").attr("src","accessories-three.png");
    $(".system-items:last-child").find("img").attr("src","accessories-four.png");
    $(".system-items:first-child").find("h2").html("Playstion 4<br>Controller");
    $(".system-items:nth-child(2)").find("h2").html("Xbox One<br>Controller");
    $(".system-items:nth-child(3)").find("h2").html("Playstation 3<br>Move");
    $(".system-items:last-child").find("h2").html("Nintendo 3DS<br>Reader");
    $(".system-items:first-child").find("h6").html("$39.99");
    $(".system-items:nth-child(2)").find("h6").html("$39.99");
    $(".system-items:nth-child(3)").find("h6").html("$29.99");
    $(".system-items:last-child").find("h6").html("$19.99");
}
});
