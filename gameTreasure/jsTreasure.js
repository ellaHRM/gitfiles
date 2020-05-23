var Treasure = {
    weightMap: document.querySelector('#Map img').offsetWidth,//ширина карты,
    heightMap: document.querySelector('#Map img').offsetHeight,//высота карты
    elMessage: document.querySelector('#Prompt'),
    elMap: document.querySelector('#Map'),
    iClick: 0,
    x: 0,
    y: 0,
    numbers: 0,

    getferstNumber: function (a, b) {

        let numbers = [a, b];
        numbers.sort((a, b) => b - a );
        return numbers;
    },

    getInfo: function(dist){
        
        let message = '';
        if(dist<20){
            message = 'Ура! Ты нашел клад!!!';
            this.elMap.innerHTML += '<p class="point" style="left:' + (this.x - 10) + 'px; top:' + (this.y - 10) + 'px;  display: block;"></p>';
        } else if(dist<50){
            message = 'Горячо!!!';
        } else if(dist<120){
            message = 'Тепло!';
        } else if(dist<200){
            message = 'Прохладно!';
        } else if(dist<350){
            message = 'Холодно!';
        } else if(dist =>350){
            message = 'Очень холодно!';
        }
        return message; 
        
    },

    getDistance: function (e, the) {
        let numbersX = the.getferstNumber(e.offsetX, the.x);
        let numbersY = the.getferstNumber(e.offsetY, the.y);
        let diffX = numbersX[0] - numbersX[1];
        let diffY = numbersY[0] - numbersY[1];
        let hypotenuse = Math.floor(Math.sqrt((diffX * diffX) + (diffY * diffY)));
        return hypotenuse;
    },

    getPoint: function (size) {
        let point = Math.floor(Math.random() * size);
        return point;
    },

    getClikPoint: function () {
        let the = this;
        this.elMap.addEventListener('click', function (e) {
            the.iClick++;
            the.elMessage.innerHTML = the.getInfo(the.getDistance(e, the)) +' Ты сделал кликов: '+the.iClick;
        });

    },

    init: function () {
        this.x = this.getPoint(this.weightMap);
        this.y = this.getPoint(this.heightMap);
        this.getClikPoint();
    },
}

