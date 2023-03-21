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

//resume

function resume() {
  window.open(
    "https://drive.google.com/file/d/1UPjs4mElLoNl869vxKXq_YCSisOWX8vk/view?usp=share_link"
  );
}
