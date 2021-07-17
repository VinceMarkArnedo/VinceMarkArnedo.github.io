//Responsive Navbar
// const toggleButton = document.getElementsByClassName('toggle-button')[0];
// const navbarLinks = document.getElementsByClassName('navbar-links')[0];

// toggleButton.addEventListener('click', () => {
//         navbarLinks.classList.toggle('active')
// });
//Responsive Navbar

//NAVBAR2
// const toggleButton = document.getElementsByClassName('toggle-button')[0];
// const navbarLinks = document.getElementsByClassName('navbar-links2')[0];

// toggleButton.addEventListener('click', () => {
//         navbarLinks.style.display ="flex";
// });


const navbarLinks = document.getElementsByClassName('navbar-links2')[0];
function toggleNB2() {
   // const navbarLinks = document.getElementsByClassName('navbar-links2')[0];
      // if (navbarLinks.style.display === "none") {
      //    navbarLinks.style.display = "flex";
      // } else{
      //    navbarLinks.style.display = "none";
      // }

      
      if (navbarLinks.style.display === "flex") {
         navbarLinks.style.display = "none";
      } else {
         navbarLinks.style.display = "flex";
      }


}


function closeNB2(){
   const navbarLinks = document.getElementsByClassName('navbar-links2')[0];
   navbarLinks.style.display = "none";

}


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

