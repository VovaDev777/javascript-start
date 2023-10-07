
// Напишіть код, який перевіряє (за допомогою тернарного оператору),
// чи введене користувачем значення є парним числом і виводить
// відповідне повідомлення на екран за допомогою alert.
// Вводити значення користувач буде за допомогою prompt()

// const userInput = prompt("Enter a number: ");
// const number = Number(userInput);

// number % 2 === 0 ? alert("It's even number") : alert("It's odd number");


//Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню
// const max = 50;
// const min = 23;

// for(let i = max; i >= min; i -= 1) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//4. За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
// const max = 50;
// const min = 0;
// let total = 0;
// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) continue; 
//     total += i;
// }
// console.log(total);

// Написати функцію, котра створить новий масив в якому 
// не буде значень, які приводяться до false


// const array = [
//     1,
//     0,
//     54,
//     "doc",
//     null,
//     "jpg",
//     undefined,
//     "",
//     "png",
//     "exe",
//     false,
//     "mp4",
//     NaN,
//     "hbs",
//   ];

//   function stringCreation(array) {

//   let goalArray = [];
//     for (let i = 0; i < array.length; i += 1) {
//         if (!array[i]) {
//             continue;
//         } else {
//             goalArray.push(array[i]);
//         }
//     }
    

//   console.log(goalArray);
//   }
//   stringCreation(array);



// Напиши скрипт, який порівняє два масива і виведе у консоль результат чи усі елементи у них однакові


// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];


// function isArraysSimilar(arr1, arr2) {
//     if (arr1.length != arr2.length) {
//         return false;
//     } 
//     for (let i = 0; i < arr1.length; i += 1) {
//         if (!arr2.includes(arr1[i])) {
//             return false;
//         } 
//     }

//    return true;
// }

// console.log(isArraysSimilar(arr1, arr2));
// console.log(isArraysSimilar(arr3, arr4));
// console.log(isArraysSimilar(arr5, arr6));
// console.log(isArraysSimilar(arr7, arr8));

// function wordsReverser(string){
//     let arr = string.split('').reverse().join('');
//     arr = arr.split(' ');

//     // let newArray = [];
//     // for (let i = arr.length; i > 0; i -= 1) {
//     //     newArray.push(arr[i]);
//     // }
//     return arr.reverse().join(' ');
//   }
//   console.log(wordsReverser('New string, same results.'));







  // Напишіть стрілочну функцію яка буд перевіряти чи всі студенти 
// у нашому масиві старші 18 років.

// const students = [
//     { name: 'Alex', age: 19 },
//     { name: 'Stas', age: 34 },
//     { name: 'Mike', age: 20 },
//     { name: 'Den', age: 22 },
//   ];

//   function checkAge(array) {
//     const result = array.every(el => el.age > 18);
//     return result;
//   }

//   console.log(checkAge(students));


// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//     {
//       name: "Basic HTML+CSS",
//       topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//     },
//     {
//       name: "Intermediate HTML+CSS",
//       topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//     },
//     {
//       name: "Basic JavaScript",
//       topics: [
//         "VSCode",
//         "Type system",
//         "Loops",
//         "Function",
//         "Git",
//         "Conditions",
//         "Classes",
//         "GitHub",
//         "DOM",
//       ],
//     },
//     {
//       name: "Intermediate JavaScript",
//       topics: [
//         "VSCode",
//         "NPM",
//         "Bundlers",
//         "Transpiling",
//         "Git",
//         "Promises",
//         "AJAX",
//         "GitHub",
//       ],
//     },
//   ];


//   const allTopics = courses
//   .flatMap(course => course.topics)
//   .filter((course, index, array) => array.indexOf(course) === index);

//   console.log(allTopics);



// у нас є масив користувачів, кожен з яких має поля id та name. 
//  Давайте знайдемо той де id = 1.

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];

//   function checkId(array) {
//     const result = array.find(user => user.id === 1);
//     return result;
//   }

//   console.log(checkId(users));


// const players = ['messi', 'ronaldo', 'donaruma', 'yarmolenko'];
// const goalPlayer = "ronaldo";

// const result = players.find(searchPlayer);


// console.log(result);

// function searchPlayer (players) {
//     if (player === goalPlayer) {
//         return player;
//     }
// }




// Є об'єкт і функція для підрахунку суми чисел.
// Виведіть у консоль результат виконання функції, якщо a = 3, b = 5.

// var obj = { num: 2 };

// function add(a, b){
//   return this.num + a + b;
// }


// const checkBind = add.bind(obj, 3, 5);
// console.log(add.call(obj, 3, 5));
// console.log(add.apply(obj, [3, 5]));
// console.log(checkBind());



// Є два об'єкти, які описують деякі характеристики телефонів.
// Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// передаючи аргументом країну-виробник телефону.
// "HUAWEI" - "China", "SAMSUNG" - "South Korea".


// const tel = {
//     regNumber: "AE8345FEDAS",
//     brand: "HUAWEI", 
//     showInfo(country) {
//         console.log(`${country} ${this.regNumber} ${this.brand}`);
//     }
// }

// const tel_2 = {
//     regNumber: "AO8518FEGHT",
//     brand: "SAMSUNG", 
    
// }

// tel.showInfo('China');

// const checkTel2 = tel.showInfo.bind(tel_2, "South Korea");
// checkTel2();
// tel.showInfo.call(tel_2, "South Korea");
// tel.showInfo.apply(tel_2, ["South Korea"]);



