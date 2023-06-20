import { Project, ProjectStatus, Task, TaskStatus } from '@/models/Project';
const BASE_URL = 'http://localhost:8080';

// create mock project data
const projects: Project[] = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Project 1 Description',
        status: ProjectStatus.Active,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Project 2 Description',
        status: ProjectStatus.Inactive,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Project 3 Description',
        status: ProjectStatus.Completed,
        image: 'https://via.placeholder.com/150',
    },
];




// create project async getProjects function
export async function getProjects(): Promise<Project[]> {
    // const response = await fetch(`${BASE_URL}/projects`);
    // const data = await response.json();
    // return data;
    return projects
}
// create project async getProject function
export async function getProject(id: number): Promise<Project> {
    const response = await fetch(`${BASE_URL}/projects/${id}`);
    const data = await response.json();
    return data;
}
// create project async createProject function
export async function createProject(project: Project): Promise<Project> {
    const response = await fetch(`${BASE_URL}/projects`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
    });
    const data = await response.json();
    return data;
}
// create project async updateProject function
export async function updateProject(project: Project): Promise<Project> {
    const response = await fetch(`${BASE_URL}/projects/${project.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
    });
    const data = await response.json();
    return data;
}
// create project async deleteProject function
export async function deleteProject(id: number): Promise<void> {
    await fetch(`${BASE_URL}/projects/${id}`, {
        method: 'DELETE',
    });
}
// create task async getTasks function
export async function getTasks(): Promise<Task[]> {
    const response = await fetch(`${BASE_URL}/tasks`);
    const data = await response.json();
    return data;
}
// create task async getTask function
export async function getTask(id: number): Promise<Task> {
    const response = await fetch(`${BASE_URL}/tasks/${id}`);
    const data = await response.json();
    return data;
}
// create task async createTask function
export async function createTask(task: Task): Promise<Task> {
    const response = await fetch(`${BASE_URL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
}
// create task async updateTask function
export async function updateTask(task: Task): Promise<Task> {
    const response = await fetch(`${BASE_URL}/tasks/${task.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
}
// create task async deleteTask function
export async function deleteTask(id: number): Promise<void> {
    await fetch(`${BASE_URL}/tasks/${id}`, {
        method: 'DELETE',
    });
}
// create task async getTasksByProjectId function
export async function getTasksByProjectId(id: number): Promise<Task[]> {
    const response = await fetch(`${BASE_URL}/projects/${id}/tasks`);
    const data = await response.json();
    return data;
}
// create task async getTasksByProjectId function
export async function getTasksByProjectIdAndStatus(id: number, status: TaskStatus): Promise<Task[]> {
    const response = await fetch(`${BASE_URL}/projects/${id}/tasks?status=${status}`);
    const data = await response.json();
    return data;
}
// create task async getTasksByProjectId function
export async function getTasksByProjectIdAndStatusAndSearchTerm(id: number, status: TaskStatus, searchTerm: string): Promise<Task[]> {
    const response = await fetch(`${BASE_URL}/projects/${id}/tasks?status=${status}&q=${searchTerm}`);
    const data = await response.json();
    return data;
}
