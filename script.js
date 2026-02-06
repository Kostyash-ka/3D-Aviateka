// script.js

document.addEventListener('DOMContentLoaded', () => {
    const points = document.querySelectorAll('.point');
    const panel = document.getElementById('info-panel');
    const panelTitle = document.getElementById('panel-title');
    const panelText = document.getElementById('panel-text');

    // Данные для точек 
    const data = {
        'engine': {
            title: 'Двигатель',
            text: 'Мощная силовая установка, позволяющая развивать сверхзвуковую скорость и совершать сложные маневры.'
        },
        'cockpit': {
            title: 'Кабина пилота',
            text: 'Современная авионика и системы управления огнем. Обеспечивает отличный обзор и контроль ситуации.'
        },
        'weapon': {
            title: 'Вооружение',
            text: 'Разнообразный арсенал: от управляемых ракет "воздух-воздух" до высокоточных бомб.'
        },
        'wing': {
            title: 'Крыло',
            text: 'Аэродинамическая форма обеспечивает высокую подъемную силу и стабильность при любых режимах полета.'
        }
    };

    points.forEach(point => {
        point.addEventListener('mouseenter', () => {
            const key = point.getAttribute('data-key');
            if (data[key]) {
                panelTitle.textContent = data[key].title;
                panelText.textContent = data[key].text;
                panel.classList.add('active');
            }
        });


    });
    document.addEventListener('click', (e) => {
        if (!e.target.classList.contains('point') && !e.target.closest('.info-panel')) {
            panel.classList.remove('active');
        }
    });

});
