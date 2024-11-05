let selectedLessonId = null;

function confirmDelete(id) {
    selectedLessonId = id;
    document.getElementById('confirmDeleteModal').style.display = 'block';
}

function confirmEdit(id) {
    selectedLessonId = id;
    document.getElementById('confirmEditModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('confirmDeleteModal').style.display = 'none';
    document.getElementById('confirmEditModal').style.display = 'none';
}

function deleteLesson() {
    closeModal();
    alert(`Aula ${selectedLessonId} deletada`);
}

function editLesson() {
    window.location.href = 'editar.html';
}

function salvarAlteracoes() {
    alert("Alterações salvas!");
    window.location.href = 'index.html';
}

function criarAula() {
    alert("Aula criada!");
    window.location.href = 'index.html';
}
