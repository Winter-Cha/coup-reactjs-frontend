const BASE_URL = 'https://api.example.com';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch(`${BASE_URL}/todos`);
  const data = await response.json();
  return data;
}

export async function createTodo(todo: Todo): Promise<Todo> {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  const data = await response.json();
  return data;
}