function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student("Igor", "male", 26);
const student2 = new Student("Oleg", "male", 25);
const student3 = new Student("Anna", "female", 24);

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if (this.marks === undefined) {
    this.marks = [];
  }
  this.marks.push(mark);
}

Student.prototype.addMarks = function(... marksList) {
  if (this.marks === undefined) {
    this.marks = [];
  }
  marksList.forEach((mark) => this.addMark(mark));
}

Student.prototype.getAverage = function() {
  if (this.marks === undefined) {
    return "Нет оценок";
  } else {
    let sum = 0;
    for (const mark of this.marks) {
      sum += mark;
    }
    return sum / this.marks.length;
  }
}

Student.prototype.excludeStudent = function(reason) {
  if (this.marks !== undefined) {
    delete this.marks;
  }
  
  if (this.subject !== undefined) {
    delete this.subject;
  }

  this.excluded = reason;
}
