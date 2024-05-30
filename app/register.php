<?php
// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");
// Permitir métodos HTTP GET, POST, y OPTIONS
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// Permitir los encabezados Content-Type y Authorization en las solicitudes CORS
header('Content-Type: application/json');
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST"){

   if(isset($_POST["name"],$_POST["age"],$_POST["genero"],$_POST["email"],$_POST["facultad"],$_POST["password"],$_POST["materia1"],$_POST["materia2"],$_POST["materia3"],$_POST["nota"],$_POST["promedio"])){
       $nombre = $_POST["name"];
       $edad = $_POST["age"];
       $genero = $_POST["genero"];
       $email = $_POST["email"];
       $facultad = $_POST["facultad"];
       $password = $_POST["password"];
       $materia1 = $_POST["materia1"];
       $materia2 = $_POST["materia2"];
       $materia3 = $_POST["materia3"];
       $nota = $_POST["nota"];
       $promedio = $_POST["promedio"];

       $stmt_insert_usuarios =$conn->prepare("INSERT INTO estudiantes (name,age,genero,email,facultad,password,materia1,materia2,materia3,nota,promedio) VALUES (?,?,?,?,?,?,?,?,?,?,?)");       
       $stmt_insert_usuarios->bind_param("sissssiiiss",$nombre,$edad,$genero,$email,$facultad,$password,$materia1,$materia2,$materia3,$nota,$promedio);
       $stmt_insert_usuarios->execute();
    
       echo json_encode(array("success" =>true));
       $stmt_insert_usuarios->close();
    }

    $conn->close();
    exit();
}
?>