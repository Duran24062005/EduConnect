document.addEventListener('DOMContentLoaded', function() {
    // Sample data (in a real application, this would come from a server)
    const classes = [
        { name: 'Matemáticas 9°A', students: 30, averageGrade: 85 },
        { name: 'Matemáticas 10°B', students: 28, averageGrade: 82 },
        { name: 'Álgebra 11°C', students: 25, averageGrade: 88 }
    ];

    const assignments = [
        { name: 'Ecuaciones Cuadráticas', class: 'Matemáticas 9°A', dueDate: '2023-06-15' },
        { name: 'Proyecto de Estadística', class: 'Matemáticas 10°B', dueDate: '2023-06-20' },
        { name: 'Examen de Álgebra', class: 'Álgebra 11°C', dueDate: '2023-06-25' }
    ];

    const messages = [
        { from: 'Ana García (Estudiante)', subject: 'Duda sobre la tarea', date: '2023-06-10' },
        { from: 'María Pérez (Madre)', subject: 'Solicitud de reunión', date: '2023-06-11' }
    ];

    // Populate classes
    const classList = document.getElementById('classList');
    classes.forEach(class_ => {
        const li = document.createElement('li');
        li.textContent = `${class_.name} - ${class_.students} estudiantes, Promedio: ${class_.averageGrade}%`;
        classList.appendChild(li);
    });

    // Populate assignments
    const assignmentsList = document.getElementById('assignmentsList');
    assignments.forEach(assignment => {
        const li = document.createElement('li');
        li.textContent = `${assignment.name} - ${assignment.class} (Entrega: ${assignment.dueDate})`;
        assignmentsList.appendChild(li);
    });

    // Populate messages
    const messagesList = document.getElementById('messagesList');
    messages.forEach(message => {
        const li = document.createElement('li');
        li.textContent = `${message.from} - ${message.subject} (${message.date})`;
        messagesList.appendChild(li);
    });

    // Create grade distribution chart
    const gradeCtx = document.getElementById('gradeChart').getContext('2d');
    new Chart(gradeCtx, {
        type: 'bar',
        data: {
            labels: ['A', 'B', 'C', 'D', 'F'],
            datasets: [{
                label: 'Distribución de Calificaciones',
                data: [30, 25, 20, 15, 10],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Create attendance chart
    const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
    new Chart(attendanceCtx, {
        type: 'pie',
        data: {
            labels: ['Presente', 'Ausente', 'Tardanza'],
            datasets: [{
                data: [85, 10, 5],
                backgroundColor: ['#4CAF50', '#F44336', '#FFC107']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                }
            }
        }
    });

    // Quick action buttons functionality
    document.getElementById('addAssignmentBtn').addEventListener('click', function() {
        alert('Abriendo formulario para agregar nueva tarea...');
    });

    document.getElementById('composeMessageBtn').addEventListener('click', function() {
        alert('Abriendo formulario para redactar nuevo mensaje...');
    });

    document.getElementById('scheduleBtn').addEventListener('click', function() {
        alert('Redirigiendo a la página de programación de reuniones...');
    });

    document.getElementById('reportBtn').addEventListener('click', function() {
        alert('Abriendo herramienta para generar informes...');
    });

    document.getElementById('resourceBtn').addEventListener('click', function() {
        alert('Abriendo formulario para subir nuevos recursos...');
    });
});