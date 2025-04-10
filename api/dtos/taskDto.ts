import { Expose } from "class-transformer";
import { ITaskDocument } from "../db/models/task";

export class TaskDTO {
    @Expose()
    id!: string;

    @Expose()
    title!: string;
    
    @Expose()
    description!: string;

    @Expose()
    dueDate!: Date;
    
    @Expose()
    completed!: boolean;

    constructor(partial: Partial<TaskDTO> = {}) {
        Object.assign(this, partial);
    }
}

export const mapToTaskDTO = (task: ITaskDocument): TaskDTO => {
    return new TaskDTO({
        id: task._id.toString(),
        title: task.title,
        description: task.description,
        dueDate: task.due_date,
        completed: task.completed,
    });
};

export const mapToTaskDTOs = (tasks: ITaskDocument[]): TaskDTO[] => {
    return tasks.map(mapToTaskDTO);
};
