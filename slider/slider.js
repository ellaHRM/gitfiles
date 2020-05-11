function Slider() {
    this.currentImageIndex = 0;
    this.clickPrevBtn = null;
    this.clickNextBtn = null;
    this.imgSlide = null;
    this.imagesUrls = null;

};

//прототипы - расшаривание функции конструктора - нужно для экономии памяти браузера, чтобы каждый создаваемый новый объект не держал в памяти каждый раз весь набор функций. Это уже про оптимизацию. К прототипу мы цепляем только методы

Slider.prototype.init = function(elId, images) {
    var the = this;
    var el = document.querySelector('#' + elId);

    this.clickPrevBtn = el.querySelector('.prevClick');
    this.clickNextBtn = el.querySelector('.nextClick');
    this.imgSlide = el.querySelector('.img-slide');
    this.imagesUrls = images;


    // subscribe to events
    this.clickPrevBtn.addEventListener('click', function (e) {
        the.onClickPrev(e)
    });
    this.clickNextBtn.addEventListener('click', function (e) {
        the.onClickNext(e);
    });
    this.imgSlide.src = this.imagesUrls[this.currentImageIndex];
    this.clickPrevBtn.disabled = true;
};

Slider.prototype.onClickPrev = function (e) {
    this.clickNextBtn.disabled = false;
    this.currentImageIndex--;
    this.imgSlide.src = this.imagesUrls[this.currentImageIndex];
    if (this.currentImageIndex === 0) {
        this.clickPrevBtn.disabled = true;
    }
};

Slider.prototype.onClickNext = function (e) {
    this.clickPrevBtn.disabled = false;
    this.currentImageIndex++;
    this.imgSlide.src = this.imagesUrls[this.currentImageIndex];
    if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
        this.clickNextBtn.disabled = true;
    }
};


