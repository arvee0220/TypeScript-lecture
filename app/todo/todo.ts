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

const clearTodos = (): void => {
	const todos: Todo[] = getTodos();

	todos.length = 0;

	saveTodos(todos);
	console.log("All todos have been cleared.");
};

const addTodo = (task: string): void => {
	const todos: Todo[] = getTodos();

	const id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

	todos.push({ id, task });

	saveTodos(todos);

	console.log(`Added todo ${id}: ${task}`);
};

const cli = (): void => {
	const subcommand = process.argv[2];
	const options = process.argv.slice(3);
	console.log(process.argv[2]);

	switch (subcommand) {
		case "--help":
			console.log("todo add TASK add todo");
			console.log("todo done ID complete a todo");
			console.log("todo list list todo");
			console.log("todo clear clear todo list");
			break;
		case "add":
			if (options.length === 1) {
				addTodo(options[0]);
			} else {
				console.log(`invalid number of options for subcommand "add"`);
			}
			break;
		case "done":
			if (options.length === 1) {
				const id = parseInt(options[0]);
				if (isNaN(id)) {
					console.log(`Option must be a number for subcommand "done"`);
				} else {
					removeTodo(id);
				}
			} else {
				console.log(`Invalid number of options for subcommand "done"`);
			}
			break;
		case "list":
			if (options.length === 0) {
				listTodos();
			} else {
				console.log(`Invalid number of options for subcommand "list"`);
			}
			break;
		case "clear":
			if (options.length === 0) {
				clearTodos();
			} else {
				console.log(`Todo list is empty`);
			}
			break;
		default:
			console.log(`Invalid subcommand`);
	}
};

cli();
