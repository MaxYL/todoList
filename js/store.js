var STORAGE_KEY = 'todolist'
window.todoStorage = {
	fetch() {
		return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
	},
	save(todolist) {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(todolist));
	}
}
