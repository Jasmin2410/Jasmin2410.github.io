function myfunction(){
    document.getElementById("mytopnav").classList.toggle("responsive");
    
}
//navbar sticky
window.onscroll = function() {myFunction()};


var mytopnav = document.getElementById("mytopnav");

var sticky = mytopnav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    mytopnav.classList.add("sticky")
  } else {
    mytopnav.classList.remove("sticky");
  }
}

GitHubCalendar(".calendar", "Jasmin2410");
// or enable responsive functionality
GitHubCalendar(".calendar", "Jasmin2410", { responsive: true });

function resume(){
  window.open("https://drive.google.com/file/d/1UPjs4mElLoNl869vxKXq_YCSisOWX8vk/view?usp=share_link", "_blank");
}

//...