// Write your solution in this file!
const employee = {
    name: "Bob",
    streetAddress: "Githurai"
  
}

 const updateEmployeeWithKeyAndValue =  (employee, name, Bob) =>{

    let worker = {...employee}
  
    worker  [name] = Bob

  return worker
}
 const destructivelyUpdateEmployeeWithKeyAndValue = (employee, name, Sam) =>{
employee[name] = Sam
return employee
 }
  const deleteFromEmployeeByKey = (employee, name) =>{
let wafanyakazi ={...employee}
delete wafanyakazi[name]
return wafanyakazi
 }
const  destructivelyDeleteFromEmployeeByKey=(employee, name) =>{
 delete employee[name]

 return employee 
 }