// 1. Створіть об'єкт car з трьома властивостями
// carBrand: "Audi Q3"
// price: 23000
// метод getData() котрий буде логувати рядок :"Audi Q3 за 23000 $"

// 2. Напишіть функцію makeMessage(callback), котра отримує в якості параметра
// callback-функцію getData() і логує повідомлення "Ви замовили ${callback()}"


// const car = {
//     carBrand: "Audi Q3",
//     price: 23000,
//     getData(){
//         return `${this.carBrand} за ${this.price} $`;
//     }
// }


// function makeMessage(callback) {
//     console.log(`Ви замовили ${callback()}`);
// }

// makeMessage(car.getData.bind(car));



// Створіть клас Car, який має конструктор для зберігання марки та 
// року виробництва автомобіля. Додайте метод, який обчислює вік автомобіля 
// на основі поточного року та року виробництва і виведе в кнсоль рядок `Вік автомобіля: age років`


// class Car {
//     constructor(model, year) {
//         this.model = model;
//         this.year = year;
//     }
//     whatIsAge(currentYear) {
//         const age = currentYear - this.year;
//         console.log(`Вік автомобіля: ${age} років`);
//     }
// }

// const currentYear = new Date().getFullYear();
// console.log(currentYear);

// const car1 = new Car("Audi", 2000);

// car1.whatIsAge(currentYear);




//Напиши клас Client який створює об'єкт
//з ​​властивостями login, email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email


// class Client {
//     #login; 
//     #email

//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }
//     get login() {
//         return this.#login;
//     }
//     get email() {
//         return this.#email;
//     }
//     set login(newLogin) {
//         this.#login = newLogin;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const client1 = new Client("mangomango", "ajax@gmail.com");
// console.log(client1);
// console.log(client1.login);
// console.log(client1.email);

// client1.email = "bitcoin@gmail.com";
// console.log(client1.email)

// console.log(client1)



// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.


// class Phone {
//     static MAX_PRICE = 40000;
//     #price

//     constructor(price) {
//         this.#price = price;
//     }
//     set price(newPrice) {
//         if (newPrice <= Phone.MAX_PRICE) {
//             this.#price = newPrice;
//         }
//     }
//     get price() {
//         return this.#price;
//     }
// }

// const phone1 = new Phone(3500);
// console.log(phone1);
// console.log(phone1.price);
// phone1.price = 50000;
// console.log(phone1.price);




// Написати клас StudentList, котрий має приватну властивість students - масив для зберігання імен студентів.
// Додайте метод addStudent, отримує аргументом ім'я студента, цей метод буде додавати ім'я студента в масив students,  
// в масиві зберігаються тільки унікальні імена. Вивести в консоль рядок `Студента student додано до списку.` 
// або`Студент student вже є в списку.` якщо такий студент вже є.
// Додайте метод removeStudent, отримує аргументом ім'я студента, видаляє студента з масиву students, якщо такий є. 
// Вивести в консоль рядок `Студента stud// Додайте метод getStudents, який виводить масив всіх студентівent видалено зі списку.` або `Студента student не знайдено в списку.`

// Додайте метод clearList, який очищає масив студентв і виводить повідомлення "Список студентів очищено."


// class StudentList {
//     #students;
//     constructor() {
//         this.#students = [];
//     }
//     addStudent(studentName) {
//         if (!this.#students.includes(studentName)) {
//              this.#students.push(studentName);
//             return `Студента ${studentName} додано до списку.`;
//         } else {
//             return `Студент ${studentName} вже є в списку.`;
//         }
//     }
//     removeStudent(studentName) {
//         const index = this.#students.indexOf(studentName);
//         if (index != -1) {
//             this.#students.splice(index, 1);
//             return `Студента ${studentName} видалено зі списку.`;
//         } else {
//             return `Студента ${studentName} не знайдено в списку.`;
//         }
//     }
//     getStudents() {
//         return this.#students;
//     }
//     clearList() {
//         console.log("Список студентів очищено.")
//         this.#students = [];
//     }
// }

// const studentList = new StudentList();

// console.log(studentList.addStudent("Maryna"));
// console.log(studentList.addStudent("Maryna"));
// console.log(studentList.addStudent("Petro"));
// console.log(studentList.addStudent("Vasyl"));

// console.log(studentList.getStudents());

// console.log(studentList.removeStudent("Maryna"));
// console.log(studentList.getStudents());
// studentList.clearList();

// console.log(studentList.getStudents());




// class Storage {
//     constructor(items) {
//       this.items = [];
//     }
//     getItems() {
//       return this.items;
//     }
//     addItem(newItem) {
//       this.items = newItem;
//     }
//     removeItem(itemToRemove) {
//       const index = this.items.indexOf(itemToRemove);
//       if (index != -1){
//         this.items.splice(index, 1);
//       }
      
//     }
//   }
  
  
//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// const friends = ['Mayay', '123', 'dsdf']

// function friend(friends){

//     const filteredArrayOfFriends = friends.filter(friend => {
//        if (Number(friend) !== NaN && friend.length == 4) {
//            return friend;
//        }
//    });
//  return filteredArrayOfFriends;
//  }

//  console.log(friend(friends));

// let test = 'Ryan'

// let te = Number(test)
// console.log(te);

// if (Number(friend) !== NaN && friend.length == 4) {
//     return friend;
// }



