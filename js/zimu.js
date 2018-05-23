$(".zimu").hover(function(e){
    $(this).stop().animate({"top":"140px"},500);
  },function(){
   $(this).stop().animate({"top":"220px"},500);
 e.stopPropagation();
});