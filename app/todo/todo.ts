import fs from "fs";

const todosPath = "todos.json";

type Todo = {
	id: number;
	task: string;
};

const getTodos = (): Todo[] => {
	if (!fs.existsSync(todosPath)) {
		return [];
	}
	const data = fs.readFileSync(todosPath);
	return JSON.parse(data.toString()) as Todo[];
};

const listTodos = (): void => {
	const todos: Todo[] = getTodos();

	/* for (let i = 0; i < todos.length; i++) {
		console.log(`${todos[i].id}: ${todos[i].task}`);
	} */

	for (const todo of todos) {
		console.log(`${todo.id}: ${todo.task}`);
	}
};

const saveTodos = (todos: Todo[]): void => {
	fs.writeFileSync(todosPath, JSON.stringify(todos));
};

const removeTodo = (id: number): void => {
	const todos: Todo[] = getTodos();

	const index = todos.findIndex((todo) => todo.id === id);

	if (index === -1) {
		console.log(`Could not find todo with id ${id}`);
	}

	const removeTodo = todos.splice(index, 1)[0];
	console.log(`Remove todo ${removeTodo.id}: ${removeTodo.task}`);
};

const addTodo = (task: string): void => {
	const todos: Todo[] = getTodos();

	const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

	todos.push({ id, task });

	saveTodos(todos);

	console.log(`Added todo ${id}: ${task}`);
};

const cli = (): void => {};
