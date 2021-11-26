 $(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});
 var images = ["t.png","t2.png","t3.png"];

var index = 0;
setInterval (function(){
  if (index === images.length) {
    index = 0;
  }
  document.getElementById("r").src ="img/"+images[index];
  index++;
} , 900);
 var img = ["k.png","k2.png","k3.png","k4.png","k5.png"];

var i = 0;
setInterval (function(){
  if (i === img.length) {
    i = 0;
  }
  document.getElementById("r3").src ="img/"+img[i];
  i++;
} , 800);
 var imgs = ["r.png","r2.jpg","r3.jpg"];

var j = 0;
setInterval (function(){
  if (j === imgs.length) {
    j = 0;
  }
  document.getElementById("r2").src ="img/"+imgs[j];
  j++;
} , 900);
                
           