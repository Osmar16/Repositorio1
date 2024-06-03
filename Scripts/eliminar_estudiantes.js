document.addEventListener('DOMContentLoaded', function() {
    // Función para obtener y mostrar los estudiantes
    function fetchAndDisplayStudents() {
        fetch('./app/get_students.php')
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
                <td><button onclick="deleteStudent(${student.id})">Eliminar</button></td>
            `;
            tbody.appendChild(row);
        });
    }

    // Función para eliminar un estudiante
    function deleteStudent(id) {
        fetch('./app/delete_student.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
                fetchAndDisplayStudents(); // Refrescar la lista de estudiantes
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error al eliminar el estudiante.');
        });
    }

    // Llamar a la función para obtener y mostrar los datos al cargar la página
    fetchAndDisplayStudents();
});