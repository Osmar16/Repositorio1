//variables
var studentName="Osmar";
let age=99;
const isStudent=false;

console.log(studentName);
console.log(age);
console.log(isStudent);

//arreglos
let students=["Osmar","Roberto","Fabiola","Sergio","Rafael"];
console.log(students);


students.push("Fernanda","Adrian"); // agrega item al arreglo
students[2]="Fabi";

students.pop();// quita items del arreglo
students.splice(1,1); // quita item especifico
console.log(students);

//object literal

let student1 = {
    name:"Osmar",
    age:99,
    isStudent:false
}
let student2 ={
    name:"Robert",
    age:98,
    isStudent:false
}
console.log(student1,student2)

//object constructor

function Student(name,age,isStudent){
    this.name=name;
    this.age=age;
    this.isStudent=isStudent;
}

let student3 = new Student("Fabiola",97,false);
let student4 = new Student("Sergio",96,false);
let student5 = new Student("Fernanda",97,false);
console.log(student3,student4,student5);
//function

function saludar(){
    alert("Welcome ");
}


function sumar(a,b){
    let total= a+b;
    for(let i=0;i<total;i++){
        
    }
    let j=i;
    return total;
}
function calculartaxes(ingresos,egresos){
    let subtotal = ingresos-egresos;
    let total = subtotal*.02;
    document.write(`
         <p class="container"> Tus Taxes son: ${total} <p>
    `);
}
   
calculartaxes(sumar(100,200),sumar(10,8));
calculartaxes(sumar(200,300),sumar(50,30));
