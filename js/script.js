

var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});

 
        function adopt() {
            let pets=[
            '<img src="images/dogo1.jpeg">',
            '<img src="images/dogo2.jpeg">',
            '<img src="images/dogo3.jpg">',
            '<img src="images/dogo4.jpeg">',
            '<img src="images/dogo5.jpeg">',
            '<img src="images/dogo6.jpeg">',
            '<img src="images/dogo7.jpeg">',
            '<img src="images/8.jpg">'];
            let indexno=Math.floor((Math.random() * 8));
            document.getElementById("adopt_image").innerHTML = pets[indexno];
        }
    
        

(".adopt_button").click(function(){
  ("#writehere").css("display", "block");
});

(document).ready(function() {
  ("#adopt_right").css("height", $("#adopt_left").height());
});