let student1 = new StudentLog("Tony", "male", 37);
//student1.setSubject("Algebra");
student1.addGrade("Algebra", 5);
student1.addGrade("Algebra", 4);
student1.addGrade("Algebra", 5);
studend1.getAverageBySubject("Algebra");
studend1.getTotalAverage();

let student2 = new StudentLog("Buzz", "female", 35);
//student2.setSubject("Geometry");
student2.addGrade("Geometry", 2);
student2.addGrade("Geometry", 3);
student2.addGrade("Geometry", 2);
student2.exclude('low grades')
student2.getAverageBySubject("Geometry");
student2.getTotalAverage();

console.log(student1); 
console.log(student2);
