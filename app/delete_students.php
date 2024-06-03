<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if(isset($input["id"])) {
        $id = $input["id"];
        
        $stmt = $conn->prepare("DELETE FROM estudiantes WHERE id = ?");
        $stmt->bind_param("i", $id);
        
        if ($stmt->execute()) {
            echo json_encode(array("success" => true, "message" => "Estudiante eliminado correctamente."));
        } else {
            echo json_encode(array("success" => false, "message" => "Error al eliminar estudiante."));
        }
        
        $stmt->close();
    } else {
        echo json_encode(array("success" => false, "message" => "ID de estudiante no proporcionado."));
    }
    
    $conn->close();
} else {
    echo json_encode(array("success" => false, "message" => "Método no permitido."));
}
?>