// create porject interface
export interface Project {
    id: number;
    title: string;
    description: string;
    status: ProjectStatus;
    tasks?: Task[];
    image: string;

}

// Path: models/Task.ts (Optional)
// create task interface
export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    project: Project;
}

// Path: models/ProjectStatus.ts (Optional)
// create project status enum
export enum ProjectStatus {
    Active = 'Active',
    Inactive = 'Inactive',
    Completed = 'Completed',
}

// Path: models/TaskStatus.ts (Optional)
// create task status enum
export enum TaskStatus {
    Active = 'Active',
    Inactive = 'Inactive',
    Completed = 'Completed',
}



