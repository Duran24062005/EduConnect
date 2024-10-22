document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        alert("This buttom burger is not defined");
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    // Sample chart
    const ctx = document.getElementById('rendimientoChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        //  bar, radar, pie, doughnut,
        data: {
            labels: ['Matemáticas', 'programacio', 'Socialies', 'Naturales', 'Historia', 'Arte'],
            datasets: [{
                label: 'Promedio por Materia',
                // data: [7.5, 8.2, 7.8, 8.5, 9.0],
                data: [75, 82, 30, 85, 30, 57],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(153, 102, 245, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(153, 102, 245, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            Responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    // max: 10,
                    max: 100
                }
            }
        }
    });
});

