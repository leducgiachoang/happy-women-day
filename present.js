
var to = 'Em';
var gift_url = '';
var gift_image_url = 'avatar.png';


var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }

  document.querySelector(".wrap-present").addEventListener("click", function(e){
    console.log("sdijsid")
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  });

  document.getElementById("open_box_button").addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById("open_box_button").classList.add("hide")
    document.getElementById('card').classList.add('card-show');
  });
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

