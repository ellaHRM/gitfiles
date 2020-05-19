"use strict";

var salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
var AllZP = {
  sum: 0,
  sumfn: function sumfn(salaries) {
    //сокращеный синтаксис - создание функции в объекте без ключевого слова function
    for (var key in salaries) {
      this.sum += salaries[key];
    }

    return this.sum;
  }
};
var sum = AllZP.sumfn(salaries);
console.log(sum); // var myCrazyObject = {"name": "Нелепыйобъект","some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],"random animal": "Банановаяакула"};
// console.log(myCrazyObject["some array"][2].number);