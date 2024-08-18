import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo: Todo = response.data;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
}); 


function logTodo(id: number, title: string, completed: boolean){
  console.log(`
  The todo id is: ${id}
  with a title: ${title}
  and is it completed?: ${completed}
  `);
}