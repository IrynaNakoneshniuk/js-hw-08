// # Задача 3

// Необхідно створити функцію, яка приймає масив строк та callback-функцію. Функція
// повинна викликати callback-функцію з масивом, який містить тільки ті строки, які
// містять вказаний символ.

function filterStrings(arr,char,callback){
    let strArray=[];
    arr.forEach(element => {
        if(element.includes(char)){
            strArray.push(element);
        }
    });
    
    callback(strArray);
}

function callbackFunction(arrStr){
    console.log(`Відфільтровані рядки: ${arrStr}`);
}

const arr4 = ['hello', 'world', 'javascript', 'callback'];
const char = 'a';
filterStrings(arr4, char, callbackFunction);

