// # Задача 1

// Необхідно створити функцію, яка приймає масив строк та callback-функцію. Функція
// повинна викликати callback-функцію з масивом, який містить тільки ті строки, які
// містять певне слово.

function filterStringsByKeyword(stringArray, keyword, callback) {
    const tmpArray = [];
    stringArray.forEach((str) => {
      if (str.includes(keyword)) {
        tmpArray.push(str);
      }
    });
    callback(tmpArray);
  }

  function logFilteredStrings(filteredArray) {
    console.log(`Filtered strings: ${filteredArray}`);
  }

  const arr = ['Hello World', 'Goodbye', 'JavaScript', 'World of Warcraft']
  filterStringsByKeyword(arr, 'World', logFilteredStrings);