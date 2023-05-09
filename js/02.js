// # Задача 2

// Необхідно створити функцію, яка приймає масив чисел та callback-функцію. Функція
// повинна викликати callback-функцію з масивом, який містить тільки ті числа, які
// є парними.


function filterNumbers(arr, callback){
    let evenNumbers=[];
    arr.forEach(element => {
        if(element%2===0){
            evenNumbers.push(element);
        }
    });
    callback(evenNumbers);
}

function callbackFunction(arrEven){
 console.log(`Масив парних чисел: ${arrEven}`);
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filterNumbers(arr, callbackFunction);