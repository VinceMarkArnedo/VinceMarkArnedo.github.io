//Responsive Navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
});
//Responsive Navbar




//ToggleShow About
function showOrHideDiv() {
        var toggle = document.getElementById("showOrHide");
        var toggleImage  = document.getElementById("toggleImage");
 
 
        if (toggle.style.display === "block") {
         toggle.style.display = "none";
         // toggleImage.style.transform = "rotate(0deg)";
         toggleImage.style.transform = "rotate(0deg)";
        } else {
         toggle.style.display = "block";
         toggleImage.style.transform = "rotate(90deg)";
        }
     }
 
     function showOrHideDiv2() {
        var toggle = document.getElementById("showOrHide2");
        var toggleImage  = document.getElementById("toggleImage2");
 
 
        if (toggle.style.display === "block") {
         toggle.style.display = "none";
         // toggleImage.style.width = "22px";
         toggleImage.style.transform = "rotate(0deg)";
        } else {
         toggle.style.display = "block";
         // toggleImage.style.width = "40px";
         toggleImage.style.transform = "rotate(90deg)";
        }
     }

     function showOrHideDiv3() {
        var toggle = document.getElementById("showOrHide3");
        var toggleImage  = document.getElementById("toggleImage3");
 
 
        if (toggle.style.display === "block") {
         toggle.style.display = "none";
         // toggleImage.style.width = "22px";
         toggleImage.style.transform = "rotate(0deg)";
        } else {
         toggle.style.display = "block";
         // toggleImage.style.width = "40px";
         toggleImage.style.transform = "rotate(90deg)";
        }
     }





     //Sticky Navbar
     window.onscroll = function() {myFunction()};

      var navbar = document.getElementById("navbar");
      var sticky = navbar.offsetTop;

      function myFunction() {
         if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
         } else {
            navbar.classList.remove("sticky");
         }
      }

