//Задача №1

function parseCount(x) {
    const parsed = parseInt(x);
    if (isNaN(parsed)) throw new Error("Невалидное значение");
    return parsed;
}

function validateCount(x) {
    try {
        const parsed = parseCount(x);
        return parsed;
    }
    catch(e) {
        return e;
    }
}

//Задача №2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (a + b < c || a + c < b || b + c < a) throw new Error("Треугольник с такими сторонами не существует");
    }
    
    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(S.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try 
        { return new Triangle(a, b, c) 
        }
    catch (e) {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует" ,
            getArea: () => "Ошибка! Треугольник не существует"
        }
    }
}