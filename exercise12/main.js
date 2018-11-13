$(document).ready(function(){

    $(".n1").click(function(){
        $(".Julia").slideToggle("slow");
      })

    $(".n2").click(function(){
    	$(".dead").fadeToggle("slow");
      })

    $(".n3").click(function(){
        $(".dont").animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px'
        });
    }); 

    $(".n4").click(function(){
        var div = $(".train");
        div.animate({height: '600px', opacity: '0.4'}, "slow");
        div.animate({width: '800px', opacity: '0.7'}, "slow");
        div.animate({height: '500px', opacity: '0.4'}, "slow");
        div.animate({width: '750px', opacity: '0.7'}, "slow");

        });

    $("button").click(function(){
        $(".oculus")
            .slideUp(1000)
            .slideDown(1000);
     });
});
