let students=[];

//constructor
function Student(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11){
    this.name=p1;
    this.age=p2;
    this.genero=p3;
    this.email=p4;
    this.facultad=p5;    
    this.password=p6;
    this.materia1=p7;
    this.materia2=p8;
    this.materia3=p9;
    this.nota=p10;
    this.promedio=p11;
    
}

//Validacion
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

    if(unAlumno.nota==""){
        validacion = false;
    }

    if(unAlumno.promedio==""){
        validacion = false;
    }

     return validacion;
}
//limpliar campos

function limpiar_campos(){
    let inputNombre = document.getElementById("txtNombre").value='';
    let inputEdad = document.getElementById("txtEdad").value='';
    let inputgenero = document.getElementById("txtgenero").value=''; 
    let inputemail = document.getElementById("txtemail").value='';
    let inputfacultad = document.getElementById("txtfacultad").value='';    
    let inputpassword = document.getElementById("txtpassword").value='';
    let inputmateria1 = document.getElementById("txtmateria1").value='';
    let inputmateria2 = document.getElementById("txtmateria2").value='';
    let inputmateria3 = document.getElementById("txtmateria3").value='';
    let inputnota = document.getElementById("txtnota").value='';
    let inputpromedio =document.getElementById("txtpromedio").value='';
    
}

    
function promediar(){
    let inputNombre = document.getElementById("txtNombre").value;
    let inputEdad = document.getElementById("txtEdad").value;
    let inputgenero = document.getElementById("txtgenero").value;
    let inputemail = document.getElementById("txtemail").value;
    let inputfacultad = document.getElementById("txtfacultad").value;
    let inputpassword = document.getElementById("txtpassword").value;
    let inputmateria1 = document.getElementById("txtmateria1").value;
    let inputmateria2 = document.getElementById("txtmateria2").value;
    let inputmateria3 = document.getElementById("txtmateria3").value;
    let inputnota = document.getElementById("txtnota").value;
    
    let nuevoAlumno = new Student(inputNombre, inputEdad, inputgenero, inputemail, inputfacultad, inputpassword, inputmateria1, inputmateria2, inputmateria3, inputnota );
       
        if(isValid(nuevoAlumno)== true){
       var num1 = document.getElementById("txtmateria1").value;
       var num2 = document.getElementById("txtmateria2").value;
       var num3 = document.getElementById("txtmateria3").value;
       var promedio = ((parseInt(num1) + parseInt(num2) + parseInt(num3))/3);
       document.getElementById('txtpromedio').value = promedio.toFixed(2);

       }else{
        alert("Favor de revisar, una materia o algun campo estan vacios");

       }
}   
//registrar
function registrar(){
    let inputNombre = document.getElementById("txtNombre").value;
    let inputEdad = document.getElementById("txtEdad").value;
    let inputgenero = document.getElementById("txtgenero").value;
    let inputemail = document.getElementById("txtemail").value;
    let inputfacultad = document.getElementById("txtfacultad").value;
    let inputpassword = document.getElementById("txtpassword").value;
    let inputmateria1 = document.getElementById("txtmateria1").value;
    let inputmateria2 = document.getElementById("txtmateria2").value;
    let inputmateria3 = document.getElementById("txtmateria3").value;
    let inputnota = document.getElementById("txtnota").value;
    let inputpromedio = document.getElementById("txtpromedio").value;

    let nuevoAlumno = new Student(inputNombre, inputEdad, inputgenero, inputemail, inputfacultad, inputpassword, inputmateria1, inputmateria2, inputmateria3, inputnota, inputpromedio);
    if(isValid(nuevoAlumno) == true){ 

    insertToDataBase(nuevoAlumno);
    
    alert("Informacion Capturada");
    limpiar_campos();
    

    }else{
        alert("Por favor completa los campos");
    }
}

 // Inserta los datos a la base de datos
function insertToDataBase(newStudent){
    $.ajax({
        url:"./app/register.php",
        method:"POST",
        data:{
            name:newStudent.name,
            age:newStudent.age,
            genero:newStudent.genero,
            email:newStudent.email,
            facultad:newStudent.facultad,
            password:newStudent.password,
            materia1:newStudent.materia1,
            materia2:newStudent.materia2,
            materia3:newStudent.materia3,
            nota:newStudent.nota,
            promedio:newStudent.promedio
        },
        dataType:"json",
        success:function(response){
            if(response.sucess){
                console.log(response);
                setTimeout(function(){
                    location.reload();
                },1000);
            }else{
                console.log("Error, por favor intente de nuevo");
            }
        },
        error:function(xhr,status,error){
            console.log("Error de conexion");
            console.error(error);
        }
    });
}

