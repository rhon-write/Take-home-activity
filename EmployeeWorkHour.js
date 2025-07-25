const employees = [
  { name: "King", hours: [8, 8, 8, 8, 8] },     
  { name: "Kong", hours: [8, 8, 4, 0, 8] },      
  { name: "Tope", hours: [10, 10, 10, 5, 6] }  
];

function calculateWorkHours(employees) {
  for (let emp of employees) {
    const total = emp.hours.reduce((sum, h) => sum + h, 0);
    const status = total < 40 ? "Underworked" : "OK";
    console.log(`${emp.name}: ${total} hours - ${status}`);
  }
}

calculateWorkHours(employees);
