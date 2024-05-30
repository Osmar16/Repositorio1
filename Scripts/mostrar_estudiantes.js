document.addEventListener('DOMContentLoaded', function() {
    // Función para obtener y mostrar los estudiantes
    function fetchAndDisplayStudents() {
        fetch('./app/get_students.php') //Manda llamar a datos
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    displayStudents(data.data);
                } else {
                    console.error(data.error);
                    document.querySelector('#student-container tbody').innerHTML = `<tr><td colspan="11">${data.error}</td></tr>`;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                document.querySelector('#student-container tbody').innerHTML = '<tr><td colspan="11">Error al obtener los datos.</td></tr>';
            });
    }

    // Función para mostrar los estudiantes en la página
    function displayStudents(students) {
        const tbody = document.querySelector('#student-table tbody');
        tbody.innerHTML = ''; // Limpiar el tbody antes de agregar nuevos datos
        
        students.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.genero}</td>
                <td>${student.email}</td>
                <td>${student.facultad}</td>
                <td>${student.materia1}</td>
                <td>${student.materia2}</td>
                <td>${student.materia3}</td>
                <td>${student.nota}</td>
                <td>${student.promedio}</td>
            `;
            tbody.appendChild(row); //agrega elementos a un documento de una pagina
        });
    }

    // Llamar a la función para obtener y mostrar los datos
    fetchAndDisplayStudents();
});

