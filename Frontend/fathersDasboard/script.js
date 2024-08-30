document.addEventListener('DOMContentLoaded', function() {
    // Sample data (in a real application, this would come from a server)
    const grades = [
        { subject: 'Matemáticas', grade: 85, date: '2023-06-01' },
        { subject: 'Literatura', grade: 92, date: '2023-06-03' },
        { subject: 'Ciencias', grade: 88, date: '2023-06-05' }
    ];

    const events = [
        { name: 'Reunión de Padres', date: '2023-06-15' },
        { name: 'Feria de Ciencias', date: '2023-06-20' },
        { name: 'Fin del Semestre', date: '2023-06-30' }
    ];

    const messages = [
        { teacher: 'Prof. Martínez', subject: 'Matemáticas', message: 'Ana ha mejorado significativamente este mes.' },
        { teacher: 'Prof. Rodríguez', subject: 'Literatura', message: 'Por favor, recuerde que el ensayo se entrega la próxima semana.' }
    ];

    // Populate grades
    const gradesList = document.getElementById('gradesList');
    grades.forEach(grade => {
        const li = document.createElement('li');
        li.textContent = `${grade.subject}: ${grade.grade}% (${grade.date})`;
        gradesList.appendChild(li);
    });

    // Populate events
    const eventsList = document.getElementById('eventsList');
    events.forEach(event => {
        const li = document.createElement('li');
        li.textContent = `${event.name} - ${event.date}`;
        eventsList.appendChild(li);
    });

    // Populate messages
    const messagesList = document.getElementById('messagesList');
    messages.forEach(message => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${message.teacher} (${message.subject}):</strong> ${message.message}`;
        messagesList.appendChild(li);
    });

    // Create attendance chart
    const ctx = document.getElementById('attendanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Presente', 'Ausente', 'Tardanza'],
            datasets: [{
                data: [90, 5, 5],
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
    document.getElementById('scheduleBtn').addEventListener('click', function() {
        alert('Redirigiendo a la página de programación de reuniones...');
    });

    document.getElementById('absenceBtn').addEventListener('click', function() {
        alert('Abriendo formulario para reportar ausencia...');
    });

    document.getElementById('paymentBtn').addEventListener('click', function() {
        alert('Redirigiendo a la página de pagos...');
    });
});