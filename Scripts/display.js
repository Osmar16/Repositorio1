function displayCards() {
    let card = "";
    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        card += `
      <div class='student'>
          <h4>Nombre:> ${student.name}</h4>
          <p>Edad:> ${student.age}</p>
          <p>Genero:> ${student.genero}</p>
          <p>Correo:> ${student.email}</p>
          <p>Facultad:> ${student.facultad}</p>
          <p>Password:> ${student.password}</p>
          <p>Materia1:> ${student.materia1}</p>
          <p>Materia2:> ${student.materia2}</p>
          <p>Materia3:> ${student.materia3}</p>
          <p>Promedio:> ${student.promedio}</p>
          <button>Eliminar</button>
          </div>
      `;
    }
    document.getElementById("studentList").innerHTML = card;

}

//function displayTable(){

//}

//Funcion para obtener datos de la base de datos
function getDataFromDatabase() {
    return new Promise(function (resolve, reject) {
        // Hacer una solicitud HTTP GET al servidor para obtener los datos
        var xhr = new XMLHttpRequest();
        xhr.open('GET', './app/get_students.php', true);
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                // Convertir la respuesta JSON en un objeto JavaScript
                data = JSON.parse(xhr.responseText);
                // Resolver la promesa con los datos obtenidos
                resolve(data);
            } else {
                // Si la solicitud falla, rechazar la promesa con un mensaje de error
                reject('Error al obtener datos de la base de datos');
            }
        };
        xhr.onerror = function () {
            // En caso de un error de red, rechazar la promesa con un mensaje de error
            reject('Error de red al obtener datos de la base de datos');
        };
        // Enviar la solicitud HTTP
        xhr.send();
    });
}
