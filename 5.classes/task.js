//задача №1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.stateValue = 100;
        this.type = null;
    } 

    set state(state) {
        if (state < 0) {
            this.stateValue = 0;
        } else {
            if(state > 100) {
                this.stateValue = 100;
            } else {
                this.stateValue = state;
            }
          }
        }
    
    get state() {
        return this.stateValue;
    }

    fix() {
        let fixedState = this.stateValue * 1.5;
        if (fixedState > 100) {
            fixedState = 100;
        }
        this.stateValue = fixedState;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задание №2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
          this.books.push(book);  
        }
    }

    findBookBy(type, value) {
        const targetBook = this.books.find(book => book[type] === value);
        if (targetBook !== undefined) {
            return targetBook;
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {
        for (const lookForBook in this.books) {
            if (this.books[lookForBook].name === bookName) {
                const foundABook = this.books[lookForBook];
                this.books.splice(lookForBook, 1);
                return foundABook;
            }
        }
        return null;
    }
}

// Задача №3

class StudentLog {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }

    getName() {
        return this.name;
    }

    addGrade(subjectName, mark) {
        if(mark >= 1 && mark <=5) {
            if(!(subjectName in this.marks)) {
                this.marks[subjectName] = [];
            }
            this.marks[subjectName].push(mark);
        } else {
            console.log("Ошибка, оценка должна быть числом от 1 до 5");
        }
    }

    getAverageBySubject(subjectName) {
        if(subjectName in this.marks) {
            let sum = 0;
            for (let mark of this.marks[subjectName]){
                sum += mark;
            }
            let avg = Number((sum / this.marks[subjectName].length).toFixed(2));
            console.log(`Средний балл по предмету ${subjectName} ${avg}`);
            return avg;
        } else {
            console.log("Несуществующий предмет");
        }
    }

    getTotalAverage() {
        let sum = 0;
        let count = 0;
        for (let subjectName in this.marks) {
            sum += this.getAverageBySubject(subjectName)
            count ++;
        }
        if (count > 0) {
            let avg = Number((sum / count).toFixed(2));
            console.log(`Средний балл по всем предметам ${avg}`);
            return avg;
        } else {
            console.log("Не найдено ни одной оценки")
        }
    }

    exclude(reason) {
        if (this.getAverage !== null) {
            delete this.marks;
        }
        console.log(`${reason}`);
    }
}