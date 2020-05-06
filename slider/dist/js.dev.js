"use strict";

// find elements
var clickPrevBtn = document.getElementById('prevClick');
var clickNextBtn = document.getElementById('nextClick');
var imgSlide = document.getElementById('img-slide'); // subscribe to events

clickPrevBtn.addEventListener('click', onClickPrev);
clickNextBtn.addEventListener('click', onClickNext); // create image array

var imagesUrls = ['https://static.depositphotos.com/storage/image/419793f67b6178413165f6419e9d60786ef96c95.jpg', 'https://static.depositphotos.com/storage/image/44e659e46ed7aa3758ca03435def4af874bcfced.jpg', 'https://static.depositphotos.com/storage/image/61a9b826aa1b96fbc0a23439d50b826dbcd74339.jpg', 'https://static.depositphotos.com/storage/image/c90c6bbe5c48db0879ec8c5397b77f254736fc47.jpg'];
var currentImageIndex = 0;
imgSlide.src = imagesUrls[currentImageIndex];
clickPrevBtn.disabled = true; //  functions

function onClickPrev() {
  clickNextBtn.disabled = false;
  currentImageIndex--;
  imgSlide.src = imagesUrls[currentImageIndex];

  if (currentImageIndex === 0) {
    clickPrevBtn.disabled = true;
  }
}

function onClickNext() {
  clickPrevBtn.disabled = false;
  currentImageIndex++;
  imgSlide.src = imagesUrls[currentImageIndex];

  if (currentImageIndex === imagesUrls.length - 1) {
    clickNextBtn.disabled = true;
  }
}