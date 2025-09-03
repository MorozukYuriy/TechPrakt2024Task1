// jsdemo/js/index.js
"use strict";

class User {
    #login;
    #password;

    constructor(login, password) {
        this.#login = login;
        this.#password = password;
    }

    getLogin() {
        return this.#login;
    }

    testPassword(password) {
        return this.#password === password;
    }

    display() {
        console.log(this.#login);
    }
}

class Admin extends User {
    #role;

    constructor(login, password, role) {
        super(login, password);
        this.#role = role;
    }
}

const user = new User("admin", "123456");

const panelParams = {
    // width: 300,
    title: "Title",
    height: 200,
    age: 30,
};

// уникаємо конфлікту назв: беремо title як panelTitle
const { title: panelTitle, height } = panelParams;

// коректна кількість елементів та десяткове число 10.5
const [id, rawTitle, count, price] = [1, "title", 10, 10.5];

// своп значень
let x = 1;
let y = 2;
[x, y] = [y, x];

function func2(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

// приклад коректного виклику через spread
const arr2 = [1, 2, 3];
func2(...arr2);

// приклад використання методів
// console.log(user.getLogin());
// const admin = new Admin("admin", "123456", "all");
// console.log(admin.testPassword("123456"));
