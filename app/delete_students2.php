<?php
// Incluir el archivo de conexión
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include("connection.php");

// Verificar la solicitud POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener el ID del estudiante a eliminar desde el cuerpo JSON
    $data = json_decode(file_get_contents("php://input"), true);
    $studentId = $data["id"];

    // Consulta para eliminar el estudiante
    $query = "DELETE FROM estudiantes WHERE id = ?";

    // Preparar la consulta
    $stmt = $conn->prepare($query);

    // Vincular parámetros
    $stmt->bind_param("i", $studentId);

    // Ejecutar la consulta
    if ($stmt->execute()) {
        echo json_encode(array("success" => true));
    } else {
        echo json_encode(array("success" => false));
    }

    // Cerrar la consulta y la conexión
    $stmt->close();
    $conn->close();
}
?>