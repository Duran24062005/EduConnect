document.addEventListener('DOMContentLoaded', function() {
    // Sample data (in a real application, this would come from a server)
    const assignments = [
        { name: 'Ensayo de Historia', dueDate: '2023-06-15', subject: 'Historia' },
        { name: 'Proyecto de Ciencias', dueDate: '2023-06-18', subject: 'Ciencias' },
        { name: 'Examen de Matemáticas', dueDate: '2023-06-20', subject: 'Matemáticas' }
    ];

    const grades = [
        { subject: 'Literatura', grade: 95, date: '2023-06-01' },
        { subject: 'Física', grade: 88, date: '2023-06-03' },
        { subject: 'Informática', grade: 92, date: '2023-06-05' }
    ];

    const schedule = [
        { subject: 'Matemáticas', time: '08:00 - 09:30' },
        { subject: 'Historia', time: '10:00 - 11:30' },
        { subject: 'Educación Física', time: '12:00 - 13:30' },
        { subject: 'Ciencias', time: '14:00 - 15:30' }
    ];

    // Populate assignments
    const assignmentsList = document.getElementById('assignmentsList');
    assignments.forEach(assignment => {
        const li = document.createElement('li');
        li.textContent = `${assignment.name} - ${assignment.subject} (Entrega: ${assignment.dueDate})`;
        assignmentsList.appendChild(li);
    });

    // Populate grades
    const gradesList = document.getElementById('gradesList');
    grades.forEach(grade => {
        const li = document.createElement('li');
        li.textContent = `${grade.subject}: ${grade.grade}% (${grade.date})`;
        gradesList.appendChild(li);
    });

    // Populate schedule
    const scheduleList = document.getElementById('scheduleList');
    schedule.forEach(class_ => {
        const li = document.createElement('li');
        li.textContent = `${class_.subject}: ${class_.time}`;
        scheduleList.appendChild(li);
    });

    // Quick links functionality
    document.getElementById('resourcesLink').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirigiendo a Recursos de Aprendizaje...');
    });

    document.getElementById('libraryLink').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirigiendo a Biblioteca Digital...');
    });

    document.getElementById('supportLink').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Redirigiendo a Soporte Técnico...');
    });
});