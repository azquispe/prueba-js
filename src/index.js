import './styles.css';
/*import { Todo } from './classes/todo.class';
import { TodoList } from './classes/todo-list.class';*/
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));


const newTodo = new Todo('Aprender Java Script!!!!');

todoList.todos[0].imprimirClase();

//todoList.nuevoTodo(tarea);



console.log('Todos',todoList.todos);











