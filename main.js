"use strict"
const STUDENTS = [{
   name: "Tanya",
   course: 3,
   subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
   }
}, {
   name: "Victor",
   course: 4,
   subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
   }
}, {
   name: "Anton",
   course: 2,
   subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
   }
}];

//1
const getSubject = (student) => {
   let res = [];
   let keys = Object.keys(student.subjects);
   for (const val of keys) {
      res.push((val[0].toUpperCase() + val.substring(1)).replace("_", " "))
   }
   return res;
}
//2
const getAverageMark = (student) => {
   let sum = 0;
   let length = 0;
   let marks = Object.values(student.subjects);
   for (let i = 0; i < marks.length; i++) {
      sum += marks[i].reduce((sum, b) => sum + b, 0)
      length += marks[i].length
   }
   return +(sum / length).toFixed(2);
}

//3

const getStudentInfo = (student) => {
   return {
      name: student.name,
      course: student.course,
      avarageMark: getAverageMark(student),
   }
}
//4
const getStudentsNames = (student) => {
   let res = [];
   for (let i = 0; i < student.length; i++) {
      res.push(student[i].name)
   }
   return res.sort();
}
//5
const getBestStudent = (student) => {
   let score = 0;
   let studName = 0;
   for (let i = 0; i < student.length; i++) {
      if (getAverageMark(student[i]) > score) {
         score = getAverageMark(student[i]);
         studName = i;
      }
   }
   return student[studName].name;
}
//6
const calculateWordLetters = (str) => {
   const obj = {}
   return str.split("").reduce((r, c) => (r[c] = (r[c] || 0) + 1, r), obj);
}

console.log(getSubject(STUDENTS[0]))
console.log(getAverageMark(STUDENTS[0]))
console.log(getStudentInfo(STUDENTS[0]))
console.log(getStudentsNames(STUDENTS))
console.log(getBestStudent(STUDENTS))
console.log(calculateWordLetters("test"))