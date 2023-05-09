// # Задача 4

// Небхідно створити функцію, яка приймає масив імен та callback-функцію. Функція
// повинна викликати callback-функцію з іменем, яке містить найбільшу кількість
// літер.

function getLongestName(arrNames,callback) {
let maxWord=arrNames[0];
arrNames.forEach(element => {
    if(element.length>maxWord.length){
        maxWord=element;
    }
});
callback(maxWord);
}

function callbackFunction(name){
console.log(`Найдовше ім'я - ${name}`);
}

const names = ['Андрій', 'Олександр', 'Максим', 'Юлія', 'Наталія'];
getLongestName(names, callbackFunction);
