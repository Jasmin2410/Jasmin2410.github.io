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
// -----------------------------------------------------------------------------------------------------

// document.getElementById('resume-link-1').addEventListener("click",()=>{
//   window.location.assign("https://drive.google.com/file/d/1UPjs4mElLoNl869vxKXq_YCSisOWX8vk/view?usp=sharing", "_blank");
// })
// document.getElementById('resume-link-2').addEventListener("click",()=>{
//   window.location.assign("https://drive.google.com/file/d/1UPjs4mElLoNl869vxKXq_YCSisOWX8vk/view?usp=sharing", "_blank");
// })

// document.getElementById('resume-link-1').addEventListener("click",()=>{
//   window.location.assign("https://drive.google.com/file/d/192ndBi1PBzRkMeaumqFobqZ1BF-GIhAM/view?usp=share_link", "_blank");
// })
// document.getElementById('resume-link-2').addEventListener("click",()=>{
//   window.location.assign("https://drive.google.com/file/d/192ndBi1PBzRkMeaumqFobqZ1BF-GIhAM/view?usp=share_link", "_blank");
// })
