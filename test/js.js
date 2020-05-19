let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const AllZP = {
    sum: 0,
    sumfn (salaries) { //сокращеный синтаксис - создание функции в объекте без ключевого слова function
        for (let key in salaries) {
            this.sum += salaries[key];
        }
        return this.sum;
    }
}
let sum = AllZP.sumfn(salaries);
console.log(sum);
// var myCrazyObject = {"name": "Нелепыйобъект","some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],"random animal": "Банановаяакула"};
// console.log(myCrazyObject["some array"][2].number);