var Gallows = {
    massWord: ['видеокарта', 'монитор', 'клавиатура', 'процессор', 'кулер', 'мышь', 'модем'],//массив слов 
    alphabet: ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'],//алфавит
    elWord: document.getElementById('wordRandom'),//контейнер для случайного слова
    elLetterBox: document.getElementById('letterInterface'),//контейнер для алфавита
    randon: 0,
    alphabetSpan: '',
    spanLetter: '',
    answerArray: [],
    index: 0,
    elIndex: document.getElementById('index'),

    ansverArr: function (chars, sumbol) {//запихиваем в массив элемент по индексу
        for (i = 0; i < chars.length; i++) {
            if (chars[i] == sumbol) {
                if (this.answerArray[i] != sumbol) {
                    this.answerArray[i] = sumbol;
                    this.index++;
                }

            }
        }
        return this.answerArray;
    },

    newAnsverArr: function (chars) {//создаем массив заполненный подчеркиванием
        for (i = 0; i < chars.length; i++) {
            this.answerArray[i] = "_";
        }
        return this.answerArray;
    },

    indexBalance: function (chars) {
        this.elIndex.innerHTML = 'осталось отгадать букв: ' + (chars.length - this.index);
        if ((chars.length - this.index) === 0) {
            this.elIndex.innerHTML ='Ты угадал слово! Молодец!';
        }
    },

    randWord: function (sumbol) {//получим слово

        let chars = this.randon.split('');
        this.elWord.innerHTML = this.ansverArr(chars, sumbol).join(' ');
        this.indexBalance(chars);

    },

    alphabetBox: function () {//сформируем плашку с буквами
        for (i = 0; i < this.alphabet.length; i++) {
            this.alphabetSpan += '<span  alt=' + this.alphabet[i] + ' class=spanLetter>' + this.alphabet[i] + '</span>';
        }
        return this.alphabetSpan;
    },

    spanEvent: function () {
        let the = this;
        document.querySelector('#letterInterface').addEventListener('click', function (e) {
            the.randWord(e.target.getAttribute('alt'));
        });
    },

    init: function () {

        this.randon = (this.massWord[Math.floor(Math.random() * this.massWord.length)]);
        let chars = this.randon.split('');
        this.elWord.innerHTML = this.newAnsverArr(chars).join(' ');
        this.indexBalance(chars);
        this.elLetterBox.innerHTML = this.alphabetBox();
        this.spanEvent();
    }

}



