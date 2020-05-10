"use strict";

var sliderFactory = {
  getSlider: function getSlider() {
    var slider = {
      currentImageIndex: 0,
      clickPrevBtn: null,
      clickNextBtn: null,
      imgSlide: null,
      imagesUrls: null,
      init: function init(elId, images) {
        var the = this;
        var el = document.querySelector('#' + elId);
        this.clickPrevBtn = el.querySelector('.prevClick');
        this.clickNextBtn = el.querySelector('.nextClick');
        this.imgSlide = el.querySelector('.img-slide');
        this.imagesUrls = images; // subscribe to events

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
    return slider;
  }
};