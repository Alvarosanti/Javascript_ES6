
const todos = JSON.parse(localStorage.getItem('Todos')) || [];

const render = () => {
    const todoList = document.getElementById('todo-list');
        const todosTemplate = todos.map(t =>'<li>' + t +'</li>');
        console.log(todosTemplate);
        todoList.innerHTML = todosTemplate.join('');
        const elementos = document.querySelectorAll('#todo-list li');
        elementos.forEach((elemento,i) =>{ 
            console.log(elemento,i)
            elemento.addEventListener('click',() => {
                elemento.parentNode.removeChild(elemento);
                todos.splice(i,1);
                actTodo(todos);            
                render();
                console.log(elemento,i);
            })
        });
}

const actTodo = (todos) => {
    const todosString = JSON.stringify(todos);
    localStorage.setItem('Todos',todosString);        
}

window.onload = () => {
    render();
    const form = document.getElementById('form-todolist');
    form.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        actTodo(todos);
        render();
    }
}