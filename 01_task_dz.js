const students = [
    { name: 'John', grades: [90, 87, 93, 88] },
    { name: 'Jane', grades: [78, 82, 80, 85] },
    { name: 'Mike', grades: [92, 89, 85, 78] },
    { name: 'Anna', grades: [75, 80, 92, 87] },
  ];
  
  function calculateAverage(grades) {
    const sum = grades.reduce(function(total, grade) {
      return total + grade;
    }, 0);
    return sum / grades.length;
  }
  
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const average = calculateAverage(student.grades);
    console.log(student.name + ': ' + average.toFixed(2));
  }
  