let students=[];

//constructor
function Student(p1,p2,p3,p4,p5,p6,p7,p8,p9){
    this.name=p1;
    this.age=p2;
    this.genero=p3;
    this.email=p4;
    this.facultad=p5;    
    this.password=p6;
    this.materia1=p7;
    this.materia2=p8;
    this.materia3=p9;
    
}

//validacion
function isValid(unAlumno){
    let validacion = true;

if(unAlumno.name==""){
     validacion = false;
}
if(unAlumno.age==""){
    validacion = false;
}

if(unAlumno.genero==""){
    validacion = false;    
}

if(unAlumno.email==""){
    validacion = false;    
}

if(unAlumno.facultad==""){
    validacion = false;    
}

if(unAlumno.password==""){
    validacion = false;    
}

if(unAlumno.materia1==""){
    validacion = false;    
}

if(unAlumno.materia2==""){
    validacion = false;    
}

if(unAlumno.materia3==""){
    validacion = false;    
}


    return validacion;
}

//limpliar campos
function limpiar_campos(){
    let inputNombre = document.getElementById("txtNombre").value ='';
    let inputEdad = document.getElementById("txtEdad").value ='';
    let inputgenero= document.getElementById("txtgenero").value =''; 
    let inputemail= document.getElementById("txtemail").value ='';
    let inputfacultad= document.getElementById("txtfacultad").value ='';    
    let inputpassword= document.getElementById("txtpassword").value ='';
    let inputmateria1= document.getElementById("txtmateria1").value ='';
    let inputmateria2= document.getElementById("txtmateria2").value ='';
    let inputmateria3= document.getElementById("txtmateria3").value ='';
}

//registrar
function registrar(){
    let inputNombre = document.getElementById("txtNombre").value;
    let inputEdad = document.getElementById("txtEdad").value;
    let inputgenero= document.getElementById("txtgenero").value; 
    let inputemail= document.getElementById("txtemail").value;
    let inputfacultad= document.getElementById("txtfacultad").value;    
    let inputpassword= document.getElementById("txtpassword").value;
    let inputmateria1= document.getElementById("txtmateria1").value;
    let inputmateria2= document.getElementById("txtmateria2").value;
    let inputmateria3= document.getElementById("txtmateria3").value;

    let nuevoAlumno = new Student(inputNombre, inputEdad, inputgenero, inputemail, inputfacultad, inputpassword, inputmateria1, inputmateria2, inputmateria3);
    if(isValid(nuevoAlumno)==true){
    students.push(nuevoAlumno);
    console.log(students);
    alert("Informacion Capturada");
    limpiar_campos();
    
    }else{
        alert("Por favor completa los campos");
    }
    
}

function init(){
    let student1 = new Student("Samuel",99);
    console.log(student1);
}

window.onload=init;//espera a renderizar el HTML