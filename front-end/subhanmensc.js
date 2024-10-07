


let index = 0;
function displayimages () {
  let images = document.getElementsByClassName('slides');
  for(let i = 0; i< images.length;i++){
    images[i].style.display = "none";
  }
  index++
  if(index > images.length){
    index = 1;
  }
  images[index -1].style.display = "block";
  setTimeout(displayimages,2000);
}
displayimages();

let menulist = document.getElementById('menulist');
menulist.style.maxHeight == "0px";

function responsivenavbar (){
  if(menulist.style.maxHeight == "0px") {
    menulist.style.maxHeight = "300px";
  }else {
    menulist.style.maxHeight = "0px";
  }

}