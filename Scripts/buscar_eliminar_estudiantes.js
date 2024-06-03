document.addEventListener('DOMContentLoaded', function() {
    // Función para buscar estudiantes por nombre
    function buscarEstudiante() {
        const nombre = document.getElementById('txtNombre').value;
        fetch('./app/search_students.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: nombre })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                displayStudents(data.data);
                addDeleteListeners(); // Agregar listeners a los botones de borrar
            } else {
                console.error(data.error);
                document.querySelector('#student-table-body').innerHTML = `<tr><td colspan="12">${data.error}</td></tr>`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.querySelector('#student-table-body').innerHTML = '<tr><td colspan="12">Error al buscar los datos.</td></tr>';
        });
    }

    // Función para mostrar los estudiantes en la página
    function displayStudents(students) {
        const tbody = document.querySelector('#student-table-body');
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
                <td><button class="delete-btn" data-id="${student.id}">Borrar</button></td>
            `;
            tbody.appendChild(row);
        });
    }

    // Función para agregar listeners a los botones de borrar
    function addDeleteListeners() {
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function() {
                const studentId = button.getAttribute('data-id');
                deleteStudent(studentId);
            });
        });
    }

    // Función para eliminar un estudiante
    function deleteStudent(studentId) {
        if (confirm("¿Estás seguro de que deseas eliminar este registro?")) {
            fetch('./app/delete_students2.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: studentId }) // Enviar el ID como JSON
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('El registro se eliminó correctamente.');
                    buscarEstudiante(); // Volver a cargar los datos después de eliminar
                } else {
                    alert('Error al eliminar el registro.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al eliminar el registro.');
            });
        }
    }

    // Asignar la función de búsqueda al botón
    document.getElementById('buscar-btn').addEventListener('click', buscarEstudiante);
});