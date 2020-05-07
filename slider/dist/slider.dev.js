"use strict";

var slider = {
  currentImageIndex: 0,
  clickPrevBtn: document.getElementById('prevClick'),
  clickNextBtn: document.getElementById('nextClick'),
  imgSlide: document.getElementById('img-slide'),
  imagesUrls: ['https://static.depositphotos.com/storage/image/419793f67b6178413165f6419e9d60786ef96c95.jpg', 'https://static.depositphotos.com/storage/image/44e659e46ed7aa3758ca03435def4af874bcfced.jpg', 'https://static.depositphotos.com/storage/image/61a9b826aa1b96fbc0a23439d50b826dbcd74339.jpg', 'https://static.depositphotos.com/storage/image/c90c6bbe5c48db0879ec8c5397b77f254736fc47.jpg'],
  init: function init() {
    var the = this; // subscribe to events

    this.clickPrevBtn.addEventListener('click', function (e) {
      the.onClickPrev(e);
    });
    this.clickNextBtn.addEventListener('click', function (e) {
      the.onClickNext(e);
    });
    this.imgSlide.src = this.imagesUrls[this.currentImageIndex];
    this.clickPrevBtn.disabled = true;
  },
  onClickPrev: function onClickPrev(e) {
    this.clickNextBtn.disabled = false;
    this.currentImageIndex--;
    this.imgSlide.src = this.imagesUrls[this.currentImageIndex];

    if (this.currentImageIndex === 0) {
      this.clickPrevBtn.disabled = true;
    }
  },
  onClickNext: function onClickNext(e) {
    this.clickPrevBtn.disabled = false;
    this.currentImageIndex++;
    this.imgSlide.src = this.imagesUrls[this.currentImageIndex];

    if (this.currentImageIndex === this.imagesUrls.length - 1) {
      this.clickNextBtn.disabled = true;
    }
  }
};