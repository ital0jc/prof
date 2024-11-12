// script.js
document.getElementById('toggleTurmas').addEventListener('click', function() {
    const turmasDiv = document.getElementById('turmas');
    turmasDiv.style.display = turmasDiv.style.display === 'block' ? 'none' : 'block';
});

const toggleAlunosButtons = document.querySelectorAll('.toggleAlunos');
toggleAlunosButtons.forEach(button => {
    button.addEventListener('click', function() {
        const alunosList = this.nextElementSibling;
        alunosList.style.display = alunosList.style.display === 'block' ? 'none' : 'block';
    });
});