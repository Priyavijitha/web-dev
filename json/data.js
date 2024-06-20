const names = '["Eichavathi","Nandhini","Priya Vijitha"]';
const person = '{"name" : "Eichavathi","age"  :  19,"department" : "BCA","location" : "Thanjavur", "courses" : ["c","c++","java"]}'
const people = '[ {"name" : "Eichavathi","age"  :  19,"department" : "BCA", "location" : "Thanjavur", "courses" : ["c","c++","java"]}, { "name" : "Nandhini", "age"  :  19,"department" : "BCA","location" : "Kumbakonam","courses" : ["python","c++","java"] },  { "name" : "Priya Vijitha","age"  :  19, "department" : "BCA", "location" : "Kumbakonam", "courses" : ["reactjs","c++","python"] } ]';
const jsonstring = JSON.parse (people);
console.log(jsonstring[1]);
fetch("data3.json")
  .then(response => response.json())
  .then(values => values.forEach(value => console.log(value)));