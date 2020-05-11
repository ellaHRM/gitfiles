"use strict";

var images1 = ['https://static.depositphotos.com/storage/image/419793f67b6178413165f6419e9d60786ef96c95.jpg', 'https://static.depositphotos.com/storage/image/44e659e46ed7aa3758ca03435def4af874bcfced.jpg', 'https://static.depositphotos.com/storage/image/61a9b826aa1b96fbc0a23439d50b826dbcd74339.jpg', 'https://static.depositphotos.com/storage/image/c90c6bbe5c48db0879ec8c5397b77f254736fc47.jpg'];
var images2 = ['https://static.depositphotos.com/storage/image/5fa95797d0438bbecf4c0f581c5ec5676a304c9e.jpg', 'https://static.depositphotos.com/storage/image/5946f7157f087c5ee01f0b59fe9ca057579ee69f.jpg', 'https://static.depositphotos.com/storage/image/61a9b826aa1b96fbc0a23439d50b826dbcd74339.jpg', 'https://static.depositphotos.com/storage/image/c90c6bbe5c48db0879ec8c5397b77f254736fc47.jpg'];
var slider1 = new Slider();
var slider2 = new Slider();
slider1.init('slider1', images1);
slider2.init('slider2', images2); //console.log(Object.keys(slider));
// var myCrazyObject = {"name": "Нелепыйобъект","some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],"random animal": "Банановаяакула"};
// console.log(myCrazyObject["some array"][2].number);